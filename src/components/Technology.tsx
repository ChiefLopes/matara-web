"use client";

import React from "react";
import MCoin from "@/assets/svg/mcoin.svg";
import SMCoin from "@/assets/svg/smcoin.svg";
import MatCoin from "@/assets/svg/matT.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NetImg } from "@/assets/svg";
import { motion } from "framer-motion";

function Technology() {
    const t = useTranslations("Index");

    return (
        <div
            id="technology"
            className="flex items-center justify-center overflow-hidden"
        >
            <div className="relative flex flex-col-reverse md:flex-row gap-[40px] items-center justify-between p-[50px_20px] md:p-[130px] 2xl:container overflow-hidden">
                {/* Left side - Text Content with smooth animations */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p
                        className="font-inter text-[32px] lg:text-[48px] font-[600] text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("techTitle")}
                    </motion.p>

                    <motion.p
                        className="font-montserrat text-[16px] lg:text-[20px] font-[400] text-[#DFDBDB]"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.1,
                            delay: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 90,
                            damping: 14,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("techSubtitle")}
                    </motion.p>

                    <motion.p
                        className="text-white font-semibold text-base md:text-xl mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 85,
                            damping: 13,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("techTitle2")}
                    </motion.p>

                    <motion.ul
                        className="list-disc pl-5 text-[#DFDBDB] text-[16px] lg:text-[20px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.8,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 75,
                            damping: 16,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.0,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {t("techSubtitle2.0")}
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.2,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {t("techSubtitle2.1")}
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.4,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {t("techSubtitle2.2")}
                        </motion.li>
                    </motion.ul>
                </motion.div>

                {/* Right side - Visual Content with coin animations */}
                <motion.div
                    className="flex-1 relative overflow-hidden"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "spring",
                        stiffness: 70,
                        damping: 18,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Animated blur background */}
                    <motion.div
                        className="bg-[#FFFFFF1A] h-[600px] w-[600px] rounded-full absolute right-[-50px] blur-3xl hidden lg:block pointer-events-none"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.6, 0.8, 0.6],
                        }}
                        transition={{
                            scale: {
                                duration: 8,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                            opacity: {
                                duration: 6,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                            default: {
                                duration: 1.8,
                                delay: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                            },
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                    />

                    <div className="relative flex items-center justify-center w-full h-full">
                        {/* Animated Background Network Image */}
                        <motion.div
                            className="relative w-full max-w-full"
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            animate={{
                                rotate: [0, 2, -1, 0],
                                scale: [1, 1.02, 0.98, 1],
                            }}
                            transition={{
                                rotate: {
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                scale: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                default: {
                                    duration: 1.4,
                                    delay: 0.3,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 15,
                                },
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <NetImg className="w-full h-auto max-w-full" />
                        </motion.div>

                        {/* Animated Centered Coin with complex movements - contained within parent */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{
                                y: [0, -15, 8, 0],
                                x: [0, 6, -4, 0],
                                rotate: [0, 4, -2, 0],
                                scale: [1, 1.03, 0.99, 1],
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                y: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                x: {
                                    duration: 9,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                rotate: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                scale: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                opacity: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeatType: "loop",
                                },
                                default: {
                                    duration: 1.6,
                                    delay: 0.6,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 12,
                                },
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <Image
                                src={MatCoin}
                                alt="MatCoin"
                                className="h-[250px] lg:h-[500px] w-auto object-contain max-w-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Technology;
