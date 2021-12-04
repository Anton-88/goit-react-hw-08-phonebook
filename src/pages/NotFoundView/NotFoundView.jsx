import styles from './NotFoundView.module.css';

export default function NotFoundView() {
    return (
        <main role="alert" className={styles.main}>
            <h1 className={styles.title}>Page not found!</h1>
        </main>
    );
}
