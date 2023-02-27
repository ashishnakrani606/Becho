import React from "react";
import Link from "next/link";
import Image from "next/image";
import Eye from "@/assets/images/icon/Eye.svg";
import Check from "@/assets/images/icon/Check.svg";
import ArrowLineRight from "@/assets/images/icon/ArrowLineRight2.svg";

const ThemesCard = ({ children, badgeColor, badgesName, title, description, activate, activated }) => {
  return (
    <div className={"w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4"}>
      <span
        className={`rounded px-1 text-xs leading-[18px] text-black/40 dark:text-black/80 inline-block mb-2 ${badgeColor}`}
      >
        {badgesName}
      </span>
      <h4 className="text-blacklight dark:text-white mb-1 font-semibold">{title}</h4>
      <p className="text-black/40 dark:text-white/40 text-xs">{description}</p>
      <div className="flex items-center mt-2 justify-between">
        <Link className="flex items-center text-black/40 dark:text-white/40 text-xs" href={"/"}>
          <Image src={Eye} className="mr-1 dark:invert" />
          Preview
        </Link>
        {children}
        {activated ? (
          <Link
            href={"#0"}
            className="leading-5 flex items-center px-2 py-[2px] bg-primary-greenb text-white rounded-lg"
          >
            Activated
            <Image src={Check} className="ml-1" />
          </Link>
        ) : (
          ""
        )}
        {activate ? (
          <Link href={"#0"} className="leading-5 flex items-center px-2 py-[2px] bg-blacklight text-white rounded-lg">
            Activate
            <Image src={ArrowLineRight} className="ml-1" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ThemesCard;
