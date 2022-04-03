import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface FavoriteCardPokemonProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<FavoriteCardPokemonProps> = ({ pokemonId }) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={`Pokémon ${pokemonId}`}
          width="100%"
          height={100}
        />
      </Card>
    </Grid>
  )
}
