import { PokemonListResponse, SmallPokemon } from "../intefaces";

type Pokemon = {
  name: string;
  url: string;
}

const ImagePath = (id: string) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export const createPokemonSmallAdater = ({ name, url }: Pokemon) => {
  const id = url.split("/").slice(-2)[0];
  return { name, id: Number(id), image: ImagePath(id), url };
}

export  const listPokemons = (pokemonList: PokemonListResponse): SmallPokemon[] => {
  const { results } = pokemonList;
  const pokemons = results.map(createPokemonSmallAdater)
  return pokemons;
}
