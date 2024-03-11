import React from 'react';

const SearchBar = () => {

    return (
        <div className="w-48">
            <div className="px-4">
                <label htmlFor="dossier" className="block text-sm font-medium text-gray-700">
                    Rechercher un dossier :
                </label>
                <div className="mt-1">
                    <input
                        type="number"
                        name="dossier"
                        id="dossier"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="ex : 020717"
                        min="0"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
