import { Pokemon, PokemonDetail } from "../intefaces";

export const PokemonDataAdapter = (pokemon: Pokemon): PokemonDetail => ({
  name: pokemon.name,
  image: pokemon.sprites.other?.dream_world.front_default || '/no-image.png',
  id: pokemon.id,
  frontImage: pokemon.sprites.front_default,
  backImage: pokemon.sprites.back_default,
  frontShinyImage: pokemon.sprites.front_shiny,
  backShinyImage: pokemon.sprites.back_shiny,
});