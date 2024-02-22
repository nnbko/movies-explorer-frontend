import React from "react";
import { Link } from "react-router-dom";
import accLogo from "../../images/mini-acc.svg"


export default function BurgerMenu({ onClick, isOpen, onClose}) {
    return (
        <section className="burger">
            <div className="header_nav-burger" onClick={() => onClick()}></div>
            <nav className={`burger__contanier  ${isOpen ? "burger__visible" : ""}`}>
                <div className="burger__open">
                    <ul className='burger__links'>
                        <li className='burger__link'><button className='burger__close'  onClick={() => onClick()} ></button>
                        </li>
                        <li className='burger__link'>
                            <Link className='burger__nav_link' to="/">Главная</Link>
                        </li>
                        <li className='burger__link'>
                            <Link className='burger__nav_link' to="/movies">Фильмы</Link>
                        </li>
                        <li className='burger__link'>
                            <Link className='burger__nav_link' to="/saved-movies">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                    <div className="burger__account"> 
                    <Link className="burger_nav__account" to="/profile">
                        Аккаунт
                        <img className="burger__logo" src={accLogo} alt="Иконка аккаунта" />
                    </Link>
                    </div>
                </div>
            </nav>
        </section >

    )
}