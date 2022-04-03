import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface FavoritesPokemonsProps {
  pokemons: number[];
}

export const FavoritesPokemons: FC<FavoritesPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify='flex-start'>
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  )
}
