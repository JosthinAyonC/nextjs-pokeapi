import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface favPokemonsState {
    count: number;
    pokemons: SimplePokemon[];
}

const initialState: favPokemonsState = {
    count: 0,
    pokemons: []
}

export const favPokemonsSlice = createSlice({
    name: 'favPokemons',
    initialState,
    reducers: {
        addOne: (state, action: PayloadAction<SimplePokemon>) => {
            state.count += 1;
            state.pokemons.push(action.payload);
        },
        removeOne: (state, action: PayloadAction<SimplePokemon>) => {
            state.count -= 1;
            state.pokemons = state.pokemons.filter(pokemon => pokemon.id !== action.payload.id);
        }
    }
});

export const { addOne, removeOne } = favPokemonsSlice.actions;

export default favPokemonsSlice.reducer;