"use client";

import React from "react";
import { motion } from "framer-motion";

const roadmapData = [
  {
    key: "Quarter 3, 2025",
    title: "Launch and Organic Shilling",
    items: [
      "Launch Matara token ($MAT) on DEXs",
      "Initiate community-building",
      "Implement basic tokenomics and governance features",
      "Ramp up organic marketing efforts",
    ],
  },
  {
    key: "Quarter 4, 2025",
    title: "Intensified Marketing",
    items: [
      "Launch targeted marketing campaigns across various online platforms",
      "Collaborate with influencers and content creators to create engaging promotional content",
      "Explore partnerships with meme-related projects and platforms",
      "Expand the reach of Matara through strategic partnerships",
    ],
  },
  {
    key: "Quarter 1, 2026",
    title: "Airdrop Campaign and Developments",
    items: [
      "Conduct an airdrop campaign to distribute MAT tokens",
      "Launch development initiatives to enhance the functionality and utility of Matara",
    ],
  },
  {
    key: "Quarter 2, 2026",
    title: "Intensified Marketing",
    items: [
      "Development of the Matara App Marketplace, leveraging the creativity of the community and highlighting the story and characters behind the Matara project",
    ],
  },
];

function RoadMap() {
  return (
    <motion.div
      id="blog"
      className="bg-primary flex flex-col items-center justify-center mt-[40px] p-[50px_20px] lg:p-[50px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* section header start */}
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
        Roadmap
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
        Track our progress and upcoming milestones
      </motion.p>
      {/* section header end */}

      {/* roadmap content start */}
      <div className="w-full mt-12 flex flex-col items-center">
        {roadmapData.map((card, idx) => {
          const isRight = idx % 2 === 0; // even -> right-side strokes, odd -> left-side strokes
          const gradId = `roadmapStrokeGrad-${idx}`;
          const maskId = isRight
            ? `halfMask-right-${idx}`
            : `halfMask-left-${idx}`;

          return (
            <div
              key={card.key}
              className="relative w-[500px] rounded-[16px] overflow-hidden"
              style={{ marginTop: idx === 0 ? "0px" : "-3px" }}
            >
              {/* background */}
              <div
                className={`absolute inset-0 ${
                  isRight ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-[#FFFCAB] to-[#0D192100] opacity-[0.07] rounded-[16px]`}
              ></div>

              {/* SVG stroke with gradient and dashed pattern, masked to half side */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 300"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id={gradId}
                    x1={isRight ? "0%" : "100%"}
                    y1="0%"
                    x2={isRight ? "100%" : "0%"}
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FFFCAB" stopOpacity="0" />
                    <stop offset="60%" stopColor="#FFFCAB" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FFFCAB" stopOpacity="0.6" />
                  </linearGradient>
                  <mask id={maskId}>
                    {/* mask shows only the desired half */}
                    <rect
                      x={isRight ? "50%" : "0"}
                      y="0"
                      width="50%"
                      height="100%"
                      fill="white"
                    />
                  </mask>
                </defs>

                <rect
                  x="1"
                  y="1"
                  rx="16"
                  ry="16"
                  width="498"
                  height="298"
                  fill="none"
                  stroke={`url(#${gradId})`}
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  mask={`url(#${maskId})`}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* content */}
              <div className="relative z-10 p-8 min-h-[180px]">
                <p className="text-secondary text-[18px] font-montserrat mb-4">
                  {card.key}
                </p>
                <h3 className="text-white text-2xl lg:text-3xl font-[700] mb-4">
                  {card.title}
                </h3>
                <ul className="mt-2 space-y-4 text-gray-300">
                  {card.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-2 h-2 mt-2 rounded-full bg-secondary block flex-shrink-0"></span>
                      <span className="leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      {/* roadmap content end */}
    </motion.div>
  );
}

export default RoadMap;
