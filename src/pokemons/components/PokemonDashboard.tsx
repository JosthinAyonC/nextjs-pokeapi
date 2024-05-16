'use client';
import { useState, useEffect } from 'react';
import { PokemonGrid } from './PokemonGrid';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonResponse } from '../interfaces/pokemons-response';
import { Regiones } from '../data/regiones';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json());

    const pokemons = response.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
}

export const PokemonDashboard = () => {
    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchInitialPokemons = async () => {
            setLoading(true);
            const initialPokemons = await getPokemons(151, 0);
            setPokemons(initialPokemons);
            setLoading(false);
        };

        fetchInitialPokemons();
    }, []);

    const handleFetchPokemons = async (limit: number, offset: number) => {
        console.log('fetching pokemons');
        setLoading(true);
        const newPokemons = await getPokemons(limit, offset);
        setPokemons(newPokemons);
        setLoading(false);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const region = Regiones.find((region) => region.name === value);
        if (!region) return;

        handleFetchPokemons(region.limit, region.offset);
    };

    return (
        <div className="flex flex-col">
            <select onChange={handleSelectChange} className="mb-4 p-2 bg-blue-500 text-white">
                {Regiones.map((region) => (
                    <option key={region.name} value={region.name}>{region.name}</option>
                ))}
            </select>
            {loading ? <span>Loading...</span> : <PokemonGrid pokemons={pokemons} />}
        </div>
    );
};
