import Image from "next/image";
import Calender from "../../assets/images/icon/CalendarBlank.svg";
import User from "../../assets/images/icon/userimg.svg";
import User1 from "../../assets/images/icon/user1.svg";
import User2 from "../../assets/images/icon/user2.svg";
import User3 from "../../assets/images/icon/user3.svg";
import User4 from "../../assets/images/icon/user4.svg";
import Dots from "../../assets/images/icon/Union.svg";
import Subtract from "../../assets/images/icon/Subtract.svg"; 
import CheckBox from "../ui/CheckBox";
import Dropdown from "../ui/Dropdown";
const TableData = [
  {
    id: 1,
    product: "EKHKSS3S266H",
    status: "Active",
    type: "40% off entire order • One use per customer ", 
    inventory: "Code",
    vendor: "0",
    Selected: 'true',
  },
  {
    id: 2,
    product: "Copy of EKHKSS3S266H",
    status: "Draft",
    type: "40% off entire order • One use per customer ",
    inventory: "Automatic",
    vendor: "0",
  },
];

const Amountorder = ({opentableHandler}) => {
  return (
    <>
      {TableData.map((navi, index) => (
        <tr
          className={`border-b border-black/5 dark:border-white/5 dark:hover:bg-white/5  hover:bg-primary-light hover:border-primary-light  group transition-all duration-300 cursor-pointer text-xs ${navi.tablesec}`}
          key={index}
          // onClick={opentableHandler}
        >
          <td className="pl-[5px] py-2">
          <div className="opacity-0 group-hover:opacity-100">
            <CheckBox name={navi.name}></CheckBox>
           </div>
            
          </td>
          <td className="px-3 py-2">
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
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              button={
                <div className="flex gap-2 px-2 pt-1 items-center justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { title: "View details" }
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default Amountorder;
