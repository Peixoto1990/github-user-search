import styles from './ErrorCard.module.css';
import errorImage from '../../assets/error.png';

export default function ErrorCard() {
    return (
        <section className={styles.error}>
            <img src={errorImage} alt="Erro, usuário não encontrado" />
        </section>
    )
}