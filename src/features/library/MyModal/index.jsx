import React from 'react';
import {Link} from 'react-router-dom';

const MyModal = ({ setIsModalOpen }) => {

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div x-data="{ modal: true }" className="absolute max-w-sm p-2 mx-auto bg-white border-[1px] border-gray-200 shadow rounded-xl hover:shadow-lg transition-all duration-150 ease-linear" x-show="modal">
                <div className="relative p-6">
                    <Link href="/componentsLibrary" x-on:click="modal = ! modal" className="absolute top-1.5 right-1.5">
                        <svg onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 cursor-pointer fill-current text-slate-500 hover:text-slate-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                            
                    </Link>
                    <h1 className="text-3xl font-bold">Delete controller</h1>
                    <p className="text-sm text-gray-500">Are you sure you want to delete this controller?</p>
                    <code>App/Cookies</code>
                    <div className="flex flex-row mt-6 space-x-2 justify-evenly">
                        <Link href="/componentsLibrary" className="w-full py-3 text-sm font-medium text-center text-white transition duration-150 ease-linear bg-red-600 border border-red-600 rounded-lg hover:bg-red-500" onClick={handleCloseModal}>Delete</Link>
                        <Link href="/componentsLibrary" x-on:click="modal = ! modal" className="w-full py-3 text-sm text-center text-gray-500 transition duration-150 ease-linear bg-white border border-gray-200 rounded-lg hover:bg-gray-100" onClick={handleCloseModal}>Cancel</Link>
                    </div>
                </div>
        </div>
    );
};

export default MyModal;