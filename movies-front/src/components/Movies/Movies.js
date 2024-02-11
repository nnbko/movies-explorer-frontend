import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardlist";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SavedMovies() {
    return (
        <>
            <Header black isLoggedIn={true} />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <Footer />
        </>
    )
}