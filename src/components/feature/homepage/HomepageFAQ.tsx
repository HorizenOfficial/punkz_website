import React from "react"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import { Body1, H2 } from "../../global/Typography"

const HomepageFAQ: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const renderFAQItems = (): JSX.Element[] => {
        const faqs = [
            {
                question: "How do I get Punkz?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru.",
            },
            {
                question: "How do I get Punkz?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru.",
            },
            {
                question: "How do I get Punkz?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru.",
            },
        ]

        return faqs.map((faq) => (
            <div key={faq.answer}>
                <Body1 className="font-bold">{faq.question}</Body1>
                <p className="font-proxima font-medium text-[18px] leading-[35px] text-gray mt-[20px]">
                    {faq.answer}
                </p>
            </div>
        ))
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <SectionContainer>
                <div className="bg-secondary-dark py-[73px] lg:py-[104px]">
                    <ContentContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                            <H2 className="text-left lg:text-right lg:mr-[72px]">
                                FAQ
                            </H2>
                            <div className="flex flex-col gap-y-[40px] mt-[20px] lg:gap-y-[60px] lg:mt-0">
                                {renderFAQItems()}
                            </div>
                        </div>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageFAQ
