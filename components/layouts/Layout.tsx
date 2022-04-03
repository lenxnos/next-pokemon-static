import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

const DEFAULT_TITLE = "Pokemon App";

type LayoutProps = {
  title?: string;
}

const origin = (typeof window !== "undefined" && window.location.origin) || "";

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || DEFAULT_TITLE}</title>
        <meta name="author" content="Nelson Soto, @lenxnos" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre el pokémon ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
