import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe'
import Techs from '../Techs/techs'
import Aboutproject from '../AboutProject/AboutProject'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import Header from '../Header/Header'

function Main({ loggedIn}) {
    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main className="main__contanier">
                <Promo />
                <NavTab />
                <Aboutproject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
        </>
    );
};

export default Main;