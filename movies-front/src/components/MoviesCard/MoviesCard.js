
import film from '../../images/33words.png';
export default function MoviesCard({ isLiked }) {
    return (
        <>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                    {isLiked ? (
                        <button className="MoviesCard__save"></button>
                    ) : (
                        <button className="MoviesCard__saved"></button>
                    )}

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                  
                        <button className="MoviesCard__save"></button>
                   

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                    
                        <button className="MoviesCard__save"></button>
                   
                   

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                    
                        <button className="MoviesCard__save"></button>
                  
                        
                    

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                    
                        <button className="MoviesCard__save"></button>
                   
                        
                    

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                  
                        <button className="MoviesCard__save"></button>
                 
                        
            

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                    
                        <button className="MoviesCard__save"></button>
                    
                       
                  

                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            <li className="MoviesCard">
                <img className="MoviesCard__image" src={film}></img>
                <div className="MoviesCard__contanier">
                    <p className="MoviesCard__name">33 слова о дизайне</p>
                        <button className="MoviesCard__save"></button>
                </div>
                <span className="MoviesCard__duration">1ч 17м</span>
            </li>
            
        </>
    )
}