import React from "react"
import { Helmet } from "react-helmet"

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <main className="mx-auto max-w-screen-3xl 3xl:max-w-screen-2xl overflow-x-hidden">
            <Helmet>
                <link
                    rel="preload"
                    as="style"
                    href="https://use.typekit.net/elr1akh.css"
                />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/elr1akh.css"
                />
            </Helmet>
            {children}
        </main>
    )
}

export default PageContainer
