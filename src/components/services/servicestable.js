import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import Dropdown from "@/components/ui/Dropdown";
import CheckBox from "@/components/ui/CheckBox";
import  Button  from "@/components/ui/Button";

const ServicesTable = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((servicesRowData , index) => (  
        <tr
          className={`${
            selected.includes(index) ? "bg-primary-light dark:bg-white/5 " : ""
          } border-b border-black/5  dark:border-white/5 dark:hover:border-white/10 hover:bg-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            servicesRowData.tablesec
          }`}
          key={index}
          onChange={handleChange}
          checked={selected.includes(index)}
        >
          <td className="pl-0 py-[8px]">
            <div className="pl-[5px] inline-block items-center">
              <CheckBox
                value={index}
                name={servicesRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
            </div>
            <div className="inline-block">
            {servicesRowData.invoiceId}
            <strong className="block">
              {servicesRowData.ordercode}
            </strong>
            </div>
          </td>
          <td className="px-3 py-[8px] gap-2 whitespace-nowrap leading-normal font-bold	">{servicesRowData.serviceName}</td>
          <td className="px-3 py-[8px] gap-2 whitespace-nowrap leading-normal">{servicesRowData.totalPaymentPerMonth}</td>
          <td className="flex items-center px-3 py-2">
            <Image src={servicesRowData.client1} className="-ml-0 w-6 h-6" alt=""/>
            <Image src={servicesRowData.client2} className={`-ml-2 w-6 h-6 `} alt=""/>
            <Image src={servicesRowData.client3} className={`-ml-2 w-6 h-6 ${servicesRowData.clientimage}`} alt=""/>
            <p className={`rounded-2xl bg-primary-purple -ml-2 flex items-center leading-normal justify-center w-6 h-6 dark:text-blacklight ${servicesRowData.clientStyle}`}>{servicesRowData.clientCount}</p>
          </td>
          <td className={`${selected.includes(index) ? "group-hover:opacity-100" : "opacity-0 group-hover:opacity-100 pr-4"} `}>
          <Dropdown
              className=""
              itemsclass="!p-2 w-[240px] !block right-0  [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
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
                {id:1, title: "Fulfil order (or Mark as Unfulfilled)", link: "" },
                {id:1, title: "View details", link: "/services/electricity-bill" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default ServicesTable;
