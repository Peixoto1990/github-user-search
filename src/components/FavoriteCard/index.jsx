import styles from './FavoriteCard.module.css';

export default function FavoriteCard({favorite, excludeFavorite=null}) {
    return (
        <li className={styles.card} id={favorite.id}>
            <h3>{favorite.name || "@"+favorite.login}</h3>
            <button onClick={() => excludeFavorite(favorite)} className={styles.favButton}>⭐</button>
            <a href={favorite.html_url} target="_blank" rel="noopener noreferrer">
                Veja no GitHub
            </a>
        </li>
    )
}