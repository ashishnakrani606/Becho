import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import Dropdown from "@/components/ui/Dropdown";
import CheckBox from "@/components/ui/CheckBox";
import  Button  from "@/components/ui/Button";

const InvoiceTable = ({ tableData, handleChange, selected }) => {
  return (
    <>
      {tableData.map((orderRowData , index) => (
        <tr
          className={`${
            selected.includes(index) ? "bg-primary-light dark:bg-white/5 " : ""
          } border-b border-black/5  dark:border-white/5 hover:bg-primary-light hover:border-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            orderRowData.tablesec
          }`}
          key={index}
          onChange={handleChange}
          checked={selected.includes(index)}
        >
          <td className="pl-0 py-[11px]">
            <div className="pl-[5px] inline-block items-center">
              <CheckBox
                value={index}
                name={orderRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
            </div>
            <div className="inline-block">
            {orderRowData.invoiceId}
            <strong className="block">
              {orderRowData.ordercode}
            </strong>
            </div>
          </td>
          <td className="px-3 py-[11px] whitespace-nowrap">
            <Image src={orderRowData.icon} alt="" className="dark:invert inline-block mr-[6px]" />
            {orderRowData.date}
          </td>
          <td className="px-3 py-[11px] gap-2 whitespace-nowrap">{orderRowData.amount}</td>
          <td className="px-3 pr-[10px] py-[11px] whitespace-nowrap">{orderRowData.clientName}</td>
          <td className="px-3 pr-[10px] py-[5px]">
            <div className="w-24">
            {orderRowData.officeName}
            </div>
            </td>
          <td className="px-3 py-[11px] max-w-[210px] whitespace-nowrap">
          <Button color={"grey"} name={"download"} outline={"true"} size={"medium"} className={"leading-4"}/>
          </td>
          <td className="px-3 pr-0 py-2 whitespace-nowrap">
            <h3
              className={`rounded-2xl leading-normal relative text-black/80 dark:text-white/80 inline-block px-[6px] ${orderRowData.dot} ${orderRowData.paymentdata}`}
            >
              {orderRowData.paymentStatus}
            </h3>
          </td>
          <td className="px-3 pr-0 py-2 whitespace-nowrap">
            <h3
              className={`rounded-2xl leading-normal relative text-black/80 dark:text-white/80 inline-block px-[6px] ${orderRowData.typedot}`}
            >
              {orderRowData.type}
            </h3>
          </td>
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className=""
              itemsclass="w-[240px] right-0 p-2 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
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
                {id:1, title: "View details", link: "/invoices/details" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default InvoiceTable;
