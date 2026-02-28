import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import UserCard from './components/UserCard';
import ErrorCard from './components/ErrorCard';
import WelcomeCard from './components/WelcomeCard';
import Spinner from './components/Spinner';

function App() {
  const [inputData, setInputData] = useState({textField: "", isRequest: false});
  const [requestData, setRequestData] = useState({dataResult: null, error: false, isLoading: false});
  let [initialLoading, setInitialLoading] = useState(true);

  async function requestApi(userName) {
    setRequestData(prev => ({...prev, isLoading: true}));
    const endPoint = `https://api.github.com/users/${userName}`;
    try {
      const request = await fetch(endPoint);
      if (request.status === 404) {
        setRequestData(prev => ({...prev, dataResult: null, error: true}));
        throw new Error("Usuário não encontrado.");
      } else {
        const response = await request.json();
        setRequestData(prev => ({...prev, dataResult: response, error: false}));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRequestData(prev => ({...prev, isLoading: false}));
    }
  }

  useEffect(
    () => {
      if (inputData.isRequest) {
        requestApi(inputData.textField);
        setInputData(prev => ({...prev, isRequest: false, textField: ""}));
      }
    }, [inputData.isRequest]
  );

  /*useEffect(() => { para ver estado atualizado no hook
    if (requestData.dataResult) {
      console.log("Estado atualizado:", requestData.dataResult);
    }
  }, [requestData]);*/

  function submitForm(ev) {
    ev.preventDefault();
    if (initialLoading) {
      setInitialLoading(false);
    }
    if (inputData.textField.match(/[A-Za-z0-9._-]{3,}/)) {
      setInputData(prev => ({...prev, isRequest: true}));
      document.getElementById('userName').focus();
    } else {
      alert("Esse caractere não é válido");
    }
  }


  return (
    <div className={styles.app}>
      {requestData.isLoading && <Spinner />}
      <h1 className={styles.titulo}>Campo de Busca de Usuários do GitHub</h1>
      <Form
        inputData={inputData.textField}
        setInputData={setInputData}
        onSubmit={submitForm} 
      />
      {requestData.dataResult && <UserCard userData={requestData.dataResult}/> || requestData.error && <ErrorCard /> || initialLoading && <WelcomeCard />}
    </div>
  )
}

export default App
