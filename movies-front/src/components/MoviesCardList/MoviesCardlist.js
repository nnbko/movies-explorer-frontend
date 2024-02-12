import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardlist() {
    return (
        <section className="MoviesCards">
            <ul className='MoviesCards__cards'>
                <MoviesCard />
            </ul>
            <button type="button" className="MoviesCards__more" type="button">
                Ещё
            </button>
        </section>
    )
}