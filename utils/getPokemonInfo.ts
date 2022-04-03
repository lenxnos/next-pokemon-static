import { PokemonDataAdapter } from "../adapters";
import { Pokemon, PokemonDetail } from "../intefaces";
import pokeApi from "../services/pokeApi.service";

export const getPokemonInfo = async (nameOrId: string): Promise<PokemonDetail> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
  const pokemon = PokemonDataAdapter(data);
  return pokemon;
}