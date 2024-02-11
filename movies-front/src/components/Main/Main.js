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
            <Header isLoggedIn={true} />
            <Promo />
            <NavTab />
            <Aboutproject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    );
};

export default Main;