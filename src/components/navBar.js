import React from 'react';
import { NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return (
        <div className={"navbar"}>
            <NavLink exact activeStyle={{color: '#f7f7ff'}} to='/'>
                Home
            </NavLink>

            <NavLink exact activeStyle={{color: '#f7f7ff'}} to='/about'>
                About
            </NavLink>

            <NavLink exact activeStyle={{color: '#f7f7ff'}} to='/profile'>
                Profile
            </NavLink>

            <NavLink exact activeStyle={{color: '#f7f7ff'}} to='/store'>
                Store
            </NavLink>
        </div>
    );
}

export default NavBar;
