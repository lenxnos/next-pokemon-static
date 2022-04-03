import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Card, Grid, Text, Button, Container, Image } from '@nextui-org/react';
import { PokemonDetail, PokemonListResponse } from '../../intefaces';
import pokeApi from '../../services/pokeApi.service';
import { getPokemonInfo, localFavorites } from '../../utils';
import conffeti from 'canvas-confetti';
import { Layout } from '../../components/layouts';

interface PokemonPageProps {
  pokemon: PokemonDetail;
}

const PokemonByNamePage: NextPage<PokemonPageProps> = ({ pokemon }) => {

  const { image, name } = pokemon;

  const [isInFavorite, setIsInFavorite] = useState(false); 

  const onToggleFavorite = () => {
    localFavorites.toogleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (!isInFavorite) {
      conffeti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        }
      })
    }
  }

  useEffect(() => {
    setIsInFavorite(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={image} alt={name} width="100%" height={200} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{name}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onClick={onToggleFavorite}
              >
                {
                  isInFavorite ? 'En favoritos' : 'Guardar en favoritos'
                }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction="row" gap={0}>
                <Image src={pokemon.frontImage} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.backImage} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.frontShinyImage} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.backShinyImage} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); // your fetch function here
  const pokemons: string[] = data.results.map(pokemon => pokemon.name);

  return {
    paths: pokemons.map(pokemon => ({ params: { name: pokemon } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  return {
    props: {
      pokemon: await getPokemonInfo(name),
    }
  }
}

export default PokemonByNamePage;
