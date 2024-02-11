import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <main className="Register">
            <div className="Register__contanier">
                <Link className="Register__link" to="/">
                    <img className="Register__logo"
                        alt="лого"
                    ></img>
                </Link>
                <h1 className="Register__title">Добро пожаловать!</h1>

                <form className="Register__form">
                    <label className="Register__lable">Имя</label>
                    <input className="Register__input" placeholder="Имя" required>
                    </input>
                    <label className="Register__lable">E-mail</label>
                    <input className="Register__input" placeholder="E-mail" required>
                    </input>
                    <label className="Register__lable">Пароль</label>
                    <input className="Register__input Register__input-error" placeholder="Пароль" required>
                    </input>
                    <span className="Register__error">Что-то пошло не так</span>
                    <button className="Register__smb"> Редактировать</button>
                    <div className="Register__question">
                        <p className="Register__text">
                            Уже зарегистрированы?
                        </p>
                        <button className="Register__logout">Войти</button>
                    </div>
                </form>
            </div>
        </main>
    )
}