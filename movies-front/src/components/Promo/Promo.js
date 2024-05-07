import promo from "../../images/promo.svg";

export default function Promo() {
    return (
        <section className="promo">
            <div className="promo__contanier">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <div className="promo__"></div>
            <img className="promo__image" src={promo} alt="Промо лого" />
        </section>
    )
}