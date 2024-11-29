import styles from './imm.module.css';

export default function Boxes() {
    return (
        <div className={styles['boxes']}>
            <div className={[styles['box'], styles['fill']].join(' ')} />
            <div className={styles['box']} />
            <div className={styles['box']} />
            <div className={[styles['box'], styles['circle'], styles['fill']].join(' ')} />
            <div className={[styles['box'], styles['circle']].join(' ')} />
        </div>
    );
}
