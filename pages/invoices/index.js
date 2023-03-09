import React, { useState } from "react";
import Addicon from "@/assets/images/icon/Add.svg";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Button from "@/components/ui/Button";
import Pagetitle from "@/components/ui/Pagetitle";
import InvoiceTable from "@/components/invoice/InvoiceTable";
import Dots from "@/assets/images/icon/Union.svg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layouts/layout";
import CheckBox from "@/components/ui/CheckBox";
import Calender from "@/assets/images/icon/CalendarBlank.svg";
import Dropdown from "@/components/ui/Dropdown";

const TableData = [
  {
    id: 1,
    invoiceId: "#BB1402",
    ordercode: "Automatic",
    amount: "₹ 20000.00 + GST",
    paymentStatus: "Paid",
    type: "House Keeping + 1",
    typedot: "bg-[#68CE9C] text-white",
    clientName: "ABC Technologies...",
    date: "Today, 2:34 pm",
    officeName: "Right side first (28 Seater) (4th Floor)",
    icon: Calender,
    dot: "dot-active pl-4 before:dark:bg-white",
    name: "Cash",
  },
  {
    id: 2,
    invoiceId: "#BB1302",
    amount: "₹ 3,50,000.00 + GST",
    paymentStatus: "Payment pending",
    clientName: "Rage Coffee INC",
    date: "Today, 2:34 pm",
    officeName: "Right side first (28 Seater) (4th Floor)",
    type: "Monthly Rent + 2",
    name: "Paymentcheck",
    typedot: " dot-active pl-4",
    icon: Calender,
    paymentdata: "bg-[#FFE899] dark:!text-black",
  },
  {
    id: 3,
    invoiceId: "#BB1302",
    amount: "₹ 10,000.00",
    paymentStatus: "Payment pending",
    clientName: "Ritoban",
    date: "Today, 2:34 pm",
    officeName: "Right side first (28 Seater) (4th Floor)",
    type: "Miscellaneous + 2",
    typedot: "bg-[#FF7F7F] text-white",
    icon: Calender,
    paymentdata: "bg-[#FFE899] dark:!text-black",
    orderStatusData: "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "Payment",
  },
];

const Invoices = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };

  const selectInvoicesItem = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, parseInt(value)]);
    } else {
      setSelected(selected.filter((e) => e != parseInt(value)));
    }
  };

  const selectAllCheckboxes = (e) => {
    let tempSelectAll = [];

    if (e.target.checked) {
      TableData.forEach((el, index) => {
        tempSelectAll.push(index);
      });
    }
    setSelected(tempSelectAll);
  };
  return (
    <Layout>
      <>
        <div className="flex items-center justify-between">
          <Pagetitle title={"Invoices"} />
          <Button color={"green"} name={"Add Invoice"} className="" size={"small"} />
        </div>
        <div className="mb-8">
          <>
            <div className="bg-primary-light  dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5 mt-4">
              <div className="flex items-center sm:flex-nowrap flex-wrap">
                <div className="flex items-center mr-4">
                  <Image
                    src={Addicon}
                    alt=""
                    className="dark:invert mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300 w-7 h-7 p-1"
                  />
                  <Dropdown
                    className="left-0"
                    itemsclass="w-[240px] left-0 p-2 !divide-y-0"
                    button={
                      <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 hover:dark:bg-black/5 cursor-pointer rounded-lg">
                        <Image src={FunnelSimple} alt="" className="dark:invert" />
                      </div>
                    }
                    dropdownitem={[
                      { id: 1, title: "Date", link: "/" },
                      { id: 2, title: "Order number", link: "/" },
                      { id: 3, title: "Payment status", link: "/" },
                      { id: 4, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "/" },
                      { id: 5, title: "Fulfilment status", link: "/" },
                      { id: 6, title: "Amount", link: "/" },
                    ]}
                  />
                  <Dropdown
                    className="left-0"
                    itemsclass="left-0 p-2 !divide-y-0 whitespace-nowrap"
                    button={
                      <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 cursor-pointer rounded-lg">
                        <Image src={ArrowsDownUp} alt="" className="dark:invert" />
                      </div>
                    }
                    dropdownitem={[
                      { id: 1, title: "Lowest to highest", link: "/" },
                      { id: 2, title: "Highest to lowest", link: "/" },
                    ]}
                  />
                  <Dropdown
                    className="left-0"
                    itemsclass="w-[240px]  -left-[72px] sm:left-0 p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
                    button={
                      <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 cursor-pointer rounded-lg">
                        <Image src={Dots} alt="" className="dark:invert" />
                      </div>
                    }
                    dropdownitem={[
                      { id: 1, title: "Print packing slips", link: "/" },
                      { id: 2, title: "Archive orders", link: "/" },
                      { id: 3, title: "Put on Hold (or Unhold orders)", link: "/" },
                      { id: 4, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "/" },
                      { id: 5, title: "Fulfil orders (or Mark as Unfulfilled)", link: "/" },
                      { id: 6, title: "Add tags", link: "/" },
                      { id: 7, title: "Remove tags", link: "/" },
                    ]}
                  />
                </div>
                <div className="flex items-center">
                  <span className="bg-black/20 w-[1px] h-5 mr-4 dark:bg-white/20"></span>
                  <span className="mr-4 text-xs min-w-[67px] leading-[18px]">{selected.length} Selected</span>
                  <Button
                    color={"lightgrey"}
                    secondary={"true"}
                    name={"Delete Selected"}
                    className={"!text-sm leading-5 !py-1"}
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  placeholder="Search"
                  className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/5 p-[3px] pr-3 focus-visible:outline-none"
                />
                <Image src={Searchicon} alt="" className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert" />
              </div>
            </div>
            <div className="overflow-x-auto min-h-[470px] custom-scrollbar">
              <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px]">
                <thead>
                  <tr className="text-black/40 dark:text-white/40 border-b border-black/10 dark:border-white/20 text-xs">
                    <th className="whitespace-nowrap font-normal pl-[5px] px-3 py-[11px] pr-[10px] before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border flex">
                      <CheckBox name={"select all"} onChange={selectAllCheckboxes} />
                      <p className="leading-[18px]">Invoice ID</p>
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                      Due Date
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                      Amount
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border whitespace-nowrap leading-[18px]">
                      Client Name
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border whitespace-nowrap leading-[18px]">
                      <div className="w-24">Office Name</div>
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                      Download
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                      Payment status
                    </th>
                    <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start whitespace-nowrap leading-[18px]">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <InvoiceTable
                    selectAll={selectAll}
                    handleChange={selectInvoicesItem}
                    opentableHandler={opentableHandler}
                    TableData={TableData}
                    selected={selected}
                  />
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-5">
              <ul className="flex">
                <li className="mr-2">
                  <Link
                    href={""}
                    className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                  >
                    <Image src={ArrowLineLeft} alt="" className="dark:invert" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href={""}
                    onClick={setActive}
                    className={`rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center ${
                      !active ? "bg-black/5 dark:bg-white/5" : ""
                    }`}
                  >
                    1
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href={""}
                    className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                  >
                    2
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href={""}
                    className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                  >
                    3
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href={""}
                    className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                  >
                    4
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href={""}
                    className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                  >
                    5
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                  >
                    <Image src={ArrowLineLeft} alt="" className="dark:invert rotate-180" />
                  </Link>
                </li>
              </ul>
            </div>
          </>
        </div>
      </>
    </Layout>
  );
};

export default Invoices;
