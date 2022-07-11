import React from "react"
import Logo from "./Icon/Logo"
import { ContentContainer } from "./Layout/index"

const Header = () => {
    return (
        <header className="bg-punkz-black-1">
            <hr className="border-t-[8px] border-punkz-pink-1" />
            <ContentContainer>
                <div>
                    <a
                        href="/"
                        className="mx-auto py-[20px] flex justify-center lg:py-[40px]"
                    >
                        <Logo className="max-w-[80px] lg:max-w-[130px]" />
                    </a>
                </div>
            </ContentContainer>
        </header>
    )
}

export default Header
