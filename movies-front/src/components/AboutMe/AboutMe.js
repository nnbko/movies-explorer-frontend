import photo from "../../images/pic.png"
export default function AboutMe() {
    return (
        <section className="about__me">
            <h2 className="about__me_title">Студент</h2>
            <div className="about__me_contanier">
                <div className="about__me_info">
                    <p className="about__me_name">Виталий</p>
                    <p className="about__me_spec">Фронтенд-разработчик, 30 лет</p>
                    <p className="about__me_about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about__me_link"
                        href="https://github.com/nnbko"
                        target="_blank"
                        rel="noreferrer"
                    >Github
                    </a>
                </div>
                <img className="about__me_photo" src={photo}
                    alt="На фотографии пример фотографии" />
            </div>


        </section>
    )
}