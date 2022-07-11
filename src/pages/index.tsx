import React from "react"
import comingSoonImg from "../assets/images/coming-soon.png"

const Index = () => {
    return (
        <main
            className="bg-contain bg-center bg-no-repeat bg-black h-[100vh] w-[100vw]"
            style={{ backgroundImage: `url(${comingSoonImg})` }}
        />
    )
}

export default Index
