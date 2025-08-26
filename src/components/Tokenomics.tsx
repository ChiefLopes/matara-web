import Image from "next/image";
import React from "react";
import token from '@/assets/svg/tokenomics.svg'
import mtoken from '@/assets/svg/mobiletoken.svg'

function Tokenomics() {
  return (
    <div id="tokenomics" className="container p-[50px_20px] md:p-[50px]">
      <h2 className="text-4xl font-bold text-center text-white mb-[10px]">
      Tokenomics
      </h2>
      <p className="text-center text-gray-400 mb-12">
      Initial Token Supply: 1 billion $MARS tokens
      </p>
      <div className=" w-full flex items-center justify-center">
        <Image src={token} className="hidden lg:flex" alt="" />
        <Image src={mtoken} className="lg:hidden" alt="" />
      </div>
    </div>
  );
}

export default Tokenomics;
