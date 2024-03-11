import React, { useState } from 'react';
import logo from '../../assets/LogoHeader2.png';
import './Header.scss';
import AccordeonMenu from '../AccordeonMenu';
import BurgerIcon from '../BurgerIcon';
import SlideMenu from '../SlideMenu';

function Header() {
	const [isNavOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!isNavOpen);
	};
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<header className="header bubble h-28 p-2 flex flex-row items-center bg-white">
			<img src={logo} className="absolute" alt="Logo Cerfrance" />
			<h1 className="greyCer-text m-auto text-3xl">Template Header</h1>
			<AccordeonMenu isOpen={isNavOpen} />
			<BurgerIcon onClick={toggleMenu} />
			<SlideMenu isOpen={menuOpen} />
			<div
				className={`triangle ${isNavOpen ? '' : 'nav-active'}`}
				onClick={toggleNav}
			></div>
		</header>
	);
}

export default Header;
