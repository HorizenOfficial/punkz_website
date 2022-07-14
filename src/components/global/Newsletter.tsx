import React from "react"
import { Button2 } from "./Button"
import { TextField } from "./Forms"
import { SectionContainer } from "./Layout"
import { H2 } from "./Typography"

const Newsletter = () => {
    return (
        <section>
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                    <div className="bg-punkz-blue-1 px-6 flex items-center justify-center text-center py-[26px] md:px-12 lg:pl-8 lg:pr-[40px] lg:text-right lg:py-0 lg:justify-end xl:pl-2">
                        <H2 className="text-punkz-black-1 lg:!text-[44px] lg:!leading-[initial]">
                            Subscribe for updates
                        </H2>
                    </div>
                    <div className="bg-punkz-pink-2 flex gap-[12px] flex-col px-6 py-[32px] md:flex-row  md:px-12 lg:pr-8 lg:pl-[40px] xl:pr-2">
                        <div className="w-full lg:max-w-[550px]">
                            <TextField value="Email Address" />
                        </div>
                        <Button2>Test</Button2>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Newsletter
