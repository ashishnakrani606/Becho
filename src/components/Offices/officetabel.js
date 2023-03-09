import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import Dropdown from "@/components/ui/Dropdown";
import CheckBox from "@/components/ui/CheckBox";
import  Button  from "@/components/ui/Button";
import Badges from "../ui/Badges";


const OfficeTabel = ({ tableRow, handleChange, selected }) => {
  return (
    <>
      {tableRow.map((officeRowData , index) => (
        <tr
          className={`${
            selected.includes(index) ? "bg-primary-light dark:bg-white/5 " : ""
          } border-b border-black/5 dark:border-white/5 dark:hover:border-white/10 hover:bg-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            officeRowData.tablesec
          }`}
          key={index}
          onChange={handleChange}
          checked={selected.includes(index)}
        >
          <td className="pl-0 py-2">
            <div className="pl-[5px] flex items-center">
              <CheckBox
                value={index}
                name={officeRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
            </div>
          </td>
          <td className="py-2 whitespace-nowrap pl-3 pr-[10px]">
            {officeRowData.floor}
          </td>
          <td className="py-2 px-3 whitespace-nowrap font-bold leading-normal">
            {officeRowData.officeName}
          </td>
          <td className="py-2 px-3 whitespace-nowrap font-bold leading-normal">
            {officeRowData.seats}
          </td>
          <td className="py-2 px-3 font-bold">
            <p className="max-w-[88px] leading-normal">
            {officeRowData.currentRent}
              </p>
          </td>
          <td className="py-2 px-3">
            <p className="max-w-[88px] leading-normal">
            {officeRowData.usualRent}
            </p>
          </td>
          <td className="py-2 px-3 whitespace-nowrap leading-normal">
            {officeRowData.currentCompany}
          </td>
          <td className="py-2 px-3 whitespace-nowrap leading-normal">
            <Badges name={officeRowData.type} color={officeRowData.typeDot} className={`${officeRowData.rentStyle}`}/>
          </td>
          <td className="py-2 px-3 whitespace-nowrap leading-normal">
            <Image src={officeRowData.icon} alt="" className="dark:invert inline-block mr-[6px]" />
            {officeRowData.nextInvoiceDate}
          </td>
          <td className="py-2 px-3 whitespace-nowrap leading-normal">
            <Image src={officeRowData.icon} alt="" className="dark:invert inline-block mr-[6px]" />
            {officeRowData.lockInTill}
          </td>      
          <td className={`leading-normal ${selected.includes(index) ? "group-hover:opacity-100": "opacity-0 group-hover:opacity-100 pr-4" }`}>
            <Dropdown
              className=""
              itemsclass="!p-2 w-[240px] !block right-0 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                {id:1, title: "Print packing slip", link: "" },
                {id:1, title: "Archive order", link: "" },
                {id:1, title: "Put on Hold (or Unhold order)", link: "" },
                {id:1, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "" },
                {id:1, title: "Fulfil order (or Mark as Unfulfilled)", lsink: "" },
                {id:1, title: "View details", link: "/offices/add-office" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default OfficeTabel;
