import { NavLink } from "react-router-dom";
import React from "react";
import "./Nav.css"; 

function Nav() {
	return (
		<nav className="nav_header">
			<NavLink to="/" className="nav_header_link_home" activeClassName="active">
				Accueil
			</NavLink>
			<NavLink to="/about" className="nav_header_link_about" activeClassName="active">
				A Propos
			</NavLink>
		</nav>
	);
}
export default Nav;