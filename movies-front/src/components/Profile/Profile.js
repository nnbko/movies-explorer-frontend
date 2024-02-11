
import Header from '../Header/Header'
export default function Profile() {
    return (
        <>
            <Header isLoggedIn={true} />
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
                        <button className="Profile__button profile__button-edit"> Редактировать</button>
                        <button className="Profile__button profile__button-signout">Выйти из аккаунта</button>
                    </div>
                </form>

            </main>
        </>
    )
}