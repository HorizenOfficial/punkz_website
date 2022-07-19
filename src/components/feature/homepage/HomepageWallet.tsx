import React from "react"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import walletImg from "../../../assets/images/cobalt-wallet.png"
import { H2, Body1 } from "../../global/Typography"
import { ButtonPrimary } from "../../global/Button"

const HomepageWallet: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="get-started">
            <SectionContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-16">
                    <img
                        src={walletImg}
                        alt="cobalt wallet"
                        className="hidden md:w-full md:block md:max-h-[700px] md:object-contain"
                    />
                    <ContentContainer className="md:!pl-0 md:mt-[60px] lg:mt-[130px] w-full">
                        <H2>Wallet</H2>

                        <Body1 className="mt-[40px] max-w-[616px]">
                            You need a wallet to store and manage your Punkz
                            token. Currently, only Cobalt Wallet supports Punkz.
                        </Body1>

                        <img
                            src={walletImg}
                            alt="cobalt wallet"
                            className="block md:hidden w-full max-h-[300px] object-contain"
                        />

                        <a
                            href="https://chrome.google.com/webstore/detail/cobalt/hekbjgfncacdinlajhgiakpaieajpfph"
                            target="_blank"
                            rel="noreferrer"
                            className="block md:max-w-[343px] mt-[10px] md:mt-[40px]"
                        >
                            <ButtonPrimary>Download Cobalt</ButtonPrimary>
                        </a>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageWallet
