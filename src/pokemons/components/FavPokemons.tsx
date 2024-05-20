'use client';

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";

export const FavPokemons = () => {

    const favPokemons = useAppSelector((state) => state.favPokemons.pokemons);

    return (
        <div className="flex flex-col m-2">
            <h1 className="text-7xl text-center">Lista de favoritos</h1>
            <div className="flex flex-wrap gap-10 items-center justify-center m-2">
                {
                    favPokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon} />
                    ))
                }
            </div>
        </div>
    )
}
