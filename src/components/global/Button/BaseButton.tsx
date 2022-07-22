import React from "react"
import { ButtonProps, ButtonLink } from "./types"

const openPage = (parms: ButtonLink) => {
    window.open(parms.href, parms.target, parms.rel)
}

const BaseButton: React.FC<ButtonProps> = ({
    children,
    href,
    rel = "noreferrer",
    target = "_blank",
    ...props
}) => {
    return (
        <button
            type="button"
            onClick={href ? () => openPage({ href, rel, target }) : undefined}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    )
}

export default BaseButton
