import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

const DEFAULT_TITLE = "Pokemon App";

type LayoutProps = {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || DEFAULT_TITLE}</title>
        <meta name="author" content="Nelson Soto, @lenxnos" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      {/* Navbar */}
      <Navbar />
      <main style={{
        padding: '0px 20px',
      }}>
        {children}
      </main>
    </>
  )
}
