import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe'
import Techs from '../Techs/techs'
import Aboutproject from '../AboutProject/AboutProject'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import Header from '../Header/Header'

function Main() {
    return (
        <>
            <Header isLoggedIn={false} />
            <main className="main__contanier">
                <Promo />
                <NavTab />
                <Aboutproject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
};

export default Main;