import arrow from '../../images/arrow.svg'
export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a className="portfolio__text"
                        href="https://github.com/nnbko/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                    >Статичный сайт
                        <img className="portfolio__img"
                            src={arrow}
                            alt="стрелка"
                        ></img></a></li>
                <li className="portfolio__link">
                    <a className="portfolio__text"
                        href="https://github.com/nnbko/mesto"
                        target="_blank"
                        rel="noreferrer"
                    >Адаптивынй сайт
                        <img className="portfolio__img"
                            src={arrow}
                            alt="стрелка"
                        ></img></a></li>
                <li className="portfolio__link">
                    <a className="portfolio__text"
                        href="https://github.com/nnbko/react-mesto-api-full-gha"
                        target="_blank"
                        rel="noreferrer">Одностраничное приложение
                        <img className="portfolio__img"
                            src={arrow}
                            alt="стрелка"
                        ></img></a></li>
            </ul>
        </div >
    )
}