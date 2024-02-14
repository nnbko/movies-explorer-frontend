export default function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <ul className="footer__contanier">
                <li className="footer__copyright">© 2020</li>
                <li className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/"
                        target="_blank"
                        rel="noreferrer"
                    >Яндекс.Практикум

                    </a>
                    <a className="footer__link" href="https://github.com/nnbko"
                        target="_blank"
                        rel="noreferrer"
                    >Github
                    </a>
                </li>
            </ul>
        </footer >
    )
}