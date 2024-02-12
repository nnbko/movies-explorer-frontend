import { Link } from "react-router-dom";
import Header from '../Header/Header'
export default function Profile() {
    return (
        <>
            <Header black isLoggedIn={true} />
            <main className="Profile">
                <h1 className="Profile__title">Привет, Виталий!</h1>
                <form className="Profile__form">
                    <fieldset className="Profile__fieldset Profile__fieldset-underline">
                        <label className="Profile__lable">Имя</label>
                        <input className="Profile__input" placeholder="Имя" required>
                        </input>
                    </fieldset>
                    <fieldset className="Profile__fieldset">
                        <label className="Profile__lable">E-mail</label>
                        <input className="Profile__input" placeholder="E-mail" required>
                        </input >
                    </fieldset>
                    <div className="button">
                        <button className="Profile__button profile__button-edit"   type="submit"> Редактировать</button>
                        <Link className="Profile__button profile__button-signout" to="/" >Выйти из аккаунта</Link>
                    </div>
                </form>

            </main>
        </>
    )
}