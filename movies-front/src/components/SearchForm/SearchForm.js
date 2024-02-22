import { useState } from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
export default function SearchForm(
    {
        searchFilms,
        allMovies,
        isCheck,
        setIsCheck,
        setIsSearch,
        isSearch,
        filtredMovie,
        setFilterMovies,
        changeCheck
    }) {
    const [errors, setErrors] = useState("");

    function handleSubmitSearch(evt) {
        setIsSearch(evt.target.value)
    }

    const handelCheckbox = () => {
        setIsCheck(!isCheck);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isSearch.length < 1) {
            setErrors("Нужно ввести больше символов для поиска");
            return
        } else {
            searchFilms(isSearch);
            setErrors("");
        }
    }
    return (
        <section className="SearchForm">
            <form className="SearchForm__form" onSubmit={handleSubmit} noValidate="">
                <div className="SearchForm__contanier">
                    <input className="SearchForm__input" placeholder="Фильм" required id="search"
                        type="text"
                        name="search"
                        value={isSearch || ""}
                        onChange={handleSubmitSearch}></input>
                    <button className="SearchForm__button" type="submit"> </button>
                    <span className={`search-form__error ${errors ? 'search-form__error_active' : ''}`}>{errors}
                    </span>
                </div>
                <FilterCheckbox
                    isCheck={isCheck}
                    setIsCheck={setIsCheck}
                    allMovies={allMovies}
                    filtredMovie={filtredMovie}
                    handelCheckbox={handelCheckbox}
                    setFilterMovies={setFilterMovies}
                    changeCheck={changeCheck}
                />
            </form>
        </section>
    )
}