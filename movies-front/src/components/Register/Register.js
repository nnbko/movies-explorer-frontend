import logo from '../../images/logo2.svg'
import React from "react";
import {useEffect } from "react";
import { Link } from "react-router-dom";
import Validation from "../../hooks/validate";

export default function Register({ onRegister}) {
    const { values, handleChange, errors, isValid, resetForm } = Validation();

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(values.name, values.email, values.password)
    };





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

                <form className="Register__form" noValidate onSubmit={handleSubmit}>
                    <label className="Register__lable">Имя</label>
                    <input className={`Register__input ${errors.name ? 'Register__input-error' : ' '}`}
                        placeholder="Имя"
                        required
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={values.name || ""}
                        minLength={2}
                        maxLength={30}
                        pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                    >
                    </input>
                    <span className="Register__error">{errors.name}</span>
                    <label className="Register__lable">E-mail</label>
                    <input className={`Register__input ${errors.email ? 'Register__input-error' : ' '}`} placeholder="E-mail"
                        required
                        type="email"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
                        minLength={2}
                        maxLength={30}
                    >
                    </input>
                    <span className="Register__error">{errors.email}</span>
                    <label className="Register__lable">Пароль</label>
                    <input className={`Register__input ${errors.password ? 'Register__input-error' : ' '}`} placeholder="Пароль"
                        minLength="5"
                        maxLength="30"
                        value={values.password || ""}
                        onChange={handleChange}
                        required
                        name="password"
                    >
                    </input>
                    <span className="Register__error">{errors.password}</span>
                    <button className={`Register__smb ${!isValid && errors ? "Register__smb_disabled" : ''}`}
                        disabled={!isValid} type="submit">Зарегистрироваться</button>
                    <div className="Register__question">
                        <p className="Register__text">
                            Уже зарегистрированы?
                        </p>
                        <Link className="Register__logout" to="/signin">Войти</Link>
                    </div>
                </form>
            </div>
        </main >
    )
}