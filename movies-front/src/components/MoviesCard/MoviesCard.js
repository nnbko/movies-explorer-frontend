import { Link } from 'react-router-dom';
import { durationToHours } from "../../utils/Utils";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

export default function MoviesCard(
    { movie,
        savedMovies,
        handleSaveSubmit,
        handleDeleteSubmit
    }) {

    const isSaved = savedMovies.some((i) => i.movieId === movie.id);
    const movieSavedButtonClassName = `${isSaved ? 'MoviesCard__saved' : 'MoviesCard__save'}`;
    const { pathname } = useLocation();

    function handleMovieSaved() {
        if (isSaved) {
            var _movie = savedMovies.find(item => item.movieId === movie.id)
            handleDeleteSubmit(_movie._id);
        } else {
            handleSaveSubmit(movie);
        }
    }

    function handleMovieDelete() {
        handleDeleteSubmit(movie._id)
    }
    return (
        <>
            <li className="MoviesCard">
                <Link to={movie.trailerLink} target='_blank'>
                    <img className="MoviesCard__image" src={pathname === "/movies" ?
                        `https://api.nomoreparties.co${movie.image.url}` :
                        movie.image
                    } alt="фильм"></img>
                </Link>
                <div className="MoviesCard__contanier">
                    <h2 className="MoviesCard__name">{movie.nameRU}</h2>

                    {pathname === "/movies" ? (
                        <button className={movieSavedButtonClassName} type="button" onClick={handleMovieSaved}></button>
                    ) : (
                        <button className="movie__button-save-close" type="button"
                            onClick={() => handleMovieDelete(movie._id)}></button>
                    )}
                </div>
                <span className="MoviesCard__duration">{durationToHours(movie.duration)}</span>
            </li>
        </>
    )
}