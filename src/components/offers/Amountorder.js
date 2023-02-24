import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";
const TableRow = [
  {
    id: 1,
    product: "EKHKSS3S266H",
    status: "Active",
    type: "40% off entire order • One use per customer ", 
    inventory: "Code",
    vendor: "0",
    Selected: 'true',
    name:"active"
  },
  {
    id: 2,
    product: "Copy of EKHKSS3S266H",
    status: "Draft",
    type: "40% off entire order • One use per customer ",
    inventory: "Automatic",
    vendor: "0",
    name:"draft"
  },
];

const Amountorder = ({}) => {
  return (
    <>
      {TableRow.map((offerRowData, index) => (
        <tr
          className={`border-b border-black/5 dark:border-white/5 dark:hover:bg-white/5  hover:bg-primary-light hover:border-primary-light  group transition-all duration-300 cursor-pointer text-xs ${offerRowData.tablesec}`}
          key={index}         
        >
          <td className="pl-[5px] py-2">
          <div className="">
            <CheckBox name={offerRowData.name}/>
           </div>
          </td>
          <td className="px-3 py-2">
            {offerRowData.product}
          </td>
          <td className="px-3 pr-0 py-2">
            <h3 className={`relative pl-[11px] ${
                offerRowData.status == 'Active' ? 'text-primary-green' : "" || 
                offerRowData.status == 'Draft' ? 'text-black/40 dark:text-white/40' : ""
              } `}>
              <span className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                offerRowData.status == 'Active' ? 'bg-secondary-greenb' : "" || 
                offerRowData.status == 'Draft' ? 'bg-black/40 dark:bg-white/40' : ""
              } `}
              ></span>
              {offerRowData.status}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{offerRowData.type}</td>
          <td className="px-4 py-2">
            <h3 className={`${ offerRowData.lowstock == "lowstock" ? "text-secondary-red" : ""} `}>
              {offerRowData.inventory}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{offerRowData.vendor}</td>
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { title: "View details", link:"./offers/detail" }
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default Amountorder;
