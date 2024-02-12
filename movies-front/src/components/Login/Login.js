import logo from '../../images/logo2.svg'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <main className="Login">
            <div className="Login__contanier">
                <img className="Login__logo"
                    src={logo}
                    alt="лого"
                ></img>
                <h1 className="Login__title">Добро пожаловать!</h1>
                <form className="Login__form">
                    <label className="Login__lable">E-mail</label>
                    <input className="Login__input" placeholder="E-mail" required>
                    </input>
                    <label className="Login__lable">Пароль</label>
                    <input className="Login__input" placeholder="Пароль" required>
                    </input>
                    <button className="Login__smb" type="submit">Войти</button>
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