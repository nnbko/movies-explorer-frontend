import MoviesCard from '../MoviesCard/MoviesCard'
import React, { useState, useEffect, useCallback } from "react";
import {
    Screen_size_B,
    Screen_size_M,
    Screen_size_S,
    Cards_count_B,
    Cards_count_S,
    Cards_count_M,
    Add_cards_B,
    Add_cards_M,
    Add_cards_S
} from '../../utils/Constants';
import { useResize } from "../../utils/Utils";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardlist({ filterMovies, handleSaveSubmit, handleDeleteSubmit, savedMovies, setSavedMovies, isLoading, firstSearch, firstSearcSaved }) {

    const { width } = useResize();
    const [page, setPage] = useState(1);

    const changeSize = useCallback(() => {
        if (width >= Screen_size_B) {
            setPage(Cards_count_B);
        }
        else if (width >= Screen_size_M) {
            setPage(Cards_count_M);
        }
        else if (width >= Screen_size_S) {
            setPage(Cards_count_S);
        }
    });
    useEffect(() => {
        changeSize()
    }, [filterMovies, width]);

    useEffect(() => {
        window.addEventListener("resize", changeSize);
        return () => {
            window.removeEventListener("resize", changeSize);
        }
    }, [filterMovies, changeSize]);

    const onClick = () => {
        if (width >= Screen_size_B) {
            setPage(page + Add_cards_B);
        } else if (width >= Screen_size_M) {
            setPage(page + Add_cards_M);
        } else if (width >= Screen_size_S) {
            setPage(page + Add_cards_S);
        }
    };

    return (
        <section className="MoviesCards">
            {isLoading ? <Preloader /> :
                filterMovies.length !== 0 ? (
                    <ul className='MoviesCards__cards'>
                        {
                            (filterMovies.slice(0, page).map((movie) => (
                                <MoviesCard
                                    key={movie.id || movie._id}
                                    movie={movie}
                                    savedMovies={savedMovies}
                                    handleSaveSubmit={handleSaveSubmit}
                                    handleDeleteSubmit={handleDeleteSubmit}
                                    setSavedMovies={setSavedMovies} />
                            )))
                        }
                    </ul>
                ) : <div className="movies-card-list__container-error">
                    {firstSearch ?
                        (<p className="movies-card-list__error">Ничего не найдено</p>
                        ) : firstSearcSaved ?
                            (<p className="movies-card-list__error">Нет сохраненных фильмов</p>)
                            : ('')}
                </div>
            }
            {

                page < filterMovies.length && (
                    <button
                        className="MoviesCards__more"
                        type="button"
                        onClick={onClick}
                    >
                        Ещё
                    </button>
                )
            }
        </section>
    )
}






