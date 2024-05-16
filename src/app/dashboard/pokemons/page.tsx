import { PokemonDashboard } from "@/pokemons";


export const metadata = {
    title: 'Pokemons',
    description: 'Página de Pokemons',
};

export default async function Pokemons() {
    return (
        <>
            <PokemonDashboard />
        </>
    );
}
