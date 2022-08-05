import React from "react"
import WhiteCheck from "../../global/Icon/WhiteCheck"
import { H2, Body1 } from "../../global/Typography"

const HomepageAirdrops: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const renderDates = (): JSX.Element[] => {
        const dates = [
            // {
            //     text: "PKZ drop to 1st group of TZNY holders",
            //     date: "Aug 8 2022",
            //     millis: 1659981600000,
            // },
            // {
            //     text: "PKZ drop to all TCAKE holders",
            //     date: "Aug 8 2022",
            //     millis: 1659981600000,
            // },
            // {
            //     text: "PKZ drop to 2nd group of TZNY holders",
            //     date: "Aug 10 2022",
            //     millis: 1660154400000,
            // },
            // {
            //     text: "PKZ drop to 3rd group of TZNY holders",
            //     date: "Aug 10 2022",
            //     millis: 1660154400000,
            // },
            {
                text: "PKZ drop to 1st group of TZNY holders",
                date: "Coming Soon",
                millis: 1691155883000,
            },
            {
                text: "PKZ drop to all TCAKE holders",
                date: "Coming Soon",
                millis: 1691155883000,
            },
            {
                text: "PKZ drop to 2nd group of TZNY holders",
                date: "Coming Soon",
                millis: 1691155883000,
            },
            {
                text: "PKZ drop to 3rd group of TZNY holders",
                date: "Coming Soon",
                millis: 1691155883000,
            },
        ]

        return dates.map((date) => {
            const isPastDate = new Date(date.millis) < new Date()
            return (
                <div
                    className={`${
                        isPastDate ? "bg-primary" : "bg-black"
                    } grid grid-cols-[46px,1fr,46px] py-[19px] items-center`}
                    key={date.text}
                >
                    <div className="m-auto">
                        <WhiteCheck
                            className={`${isPastDate ? "block" : "hidden"} `}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-x-3">
                        <Body1 className="font-bold text-lg">{date.text}</Body1>
                        <Body1 className="text-lg">{date.date}</Body1>
                    </div>
                </div>
            )
        })
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="airdrops">
            <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                <div className="bg-secondary-dark py-10 px-6 md:px-12 lg:pl-8 lg:pt-[88px] lg:pr-[72px] lg:text-right">
                    <div className="grid justify-items-start grid-cols-1 md:justify-items-start md:grid-cols-2 md:gap-x-3 md:items-center lg:grid-cols-1 item">
                        <H2 className="text-left max-w-[320px] lg:text-right lg:ml-auto">
                            Initial Airdrops
                        </H2>
                        <Body1 className="text-secondary text-left mt-5 md:mt-0 md:max-w-[320px] md:text-left lg:text-right lg:mt-[40px] lg:ml-auto">
                            TZNY and TCAKE holders as of July 5th 00:00am EST
                            will get a Punkz Token airdrop.
                        </Body1>
                    </div>
                </div>
                <div className="bg-primary-light px-6 pt-10 pb-12 md:px-12 lg:pt-[88px] lg:pr-8 lg:pl-[45px] lg:pb-[100px]">
                    <div className="grid grid-cols-1 gap-y-10 justify-start md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:max-w-[730px]">
                        <div>
                            <Body1 className="font-bold">AMOUNT</Body1>
                            <Body1>
                                PKZ : TZNY = 1 : 1<br /> PKZ : TCAKE = 10 : 1
                            </Body1>
                        </div>
                        <div>
                            <Body1 className="font-bold">
                                AIRDROP SCHEDULE
                            </Body1>
                            <Body1>
                                All TCAKE holders will receive an airdrop in one
                                deployment.
                            </Body1>
                        </div>

                        <Body1 className="md:col-span-2">
                            The PKZ airdrop for TZNY holders will be deployed in
                            four batches over the course of a week. TZNY holders
                            will be randomly divided into four groups. Each
                            group will receive an airdrop as scheduled below:
                        </Body1>

                        <div className="grid grid-cols-1 gap-y-[10px] md:col-span-2 auto-rows-fr">
                            {renderDates()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageAirdrops
