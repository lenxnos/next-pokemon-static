import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { SmallPokemon } from '../../intefaces/pokemonList';
import { PokemonCard } from './PokemonCard';

type PokemonListProps = {
  pokemons: SmallPokemon[]
}

export const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};