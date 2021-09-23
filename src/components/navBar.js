import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <NavLink exact activeStyle={{color: '#009FB7'}} to='/'>
                Home
            </NavLink> |

            <NavLink exact activeStyle={{color: '#009FB7'}} to='/about'>
                About
            </NavLink> |

            <NavLink exact activeStyle={{color: '#009FB7'}} to='/profile'>
                Profile
            </NavLink> |

            <NavLink exact activeStyle={{color: '#009FB7'}} to='/store'>
                Store
            </NavLink> |
        </>
    );
}

export default NavBar;
