import { SelectPokemon } from "@/pokemons";

export default function DashboardPokemons({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <div className="flex flex-col">
                <SelectPokemon />
            </div>
            {children}
        </>
    );
}