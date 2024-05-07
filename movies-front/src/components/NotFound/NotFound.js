import React from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {

    const navigate = useNavigate();
    function back() {
        navigate(-1);
    }
    return (
        <main className="NotFound">
            <div className="NotFound__contanier">
                <h1 className="NotFound__title">404</h1>
                <p className="NotFound__text">Страница не найдена</p>
            </div>
            <button className="NotFound__link" onClick={back}  type="button">Назад</button>
        </main>
    )
}