import React from "react"
import WhiteCheck from "../../global/Icon/WhiteCheck"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import { H2, Body1 } from "../../global/Typography"

const HomepageAirdrops: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const renderDates = (): JSX.Element[] => {
        const dates = [
            {
                text: "PKZ drop to 1st group of TZNY holders ",
                date: "July 18 2022",
            },
            {
                text: "PKZ drop to all TCAKE holders",
                date: "July 18 2022",
            },
            {
                text: "PKZ drop to 2nd group of TZNY holders",
                date: "July 20 2022",
            },
            {
                text: "PKZ drop to 3rd group of TZNY holders",
                date: "July 22 2022",
            },
        ]

        return dates.map((date) => {
            const isPastDate = new Date(date.date) < new Date()
            return (
                <div
                    className={`${
                        isPastDate ? "bg-punkz-pink-3" : "bg-punkz-black-1"
                    } grid grid-cols-[46px,1fr,46px] py-[19px] items-center`}
                    key={date.text}
                >
                    <div className="m-auto">
                        <WhiteCheck
                            className={`${isPastDate ? "block" : "hidden"} `}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-x-3">
                        <Body1 className="!font-bold !text-lg">
                            {date.text}
                        </Body1>

                        <Body1 className="!text-lg">{date.date}</Body1>
                    </div>
                </div>
            )
        })
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                    <div className="bg-punkz-dark-blue-1 py-10 lg:pt-[88px] lg:pr-[72px]">
                        <ContentContainer className="lg:!pr-0 lg:!mr-0 lg:text-right">
                            <div className="grid justify-items-start grid-cols-1 md:justify-items-start md:grid-cols-2 md:gap-x-3 md:items-center lg:grid-cols-1 item">
                                <H2 className="text-left !max-w-[320px] md:!text-[60px] md:!leading-[60px] lg:text-right lg:!text-[90px] lg:!leading-[80px] lg:ml-auto">
                                    Initial Airdrops
                                </H2>
                                <Body1 className="!text-punkz-blue-1 text-left text-lg md:!max-w-[320px] md:text-[22px] md:leading-[35px] md:text-left lg:text-right lg:mt-[40px] lg:ml-auto">
                                    TZNY and TCAKE holders as of July 5th
                                    00:00am EST will get a Punkz Token airdrop.
                                </Body1>
                            </div>
                        </ContentContainer>
                    </div>
                    <div className="bg-punkz-pink-2 pt-10 pb-12 lg:pt-[88px] lg:pl-[45px] lg:pb-[100px]">
                        <ContentContainer className="lg:!pl-0 lg:!ml-0 lg:!max-w-[730px]">
                            <div className="grid grid-cols-1 gap-y-10 justify-start md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                                <div>
                                    <Body1 className="!font-bold">AMOUNT</Body1>
                                    <Body1>
                                        PKZ : TZNY = 1 : 1<br /> PKZ : TCAKE =
                                        10 : 1
                                    </Body1>
                                </div>
                                <div>
                                    <Body1 className="!font-bold">
                                        AIRDROP SCHEDULE
                                    </Body1>
                                    <Body1>
                                        All TCAKE holders will receive an
                                        airdrop in one deployment.
                                    </Body1>
                                </div>

                                <Body1 className="md:col-span-2">
                                    The PKZ airdrop for TZNY holders will be
                                    deployed in four batches over the course of
                                    a week. TZNY holders will be randomly
                                    divided into four groups. Each group will
                                    receive an airdrop as scheduled below:
                                </Body1>

                                <div className="grid grid-cols-1 gap-y-[10px] md:col-span-2 auto-rows-fr">
                                    {renderDates()}
                                </div>
                            </div>
                        </ContentContainer>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageAirdrops
