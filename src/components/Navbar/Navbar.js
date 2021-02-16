import React from 'react';
import  {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to='/' exat className="hover" activeClassName="nav-active">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to='/education' exact className="hover" activeClassName="nav-active">
                    <li>Formation</li>
                </NavLink>
                <NavLink to="/portfolio" exact className="hover" activeClassName="nav-active">
                    <li>Portfolio</li>
                </NavLink>
                <NavLink to='/contact' exact className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};



export default Navbar;
