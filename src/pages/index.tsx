import React from "react"
import { Button1 } from "../components/global/Button"
import { ContentContainer } from "../components/global/Layout"
import { H1 } from "../components/global/Typography"

const Index = () => {
    return (
        <main>
            <ContentContainer>
                <H1 className="text-3xl font-bold underline text-[green]">
                    Hello world hey!
                </H1>
                <Button1>Test</Button1>
            </ContentContainer>
        </main>
    )
}

export default Index
