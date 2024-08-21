import logo from '../../assets/logo.png';
import CartWidget from '../cartwidget';
import LinkNav from '../link/link';

const NavBar = () => {
    
    return (
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img className='logo' src= {logo} alt="" />
                </figure>
                <menu className="navbar__menu">
                    <LinkNav texto="shop"/>
                    <LinkNav texto="Contacto"/>
                    <LinkNav texto="Login"/>
                    <li className="">
                        <a className="navbar__link" href="">
                            <CartWidget quantity={3}/>
                        </a>
                    </li>
                </menu>
            </nav>
        </header>
    );
}

export default NavBar