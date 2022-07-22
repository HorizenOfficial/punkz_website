import React, { useState } from "react"
import NewsletterForm from "./Forms/NewsletterForm"
import { SectionContainer } from "./Layout"
import { Body1, H2 } from "./Typography"

const Newsletter = () => {
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)

    return (
        <section>
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                    <div className="bg-punkz-blue-1 px-6 flex items-center justify-center text-center py-[26px] md:px-12 lg:pl-8 lg:pr-[40px] lg:text-right lg:py-0 lg:justify-end xl:pl-2">
                        <H2 className="text-punkz-black-1 lg:text-[44px] lg:leading-[initial]">
                            Subscribe for updates
                        </H2>
                    </div>
                    <div className="bg-punkz-pink-2 px-6 py-[32px] md:px-12 lg:pr-8 lg:pl-[40px] xl:pr-2">
                        {showSuccessMsg ? (
                            <div className="flex justify-center items-center h-[116px] md:h-[52px]">
                                <Body1 className="text-punkz-blue-1 font-bold">
                                    Thank you for subscribing!
                                </Body1>
                            </div>
                        ) : (
                            <NewsletterForm onSubmit={setShowSuccessMsg} />
                        )}
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Newsletter
