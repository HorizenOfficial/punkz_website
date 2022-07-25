import React from "react"
import Logo from "./Icon/Logo"
import LogoSmall from "./Icon/LogoSmall"

const Header = () => {
    return (
        <header className="relative z-10">
            <hr className="hidden lg:block border-t-[8px] border-primary-light" />
            <div className="h-[80px] lg:h-[160px] flex justify-center items-center">
                <a href="/" className="mx-auto flex justify-center">
                    <Logo className="hidden lg:block max-w-[80px] lg:max-w-[130px]" />
                    <LogoSmall className="block lg:hidden" />
                </a>
            </div>
        </header>
    )
}

export default Header
