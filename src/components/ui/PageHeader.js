import React from "react";
import ArrowLeft from "@/assets/images/icon/ArrowLeft.svg";
import Image from "next/image";
import Badges from "./Badges";
import Link from "next/link";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
const PageHeader = ({ children, orderid, className, Badgesdata, arrow, orderidcopy }) => {
  return (
    <>
      <div className={`flex items-center justify-between flex-wrap ${className}`}>
        <div className="flex items-center flex-wrap gap-3">
          <Link href={"#0"}>
            <Image src={ArrowLeft} alt="" className="dark:invert" />
          </Link>
          <h3 className="px-2 py-1 mr-[6px] font-semibold">{orderid}</h3>
          {/* <h3 className="px-2 py-1 mr-[6px] font-semibold">{orderidcopy}</h3> */}
          {Badgesdata.map((item,index) => (
            <div key={index} >
              <Badges color={item.color} name={item.name} className={"mr-2"} />
            </div>
          ))}
        </div>
        <div className="flex items-center sm:gap-1 gap-2">
          {children}
          {arrow == true ? (
            <>
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center sm:mx-2"
              >
                <Image src={ArrowLineLeft} alt="" className="dark:invert" />
              </Link>
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                <Image src={ArrowLineLeft} alt="" className="dark:invert rotate-180" />
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
