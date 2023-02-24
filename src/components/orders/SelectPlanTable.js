import { useEffect } from "react";
import Image from "next/image";
import User1 from "@/assets/images/icon/user1.svg";
import User2 from "@/assets/images/icon/user2.svg";
import User3 from "@/assets/images/icon/user3.svg";
import User4 from "@/assets/images/icon/user4.svg";
import Dots from "@/assets/images/icon/Union.svg";
import Subtract from "@/assets/images/icon/Subtract.svg";
import Dropdown from "@/components/ui/Dropdown";
import CheckBox from "@/components/ui/CheckBox";

const SelectPlanTable = ({ tableData, handleChange, selected }) => { 
  return (
    <>
      {tableData.map((orderRowData, index) => (
        <tr        
          className={`border-b border-black/5 dark:border-white/5 hover:bg-primary-light hover:border-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${orderRowData.tablesec}`}
          key={index}>
          <td className="pl-0 py-2 flex items-center"> 
          <div className="pl-[5px]">
            <CheckBox 
              value={index} 
              name={orderRowData.name}
              onChange={handleChange}
              checked={selected.includes(index)} />
           </div>
            {orderRowData.orderId}
            </td>
          <td className="px-3 py-2 whitespace-nowrap">
            <Image
              src={orderRowData.icon}
              alt=""
              className="dark:invert inline-block mr-[6px]"
            />
            {orderRowData.date}
          </td>
          <td className="px-3 py-2 gap-2 whitespace-nowrap">{orderRowData.userName}</td>
          <td className="px-3 pr-0 py-2 whitespace-nowrap">
            <h3
              className={`rounded-2xl leading-normal relative text-black/80 dark:text-white/80 inline-block px-[6px] ${orderRowData.dot} ${orderRowData.paymentdata}`}
            >
              {orderRowData.payment}
            </h3>
          </td>
          <td className="px-4 py-2 whitespace-nowrap">
            <h3
              className={`text-black-80 relative inline-block text-black/80 dark:white/80 dark:text-white ${orderRowData.dots} ${orderRowData.orderStatusData}`}
            >
              {orderRowData.orderStatus}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap">{orderRowData.items}</td>
          <td className="px-3 py-2 max-w-[210px] whitespace-nowrap">{orderRowData.deliveryMethod}</td>
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { title: "View details", link:"/orders/details"}
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default SelectPlanTable;
