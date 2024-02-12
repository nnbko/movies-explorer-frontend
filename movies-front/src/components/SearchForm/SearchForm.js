import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
export default function SearchForm() {
    return (
        <section className="SearchForm">
            <form className="SearchForm__form">
                <div className="SearchForm__contanier">
                    <input className="SearchForm__input" placeholder="Фильм"></input>
                    <button className="SearchForm__button" type="submit"> </button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    )
}