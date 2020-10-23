import React from 'react';
import '../css/Logo.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <div className="Logo">
            <NavLink exact className="nav-link" to="/"><i className="fa fa-book" aria-hidden="true"></i><span>Akaro</span></NavLink>
            </div>
        </>
    )
}

export default Logo;