import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav__menu">
                <ul className="na__list">
                    {links.map(({name, icon, path}, index) => {
                        return(
                            <li className="nav__item" key={index}>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;