import styles from './FavoriteList.module.css';
import FavoriteCard from '../FavoriteCard';

export default function FavoriteList({setFavorite=null, favorite=[], id="favoriteList", titleList="Lista de Favoritos", excludeFavorite=null}) {
    return (
        <ul className={styles[id]} id={id}>
            <h2>{titleList}</h2>
            {favorite.map(element => <FavoriteCard setFavorite={setFavorite} key={element.id} favorite={element} excludeFavorite={excludeFavorite} favoriteList={favorite}/>)}
        </ul>
    )
}