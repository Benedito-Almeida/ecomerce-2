import React, { useState, useContext, useRef } from 'react';
import './Navbar.css';
import Logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const toggleDropdown = () => {
        setMenuVisible(prev => !prev);
    };

    const handleMenuItemClick = (menu) => {
        setMenuVisible(false);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='nav-dropdown' src={Logo} alt='logo' />
                <p>SHOPPER</p>
            </div>

            <img
                onClick={toggleDropdown}
                src={nav_dropdown}
                className={`nav-dropdown ${menuVisible ? 'open' : ''}`}
                alt='dropdown'
            />
            <ul ref={menuRef} className={`nav-menu ${menuVisible ? 'nav-menu-visible' : ''}`}>
                <li onClick={() => handleMenuItemClick('shop')}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                </li>
                <li onClick={() => handleMenuItemClick('mens')}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                </li>
                <li onClick={() => handleMenuItemClick('womens')}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
                </li>
                <li onClick={() => handleMenuItemClick('kids')}>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
