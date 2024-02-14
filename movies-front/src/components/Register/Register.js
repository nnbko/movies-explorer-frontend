import logo from '../../images/logo2.svg'
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <main className="Register">
            <div className="Register__contanier">
                <Link className="Register__link" to="/">
                    <img className="Register__logo"
                        alt="лого"
                        src={logo}
                    ></img>
                </Link>
                <h1 className="Register__title">Добро пожаловать!</h1>

                <form className="Register__form">
                    <label className="Register__lable">Имя</label>
                    <input className="Register__input"
                        placeholder="Имя"
                        required
                        type="text"
                        name="name"
                        minLength={2}
                        maxLength={30}>
                    </input>
                    <label className="Register__lable">E-mail</label>
                    <input className="Register__input" placeholder="E-mail"
                        required
                        type="email"
                        name="email"
                        minLength={2}
                        maxLength={30}
                    >
                    </input>
                    <label className="Register__lable">Пароль</label>
                    <input className="Register__input Register__input-error" placeholder="Пароль"
                        required
                        minLength={2}
                        maxLength={20}
                    >
                    </input>
                    <span className="Register__error">Что-то пошло не так</span>
                    <button className="Register__smb" type="submit">Зарегистрироваться</button>
                    <div className="Register__question">
                        <p className="Register__text">
                            Уже зарегистрированы?
                        </p>
                        <Link className="Register__logout" to="/signin">Войти</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}