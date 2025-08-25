"use client";

import mtthumb from "@/assets/svg/mtthumb.svg";
import jthumb from "@/assets/svg/jthumb.svg";
import lthumb from "@/assets/svg/lthumb.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function Blog() {
  const blogData = [
    {
      img: mtthumb,
      tag: "Blog",
      title: "Introducing Matara",
      desc: "Matara is the leader of the future where its followers...",
    },
    {
      img: lthumb,
      tag: "Announcement",
      title: "Introducing Matara",
      desc: "Matara is the leader of the future where its followers.",
    },
    {
      img: jthumb,
      tag: "Blog",
      title: "Introducing Matara",
      desc: "Matara is the leader of the future where its followers.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateX: 45,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="bg-primary flex flex-col items-center justify-center mt-[40px] p-[50px_20px] lg:p-[50px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}>
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
        viewport={{ once: true, amount: 0.5 }}>
        Blog
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
        viewport={{ once: true, amount: 0.5 }}>
        Stay updated with the latest news and articles on purpose-driven{" "}
        <br className="hidden lg:block" /> living, blockchain technology, and
        community empowerment.
      </motion.p>

      <motion.div
        className="mt-[40px] grid min-h-[380px] md:grid-cols-3 gap-[40px] text-white w-full lg:w-[75%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: "1000px" }}>
        {blogData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#D9D9D90A] bcard p-[15px] hover:shadow-[0_0_20px_4px_rgba(255,0,128,0.4)] rounded-[10px] transition"
            variants={cardVariants}
            whileHover={{
              y: -8,
              rotateY: 5,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(255,0,128,0.3)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.98,
              rotateY: 0,
              transition: { duration: 0.2 },
            }}
            animate={{
              rotateY: [0, 1, -1, 0],
              y: [0, -3, 2, 0],
            }}
            transition={{
              rotateY: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                repeatType: "loop",
              },
              y: {
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                repeatType: "loop",
                delay: i * 0.5,
              },
            }}>
            <motion.div
              className="h-[250px] overflow-hidden w-full border rounded-[10px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 0.5, -0.5, 0],
                }}
                transition={{
                  scale: {
                    duration: 5 + i * 1,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                    repeatType: "loop",
                  },
                  rotate: {
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                    repeatType: "loop",
                  },
                }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-[20px] space-y-[8px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.5 }}>
              <motion.p
                className="text-secondary font-inter text-[16px]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                  repeatType: "loop",
                }}>
                {item.tag}
              </motion.p>
              <motion.p
                className="text-white font-montserrat font-[600] text-[20px]"
                animate={{
                  scale: [1, 1.01, 1],
                  x: [0, 1, -1, 0],
                }}
                transition={{
                  scale: {
                    duration: 7 + i * 1,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                    repeatType: "loop",
                  },
                  x: {
                    duration: 9 + i * 1.5,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                    repeatType: "loop",
                  },
                }}>
                {item.title}
              </motion.p>
              <motion.p
                className="text-[#DFDBDB] font-montserrat font-[400] text-[16px] leading-[21px]"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{
                  duration: 6 + i * 0.8,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                  repeatType: "loop",
                  delay: i * 0.3,
                }}>
                {item.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Blog;
