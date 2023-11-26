import X from '@/component/X';
import {useEffect} from 'react';
import './index.css';

function Version() {
    return (
        <>
            <canvas id="b0001-canvas"></canvas>
            <X.HighlightBlock>
                <X.FlexRow justifyContent="space-around">
                    <X.Image src={require('./cheer.gif')} width="150" />
                    <div id="b0001-dance-version-wrapper">
                        <X.Image src={require('./version.png')} width="360" />
                    </div>
                    <div id="b0001-dance-gif-wrapper">
                        <X.Image src={require('./dance.gif')} width="128" />
                    </div>
                </X.FlexRow>
            </X.HighlightBlock>
        </>
    );
}

export default function Blog() {
    useEffect(() => {
        const canvas = document.getElementById('b0001-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let cx = ctx.canvas.width / 2;
        let cy = ctx.canvas.height / 2;

        let confetti = [];
        const confettiCount = 20;
        const gravityConfetti = 0.3;
        const dragConfetti = 0.075;
        const terminalVelocity = 3;

        let done = true;

        const colors = [
            {front: '#7b5cff', back: '#6245e0'}, // Purple
            {front: '#b3c7ff', back: '#8fa5e5'}, // Light Blue
            {front: '#5c86ff', back: '#345dd1'}, // Darker Blue
        ];

        const randomRange = (min, max) => Math.random() * (max - min) + min;

        const initConfettoVelocity = (xRange, yRange) => {
            const x = randomRange(xRange[0], xRange[1]);
            const range = yRange[1] - yRange[0] + 1;
            let y = yRange[1] - Math.abs(randomRange(-range, range));
            if (y >= yRange[1] - 1) {
                // occasional confetto goes higher than the max
                y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
            }
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
                x: randomRange(canvas.width / 2, canvas.width / 2),
                y: randomRange(canvas.height / 2 + 8, canvas.height / 2 - 8),
            };
            this.rotation = randomRange(0, 2 * Math.PI);
            this.scale = {
                x: 1,
                y: 1,
            };
            this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
        }

        Confetto.prototype.update = function () {
            // apply forces to velocity
            this.velocity.x -= this.velocity.x * dragConfetti;
            this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
            this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
            // set position
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            // spin confetto by scaling y and set the color, .09 just slows cosine frequency
            this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
        };

        // add elements to arrays to be drawn
        const initBurst = () => {
            for (let i = 0; i < confettiCount; i++) {
                confetti.push(new Confetto());
            }
        };

        // draws the elements on the canvas
        const render = () => {
            console.log('render');
            confetti = confetti.filter((confetto) => confetto.position.y < canvas.height);
            done = confetti.length === 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!done) {
                confetti.forEach((confetto, index) => {
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

        // cycle through button states when clicked
        const clickButton = () => {
            initBurst();
            if (done) {
                window.requestAnimationFrame(render);
            }
        };

        // resize listenter
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cx = ctx.canvas.width / 2;
            cy = ctx.canvas.height / 2;
        });

        clickButton();
    }, []);
    return (
        <X.BlogWrapper>
            <X.Title>更新日志</X.Title>
            <Version />
        </X.BlogWrapper>
    );
}
