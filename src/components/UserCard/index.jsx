import styles from './UserCard.module.css';

export default function UserCard({userData, favorite=[], changeFavorite=null}) {
    const isFavorite = favorite.some(element => element.id === userData.id);

    return (
            <section id={userData.id} className={styles.userCard}>
                <div className={styles.cardContainer}>
                    <div className={styles.avatarContainer}>
                        <img src={userData.avatar_url} alt={userData.name} />
                    </div>
                    <div className={styles.aboutContainer}>
                        <h2>{userData.name}</h2>
                        <h3>@{userData.login}</h3>
                        {userData.company && <h4>Empresa: {userData.company}</h4>}
                        {userData.bio && <h5>Bio: {userData.bio}</h5>}
                    </div>
                    <div className={styles.followContainer}>
                        <h5>Localização: {userData.location}</h5>
                        <h5>Seguidores: {userData.followers || 0}</h5>
                        <h5>Seguindo: {userData.following || 0}</h5>
                        <h5>Repositórios: {userData.public_repos || 0}</h5>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={() => changeFavorite(userData)}
                            className={isFavorite ? `${styles.favButton} ${styles.favButtonOff}` : styles.favButton}
                            >
                                ⭐
                            </button>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            Veja no GitHub
                        </a>
                    </div>
                </div>
            </section>
    )
}