import React from "react"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import { H2, Body1 } from "../../global/Typography"
import punkzImg from "../../../assets/images/punkz-head.png"

const HomepagePunkZToken: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <SectionContainer>
                <ContentContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr] pt-10 md:pt-[85px] lg:pt-[104px]">
                        <div>
                            <H2 className="relative max-w-[700px] lg:max-w-[200px] lg:ml-auto lg:mr-[72px] z-10">
                                <img
                                    src={punkzImg}
                                    alt="PunkZ icon"
                                    className="hidden lg:block lg:absolute lg:z-0 lg:-top-[40px] lg:-left-[40px] lg:-translate-x-1/2 lg:-translate-y-1/2"
                                />
                                <span className="relative order-1">
                                    About Punkz Token
                                </span>
                            </H2>
                        </div>
                        <Body1 className="mt-10 lg:mt-0 lg:max-w-[652px]">
                            Punkz is the first meme token created on the Horizen
                            network. It lives on the TokenMint Chain, which is a
                            sidechain built on Horizen.
                            <br />
                            <br />
                            Punkz are cypherpunk rockstars. They are believers
                            of freedom and disruptive tech.
                        </Body1>
                    </div>
                </ContentContainer>
            </SectionContainer>
        </section>
    )
}

export default HomepagePunkZToken
