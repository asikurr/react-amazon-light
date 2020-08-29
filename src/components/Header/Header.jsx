import React from 'react';
import './header-style.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="Logo"/>
            <nav className="nav__list">
                <a href="/shop" className="nav__link">Shop</a>
                <a href="/review" className="nav__link">Order</a>
                <a href="/inventory" className="nav__link">Manage Invantory</a>
            </nav>
        </header>
    );
};

export default Header;