import logo from '../../images/logo2.svg'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useValidation from "../../hooks/useValidation";

export default function Login({ onLogin, isWarning, checkedLoggedIn, setIsWarning, isFetching }) {
    const { values, handleChange, errors, isValid, resetForm } = useValidation();

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(values.email, values.password);
    };

    useEffect(() => {
        checkedLoggedIn()
    }, [])

    return (
        <main className="Login">
            <div className="Login__contanier">
                <Link className="Login__link" to="/">
                    <img className="Login__logo"
                        alt="лого"
                        src={logo}
                    ></img>
                </Link>
                <h1 className="Login__title">Добро пожаловать!</h1>
                <form className="Login__form" onSubmit={handleSubmit} noValidate>
                    <label className="Login__lable">E-mail</label>
                    <input className={`Login__input ${errors.email ? 'Login__input-error' : ' '}`} placeholder="E-mail"
                        required
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={values.email || ""}
                        minLength={2}
                        maxLength={30}
                        pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
                    >
                    </input>
                    <span className="Login__error">{errors.email}</span>
                    <label className="Login__lable">Пароль</label>
                    <input className={`Login__input ${errors.password ? 'Login__input-error' : ' '}`}
                        placeholder="Пароль"
                        type="password"
                        required
                        onChange={handleChange}
                        value={values.password || ""}
                        name="password"
                        minLength={2}
                        maxLength={20}
                    >
                    </input>
                    <span className="Login__error">{errors.password}</span>
                    <button className={`Login__smb ${!isValid && errors ? "Login__smb_disabled" : ''}`}
                        disabled={!isValid} type="submit">Войти</button>
                    <div className="Login__question">
                        <p className="Login__text">
                            Ещё не зарегистрированы?
                        </p>
                        <Link className="Login__link" to="/signup" >Регистарция</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}