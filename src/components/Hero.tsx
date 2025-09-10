"use client";
import React from "react";
import Image from "next/image";
import pose from "@/assets/svg/mpose.svg"; // hero image
import mbg from "@/assets/svg/mherobg.svg"; // background
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function Hero() {
    const t = useTranslations("Index");

    return (
        <section id="/" className="relative bg-[primary] overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between min-h-screen">
                {/* Left side (text) */}
                <div className="w-full lg:w- text-center lg:text-left mt-5">
                    <motion.h1
                        className="text-[32px] lg:text-[58px] font-bold leading-tight gtext"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        {t("heroTitle")}
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-[18px] lg:text-[22px] text-gray-200"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            delay: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 80,
                            damping: 12,
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        {t("heroSubtitle")}
                    </motion.p>

                    <a
                        href="https://dexscreener.com/bsc/0x494fa2a89376d23bd7ba5938ef3d1d126422d2b1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            className="my-8 z-20 inline-block gbtn rounded-lg px-8 py-3 text-lg font-semibold text-[#10100B]"
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.3,
                                    ease: [0.25, 0.1, 0.25, 1],
                                },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    duration: 0.2,
                                    ease: [0.25, 0.1, 0.25, 1],
                                },
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.25, 0.1, 0.25, 1],
                                type: "spring",
                                stiffness: 120,
                                damping: 14,
                            }}
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            {t("heroButton")}
                        </motion.button>
                    </a>
                </div>

                {/* Right side (big image with swinging and breathing animation) */}
                <motion.div
                    className="relative w-full lg:w flex justify-center lg:justify-end z-20"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{
                        rotate: [-2, 2, -2],
                        y: [0, -15, 0],
                        x: [0, 8, -8, 0],
                        opacity: [1, 0.75, 1],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 6,
                            repeat: Infinity,
                            ease: [0.45, 0, 0.55, 1],
                            repeatType: "loop",
                        },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: [0.45, 0, 0.55, 1],
                            repeatType: "loop",
                        },
                        x: {
                            duration: 7,
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
                        scale: {
                            duration: 5,
                            repeat: Infinity,
                            ease: [0.45, 0, 0.55, 1],
                            repeatType: "loop",
                        },
                        default: {
                            duration: 1.5,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                        },
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Image
                        src={pose}
                        alt="pose"
                        className="w-[85%] lg:w-[120%] max-w-[1200px] h-auto object-contain z-20"
                        priority
                    />
                </motion.div>
            </div>

            {/* Background Image with gentle swinging movement */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                    x: [0, 15, -10, 0],
                    rotate: [0, 0.5, -0.5, 0],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    x: {
                        duration: 12,
                        repeat: Infinity,
                        ease: [0.45, 0, 0.55, 1],
                        repeatType: "loop",
                    },
                    rotate: {
                        duration: 18,
                        repeat: Infinity,
                        ease: [0.45, 0, 0.55, 1],
                        repeatType: "loop",
                    },
                    opacity: {
                        duration: 15,
                        repeat: Infinity,
                        ease: [0.45, 0, 0.55, 1],
                        repeatType: "loop",
                    },
                    default: {
                        duration: 1.8,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.3,
                    },
                }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Image src={mbg} alt="background" priority />
            </motion.div>
        </section>
    );
}

export default Hero;
