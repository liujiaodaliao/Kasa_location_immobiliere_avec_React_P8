import { Link } from "react-router-dom";
import React from 'react';
import './Nav.css'; 

function Nav() {
	return (
		<nav className="nav_header">
			<Link to="/" className="nav_header_link_home">
				Accueil
			</Link>
			<Link to="/about" className="nav_header_link_about">
				A Propos
			</Link>
		</nav>
	);
}
export default Nav;