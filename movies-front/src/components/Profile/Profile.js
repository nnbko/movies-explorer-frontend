import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Header from '../Header/Header'
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import useValidation from "../../hooks/useValidation";
export default function Profile({ signOut, handleUpdateUser, setIsSuccess, isSuccess, loggedIn }) {

    const { values, handleChange, errors, isValid, resetForm } = useValidation();
    const currentUser = useContext(CurrentUserContext);
    const { email, name } = values;
    const [isDisabled, setIsDisabled] = useState(false);
    const [isChanging, setIsChanging] = useState(false);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleUpdateUser({ name, email })
        setIsChanging(false);
    };

    function changeStatus() {
        setIsSuccess("");
        setIsChanging(true);
    }

    useEffect(() => {
        resetForm({ email: currentUser.email, name: currentUser.name });
    }, [currentUser]);

    useEffect(() => {
        let isMatch =
            currentUser.name !== values.name || currentUser.email !== values.email;
        setIsDisabled(isMatch);
    }, [values, currentUser, isValid]);
    return (
        <>
            <Header black loggedIn={loggedIn} />
            <main className="Profile">
                <h1 className="Profile__title">{`Привет, ${currentUser.name}!`}</h1>
                <form className="Profile__form" name="form-profile" noValidate onSubmit={handleSubmit}>
                    <fieldset className="Profile__fieldset Profile__fieldset-underline">
                        <label className="Profile__lable">Имя</label>
                        <input
                            id="name"
                            type="text"
                            placeholder={currentUser.name}
                            name="name"
                            value={values.name || ''}
                            className="Profile__input"
                            onChange={handleChange}
                            pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                            minLength="2"
                            maxLength="40"
                            required
                            readOnly={(!isChanging)}
                        />
                    </fieldset>
                    <span className="profile__error">{errors.name}</span>
                    <fieldset className="Profile__fieldset">
                        <label className="Profile__lable">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder={currentUser.email}
                            value={values.email || ''}
                            name="email"
                            className="Profile__input"
                            onChange={handleChange}
                            required
                            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
                            readOnly={(!isChanging)}
                        />
                    </fieldset>
                    <span className="profile__error">{errors.email}</span>
                    <span className={`profile__errors ${!isChanging ? 'profile__success' : ''}`}>
                        {isSuccess}
                    </span>
                    {isChanging ? (
                        <div className="profile__save">
                            <button
                                type="submit"
                                className={`profile__save-button ${!isValid || !isDisabled ? "profile__save-button_disabled" : ''}`}
                                disabled={!isValid || !isDisabled}
                            >
                                Сохранить
                            </button>
                        </div>
                    ) : (
                        <div className="button">
                            <button className="Profile__button profile__button-edit" onClick={changeStatus}> Редактировать</button>
                            <Link className="Profile__button profile__button-signout" to="/" onClick={signOut}>Выйти из аккаунта</Link>
                        </div>
                    )
                    }

                </form>

            </main >
        </>
    )
}