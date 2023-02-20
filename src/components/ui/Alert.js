import React from 'react'
import WarningRed from "../../assets/images/icon/Warning-red.svg";
import WarningGreen from "../../assets/images/icon/Warning-green.svg";
import Image from "next/image";

const Alert = ({title, description, color, className}) => {
  return (
    <>
        <div className={`rounded-2xl border bg-primary-light dark:bg-white/5 py-4 px-3 flex items-start ${className} ${ 
            color == 'red' ? "border-secondary-red"  : ""  ||
            color == 'green' ? "border-[#27AE60]"  : ""  }`}
        >
            {color == 'red' ? (<Image src={WarningRed} alt="" className="mt-[5px]" />) : ""}
            {color == 'green' ? (<Image src={WarningGreen} alt="" className="mt-[3px]" />) : ""}
            <div className='ml-2'>
                <h4 className='text-xs font-semibold leading-[18px]'>{title}</h4>
                <p className='text-xs leading-[18px]'>{description}</p>
            </div>
        </div> 
    </>
  )
}

export default Alert
