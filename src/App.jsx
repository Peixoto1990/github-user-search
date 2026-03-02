import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import UserCard from './components/UserCard';
import ErrorCard from './components/ErrorCard';
import WelcomeCard from './components/WelcomeCard';
import Spinner from './components/Spinner';
import { useGithubUser } from './cutom-hooks/useGithubUser/useGithubUser';

function App() {
  const {data, setIsRequest, setInputField, setIsInitialLoading} = useGithubUser();


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


  return (
    <div className={styles.app}>
      {data.isLoading && <Spinner />}
      <h1 className={styles.titulo}>Campo de Busca de Usuários do GitHub</h1>
      <Form
        inputData={data.inputTextField}
        setInputData={setInputField}
        onSubmit={submitForm} 
      />
      {data.dataResult && <UserCard userData={data.dataResult}/> || data.error && <ErrorCard /> || data.isInitialLoading && <WelcomeCard />}
    </div>
  )
}

export default App
