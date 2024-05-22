import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import './Navbar.css';
import { Button } from './Button';
import { FaShoppingCart } from "react-icons/fa";

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
                        {click ? <MdOutlineRestaurantMenu className='menu-responsive'/> : <IoMenu className='menu-responsive'/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/leconcept' className='nav-links dtype' onClick={closeMobileMenu}>
                                Le Concept
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/laferme' className='nav-links' onClick={closeMobileMenu}>
                                La Ferme
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links dtype' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className='bouton-boutique'>
                    <Button  buttonStyle='btn--primary'><span className='button-text'>Boutique</span><FaShoppingCart className='shop-cart'/></Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
