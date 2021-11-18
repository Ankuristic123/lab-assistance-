import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick =() => setClick(!click);
    const closedMobileMenu = () => setClick(false)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MediPlus <i className="fab fa-typo3"></i>
                </Link>
                <div className='menu-icon' onclick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-links' onclick={closedMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/services' className='nav-links' onclick={closedMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/products' className='nav-links' onclick={closedMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/sign-up' className='nav-links-mobile' onclick={closedMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar
