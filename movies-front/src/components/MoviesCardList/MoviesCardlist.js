import MoviesCard from '../MoviesCard/MoviesCard'
import React, { useState, useEffect, useCallback } from "react";
import {
    screen_size_B,
    screen_size_M,
    screen_size_S,
    cards_count_B,
    cards_count_S,
    cards_count_M,
    add_cards_B,
    add_cards_M,
    add_cards_S
} from '../../utils/Constants';
import { useResize } from "../../utils/Utils";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardlist({ filterMovies, handleSaveSubmit, handleDeleteSubmit, savedMovies, setSavedMovies, isLoading, firstSearch, firstSearcSaved }) {

    const { width } = useResize();
    const [page, setPage] = useState(1);

    const changeSize = useCallback(() => {
        if (width >= screen_size_B) {
            setPage(cards_count_B);
        }
        else if (width >= screen_size_M) {
            setPage(cards_count_M);
        }
        else if (width >= screen_size_S) {
            setPage(cards_count_S);
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
        if (width >= screen_size_B) {
            setPage(page + add_cards_B);
        } else if (width >= screen_size_M) {
            setPage(page + add_cards_M);
        } else if (width >= screen_size_S) {
            setPage(page + add_cards_S);
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






