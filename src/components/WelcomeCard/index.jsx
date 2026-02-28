import styles from './WelcomeCard.module.css';
import welcomeImage from '../../assets/welcome.png';

export default function WelcomeCard() {
    return (
        <section className={styles.welcome}>
            <img src={welcomeImage} alt="Erro, usuário não encontrado" />
        </section>
    )
}