'use client';
import {useEffect} from 'react';
import './imm.css';

export default function Confetto(props) {
    const {children} = props;
    useEffect(() => {
        const trigger = document.getElementById('confetto-trigger');
        const canvas = document.getElementById('confetto-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
        const confettiCount = 40;
        const gravityConfetti = 0.15;
        const dragConfetti = 0.04;
        const terminalVelocity = 3;
        let confetti = [];
        let done = true;
        const colors = [
            {front: '#ff525260', back: '#c41c00a0'}, //Red
            {front: '#feee6b60', back: '#fbc442a0'}, //Yellow
            {front: '#ab47bc60', back: '#7b1fa2a0'}, //Purple
            {front: '#00b8d060', back: '#0088aca0'}, //Cyan
            {front: '#4caf5060', back: '#388e3ca0'}, //Green
        ];
        const randomRange = (min, max) => Math.random() * (max - min) + min;
        const initConfettoVelocity = (xRange, yRange) => {
            const x = randomRange(xRange[0], xRange[1]);
            const range = yRange[1] - yRange[0] + 1;
            let y = yRange[1] - Math.abs(randomRange(-range, range));
            if (y >= yRange[1] - 1) y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
            return {x: x, y: -y};
        };
        function Confetto() {
            this.randomModifier = randomRange(0, 99);
            this.color = colors[Math.floor(randomRange(0, colors.length))];
            this.dimensions = {
                x: randomRange(5, 9),
                y: randomRange(8, 15),
            };
            this.position = {
                x: randomRange(canvas.width / 2 - 30, canvas.width / 2 + 30),
                y: randomRange(380 + 20, 380 - 20),
            };
            this.rotation = randomRange(0, 2 * Math.PI);
            this.scale = {
                x: 1,
                y: 1,
            };
            this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
        }
        Confetto.prototype.update = function () {
            this.velocity.x -= this.velocity.x * dragConfetti;
            this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
            this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y * 2;
            this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
        };
        const initBurst = () => {
            for (let i = 0; i < confettiCount; i++) confetti.push(new Confetto());
        };
        const render = () => {
            confetti = confetti.filter((confetto) => confetto.position.y < canvas.height);
            done = confetti.length === 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!done) {
                confetti.forEach((confetto) => {
                    let width = confetto.dimensions.x * confetto.scale.x;
                    let height = confetto.dimensions.y * confetto.scale.y;
                    ctx.translate(confetto.position.x, confetto.position.y);
                    ctx.rotate(confetto.rotation);
                    confetto.update();
                    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
                    ctx.fillRect(-width / 2, -height / 2, width, height);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                });
                window.requestAnimationFrame(render);
            }
        };
        const run = () => {
            initBurst();
            if (done) window.requestAnimationFrame(render);
        };
        trigger.onclick = run;
        const resizeHandler = () => {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
        };
        window.addEventListener('resize', resizeHandler);
        setTimeout(run, 500);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <>
            <canvas id={'confetto-canvas'} />
            <div id="confetto-trigger">{children}</div>
        </>
    );
}
