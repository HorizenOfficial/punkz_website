import React from "react"
import WhiteCheck from "../../global/Icon/WhiteCheck"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import { H2 } from "../../global/Typography"
import Body1 from "../../global/Typography/Body1"

const HomepageAirdrops: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const renderDates = (): JSX.Element[] => {
        const elements: JSX.Element[] = []
        const dates = [
            {
                text: "PKZ drop to 1st group of TZNY holders ",
                date: "July 12 2022",
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

        dates.forEach((date) => {
            const isPastDate = new Date(date.date) < new Date()
            elements.push(
                <div
                    className={`${
                        isPastDate ? "bg-punkz-pink-3" : "bg-punkz-black-1"
                    } flex items-center h-[67px] px-[46px] relative`}
                    key={date.text}
                >
                    <WhiteCheck
                        className={`${
                            isPastDate ? "block" : "hidden"
                        } absolute left-0 inset-y-auto w-[20px] h-[14px] ml-[14px]`}
                    />

                    <Body1 className="!font-bold !text-[18px]">
                        {date.text}
                    </Body1>

                    <Body1 className="ml-auto !text-[18px]">{date.date}</Body1>
                </div>
            )
        })
        return elements
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                    <div className="bg-punkz-dark-blue-1 py-9 lg:pt-[88px] lg:pr-[72px]">
                        <ContentContainer className="lg:!pr-0 lg:!mr-0 lg:text-right">
                            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-start md:items-center lg:grid-cols-1 item">
                                <H2 className="md:!text-[60px] md:!leading-[60px] lg:!text-[90px] lg:!leading-[80px]">
                                    Initial Airdrops
                                </H2>
                                <Body1 className="text-punkz-blue-1 !max-w-[320px] lg:mt-[80px] ml-auto">
                                    TZNY and TCAKE holders as of July 5th
                                    00:00am EST will get a Punkz Token airdrop.
                                </Body1>
                            </div>
                        </ContentContainer>
                    </div>
                    <div className="bg-punkz-pink-2 pt-[88px] pl-[45px] pb-[100px]">
                        <ContentContainer className="!pl-0 lg:!max-w-[730px] !ml-0">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-12 justify-start">
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

                                <Body1 className="col-span-2">
                                    The PKZ airdrop for TZNY holders will be
                                    deployed in four batches over the course of
                                    a week. TZNY holders will be randomly
                                    divided into four groups. Each group will
                                    receive an airdrop as scheduled below:
                                </Body1>

                                <div className="flex flex-col gap-y-[10px] col-span-2">
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
