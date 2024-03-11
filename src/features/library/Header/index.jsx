import { Link } from 'react-router-dom';
// import logo from "../../../public/LOGO-CERFRANCE.png";
import MyButton from '../Button';

const Header = () => {

    return (
        <div className="header">
            {/* <img src={logo} alt="logo cerfrance" className="logo"/> */}
            <h1>Librairie des composants</h1>
            <div className="intro">
                <p>Vous pouvez trouver ici l'ensemble des composants présents sur les applications Cerfrance</p>
                <p>Ils peuvent être réutilisés dans vos projets React</p>
            </div>
            <div className='rooter'>
                <MyButton content={<Link className="simple-link" to="/">Librairie</Link>}/>
                <MyButton content={<Link className="simple-link" to="table">Tableau</Link>}/>
            </div>
        </div>
    )
}


export default Header;