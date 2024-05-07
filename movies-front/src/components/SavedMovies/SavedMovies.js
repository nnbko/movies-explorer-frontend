import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardlist";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import React, { useState, useEffect } from 'react'
export function SavedMovies({ savedMovies, setSavedFilteredMovies, handleAddSubmit, handleDeleteSubmit, setSavedMovies, filtredSavedMovie, searchFilmsSaved,loggedIn}) {
    const [filterMovies, setFilterMovies] = useState(savedMovies)
    const [isSearch, setIsSearch] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const [firstSearcSaved, setFirstSearchSaved] = useState(true)

    const filtredMovie = ((isSearch, isCheck, savedMovies) => {
        setIsSearch(isSearch)
        setFilterMovies(savedMovies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(isSearch.toLowerCase());
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
    })

    function searchFilms(search) {
        filtredMovie(isSearch, isCheck, savedMovies)
    }

    useEffect(() => {
        filtredMovie(isSearch, isCheck, savedMovies)
    }, [isSearch, isCheck, savedMovies])


    function changeCheck() {
        if (isCheck) {
            setIsCheck(false)

            filtredMovie(isSearch, false, savedMovies)
        } else {
            setIsCheck(true)

            filtredMovie(isSearch, true, savedMovies)
        }
    }
    return (
        <>
            <Header black loggedIn={loggedIn}/>
            <main className="saved__contanier">
                <SearchForm
                    searchFilms={searchFilms}
                    changeCheck={changeCheck}
                    isSearch={isSearch}
                    setIsSearch={setIsSearch}
                    handleAddSubmit={handleAddSubmit}
                    handleDeleteSubmit={handleDeleteSubmit}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    searchFilmsSaved={searchFilmsSaved}
                    filtredSavedMovie={filtredSavedMovie}
                    setSavedFilteredMovies={setSavedFilteredMovies}
                    isSaved={true}
                    isCheck={isCheck} />
                <MoviesCardList
                    filterMovies={filterMovies}
                    handleDeleteSubmit={handleDeleteSubmit}
                    handleAddSubmit={handleAddSubmit}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    firstSearcSaved={firstSearcSaved} />
            </main>
            <Footer />
        </>
    )
}