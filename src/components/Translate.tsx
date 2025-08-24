"use client";
import { FaGlobeAfrica } from "react-icons/fa";
import React, { useTransition } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

function Translate() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const localName = lang.find((l) => l.code === localActive);
  const [active, setActive] = React.useState(localName?.name);

  const handleActive = (name: string) => {
    const nextLocale = lang.find((l) => l.name === name);

    if (nextLocale) {
      startTransition(() => {
        setActive(name);
        router.replace(`/${nextLocale.code}`);
      });
    }
  };
  return (
    <Popover className="relative ">
      <PopoverButton className="text-[#FFFCAB] font-inter text-[16px] border-[2px] border-[#FFFCAB] p-[4px_15px] rounded-[5px] flex items-center space-x-[5px]">
        <span>{active}</span>

        <FaGlobeAfrica />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="flex flex-col bg-[#05121A] rounded-[10px] z-50 mt-[20px]">
        <div className="p-[10px_15px] w-fit flex flex-col space-y-[10px]">
          {lang.map((l) => (
            <button
              key={l.name}
              className={`${
                localName?.name === l.name
                  ? "text-[#FFFCAB] bg-[#FFFCAB1C]  "
                  : "text-[#10364E] border-[#10364E]"
              } rounded-[5px] border w-full font-inter p-[5px_20px] text-[16px] text-center`}
              onClick={() => handleActive(l.name)}>
              {l.name}
            </button>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export default Translate;

const lang = [
  { name: "English", code: "en" },
  { name: "Français", code: "fr" },
  { name: "Español", code: "es" },
  { name: "Dutch", code: "nl" },
];

{
  /* <Popover __demoMode>
<PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
  Solutions
</PopoverButton>
<Transition
  enter="transition ease-out duration-200"
  enterFrom="opacity-0 translate-y-1"
  enterTo="opacity-100 translate-y-0"
  leave="transition ease-in duration-150"
  leaveFrom="opacity-100 translate-y-0"
  leaveTo="opacity-0 translate-y-1"
>
  <PopoverPanel
    anchor="bottom"
    className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)]"
  >
    <div className="p-3">
      <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
        <p className="font-semibold text-white">Insights</p>
        <p className="text-white/50">Measure actions your users take</p>
      </a>
      <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
        <p className="font-semibold text-white">Automations</p>
        <p className="text-white/50">Create your own targeted content</p>
      </a>
      <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
        <p className="font-semibold text-white">Reports</p>
        <p className="text-white/50">Keep track of your growth</p>
      </a>
    </div>
    <div className="p-3">
      <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
        <p className="font-semibold text-white">Documentation</p>
        <p className="text-white/50">Start integrating products and tools</p>
      </a>
    </div>
  </PopoverPanel>
</Transition>
</Popover> */
}
