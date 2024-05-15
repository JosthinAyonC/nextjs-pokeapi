import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json());

    const pokemons = response.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
}

export const metadata = {
    title: 'Pokemons',
    description: 'Página de Pokemons',
};

export default async function Pokemons() {

    const pokemons = await getPokemons(107, 386);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-4">Listado de pokémons <small>estático</small> </span>
            <PokemonGrid pokemons={pokemons}></PokemonGrid>
        </div>
    );

}
