"use client";

import Image from "next/image";
import MABout from "@/assets/svg/mabout.svg";
import SMABout from "@/assets/svg/smabout.svg";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function About() {
    const t = useTranslations("Index");

    return (
        <motion.div
            id="about"
            className="bg-[#D9D9D90F] flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="flex flex-col md:flex-row gap-[40px] lg:gap-0 items-center p-[50px_20px] md:p-[50px] 2xl:container">
                {/* Left side - Image with smooth animations */}
                <motion.div
                    className="w-full md:w-[40%] flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, y: -80, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.4,
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Large screen image with complex animations */}
                    <motion.div
                        className="hidden lg:flex"
                        animate={{
                            y: [0, -18, 12, 0],
                            x: [0, 8, -6, 0],
                            rotate: [0, 3, -2, 0],
                            scale: [1, 1.03, 0.98, 1],
                        }}
                        transition={{
                            y: {
                                duration: 8,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                            x: {
                                duration: 10,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                            rotate: {
                                duration: 12,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                            scale: {
                                duration: 7,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                        }}
                    >
                        <Image
                            src={MABout}
                            alt=""
                            className="w-full h-auto max-w-full object-contain"
                        />
                    </motion.div>

                    {/* Small screen image with subtle animations */}
                    <motion.div
                        className="lg:hidden"
                        animate={{
                            y: [0, -12, 8, 0],
                            scale: [1, 1.02, 0.99, 1],
                            opacity: [1, 0.9, 1],
                        }}
                        transition={{
                            y: {
                                duration: 6,
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
                            opacity: {
                                duration: 4,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop",
                            },
                        }}
                    >
                        <Image
                            src={SMABout}
                            alt=""
                            className="w-full h-auto max-w-full object-contain"
                        />
                    </motion.div>
                </motion.div>

                {/* Right side - Text content with staggered animations */}
                <motion.div
                    className="text-white flex-1 w-full md:w-[60%] h-full"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.3,
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p
                        className="font-inter text-[32px] lg:text-[52px] font-[600] text-white"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.1,
                            delay: 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 90,
                            damping: 12,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("aboutTitle")}
                    </motion.p>

                    <motion.p
                        className="font-montserrat text-[16px] lg:text-[24px] font-[400] text-[#DFDBDB]"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 85,
                            damping: 14,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {t("aboutSubtitle")}
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;
