import React from 'react';
import './AccordeonMenu.scss';
import {useNavigate} from 'react-router-dom';
import DropDown from '../Dropdowns/ClassicDropDownMenu';


const array1 = [
    {title: 'Account settings', url: '#'},
    {title: 'Support', url: '#'},
    {title: 'License', url: '#'}
]

const tableaux = [
    {title: 'Tableau 1 - MuiTable', url: '/tableau1'},
    {title: 'Tableau 2 - MuiTable', url: '/tableau2'},
    {title: 'Tableau 3 - PrimeReact', url: '/tableau3'}
];

{/* <button className="inline-flex ml-10 mr-10 justify-center rounded-md border border-gray-300 bg-gray-100 w-36 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => navigate('/tableau1')}>Tableau 1 - MuiTable</button> */}
// <button className="inline-flex ml-10 mr-10 justify-center rounded-md border border-gray-300 bg-gray-100 w-36 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => navigate('/tableau2')}>Tableau 2 - MuiTable</button>
// <button className="inline-flex ml-10 mr-10 justify-center rounded-md border border-gray-300 bg-gray-100 w-36 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => navigate('/tableau3')}>Tableau 3 - PrimeReact</button>


const AccordeonMenu = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url);
    }

    return (
        <div className={`accor-menu ${isOpen ? '' : 'open'}`}>
            <ul>
                <button className="inline-flex ml-10 mr-10 justify-center rounded-md border border-gray-300 bg-gray-100 w-36 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => navigate('/')}>Acceuil</button>
				<button className="inline-flex ml-10 mr-10 justify-center rounded-md border border-gray-300 bg-gray-100 w-36 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => navigate('/componentsLibrary')}>Composants</button>
                <DropDown title="Tableaux" selectArray={tableaux} onSelect={handleNavigate} />
            </ul>
        </div>
    );
}

export default AccordeonMenu;
