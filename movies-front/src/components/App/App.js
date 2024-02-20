import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import { SavedMovies } from '../SavedMovies/SavedMovies'
import MainApi from "../../utils/MainApi";
import Footer from '../Footer/Footer'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'


function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSuccess, setIsSuccess] = useState("");

  useEffect(() => {
    if (loggedIn) {
      Promise.all([MainApi.getUserInfo(localStorage.token), MainApi.getMovie(localStorage.token)])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser);
          setSavedMovies(dataMovies);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(`Ошибка при начальных данный страницы ${err}`);
          localStorage.clear()
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      MainApi.checkToken(token)
        .then(() => {
          setLoggedIn(true)
        })
        .catch(err => console.log(`Ошибка в токене ${err}`))
    }
  }, [])


  function handleLogin(email, password) {
    MainApi
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setCurrentUser(res);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.error(`Ошибка авторизации ${err}`)
      })
  }

  function handleRegister(name, email, password) {
    MainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
        }
      })
      .catch((err) => {
        console.error(`Ошибка регистрации ${err}`)
      })
  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate("/");
    localStorage.clear();
  }

  function handleUpdateUser(data) {
    MainApi
      .setUserInfo(data, localStorage.token)
      .then((data) => {
        setCurrentUser(data)
        setIsSuccess("Данные обновлены");
        setLoggedIn(true);
      })
      .catch((err) => {
        console.error(`Ошибка данными юзера ${err}`)
        setIsSuccess("")
      })
  }


  function handleDeleteSubmit(deleteId) {
    MainApi
      .deleteMovie(deleteId, localStorage.token)
      .then((res) => {
        const newMovies = savedMovies.filter((newMovie) =>
          newMovie._id !== deleteId
        );
        setSavedMovies(newMovies);
      })
      .catch((error) => console.error(`Ошибка удаления ${error}`));
  }


  function handleSaveSubmit(data) {
    MainApi
      .addMovie(data, localStorage.token)
      .then((res) => {
        setSavedMovies([res, ...savedMovies])
      })
      .catch((error) => console.error(`Ошибка лайка ${error}`));
  }


  function checkedLoggedIn() {
    let isAuth = localStorage.getItem('token')
    if (isAuth !== null) {
      navigate("/");
    }
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={
            <>
              <Main loggedIn={loggedIn} />
              <Footer />
            </>} />
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              handleSaveSubmit={handleSaveSubmit}
              handleDeleteSubmit={handleDeleteSubmit}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              handleDeleteSubmit={handleDeleteSubmit}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />}
          />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              signOut={signOut}
              handleUpdateUser={handleUpdateUser}
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
            />} />
          <Route path="/signin" element={
            <Login
              onLogin={handleLogin}
              checkedLoggedIn={checkedLoggedIn}
            />} />
          <Route path="/signup" element={
            <Register
              onRegister={handleRegister}
              checkedLoggedIn={checkedLoggedIn}
            />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
