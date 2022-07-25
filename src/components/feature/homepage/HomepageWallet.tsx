import React from "react"
import walletImg from "../../../assets/images/cobalt-wallet.png"
import { H2, Body1 } from "../../global/Typography"
import { ButtonPrimary } from "../../global/Button"

const HomepageWallet: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="get-started">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-16">
                <img
                    src={walletImg}
                    alt="cobalt wallet"
                    className="hidden md:w-full md:block md:max-h-[700px] md:object-contain"
                />
                <div className="px-6 md:px-12 md:pl-0 md:mt-[60px] lg:mt-[130px] w-full">
                    <H2>Wallet</H2>

                    <Body1 className="mt-[40px] max-w-[616px]">
                        You need a wallet to store and manage your Punkz token.
                        Currently, only Cobalt Wallet supports Punkz.
                    </Body1>

                    <img
                        src={walletImg}
                        alt="cobalt wallet"
                        className="block md:hidden w-full max-h-[300px] object-contain"
                    />
                    <ButtonPrimary
                        href="https://chrome.google.com/webstore/detail/cobalt/hekbjgfncacdinlajhgiakpaieajpfph"
                        className="block mt-[10px] md:mt-[40px]"
                    >
                        Download Cobalt
                    </ButtonPrimary>
                </div>
            </div>
        </section>
    )
}

export default HomepageWallet
