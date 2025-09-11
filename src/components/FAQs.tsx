"use client";

import React, { useState } from "react";
import { IoChevronDownCircleSharp } from "react-icons/io5";

function FAQs() {
    const [faq, setFaq] = useState<number | null>(null);
    const toggle = (i: number | null) => {
        if (faq === i) {
            return setFaq(null);
        }
        setFaq(i);
    };
    return (
        <div id="faq" className="flex flex-col items-center justify-center ">
            <div className="p-[50px_20px] lg:p-[50px] 2xl:container flex flex-col items-center justify-center">
                <p className="font-montserrat font-[600] text-[32px] lg:text-[52px] text-white">
                    Frequently Asked Questions
                </p>
                <div className="my-[30px] flex flex-col space-y-[20px] w-full lg:w-[60%]">
                    {items.map((item, i) => (
                        <div
                            key={item.q}
                            className={`${
                                faq === i
                                    ? "bg-[#2ED2520D]  border-[2px] border-[#FFFCAB]  p-[20px]"
                                    : "p-[15px_20px] bg-[#D9D9D90D]"
                            } rounded-[12px] `}
                        >
                            <div
                                onClick={() => toggle(i)}
                                className="cursor-pointer flex items-center justify-between"
                            >
                                <div className="font-inter font-[600] text-[20px] text-[#FFFFFF]">
                                    {item.q}
                                </div>
                                <div>
                                    <IoChevronDownCircleSharp
                                        className={`${
                                            faq === i
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }  text-[30px] text-secondary transition-all`}
                                    />
                                </div>
                            </div>
                            <div
                                className={`${
                                    faq === i ? "h-full mt-[20px]" : "h-0 p-0"
                                } overflow-hidden transition-all break-words font-montserrat text-[#FFFFFF] `}
                            >
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQs;

const items: any[] = [
    {
        q: "What is Matara?",
        a: "Matara is a new meme token inspired by positivity and bringing new users to the exciting world of Web3.",
    },
    {
        q: "Is Matara just another meme coin?",
        a: "Matara aims to be more than just a meme coin. While it has the lighthearted and fun aspects of meme tokens, Matara also has functionalities and a mission to onboard new users to Web3.",
    },
    {
        q: "What functionalities does Matara offer?",
        a: "Matara is being designed for functionalities like online tipping, social media engagement rewards, and potentially even play-to-earn games (subject to development).",
    },
    {
        q: "Is Matara available for purchase yet?",
        a: "The availability of Matara for purchase will depend on exchange listings and the project's roadmap. Stay updated through official Matara channels for announcements.",
    },
    {
        q: "How can I learn more about Matara?",
        a: "You can learn more about Matara by visiting the project's Gitbook and joining our official Telegram community.",
    },
    {
        q: "How can I join the Matara community?",
        a: "Join the Matara community by following them on X (formerly Twitter) engaging in conversations. You can also find links to the Community.",
    },
    {
        q: "Is there a community reward system?",
        a: "Matara may have plans for a community reward system in the future. Stay tuned for official announcements.",
    },
    {
        q: "What blockchain is Matara built on?",
        a: "Matara is built on Binance Smartchain, to provide faster transactions and lower fees.",
    },
    {
        q: "What is the tokenomics of Matara?",
        a: "The complete tokenomics of Matara will be available on the project's Gitbook",
    },
    {
        q: "Where can I store my Matara tokens?",
        a: " You can store your Matara tokens in a crypto wallet compatible with the BSC network e.g., MetaMask, Trust Wallet.",
    },
];
