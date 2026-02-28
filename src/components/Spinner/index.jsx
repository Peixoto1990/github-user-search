import styles from './Spinner.module.css';

export default function Spinner() {
    return (
        <section className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </section>
    )
}