import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardlist";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
export default function SavedMovies() {
    return (
        <>
            <Header black />
            <main className="saved__contanier">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}