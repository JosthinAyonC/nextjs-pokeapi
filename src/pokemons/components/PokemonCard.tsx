'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";
import { addOne, removeOne } from "@/store/pokemon/favoritesPokemonSlice";

import Image from "next/image";
import Link from "next/link";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const favPokemons = useAppSelector((state) => state.favPokemons.pokemons);
    const dispatch = useAppDispatch();

    const favoritePokemon = favPokemons.find((favPokemon) => favPokemon.id === pokemon.id);
    const isFavorite = favoritePokemon ? favoritePokemon.isFavorite : false;

    const handleFavoriteClick = () => {
        isFavorite
            ? dispatch(removeOne(pokemon))
            : dispatch(addOne(pokemon));
    };

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        alt={pokemon.name}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${pokemon.id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Descubre más
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                        onClick={handleFavoriteClick}
                    >
                        <div className="text-red-600">
                            {isFavorite ? <IoHeartDislikeOutline /> : <IoHeartOutline />}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? "Quitar favorito" : "Agregar favorito"}
                            </p>
                            <p className="text-xs text-gray-500">Pokemones</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
