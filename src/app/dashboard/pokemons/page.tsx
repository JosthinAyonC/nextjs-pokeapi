import { redirect } from "next/navigation";

export const metadata = {
    title: 'Pokemons',
    description: 'Página de Pokemons',
};

export default function PokemonsPage() {
    redirect(`/dashboard/pokemons/Kanto`);
}
