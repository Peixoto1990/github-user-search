export function submitForm(ev, data, setIsRequest, setIsInitialLoading, inputRef) {
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
  }

  export function changeFavorite(favorite, userData, setFavorite) {
      const favUser = favorite.some(element => element.id === userData.id);
      if (favUser) {
          setFavorite("favoriteGithubUsers", favorite.filter(element => element.id !== userData.id));
      } else {
          setFavorite("favoriteGithubUsers", [...favorite, userData]);
      }
  }

  /* original functions 

    function submitForm(ev) {
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
  }

  function changeFavorite(userData) {
      const favUser = favorite.some(element => element.id === userData.id);
      if (favUser) {
          setFavorite("favoriteGithubUsers", favorite.filter(element => element.id !== userData.id));
      } else {
          setFavorite("favoriteGithubUsers", [...favorite, userData]);
      }
  }
      
  */