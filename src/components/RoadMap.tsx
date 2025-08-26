"use client";

import Image from "next/image";
import React from "react";
import roadmap from "@/assets/svg/mroad.svg";
import { motion } from "framer-motion";

function RoadMap() {
  return (
      <motion.div 
          id="roadmap"
      className="container p-[50px_20px] md:p-[50px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 70,
        damping: 16,
      }}
      viewport={{ once: true, amount: 0.2 }}>
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 90,
          damping: 12,
        }}
        viewport={{ once: true, amount: 0.5 }}>
        Roadmap
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 85,
          damping: 14,
        }}
        viewport={{ once: true, amount: 0.5 }}>
        Track our progress and upcoming milestones
      </motion.p>

      <motion.div
        className="w-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        viewport={{ once: true, amount: 0.3 }}>
        <motion.div
          animate={{
            y: [0, -12, 8, 0],
            x: [0, 5, -3, 0],
            scale: [1, 1.02, 0.99, 1],
            rotate: [0, 1, -0.5, 0],
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
            scale: {
              duration: 6,
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
          }}>
          <Image
            src={roadmap}
            alt=""
            className="w-full h-auto max-w-full object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default RoadMap;
