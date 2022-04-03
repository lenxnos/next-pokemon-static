import React from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../intefaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, image, name, url } = pokemon;

  const router = useRouter();
  const handleClick = () => {
    router.push(`/name/${name}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} alt={name} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
