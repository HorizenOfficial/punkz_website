import React from "react"

const ContentContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="px-6 md:px-12 lg:px-8 xl:px-2 max-w-screen-lg mx-auto">
            {children}
        </div>
    )
}

export default ContentContainer
