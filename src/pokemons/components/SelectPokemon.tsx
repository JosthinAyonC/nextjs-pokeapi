'use client';

import { useState } from 'react';
import { Regiones } from "../data/regiones";
import Link from 'next/link';

export const SelectPokemon = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOptionClick = (regionName: string) => {
        const region = Regiones.find((region) => region.name === regionName);
        if (region) {
            setMenuOpen(false);
        }
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex justify-center w-full rounded-2xl border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
                <div className="flex text-center items-center">
                    Select Region
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </button>

            {menuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <div className="py-1" role="none">
                        {Regiones.map((region) => (
                            <Link
                                key={region.name}
                                href={`/dashboard/pokemons/${region.name}`}
                                onClick={() => handleOptionClick(region.name)}
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                            >
                                {region.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
