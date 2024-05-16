'use client';

import { useRouter } from 'next/navigation';
import { Regiones } from "../data/regiones";

export const SelectPokemon = () => {
    const router = useRouter();  // Inicializa el router

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const region = Regiones.find((region) => region.name === value);
        if (region) {
            router.push(`/dashboard/pokemons/${region.name}`); 
        }
    }

    return (
        <>
            <select onChange={onChangeSelect} className="mb-4 p-2 bg-blue-500 text-white">
                {Regiones.map((region) => (
                    <option
                        key={region.name}
                        value={region.name}
                    >{region.name}</option>
                ))}
            </select>
        </>
    );
};
