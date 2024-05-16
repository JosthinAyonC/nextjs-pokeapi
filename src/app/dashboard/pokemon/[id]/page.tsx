import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

// Metadata de forma asincrona
export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { id, name } = await getPokemon(params.id);

    return {
        title: `#${id} - ${name} `,
        description: `Información sobre el pokemon ${name}`,
    };
}

interface Props {
    params: {
        id: string
    }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache' // TODO: change to 'no-cache' in production
    }).then((res) => res.json());

    console.log("Se cargó el pokemon: ", pokemon.name);

    return pokemon;
}

export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemon(params.id);

    return (
        <div>
            <h1>Pokemon {pokemon.name}</h1>
        </div>
    );
}