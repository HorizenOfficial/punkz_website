import React from "react"
import { Helmet } from "react-helmet"
import metaImg from "../../../assets/images/metadata.jpeg"

const HomepageHelmet = () => {
    return (
        <Helmet>
            <title>
                Punkz Token (PKZ) - Cypherpunks&apos; favorite meme token
            </title>
            <meta
                property="og:title"
                content="Punkz Token (PKZ) - Cypherpunks' favorite meme token"
            />
            <meta
                name="twitter:title"
                content="Punkz Token (PKZ) - Cypherpunks' favorite meme token"
            />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Punkz Token is a meme token for all cypherpunk rockstars in the galaxy. It’s a fungible token that lives on TokenMint Chain, which is a sidechain on Horizen"
            />
            <meta
                property="og:description"
                content="Punkz Token is a meme token for all cypherpunk rockstars in the galaxy. It’s a fungible token that lives on TokenMint Chain, which is a sidechain on Horizen"
            />
            <meta
                name="twitter:description"
                content="Punkz Token is a meme token for all cypherpunk rockstars in the galaxy. It’s a fungible token that lives on TokenMint Chain, which is a sidechain on Horizen"
            />
            <meta property="og:image" content={metaImg} />
            <meta name="twitter:image" content={metaImg} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href="https://punkztoken.com/" />
            <meta property="og:url" content="https://punkztoken.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Punkz Token" />
        </Helmet>
    )
}

export default HomepageHelmet
