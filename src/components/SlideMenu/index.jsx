import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SlideMenu.scss';
import logo from '../../../public/cer-vector.svg';
import logoLight from '../../../public/cer-vector-light.svg';
import moon from '../../../public/moon-stars.svg';
import moonlight from '../../../public/moonlight.svg';
import sun from '../../../public/sun.svg';
import sunlight from '../../../public/sunlight.svg';
import Toggle from '../Toggle/Toggle';

const SlideMenu = ({ isOpen }) => {
	const [isDarkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	return (
		<CSSTransition
			in={isOpen}
			timeout={200}
			classNames="slide-menu"
			unmountOnExit
		>
			<div className={`slide-menu ${isDarkMode ? 'dark' : 'light'}`}>
				<a className="flex items-center w-full px-3 mt-3" href="#">
					<img
						src={isDarkMode ? logoLight : logo}
						alt="Logo"
						className="w-10 h-10"
					/>
					<span className="ml-2 text-2xl font-medium">The App</span>
				</a>
				<div className="w-full px-2">
					<div
						className={`flex flex-col items-center w-full mt-3 border-t ${
							isDarkMode ? 'border-gray-200' : 'border-gray-700'
						}`}
					>
						<a
							className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
								isDarkMode
									? 'text-gray-200 hover:bg-gray-200 hover:text-cer-gray'
									: 'text-cer-gray hover:bg-cer-gray hover:text-gray-300'
							}`}
							href="#"
						>
							<svg
								className="w-6 h-6 stroke-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							<span className="ml-2 text-2xl">Dasboard</span>
						</a>
						<a
							className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
								isDarkMode
									? 'text-gray-200 hover:bg-gray-200 hover:text-cer-gray'
									: 'text-cer-gray hover:bg-cer-gray hover:text-gray-300'
							}`}
							href="#"
						>
							<svg
								className="w-6 h-6 stroke-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
							<span className="ml-2 text-2xl">Search</span>
						</a>
						<a
							className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
								isDarkMode
									? 'text-gray-200 hover:bg-gray-200 hover:text-cer-gray'
									: 'text-cer-gray hover:bg-cer-gray hover:text-gray-300'
							}`}
							href="#"
						>
							<svg
								className="w-6 h-6 stroke-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span className="ml-2 text-2xl">Insights</span>
						</a>
						<a
							className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
								isDarkMode
									? 'text-gray-200 hover:bg-gray-200 hover:text-cer-gray'
									: 'text-cer-gray hover:bg-cer-gray hover:text-gray-300'
							}`}
							href="#"
						>
							<svg
								className="w-6 h-6 stroke-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
								/>
							</svg>
							<span className="ml-2 text-2xl">Docs</span>
						</a>
					</div>
				</div>
				<div className="toggleDarkMode">
					{isDarkMode ? (
						<img src={sunlight} alt="Logo" className="w-10 h-10 mr-4" />
					) : (
						<img src={sun} alt="Logo" className="w-10 h-10 mr-4" />
					)}
					<Toggle isOn={isDarkMode} setOnOff={toggleDarkMode} />
					{isDarkMode ? (
						<img src={moonlight} alt="Logo" className="w-10 h-10 ml-4" />
					) : (
						<img src={moon} alt="Logo" className="w-10 h-10 ml-4" />
					)}
				</div>
			</div>
		</CSSTransition>
	);
};

export default SlideMenu;
