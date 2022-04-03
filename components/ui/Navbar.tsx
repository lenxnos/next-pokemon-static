import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import { FC } from 'react';

const IMAGE_APP = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png';

export const Navbar: FC = () => {

  const { theme } = useTheme();
  
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <Image src={IMAGE_APP} alt="Icono de la app" width={70} height={70} />
      <NextLink href="/" passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
      
    </div>
  )
}
