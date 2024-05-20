'use client';

import { IoCalculator, IoHeartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store";


export const WidgetsGrid = () => {

    const count = useAppSelector((state) => state.counter.count);
    const favPokemon = useAppSelector((state) => state.favPokemons.count);

    const widgets = [
        {
            contador: count,
            subtitle: "Carrito de compras",
            label: "Contador",
            icon: <IoCalculator size={50} className="text-blue-500" />,
            href: "/dashboard/counter"
        },
        {
            contador: favPokemon,
            subtitle: "Pokemons",
            label: "Pokemons favoritos",
            icon: <IoHeartOutline size={50} className="text-blue-500" />,
            href: "/dashboard/pokemons/favorites"
        }
    ]
    return (
        <div className="flex flex-wrap p-2">
            {
                widgets.map((widget, index) => (
                    <SimpleWidget key={index} {...widget} />
                ))
            }
        </div>
    )
}