import React from "react";
import MailIcon from "../../assets/images/icon/mailicon.svg";
import Image from "next/image";

const Alert = ({ title, description, color, className, children }) => {
  return (
    <>
      <div
        className={`rounded-lg border bg-[#eef3f8] dark:bg-blacklight py-5 px-4 flex gap-2 justify-between items-center ${className} ${
          color == "red" ? "border-[#FF4747]" : ""
        }`}
      >
        <div className={`flex items-start`}>
          {color == "red" ? <Image src={MailIcon} alt="" className="mt-[5px]" /> : ""}
          <div className="ml-2">
            <h4 className="text-xs font-semibold leading-[18px] text-[#FF4747] pt-1">{title}</h4>
            <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">{description}</p>
          </div>
        </div>
        <div>{children}</div>        
      </div>
    </>
  );
};

export default Alert;
