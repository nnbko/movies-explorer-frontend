
import film from '../../images/33words.png';
export default function MoviesCard({ isLiked }) {
    return (
        <>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film} alt="фильм"></img>
                <div className="MoviesCard__contanier">
                    <h2 className="MoviesCard__name">33 слова о дизайне</h2>
                    {isLiked ? (
                        <button className="MoviesCard__save" type="button"></button>
                    ) : (
                        <button className="MoviesCard__saved" type="button"></button>
                    )}

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film} alt="фильм"></img>
                <div className="MoviesCard__contanier">
                    <h2 className="MoviesCard__name">33 слова о дизайне</h2>

                    <button className="MoviesCard__save"  type="button"></button>


                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>

        </>
    )
}