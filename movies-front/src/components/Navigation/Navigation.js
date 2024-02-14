import { useState, React } from "react";
import { Link } from "react-router-dom";
import accLogo from "../../images/mini-acc.svg"
import BurgerMenu from "../BurgerMenu/BurgerMenu";
export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <BurgerMenu onClick={toggleMenu} isOpen={isOpen} />
            <nav>
                <div className='header_nav_buttons'>
                    <Link className='header__nav_button' to="/movies">Фильмы</Link>
                    <Link className='header__nav_button' to="/saved-movies">Сохранённые фильмы</Link>
                </div>
            </nav>

            <div className="header_nav__link">
                <Link className="header_nav__account" to="/profile">
                    Аккаунт
                    <img className="header_nav__logo" src={accLogo} alt="Иконка аккаунта" />
                </Link>

            </div>
        </>

    )
}