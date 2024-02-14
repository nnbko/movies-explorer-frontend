export default function Aboutproject() {
    return (
        <section className="project" id="aboutProject">
            <h2 className="project__title">О проекте</h2>
            <div className="project__contanier">
                <div className="project__part">
                    <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="projects__text">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>

                </div>
                <div className="project__part">
                    <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="projects__text"> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <ul className="project__progress">
                <li className="project__timing">1 неделя</li>
                <li className="project__timing-colored">4 недели</li>
                <li className="project__text">Back-end</li>
                <li className="project__text">Front-end</li>
            </ul>
        </section>
    )
}