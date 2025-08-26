"use client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SlGlobe } from "react-icons/sl";
import { FaDiscord } from "react-icons/fa";
import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";

function Footer() {
  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "#about" },
    { title: "Technology", href: "#technology" },
    { title: "Tokenomics", href: "#tokenomics" },
    { title: "Roadmap", href: "#roadmap" },
    { title: "Blog", href: "#blog" },
    { title: "faq", href: "#faq" },
  ];

  const socials = [
    {
      name: "Twitter",
      href: "https://x.com/captainmatara",
      icon: FaXTwitter,
      desc: "Follow @Mataratoken to get the latest news and updates from across the ecosystem.",
      aosAnimation: "fade-up",
    },
    {
      name: "Telegram",
      href: "https://t.me/matara_token",
      icon: FaTelegramPlane,
      desc: "Join our active Telegram community @Mataratoken to participate in discussions, community happenings and what have you...",
      aosAnimation: "fade-down",
    },
    {
      name: "Gmail",
      href: "mailto:mataratoken@gmail.com",
      icon: CiMail,
      desc: "Send us mail at Mataratoken@gmail.com",
      aosAnimation: "fade-up",
    },
    {
      name: "Discord",
      href: "https://discord.gg/matara-token", // Replace with actual link
      icon: FaDiscord,
      desc: "Join our Discord server for real-time discussions and community events.",
      aosAnimation: "fade-down",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.4,
      } as Transition,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      } as Transition,
    },
  };

  return (
    <footer className="footerbg p-[50px_20px] lg:p-[30px] flex flex-col lg:flex-row lg:justify-center lg:items-start gap-[30px] max-w-[1400px] mx-auto">
      {/* Contact Section */}
      <motion.div
        className="w-full lg:w-[30%] lg:min-w-[300px]"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        <motion.p
          className="font-montserrat text-white text-[30px] lg:text-[40px] font-[600]"
          variants={itemVariants}>
          Contact
        </motion.p>
        <motion.p
          className="text-[15px] lg:text-[16px] font-montserrat font-[400] text-white"
          variants={itemVariants}>
          Join us on this journey towards a brighter future, where Purpose
          Guides Progress.
        </motion.p>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        className="w-full lg:w-[50%] grid grid-cols-1 lg:grid-cols-2 lg:gap-[20px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={index}
              className="flex items-start space-x-[20px] mb-[20px] lg:mb-[15px] lg:min-w-[220px]"
              variants={itemVariants}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={`Visit Matara Token ${social.name}`}>
                <Icon className="text-secondary text-[30px] lg:text-[40px]" />
              </motion.a>
              <div>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-[5px] cursor-pointer hover:text-secondary transition-colors duration-200">
                  <p className="text-[18px] lg:text-[18px] font-montserrat font-[600] text-white">
                    {social.name}
                  </p>
                  {social.name !== "Gmail" && (
                    <CiShare1 className="text-white text-[16px]" />
                  )}
                </a>
                <p className="text-[15px] lg:text-[16px] font-montserrat font-[400] text-white">
                  {social.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation and Language Section */}
      <motion.div
        className="text-white flex flex-col space-y-[15px] lg:w-[20%] lg:min-w-[200px]"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        <div className="mt-[10px] flex flex-col items-center gap-[10px]">
          <div className="flex flex-col items-center gap-[10px]">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white font-inter font-[400] text-[14px] hover:text-secondary transition-colors duration-200">
                {link.title}
              </Link>
            ))}
          </div>
          <button className="flex items-center space-x-[8px] border-[2px] border-white p-[5px_15px] rounded-[6px] hover:bg-secondary hover:text-white transition-colors duration-200">
            <p className="text-white font-inter text-[16px]">ENG</p>
            <SlGlobe className="text-white text-[16px]" />
          </button>
        </div>
        <hr className="border-white" />
        <p className="text-center text-[14px]">
          © 2025 Matara Token. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
