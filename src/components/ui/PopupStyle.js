import React from "react";
import Image from "next/image";
import Button from "./Button";
import XCircle from "@/assets/images/icon/XCircle.svg";
import Link from "next/link";

const PopupStyle = ({ className, icon, title, description, color }) => {
  return (
    <>
      <div
        className={`pt-[19px] pb-3 pl-[25px] pr-7 w-full max-w-[408px] rounded-2xl border border-[#0000001a] ${className}`}
        style={
          color == "green"
            ? { background: "linear-gradient(180deg, #BAEDBD 0%, #6FCF97 100%)" }
            : "" || color == "blue"
            ? { background: "linear-gradient(180deg, #B1E3FF 0%, #56CCF2 100%)" }
            : "" || color == "yellow"
            ? { background: "linear-gradient(180deg, #FFE999 0%, #F2C94C 100%)" }
            : "" || color == "purple"
            ? { background: "linear-gradient(180deg, #C6C7F8 0%, #BB6BD9 100%)" }
            : ""
        }
      >
        <div className="flex justify-between items-center mb-4">
          <Image src={icon} alt="" className="" />
          <span>
            <Button name={"Start now"} color={"gray-1"} />
          </span>
        </div>
        <h3 className="text-2xl">{title}</h3>
        <p className="text-xs">{description}</p>
        <Link href="#0" className="mr-[10px] flex justify-end">
          <Image src={XCircle} alt="" className="mr-1" />
          <span>Close</span>
        </Link>
      </div>
    </>
  );
};

export default PopupStyle;
