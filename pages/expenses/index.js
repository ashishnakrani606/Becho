import React, { useState } from "react";
import Image from "next/image";
import ExpenseTable from "@/components/Expense/ExpenseTable";
import Button from "@/components/ui/Button";
import Pagetitle from "@/components/ui/Pagetitle";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import Calender from "@/assets/images/icon/CalendarBlank.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Threedots from "@/assets/images/icon/Dots-three-outline.svg";
import Link from "next/link";
import Layout from "@/layouts/layout";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";

const TableRow = [
  {
    id: 1,
    icon: Calender,
    date: "15 Mar 2023",
    expenses: "Salary ",
    expeseName: "- Sunil Kumar",
    type: "Automatic ",
    color: "greydarker",
    inventory: "₹ 1,000 - 3 leaves",
    inventoryStyle: "border-0",
    amout: "₹ 25,000",
    amountDeduc: "₹ 24,000",
    status: "Pending",
    statusColor: "lightred",
    typeOfTime: "Monthly",
    typeColor: "lightblue",
    vendor: "Rustic LTD",
    actions: "Mark as paid",
    actionsStyle: "border rounded-lg py-0.5 px-1 inline border-black/10 dark:border-white/10 text-sm",
    actionsRowStyle: "max-w-[127px] flex items-center justify-end  whitespace-nowrap",
    name: "brown",
  },
  {
    id: 2,
    icon: Calender,
    date: "15 Mar 2023",
    type: "Manual ",
    color: "greylight",
    expenses: "Dustbin picker ",
    lowstock: "lowstock",
    inventory: "Add deduction",
    inventoryStyle: "ml-4 !py-[2px] px-1 !text-sm",
    amout: "₹ 600",
    amountDeduc: "₹ 600",
    status: "Competed",
    statusColor: "darkgreen",
    typeOfTime: "One-time",
    typeColor: "aliceblue",
    actions: "Paid - Cash",
    actionsRowStyle: "sm:max-w-[127px] whitespace-nowrap sm:whitespace-normal",
    actionsStyle: "sm:max-w-[94px]",
    name: "antique",
  },
  {
    id: 3,
    icon: Calender,
    date: "14 Mar 2023",
    type: "Manual ",
    color: "greylight",
    expenses: "Electricity",
    inventory: "Add deduction",
    inventoryStyle: "ml-4 !py-[2px] px-1 !text-sm",
    amout: "₹ 2,40,000",
    amountDeduc: "₹ 2,40,000",
    status: "Competed",
    statusColor: "darkgreen",
    typeOfTime: "Electricity",
    typeColor: "yellow",
    actions: "Paid - Account Transfer",
    actionsRowStyle: "sm:max-w-[127px] whitespace-nowrap sm:whitespace-normal",
    actionsStyle: "sm:max-w-[94px]",
    name: "biodegradable",
  },
  {
    id: 4,
    icon: Calender,
    date: "14 Mar 2023",
    expenses: "Electricity",
    type: "Manual ",
    color: "greylight",
    inventory: "Add deduction",
    inventoryStyle: "ml-4 !py-[2px] px-1 !text-sm",
    amout: "₹ 2,40,000",
    amountDeduc: "₹ 2,40,000",
    status: "Pending",
    statusColor: "lightred",
    typeOfTime: "Electricity",
    typeColor: "yellow",
    actions: "Bill Paid?",
    actionsStyle: "border rounded-lg py-0.5 px-1 inline border-black/10 dark:border-white/10 text-sm",
    actionsRowStyle: "max-w-[127px] flex items-center justify-end",
    name: "brownthrow",
  },
  {
    id: 5,
    icon: Calender,
    date: "14 Mar 2023",
    expenses: "Bill #4434",
    type: "Manual ",
    color: "greylight",
    inventory: "Add deduction",
    inventoryStyle: "ml-4 !py-[2px] px-1 !text-sm",
    amout: "₹ 30,000",
    amountDeduc: "₹ 30,000",
    status: "Pending",
    statusColor: "darkgreen",
    typeOfTime: "Monthly",
    typeColor: "lightblue",
    actions: "Paid - Cheque Number 4455",
    actionsRowStyle: "max-w-[127px] whitespace-nowrap sm:whitespace-normal",
    actionsStyle: "max-w-[94px]",
    lowstock: "lowstock",
    name: "Competed",
  },
];
const expenses = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };
  const selectExpensesItem = (e) => {
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
      TableRow.forEach((el, index) => {
        tempSelectAll.push(index);
      });
    }
    setSelected(tempSelectAll);
  };
  return (
    <Layout>
      <>
        <div className="flex items-center justify-between">
          <Pagetitle title={"Expenses"} />
          <div className="text-black/40 dark:text-white/40">
            <Button className="py-[5px] px-2 mr-2 text-xs" secondary="true" name={"Export"}/>
            <Button className="py-[5px] px-2 mr-2 text-xs" secondary="true" name={"Import"} />
            <Button color={"green"} name={"Add expense"} size={"small"} />
          </div>
        </div>
        <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5 mt-4">
          <div className="flex items-center flex-wrap sm:flex-nowrap">
            <div className="flex items-center mr-4 ">
              <Dropdown
                className="right-0 left-[unset]"
                itemsclass="w-[240px] left-0 p-2 !divide-y-0"
                button={
                  <div className="flex gap-2 hover:bg-black/5  p-1 w-7 h-7 mr-2  rounded-lg  hover:dark:bg-white/5  items-center  justify-center">
                    <Image src={FunnelSimple} alt="" className="dark:invert" />
                  </div>
                }
                dropdownitem={[
                  { id: 1, title: "Product title", link: "" },
                  { id: 2, title: "Created", link: "" },
                  { id: 3, title: "Updated", link: "" },
                  { id: 4, title: "Inventory", link: "" },
                  { id: 5, title: "Type", link: "" },
                  { id: 6, title: "Category", link: "" },
                ]}
              />
              <Dropdown
                className="left-0"
                itemsclass="left-0 p-2 !divide-y-0 whitespace-nowrap"
                button={
                  <div className="flex  items-center w-7 h-7 p-1 mr-2 justify-center hover:bg-black/5 hover:dark:bg-white/5 cursor-pointer rounded-lg">
                    <Image src={ArrowsDownUp} alt="" className="dark:invert" />
                  </div>
                }
                dropdownitem={[
                  { id: 1, title: "A-Z", link: "/" },
                  { id: 2, title: "Z-A", link: "/" },
                ]}
              />
              <Dropdown
                className="left-0"
                itemsclass="sm:w-[240px] w-[190px] left-0 p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-1 [&>a:nth-child(6)]:!border-0 [&>a:nth-child(7)]:!border-t [&>a:nth-child(8)]:!border-0"
                button={
                  <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 hover:dark:bg-white/5 cursor-pointer rounded-lg transition-all duration-300">
                    <Image src={Threedots} alt="" className="dark:invert" />
                  </div>
                }
                dropdownitem={[
                  { id: 1, title: "Set as active", link: "/" },
                  { id: 2, title: "Set as draft", link: "/" },
                  { id: 3, title: "Archive products", link: "/" },
                  { id: 4, title: "Delete products", link: "/" },
                  { id: 5, title: "Add tags", link: "/" },
                  { id: 6, title: "Remove tags", link: "/" },
                  { id: 7, title: "Add to category", link: "/" },
                  { id: 8, title: "Remove from category", link: "/" },
                ]}
              />
            </div>
            <div className="flex items-center">
              <span className="bg-black/20 dark:bg-white/20 w-[1px] h-5 mr-4"></span>
              <span className="mr-4 text-xs">{selected.length} Selected</span>
              <Button color={"lightgrey"} secondary={"true"} name={"Delete Selected"} className={"!text-sm"} />
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
        <div className="overflow-x-auto min-h-[462px]">
          <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px] archive-select-table">
            <thead>
              <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                <th className="font-normal pl-0 w-6 py-3 dark:before:bg-white before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border leading-normal">
                  <CheckBox
                    className={"pl-[5px] flex items-center"}
                    name={"select all"}
                    onChange={selectAllCheckboxes}
                  />
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Date
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Expense Name
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Manual/Auto
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Deductions
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Amount
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Amount - Deduc
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Status
                </th>
                <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-normal">
                  Type
                </th>
                <th className="font-normal p-3 pr-[10px] text-start relative h-full">Action</th>
              </tr>
            </thead>
            <tbody>
              <ExpenseTable
                selectAll={selectAll}
                handleChange={selectExpensesItem}
                opentableHandler={opentableHandler}
                TableRow={TableRow}
                selected={selected}
              />
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-5">
          <ul className="flex">
            <li className="mr-2">
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                <Image src={ArrowLineLeft} alt="" className="dark:invert" />
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={"#0"}
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
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                2
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                3
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                4
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                5
              </Link>
            </li>
            <li>
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center">
                <Image src={ArrowLineLeft} alt="" className="dark:invert rotate-180" />
              </Link>
            </li>
          </ul>
        </div>
      </>
    </Layout>
  );
};
export default expenses;
