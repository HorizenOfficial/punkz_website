import React from "react"

interface ButtonLink {
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"]
    href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"]
    rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>["rel"]
}

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    ButtonLink

export { ButtonProps, ButtonLink }
