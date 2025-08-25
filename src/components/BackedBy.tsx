import React from "react";
import mftld from "@/assets/svg/mftld.svg";
import eagle from "@/assets/svg/Eagle.svg";
import defiTiger from "@/assets/svg/defi-tiger.svg";
import theWord from "@/assets/svg/theWord.svg";
import msc from "@/assets/svg/msc.svg";

const partners = [msc, defiTiger, theWord, eagle, mftld];

import Image from "next/image";
function BackedBy() {
  return (
    <div className="bg-[#D9D9D90F]  text-white mt-[100px flex items-center justify-center">
      <div className="p-[50px_20px] lg:p-[50px] 2xl:container flex flex-col items-center justify-center">
        <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">
          Backed by
        </p>
        <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
          Our strategic partnerships and collaborations that enhance the Matara
          ecosystem.
        </p>

        <div className="mt-[40px] flex flex-row lg:justify-between w-full flex-wrap gap-[20px]">
          {/* <Image className="h-[35px] lg:h-full w-fit" src={mfltd} alt="mfltd" />
          <Image className="h-[32px] lg:h-full w-fit" src={mlogo} alt="mfltd" />
          <Image className="h-[32px] lg:h-full w-fit" src={mlogo3} alt="mfltd" />
          <Image className="h-[32px] lg:h-full w-fit" src={mlogo4} alt="mfltd" />
          <Image className="h-[32px] lg:h-full w-fit" src={mlogo5} alt="mfltd" />
          <Image className="h-[32px] lg:h-full w-fit" src={mlogo6} alt="mfltd" />
          <Image className="h-[32px] lg:h-full w-fit" src={mlogo7} alt="mfltd" /> */}
          {partners.map((img, i) => (
            <div key={i}>
              <Image
                className="h-[32px] lg:h-full w-fit"
                src={img}
                alt="mfltd"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackedBy;
