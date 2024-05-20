'use client';

import { useAppDispatch } from "@/store";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";
import { addOne, removeOne } from "@/store/pokemon/favoritesPokemonSlice";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [isFavorite, setIsFavorite] = useState(true);

    const dispatch = useAppDispatch();

    const { id, name } = pokemon;

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);

        isFavorite ?
            dispatch(addOne(pokemon)) :
            dispatch(removeOne(pokemon));
    };

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">

                    <Image
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        alt={name}
                        priority={false}
                    />

                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Descubre más
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                        onClick={handleFavoriteClick} // Agrega el manejador de clic aquí
                    >
                        <div className="text-red-600">
                            {isFavorite ? <IoHeartOutline /> : <IoHeartDislikeOutline />}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? "Agregar favorito" : "Quitar favorito"}
                            </p>
                            <p className="text-xs text-gray-500">Pokemones</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
