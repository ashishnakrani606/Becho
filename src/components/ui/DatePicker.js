import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Dateicon from "../../assets/images/icon/CalendarGrey.svg";
import Image from "next/image";
import Selecticon from "./../../assets/images/icon/selecticon.svg";
import "react-datepicker/dist/react-datepicker.css";

const DAtePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [icon, setIcon] = useState(false);

  const ChangeHandler = () => {
    (date) => setStartDate(date);
    setIcon(true);
  };

  return (
    <>
      <div className="flex items-center">
        <Image
          src={Dateicon}
          alt=""
          className={`mr-1 dark:invert opacity-20 ${icon ? "opacity-20 inline-block" : " opacity-20 dark:invert inline-block"}`}
        />
        <div className="relative">
          {!icon ? (
            <span className="absolute left-0 top-[50%] text-black/20 -translate-y-[50%] pointer-events-none dark:text-white/20">
              Pick a date
            </span>
          ) : (
            ""
          )}
          <DatePicker
            selected={startDate}
            onChange={ChangeHandler}
            className={`bg-transparent ${icon ? "opacity-100" : " opacity-0"}`}
          />
          {/* <Image src={Selecticon} className="dark:invert absolute top-0 right-0"/> */}
        </div>
      </div>
    </>
  );
};
export default DAtePicker;
