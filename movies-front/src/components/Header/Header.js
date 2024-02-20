import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation'
export default function Header({loggedIn, black }) {
    return (
        <header className={`header ${black ? "header__black-background" : ""} `}>
            <Link className="header__link" to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt="лого"
                />
            </Link>
            {loggedIn ? (
                <>
                    <div className="header__navigation">
                        <Navigation/>
                    </div>
                </>
            ) : (
                <nav className='header_buttons'>
                    <Link className='header__singup' to="/signup">Регистрация</Link>
                    <Link className='header__singin' to="/signin">Войти</Link>
                </nav>

            )
            }
        </header>
    )
}