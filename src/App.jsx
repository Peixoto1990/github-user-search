import { useState, useEffect, useRef } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import UserCard from './components/UserCard';
import ErrorCard from './components/ErrorCard';
import WelcomeCard from './components/WelcomeCard';
import Spinner from './components/Spinner';
import { useGithubUser } from './cutom-hooks/useGithubUser/useGithubUser';
import { useLocalStorage } from './cutom-hooks/useLocalStorage/useLocalStorage';
import FavoriteList from './components/FavoriteList';
import { submitForm, changeFavorite } from './assets/scripts/appFunctions';

function App() {
  const {data, setIsRequest, setInputField, setIsInitialLoading} = useGithubUser();
  const [favorite, setFavorite] = useLocalStorage("favoriteGithubUsers", []);
  const inputRef = useRef(null);


  /*useEffect(() => { para ver estado atualizado no hook
    if (data.dataResult) {
      console.log("Estado atualizado:", data.dataResult);
    }
  }, [data.dataResult]);*/

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  /*function submitForm(ev) {
    ev.preventDefault();
    if (data.isInitialLoading) {
      setIsInitialLoading(false);
    }
    if (data.inputTextField.match(/[A-Za-z0-9._-]{3,}/)) {
      setIsRequest(true);
      inputRef.current.focus();
    } else {
      alert("Esse caractere não é válido");
    }
  }*/

  /*function changeFavorite(userData) {
      const favUser = favorite.some(element => element.id === userData.id);
      if (favUser) {
          setFavorite("favoriteGithubUsers", favorite.filter(element => element.id !== userData.id));
      } else {
          setFavorite("favoriteGithubUsers", [...favorite, userData]);
      }
  }*/


  return (
    <div className={styles.app}>
      {data.isLoading && <Spinner />}
      <h1 className={styles.titulo}>Campo de Busca de Usuários do GitHub</h1>
      <Form
        inputReference={inputRef}
        inputData={data.inputTextField}
        setInputData={setInputField}
        onSubmit={(ev) => submitForm(ev, data, setIsRequest, setIsInitialLoading, inputRef)} 
      />
      {favorite.length > 0 && <FavoriteList setFavorite={setFavorite} favorite={favorite} excludeFavorite={changeFavorite}/>}
      {data.dataResult && <UserCard setFavorite={setFavorite} userData={data.dataResult} favorite={favorite} changeFavorite={changeFavorite}/> || data.error && <ErrorCard /> || data.isInitialLoading && <WelcomeCard />}
    </div>
  )
}

export default App
