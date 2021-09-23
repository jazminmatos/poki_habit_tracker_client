import { NavLink } from "react-router-dom";

import React from 'react';

const NavBar = () => {
    return (
        <>
            <NavLink exact activeStyle={{color: 'blue'}} to='/'>
                Home
            </NavLink> |

            <NavLink exact activeStyle={{color: 'blue'}} to='/about'>
                About
            </NavLink> |

            <NavLink exact activeStyle={{color: 'blue'}} to='/profile'>
                Profile
            </NavLink> |

            <NavLink exact activeStyle={{color: 'blue'}} to='/store'>
                Store
            </NavLink> |
        </>
    );
}

export default NavBar;
