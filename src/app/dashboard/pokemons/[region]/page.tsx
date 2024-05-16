import { PokemonGrid, PokemonResponse, Regiones, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
    params: {
        region: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Región - ${params.region} `,
        description: `Pokemons de la región ${params.region}`,
    };
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json());

    const pokemons = response.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
}


export default async function RegionPage({ params }: Props) {
    console.log("Region: ", params.region);
    const region = Regiones.find((region) => region.name === params.region);
    if (!region) throw new Error('Region not found');
    const pokemons = await getPokemons(region.limit, region.offset);
    return (
        <div className="flex flex-col">
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}