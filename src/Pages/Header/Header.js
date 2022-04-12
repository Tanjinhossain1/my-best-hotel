import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='link-container'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/checked'>Checked</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;