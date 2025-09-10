"use client";

import Image from "next/image";
import React, { useState } from "react";
import mtoken from "@/assets/svg/mobiletoken.svg";
import tokenomicsDisplay from "@/assets/svg/tokenomics-display.svg";
import { motion } from "framer-motion";

function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x6844B2e9afB002d188A072A3ef0FBb068650F214";
  const truncatedAddress = `${contractAddress.slice(
    0,
    6
  )}...${contractAddress.slice(-4)}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = contractAddress;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      id="blog"
      className="bg-primary flex flex-col items-center justify-center mt-[40px] p-[50px_20px] lg:p-[50px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.p
        className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white"
        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Tokenomics
      </motion.p>

      <motion.p
        className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center"
        initial={{ opacity: 0, y: 30, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 70,
          damping: 14,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Initial Token Supply: 1 billion $MARS tokens
      </motion.p>

      <div id="tokenomics" className="container p-[50px_20px] md:p-[50px]">
        <div className="w-full flex items-center justify-center">
          {/* Desktop: image with absolute overlay button (top-right) */}
          <div className="relative hidden lg:block">
            <Image src={tokenomicsDisplay} className="block" alt="" />

            <div className="absolute top-4 right-4">
              <div className="relative">
                <button
                  onClick={copyToClipboard}
                  className="bg-white/10 text-white px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors min-w-[280px]"
                  title={contractAddress}
                >
                  <span className="font-montserrat text-sm whitespace-nowrap">
                    Token Contract
                  </span>
                  <span className="font-mono text-sm">{truncatedAddress}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="m4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </button>

                {copied && (
                  <div className="absolute -top-10 right-0 bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow-md">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile: centered button above the mobile image */}
          <div className="flex flex-col items-center lg:hidden">
            <div className="mb-4 w-full max-w-sm relative">
              <button
                onClick={copyToClipboard}
                className="bg-white/10 text-white px-3 py-3 rounded-md backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors w-full"
                title={contractAddress}
              >
                <span className="font-montserrat text-sm whitespace-nowrap">
                  Token Contract
                </span>
                <span className="font-mono text-sm">{truncatedAddress}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="m4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>

              {copied && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-md shadow-lg z-10">
                  Copied!
                </div>
              )}
            </div>

            <Image src={mtoken} className="block" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Tokenomics;
