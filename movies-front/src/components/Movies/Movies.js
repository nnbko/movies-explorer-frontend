import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardlist";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react'
import MoviesApi from "../../utils/MoviesApi";
import { short_Films } from '../../utils/Constants';

export default function Movies(
    {
        savedMovies,
        handleSaveSubmit,
        handleDeleteSubmit,
        loggedIn
    }) {

    const [allMovies, setAllMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [isSearch, setIsSearch] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [firstSearch, setFirstSearch] = useState(true)
    const [loadingError, setLoadingError] = useState(false)

    const filtredMovie = ((search, isCheck, allmovies) => {
        setIsSearch(search)
        localStorage.setItem('search', JSON.stringify(search))
        localStorage.setItem('check', JSON.stringify(isCheck))
        localStorage.setItem('allmovies', JSON.stringify(allmovies))
        setFilterMovies(allmovies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(search.toLowerCase());
            return isCheck ? (searchName && movie.duration <= short_Films) : searchName
        }))
    })


    function searchFilms(search) {
        if (allMovies.length === 0) {
            setIsLoading(true)
            MoviesApi.getMovie()
                .then((res) => {
                    console.log(res)
                    setAllMovies(res);
                    setIsCheck(false)
                    setFirstSearch(false)
                    setLoadingError(false)
                    filtredMovie(search, isCheck, res)
                })
                .catch((error) => {
                    console.error(`Ошибка при поиске фильмов ${error}`);
                    setLoadingError(true)
                })
                .finally(() => setIsLoading(false))
        }
        filtredMovie(isSearch, isCheck, allMovies);
    };

    useEffect(() => {
        if (localStorage.allmovies && localStorage.search && localStorage.check) {
            const allmovies = JSON.parse(localStorage.getItem("allmovies"));
            const search = JSON.parse(localStorage.getItem("search"));
            const isCheck = JSON.parse(localStorage.getItem("check"));
            setIsLoading(false)
            setLoadingError(false)
            setIsSearch(search)
            setIsCheck(isCheck)
            setAllMovies(allmovies)
            filtredMovie(search, isCheck, allmovies)
        }
    }, []);

    function changeCheck() {
        if (isCheck) {
            setIsCheck(false)
            filtredMovie(isSearch, false, allMovies)
            localStorage.getItem('check', JSON.stringify(false))
        } else {
            setIsCheck(true)
            filtredMovie(isSearch, true, allMovies)
            localStorage.getItem('check', JSON.stringify(true))
        }
    }



    return (
        <>  <Header loggedIn={loggedIn} black />
            <main className="movies__contanier">
                <SearchForm
                    searchFilms={searchFilms}
                    allMovies={allMovies}
                    setAllMovies={setAllMovies}
                    filterMovies={filterMovies}
                    setFilterMovies={setFilterMovies}
                    isCheck={isCheck}
                    isSearch={isSearch}
                    changeCheck={changeCheck}
                    setIsSearch={setIsSearch}
                    filtredMovie={filtredMovie}
                    setIsCheck={setIsCheck}
                    savedMovies={savedMovies}
                    isLoading={isLoading}
                    isSaved={false}
                />
                <MoviesCardList
                    allMovies={allMovies}
                    isSaved={false}
                    filterMovies={filterMovies}
                    savedMovies={savedMovies}
                    handleSaveSubmit={handleSaveSubmit}
                    handleDeleteSubmit={handleDeleteSubmit}
                    loadingError={loadingError}
                    firstSearch={firstSearch}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}