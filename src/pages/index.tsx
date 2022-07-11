import React from "react"
import comingSoonImg from "../assets/images/coming-soon.png"
import Header from "../components/global/Header"

const Index = () => {
    return (
        <main
            className="bg-contain bg-center bg-no-repeat bg-black h-[100vh] w-[100vw]"
            style={{ backgroundImage: `url(${comingSoonImg})` }}
        >
            <Header />
        </main>
    )
}

export default Index
