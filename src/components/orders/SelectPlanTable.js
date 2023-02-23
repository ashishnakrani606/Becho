  import Image from "next/image";
import Calender from "../../assets/images/icon/CalendarBlank.svg";
import User from "../../assets/images/icon/userimg.svg";
import User1 from "../../assets/images/icon/user1.svg";
import User2 from "../../assets/images/icon/user2.svg";
import User3 from "../../assets/images/icon/user3.svg";
import User4 from "../../assets/images/icon/user4.svg";
import Dots from "../../assets/images/icon/Union.svg";
import Subtract from "../../assets/images/icon/Subtract.svg";
import Dropdown from "../ui/Dropdown";
import CheckBox from "../ui/CheckBox";
const TableData = [
  {
    id: 1,
    orderid: "#CM9808",
    username: "Krishna H",
    payment: "Paid",
    deliverymethod: "Cash on Delivery",
    date: "Today, 2:34 pm",
    img: User,
    icon: Calender,
    items: "3 items",
    orderstatus: "On hold",
    orderstatusdata: "status",
    union: Dots,
    dot: "dot-active pl-3 before:dark:bg-white",
    orderstatusdata:
      "bg-[#f2994ab3] ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
      name:"Cash"
  },
  {
    id: 2,
    orderid: "#CM9807",
    username: "Sahil Kohli",
    payment: "Paid",
    deliverymethod: "UPI",
    date: "Today, 1:50 pm",
    img: User1,
    items: "5 items",
    icon: Calender,
    union: Dots,
    orderstatus: "Fulfilled",
    dot: "dot-active pl-3 before:dark:bg-white",
    dots: "dot-active pl-3 before:dark:bg-white",
    name:"Paid"
  },
  {
    id: 3,
    orderid: "#CM9806",
    username: "Asmita Modi",
    payment: "Payment pending",
    date: "Today, 12:34 pm",
    img: User2,
    items: "10 items",
    icon: Calender,
    orderstatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    orderstatusdata: "pending",
    paymentdata: "bg-amber-200 dark:!text-black",
    orderstatusdata:
      "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name:"Payment"

  },
  {
    id: 4,
    orderid: "#CM9805",
    username: "Ajay Nagar",
    payment: "Payment pending",
    date: "Today, 10:14 am",
    img: User3,
    items: "5 items",
    icon: Calender,
    orderstatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    paymentdata: "bg-amber-200 dark:!text-black",
    orderstatusdata:
      "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
  name:"paymentpending"},
  {
    id: 5,
    orderid: "#CM9804",
    username: "Vijaya Divan",
    payment: "Paid",
    deliverymethod: "UPI",
    date: "Yesterday",
    img: User4,
    items: "11 items",
    icon: Calender,
    orderstatus: "Fulfilled",
    union: Dots,
    dot: "dot-active pl-3 before:dark:bg-white",
    dots: "dot-active pl-3 before:dark:bg-white",
    Selected: 'true',
  name:"paidcash"
  },
  {
    id: 6,
    orderid: "#CM9808",
    username: "Krishna H",
    payment: "Paid",
    deliverymethod: "Cash on Delivery",
    date: "Today, 2:34 pm",
    img: User,
    icon: Calender,
    items: "3 items",
    orderstatus: "Unfulfilled",
    orderstatusdata: "status",
    union: Dots,
    dot: "dot-active pl-3 before:dark:bg-white",
    orderstatusdata:
      "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
  name:"deleviry"},
  {
    id: 7,
    orderid: "#CM9807",
    username: "Sahil Kohli",
    payment: "Paid",
    deliverymethod: "UPI",
    date: "Today, 1:50 pm",
    img: User1,
    items: "5 items",
    icon: Calender,
    union: Dots,
    orderstatus: "Fulfilled",
    dot: "dot-active pl-3 before:dark:bg-white",
    dots: "dot-active pl-3 before:dark:bg-white",
    name:"kohil"
  },
  {
    id: 8,
    orderid: "#CM9806",
    username: "Asmita Modi",
    payment: "Payment pending",
    date: "Today, 12:34 pm",
    img: User2,
    items: "10 items",
    icon: Calender,
    orderstatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    orderstatusdata: "pending",
    paymentdata: "bg-amber-200 dark:!text-black",
    orderstatusdata:
      "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
      name:"modi"
  },
  {
    id: 9,
    orderid: "#CM9805",
    username: "Ajay Nagar",
    payment: "Payment pending",
    date: "Today, 10:14 am",
    img: User3,
    items: "5 items",
    icon: Calender,
    orderstatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    paymentdata: "bg-amber-200 dark:!text-black",
    orderstatusdata:
      "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
      name:"nagar"
  },
  {
    id: 10,
    orderid: "#CM9804",
    username: "Vijaya Divan",
    payment: "Paid",
    deliverymethod: "UPI",
    date: "Yesterday",
    img: User4,
    items: "11 items",
    icon: Calender,
    orderstatus: "Fulfilled",
    union: Dots,
    dot: "dot-active pl-3 before:dark:bg-white",
    dots: "dot-active pl-3 before:dark:bg-white",
    Selected: 'true',
    name:"divan"
  },
];

const SelectPlanTable = ({}) => { 
  return (
    <>
      {TableData.map((navi, index) => (
        <tr        
          className={`border-b border-black/5 dark:border-white/5 hover:bg-primary-light hover:border-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${navi.tablesec}`}
          key={index}
        >
          <td className="pl-0 py-2 flex items-center"> 
          <div className="pl-[5px]">
            <CheckBox name={navi.name} />
           </div>
            {navi.orderid}
            </td>
          <td className="px-3 py-2 whitespace-nowrap">
            <Image
              src={navi.icon}
              alt=""
              className="dark:invert inline-block mr-[6px]"
            />
            {navi.date}
          </td>
          <td className="px-3 py-2 gap-2 whitespace-nowrap">{navi.username}</td>
          <td className="px-3 pr-0 py-2 whitespace-nowrap">
            <h3
              className={`rounded-2xl leading-normal relative text-black/80 dark:text-white/80 inline-block px-[6px] ${navi.dot} ${navi.paymentdata}`}
            >
              {navi.payment}
            </h3>
          </td>
          <td className="px-4 py-2 whitespace-nowrap">
            <h3
              className={`text-black-80 relative inline-block text-black/80 dark:white/80 dark:text-white ${navi.dots} ${navi.orderstatusdata}`}
            >
              {navi.orderstatus}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{navi.items}</td>
          <td className="px-3 py-2 max-w-[210px] whitespace-nowrap">{navi.deliverymethod}</td>
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
