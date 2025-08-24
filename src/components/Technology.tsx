import React from "react";
import MCoin from "@/assets/svg/mcoin.svg";
import SMCoin from "@/assets/svg/smcoin.svg";
import MatCoin from "@/assets/svg/matT.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NetImg } from "@/assets/svg";
function Technology() {
  const t = useTranslations("Index");

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col-reverse md:flex-row gap-[40px] items-center  justify-between p-[50px_20px] md:p-[50px] 2xl:container">
        <div className="flex-1">
          <p className="font-inter text-[32px] lg:text-[52px] font-[600] text-white">
            {t("techTitle")}
          </p>
          <p className="font-montserrat text-[16px] lg:text-[20px] font-[400] text-[#DFDBDB]">
            {t("techSubtitle")}
          </p>

          <p className="text-white font-semibold text-base md:text-xl mt-2">
            {t("techTitle2")}
          </p>
          <ul className="list-disc pl-5 text-[#DFDBDB] text-[16px] lg:text-[20px] ">
            <li>{t("techSubtitle2.0")}</li>
            <li>{t("techSubtitle2.1")}</li>
            <li>{t("techSubtitle2.2")}</li>
          </ul>
        </div>
        <div className="flex-1 relative items-center justify-center">
          <div className="bg-[#FFFFFF1A] h-[600px] w-[600px] rounded-full  absolute right-[-50px] blur-3xl hidden lg:block"></div>
          {/* <Image src={SMCoin} alt="" className="lg:hidden" /> */}

          {/* <Image src={MCoin} alt="" className="hidden lg:flex h-[600px]" /> */}

          <div className="relative flex items-center justify-center">
            {/* Background Image */}
            <NetImg className="w-full h-auto" />

            {/* Centered Image on top */}
            <Image
              src={MatCoin}
              alt="MatCoin"
              className="absolute h-[300px] lg:h-[600px] object-contain  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
