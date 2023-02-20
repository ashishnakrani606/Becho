import React ,{useState } from "react";
import DatePicker from "react-datepicker";
import Dateicon from "../../assets/images/icon/CalendarGrey.svg"
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
const DAtePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [icon , setIcon] =useState(false)

  const ChangeHandler = () => {
    (date) => setStartDate(date);
    setIcon(true)
  }

  return (
    <>
        <div className="flex items-center">
            <Image src={Dateicon} alt="" className={`mr-1 ${icon ? "opacity-100" : " opacity-20"}`} />
            <div className="relative">
                <DatePicker selected={startDate} onChange={ChangeHandler} className={`${icon ? "opacity-100" : " opacity-0"}`} />
                {!icon ? <span className="absolute left-0 top-[50%] text-black/20 -translate-y-[50%] pointer-events-none">Pick a date</span> :"" }
            </div>
        </div>
    </>
  );
};
export default DAtePicker;