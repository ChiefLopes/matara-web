import React from "react";
import book from "@/assets/svg/mbookk.svg";
import social from "@/assets/svg/msocial.svg";
import comm from "@/assets/svg/mcom.svg";
import Image from "next/image";
function UseCases() {
    const cardData = [
        {
            title: "Utility Token",
            subtitle:
                "$MARS token will be the token that powers the Matara Mini App.",
            img: book,
        },
        {
            title: "Staking",
            subtitle:
                "$MARS holders will be able to stake their tokens to earn more from our staking pool.",
            img: social,
        },
        {
            title: "Governance",
            subtitle:
                "Holders of $MARS will be able to make decision for the growth of the ecosystem via governance.",
            img: comm,
        },
    ];

    return (
        <div className="mt-[50px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center 2xl:container p-[50px_20px] md:p-[50px]">
                <p className="font-montserrat font-[600] text-[32px] lg:text-[52px] text-white">
                    Use Cases
                </p>
                <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
                    Matara is empowering individuals to live purposeful lives
                    through
                    <br className="hidden lg:block" /> real-world examples and
                    case studies in making a difference in the world.
                </p>

                <div className="mt-[40px] grid min-h-[380px] md:grid-cols-3 gap-[40px] text-white w-full lg:w-[80%] 3xl:w-[60%]">
                    {cardData.map((card, i) => (
                        <div
                            key={i}
                            className="use border-[2px] border-[#FFFFFF80] rounded-[10px] p-[20px_10px] flex flex-col items-center justify-center space-y-[20px]"
                        >
                            <div className="h-[90px] w-[90px] bg-secondary rounded-full items-center justify-center flex shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.7)]  animate-pulse ">
                                <Image src={card.img} alt={card.title} />
                            </div>
                            <p className="font-[600] font-montserrat text-white text-[20px]">
                                {card.title}
                            </p>
                            <p className="px-[10px] text-[20px] font-montserrat text-white text-center">
                                {card.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex mt-[80px] flex-col items-center justify-center">
                    <p className="font-montserrat font-[600] text-[32px] lg:text-[52px] text-white text-center">
                        What Matara Offers
                    </p>
                    <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center md:max-w-5xl">
                        Being a holder of $MARS token gives you access to a
                        range of opportunities and leverages within the Matara
                        ecosystem. Join the Martian army and grow in the tribe!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UseCases;
