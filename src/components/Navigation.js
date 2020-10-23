import React, { useState } from 'react';
import '../css/Navigation.css';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [opendrop, setOpendrop] = useState(false);

    return (
        <>
            <nav className={open ? "navbar navbar-expand-lg MenuOpen" : "navbar navbar-expand-lg"}>
                <span className="MenuTrigger d-lg-none" onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                    <li className="nav-item dropdown"><NavLink className="nav-link" to="/About">About Us</NavLink>
                            <span className="ddwn" onClick={() => setOpendrop(!opendrop)}> </span>
                        <ul className={opendrop ? "dropdown-menu DropOpen" : "dropdown-menu"}>
                            <li className="nav-item"><NavLink className="nav-link" to="/About">DropDown</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/About">DropDown</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item"><NavLink className="nav-link" to="/OurWork">Our Work</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Supporter">Supporter</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Gallery">Gallery</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Contribute">Contribute</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
                </ul>


            </nav>
        </>
    )
}

export default Navigation;