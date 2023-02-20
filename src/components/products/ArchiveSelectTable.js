import Image from "next/image";
import Calender from "../../assets/images/icon/CalendarBlank.svg";
import User from "../../assets/images/icon/userimg.svg";
import User1 from "../../assets/images/icon/user1.svg";
import User2 from "../../assets/images/icon/user2.svg";
import User3 from "../../assets/images/icon/user3.svg";
import User4 from "../../assets/images/icon/user4.svg";
import Dots from "../../assets/images/icon/Union.svg";
import Subtract from "../../assets/images/icon/Subtract.svg"; 
import brownThrowPillows from "../../assets/images/users/brown-throw-pillows.png"; 

const TableData = [
  {
    id: 1, 
    productimg: brownThrowPillows,
    product: "Brown Throw Pillows",
    status: "Active",
    type: "Indoor ", 
    inventory: "26 in stock",
    vendor: "Rustic LTD",
  },
  {
    id: 2, 
    productimg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
  },
  {
    id: 3, 
    productimg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
  },
  {
    id: 4, 
    productimg: brownThrowPillows,
    product: "Brown Throw Pillows",
    status: "Active",
    type: "Indoor ", 
    inventory: "26 in stock",
    vendor: "Rustic LTD",
  },
  {
    id: 5, 
    productimg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
  },
  {
    id: 6, 
    productimg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
  },
  {
    id: 7, 
    productimg: brownThrowPillows,
    product: "Gardening hand trowel",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
  }, 
  {
    id: 8, 
    productimg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    Selected: 'true',
  },
  {
    id: 9, 
    productimg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
  },
  {
    id: 10, 
    productimg: brownThrowPillows,
    product: "Gardening hand trowel",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
  }, 
   
];

const ArchiveSelectTable = ({opentableHandler}) => {
  return (
    <>
      {TableData.map((navi, index) => (
        <tr
          className={`border-b border-black/5 dark:border-white/5 hover:bg-[#F7F9FB] hover:border-[#F7F9FB] dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${navi.tablesec}`}
          key={index}
          onClick={opentableHandler}
        >
          <td className="pl-0 py-2">
            <Image
              src={Subtract}
              alt=""
              className={`dark:invert inline-block mx-[5px] ${
                navi.Selected == "true" ? "opacity-100" : "opacity-0"
              }`}
            />
          </td>
          <td className="px-3 py-2">
            <Image
              src={navi.productimg}
              alt=""
              className="dark:invert inline-block mr-2"
            />
            {navi.product}
          </td>
          <td className="px-3 pr-0 py-2">
            <h3 className={`relative pl-[11px] ${
                navi.status == 'Active' ? 'text-primary-green' : "" || 
                navi.status == 'Draft' ? 'text-black/40 dark:text-white/40' : ""
              } `}>
              <span className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                navi.status == 'Active' ? 'bg-secondary-greenb' : "" || 
                navi.status == 'Draft' ? 'bg-black/40 dark:bg-white/40' : ""
              } `}
              ></span>
              {navi.status}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{navi.type}</td>
          <td className="px-4 py-2">
            <h3 className={`${ navi.lowstock == "lowstock" ? "text-secondary-red" : ""} `}>
              {navi.inventory}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{navi.vendor}</td>
        </tr>
      ))}
    </>
  );
};
export default ArchiveSelectTable;
