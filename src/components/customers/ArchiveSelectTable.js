import Image from "next/image";
import Calender from "../../assets/images/icon/CalendarBlank.svg";
import User from "../../assets/images/icon/userimg.svg";
import User1 from "../../assets/images/icon/user1.svg";
import User2 from "../../assets/images/icon/user2.svg";
import User3 from "../../assets/images/icon/user3.svg";
import User4 from "../../assets/images/icon/user4.svg";
import Dots from "../../assets/images/icon/Union.svg";
import Subtract from "../../assets/images/icon/Subtract.svg";
import customer1 from "../../assets/images/users/customersimg-1.png";
import customer2 from "../../assets/images/users/customersimg-2.png";
import CheckBox from "../ui/CheckBox";
import Dropdown from "../ui/Dropdown";
const TableData = [
  {
    id: 1,
    customersimg: customer1,
    customername: "Baalkrishan Lal Sani",
    subscription: "Subscribed",
    orders: "0 orders ",
    location: "Pilani RJ, India",
    amount: "₹ 0.00",
    name:"pilani"
  },
  {
    id: 2,
    customersimg: customer2,
    customername: "Sahil Kohli",
    subscription: "Not subscribed",
    orders: "1 order",
    location: "Chandigarh CH, India",
    amount: "₹ 2000.00",
    Selected: 'true',
    name:"chandigarh"
  },

];

const ArchiveSelectTable = ({ opentableHandler }) => {
  return (
    <>
      {TableData.map((navi, index) => (
        <tr
          className={`border-b border-black/5 dark:border-white/5 hover:bg-[#F7F9FB] hover:border-[#F7F9FB] dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${navi.tablesec}`}
          key={index}
          // onClick={opentableHandler}
        >
          <td className="pl-[5px] py-2">
            <div className="opacity-0 group-hover:opacity-100">
              <CheckBox name={navi.name}></CheckBox>
            </div>
          </td>
          <td className="px-3 py-2">
            <Image
              src={navi.customersimg}
              alt=""
              className="inline-block mr-2"
            />
            {navi.customername}
          </td>
          <td className="px-3 pr-0 py-2">
            <h3 className={`relative pl-[11px] ${navi.subscription == 'Subscribed' ? 'text-[#219653]' : "" ||
              navi.subscription == 'Not subscribed' ? 'text-black/40 dark:text-white/40' : ""
              } `}>
              <span className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${navi.subscription == 'Subscribed' ? 'bg-[#BAEDBD]' : "" ||
                navi.subscription == 'Not subscribed' ? 'bg-black/40 dark:bg-white/40' : ""
                } `}
              ></span>
              {navi.subscription}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{navi.orders}</td>
          <td className="px-4 py-2">
            <h3>
              {navi.location}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{navi.amount}</td>
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown           
              className="right-0 left-[unset]"
              button={
                <div className="flex gap-2 px-2 pt-1 items-center justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              // dropdownitem={[
              //   { title: "View details", link: "customers/name" },
              //   opentableHandler={opentableHandler}
              // ]}
              dropdownitem={[
                { title: "View details", link: "customers/name" },
                opentableHandler={opentableHandler}
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default ArchiveSelectTable;
