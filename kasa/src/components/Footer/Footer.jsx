import React from 'react';
import logo from '../../assets/LOGO_footer.svg';
import './Footer.css'; 

export default function Footer() {
  return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-container_text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}