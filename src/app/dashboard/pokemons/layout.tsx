import { SelectPokemon } from "@/pokemons";

export default function DashboardPokemons({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <div className="p-2 flex flex-col">
                <SelectPokemon />
            </div>
            {children}
        </>
    );
}