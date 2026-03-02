import { useState, useEffect } from "react";


export function useGithubUser() {
    const [data, setData] = useState({dataResult: null, error: false, isLoading: false, inputTextField: "", isRequest: false, isInitialLoading: true});

    async function requestApi(userName) {
    setData(prev => ({...prev, isLoading: true}));
    const endPoint = `https://api.github.com/users/${userName}`;
    try {
      const request = await fetch(endPoint);
      if (request.status === 404) {
        setData(prev => ({...prev, dataResult: null, error: true}));
        throw new Error("Usuário não encontrado.");
      } else {
        const response = await request.json();
        setData(prev => ({...prev, dataResult: response, error: false}));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setData(prev => ({...prev, isLoading: false}));
    }
  }

  function setIsRequest(request) {
    setData(prev => ({...prev, isRequest: request}));
  }

  function setInputField(content) {
    setData(prev => ({...prev, inputTextField: content}));
  }

  function setIsInitialLoading(load) {
    setData(prev => ({...prev, isInitialLoading: load}));
  }

  useEffect(
    () => {
      if (data.isRequest) {
        requestApi(data.inputTextField);
        setIsRequest(false);
        setInputField("");
      }
    }, [data.isRequest]
  );

  return {data, setIsRequest, setInputField, setIsInitialLoading};
}

