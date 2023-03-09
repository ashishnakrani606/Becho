import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import Dropdown from "@/components/ui/Dropdown";
import CheckBox from "@/components/ui/CheckBox";
import Button from "@/components/ui/Button";

const InvoiceTable = ({ TableData, handleChange, selected }) => {
  return (
    <>
      {TableData.map((invoiceRowData, index) => (
        <tr
          className={`${  
            selected.includes(index) ? "bg-primary-light dark:bg-white/5 " : ""
          } border-b border-black/5  dark:border-white/5 dark:hover:border-white/10  hover:bg-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            invoiceRowData.tablesec
          }`}
          key={index}
          onChange={handleChange}
          checked={selected.includes(index)}
        >
          <td className="pl-0 py-[11px]">
            <div className="flex items-center">
              <div className="pl-[5px] inline-flex items-center">
                <CheckBox 
                  value={index}
                  name={invoiceRowData.name}
                  onChange={handleChange}
                  checked={selected.includes(index)}
                  className={""}
                />
              </div>
              <div className="inline-block leading-[18px]">
                {invoiceRowData.invoiceId}
                <strong className="block leading-[18px]">{invoiceRowData.ordercode}</strong>
              </div>
            </div>
          </td>
          <td className="px-3 py-[11px] whitespace-nowrap leading-[18px]">
            <Image src={invoiceRowData.icon} alt="" className="dark:invert inline-block mr-[6px]" />
            {invoiceRowData.date}
          </td>
          <td className="px-3 py-[11px] gap-2 whitespace-nowrap leading-[18px]">{invoiceRowData.amount}</td>
          <td className="px-3 pr-[10px] py-[11px] whitespace-nowrap leading-[18px]">{invoiceRowData.clientName}</td>
          <td className="px-3 pr-[10px] py-[5px] leading-[18px]">
            <div className="w-24 leading-[18px]">{invoiceRowData.officeName}</div>
          </td>
          <td className="px-3 py-[11px] max-w-[210px] whitespace-nowrap">
            <Button
              color={"grey"}
              name={"Download"}
              outline={"true"}
              className={"leading-5 !py-[2px]"}
            />
          </td>
          <td className="px-3 pr-0 py-2 whitespace-nowrap">
            <h3
              className={`rounded-2xl  relative text-black/80 dark:text-white/80 leading-[18px] inline-block px-[6px] ${invoiceRowData.dot} ${invoiceRowData.paymentdata}`}
            >
              {invoiceRowData.paymentStatus}
            </h3>
          </td>
          <td className="px-3 pr-0 py-2 whitespace-nowrap">
            <h3
              className={`rounded-2xl leading-[18px] relative text-black/80 dark:text-white/80 inline-block px-[6px] ${invoiceRowData.typedot}`}
            >
              {invoiceRowData.type}                                           
            </h3>
          </td>
          <td className={` ${ selected.includes(index) ? "group-hover:opacity-100" : "opacity-0 group-hover:opacity-100 pr-4"}`}>
            <Dropdown             
              itemsclass="!p-2 w-[240px] !block right-0  [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { id: 1, title: "Print packing slip", link: "" },
                { id: 1, title: "Archive order", link: "" },
                { id: 1, title: "Put on Hold (or Unhold order)", link: "" },
                { id: 1, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "" },
                { id: 1, title: "Fulfil order (or Mark as Unfulfilled)", link: "" },
                { id: 1, title: "View details", link: "/invoices/details" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default InvoiceTable;
                                