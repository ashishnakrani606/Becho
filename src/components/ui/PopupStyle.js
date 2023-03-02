import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import XCircle from "@/assets/images/icon/XCircle.svg";
import Link from "next/link";

const PopupStyle = ({ className, icon, title, description, color }) => {
  const [open, setopenpopup] = useState(true);
  const openpopupHandler = () => {
    setopenpopup(false);
  };
  return (
    <>
      <div
        className={`pt-[22px] pb-3 px-7 w-full max-w-[408px] rounded-2xl border border-[#0000001a] fixed sm:right-11 sm:left-auto left-[50%] bottom-14 sm:translate-x-[0] translate-x-[-50%] z-50 ${className} ${
          open ? "" : "hidden"
        }`}
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
        <div className="flex justify-between items-center mb-5">
          <Image src={icon} alt="" />
          <span>
            <Button name={"Start now"} color={"greydark"} />
          </span>
        </div>
        <h3 className="text-2xl text-blacklight font-semibold leading-[34px]">{title}</h3>
        <p className=" text-xs text-blacklight pt-1">{description}</p>
        <Link href="" className="mr-[10px] flex justify-end" onClick={openpopupHandler}>
          <Image src={XCircle} alt="" className="mr-1" />
          <span className="text-blacklight">Close</span>
        </Link>
      </div>
    </>
  );
};

export default PopupStyle;
