import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import UserCard from './components/UserCard';
import ErrorCard from './components/ErrorCard';
import WelcomeCard from './components/WelcomeCard';
import Spinner from './components/Spinner';
import { useGithubUser } from './cutom-hooks/useGithubUser/useGithubUser';
import { useLocalStorage } from './cutom-hooks/useLocalStorage/useLocalStorage';
import FavoriteList from './components/FavoriteList';

function App() {
  const {data, setIsRequest, setInputField, setIsInitialLoading} = useGithubUser();
  const [favorite, setFavorite] = useLocalStorage("favoriteGithubUsers", []);


  /*useEffect(() => { para ver estado atualizado no hook
    if (data.dataResult) {
      console.log("Estado atualizado:", data.dataResult);
    }
  }, [data.dataResult]);*/

  function submitForm(ev) {
    ev.preventDefault();
    if (data.isInitialLoading) {
      setIsInitialLoading(false);
    }
    if (data.inputTextField.match(/[A-Za-z0-9._-]{3,}/)) {
      setIsRequest(true);
      document.getElementById('userName').focus();
    } else {
      alert("Esse caractere não é válido");
    }
  }

  function changeFavorite(userData) {
      const favUser = favorite.some(element => element.id === userData.id);
      const aux = favorite;
      if (favUser) {
          setFavorite("favoriteGithubUsers", aux.filter(element => element.id !== userData.id));
      } else {
          setFavorite("favoriteGithubUsers", [...aux, userData]);
      }
  }


  return (
    <div className={styles.app}>
      {data.isLoading && <Spinner />}
      <h1 className={styles.titulo}>Campo de Busca de Usuários do GitHub</h1>
      <Form
        inputData={data.inputTextField}
        setInputData={setInputField}
        onSubmit={submitForm} 
      />
      {favorite.length > 0 && <FavoriteList favorite={favorite} excludeFavorite={changeFavorite}/>}
      {data.dataResult && <UserCard userData={data.dataResult} favorite={favorite} changeFavorite={changeFavorite}/> || data.error && <ErrorCard /> || data.isInitialLoading && <WelcomeCard />}
    </div>
  )
}

export default App
