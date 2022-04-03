import { NextPage, GetStaticProps } from 'next'
import { listPokemons } from '../adapters';
import { Layout } from '../components/layouts';
import { PokemonList } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../intefaces';
import pokeApi from '../services/pokeApi.service';

interface IndexPageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IndexPageProps> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      <PokemonList pokemons={pokemons}/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); // your fetch function here
  const pokemons: SmallPokemon[] = listPokemons(data);
  return {
    props: {
      pokemons,
    }
  }
}

export default HomePage
