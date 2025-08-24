import React from "react";
import Image from "next/image";
import pose from "@/assets/svg/mpose.svg"; // your hero image
import mbg from "@/assets/svg/mherobg.svg"; // optional background
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Index");

  return (
    <section className="relative bg-[primary] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between min-h-screen">
        {/* Left side (text) */}
        <div className="w-full lg:w- text-center lg:text-left mt-5">
          <h1 className="text-[32px] lg:text-[58px] font-bold leading-tight gtext">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 text-[18px] lg:text-[22px] text-gray-200">
            {t("heroSubtitle")}
          </p>
          <button className="my-8 z-20 inline-block gbtn rounded-lg px-8 py-3 text-lg font-semibold text-[#10100B]">
            {t("heroButton")}
          </button>
        </div>

        {/* Right side (big image) */}
        <div className="relative w-full lg:w flex justify-center lg:justify-end">
          <Image
            src={pose}
            alt="pose"
            className="w-[85%] lg:w-[120%] max-w-[1200px] h-auto object-contain z-20"
            priority
          />
        </div>
      </div>

      {/* Optional Background Image */}
      <Image
        src={mbg}
        alt="background"
        className="absolute bottom-0 left-0 w-full h-auto"
        priority
      />
    </section>
  );
}

export default Hero;
