import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineRestaurantMenu} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import { Button } from './Button';
import { FaBasketShopping } from "react-icons/fa6";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled) {
                document.querySelector('.navbar').classList.add('scrolled');
            } else {
                document.querySelector('.navbar').classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/Home' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src='Images/Logo_vert-marron.png' alt=''></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <MdOutlineRestaurantMenu className='menu-responsive'/> : <GiHamburgerMenu className='menu-responsive'/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <span className='ligne-nav-menu'/>
                        <li className='nav-item'>
                            <Link to='/leconcept' className='nav-links dtype' onClick={closeMobileMenu}>
                                Le Concept
                            </Link>
                        </li>
                        <span className='ligne-nav-menu'/>
                        <li className='nav-item'>
                            <Link to='/laferme' className='nav-links' onClick={closeMobileMenu}>
                                La Ferme
                            </Link>
                        </li>
                        <span className='ligne-nav-menu'/>

                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links dtype' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className='bouton-boutique'>
                        <Button buttonStyle='btn--primary' className='button-shop-nav'>
                            <span className='button-text'>
                                <a className='vinculo-commander-navbar' href='https://papyblank.byclickeat.fr/store/entrypoint'>
                                    Commander
                                </a>
                            </span>
                            <FaBasketShopping className='panier-icon'/>
                        </Button>
                    </div>
                    <div className='mobile-shop-icon'>
                        <a className='vinculo-commander-navbar' href='https://papyblank.byclickeat.fr/store/entrypoint'>
                            <FaBasketShopping  className='shop-icono'/>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
