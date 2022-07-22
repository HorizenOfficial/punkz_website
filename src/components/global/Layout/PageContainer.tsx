import React from "react"
import { Helmet } from "react-helmet"
import { twMerge } from "tailwind-merge"

const PageContainer: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, children, ...props }) => {
    return (
        <main
            className={twMerge(
                "bg-black h-[100vh] overflow-x-hidden",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
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
