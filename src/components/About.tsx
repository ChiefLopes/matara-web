import Image from "next/image";
import MABout from "@/assets/svg/mabout.svg";
import SMABout from "@/assets/svg/smabout.svg";
import { useTranslations } from "next-intl";
function About() {
  const t = useTranslations('Index')

  return (
    <div className="bg-[#D9D9D90F] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-[40px] lg:gap-0 items-center  p-[50px_20px] md:p-[50px] 2xl:container">
      <div className="w-full md:w-[40%]  flex items-center justify-center">
        <Image src={MABout} alt="" className="hidden lg:flex" />
        <Image src={SMABout} alt="" className="lg:hidden" />
      </div>
      <div className="text-white flex-1 w-full md:w-[60%]  h-full">
        <p className="font-inter text-[32px] lg:text-[52px] font-[600] text-white">
        {t('aboutTitle')}
        </p>
        <p className="font-montserrat text-[16px] lg:text-[20px] font-[400] text-[#DFDBDB]">
          {t('aboutSubtitle')}
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
