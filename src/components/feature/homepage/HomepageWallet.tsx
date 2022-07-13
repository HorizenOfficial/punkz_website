import React from "react"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import walletImg from "../../../assets/images/cobalt-wallet.png"
import { H2 } from "../../global/Typography"
import Body1 from "../../global/Typography/Body1"
import Button1 from "../../global/Button/Button1"

const HomepageWallet: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-16">
                    <img
                        src={walletImg}
                        alt="cobalt wallet"
                        className="order-2 w-full lg:pb-[60px] xl:pb-0"
                    />
                    <ContentContainer className="order-1 lg:order-2 md:mt-[50px] lg:!pl-0 lg:mt-[130px] w-full">
                        <H2>Wallet</H2>

                        <Body1 className="mt-[40px] max-w-[616px]">
                            You need a wallet to store and manage your Punkz
                            token. Currently, only Cobalt Wallet supports Punkz.
                        </Body1>
                        <a
                            href="https://chrome.google.com/webstore/detail/cobalt/hekbjgfncacdinlajhgiakpaieajpfph"
                            target="_blank"
                            rel="noreferrer"
                            className="block max-w-[343px]"
                        >
                            <Button1 className="mt-[40px]">
                                Download Cobalt
                            </Button1>
                        </a>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageWallet
