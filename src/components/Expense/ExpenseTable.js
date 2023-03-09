import React from "react";
import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";
import Badges from "../ui/Badges";
import Button from "@/components/ui/Button";

const ExpenseTable = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((expenseRowData, index) => (
        <tr
          className={`${
            selected.includes(index) ? "dark:bg-white/5 bg-primary-light" : ""
          } border-b border-black/5 dark:border-white/5 hover:bg-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            expenseRowData.tablesec
          }`}
          key={index}
        >
          <td>
            <div className="pl-[5px] py-2 flex items-center">
              <CheckBox
                value={index}
                name={expenseRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
              {expenseRowData.orderId}
            </div>
          </td>
          <td className="px-3 py-2 whitespace-nowrap leading-normal">
            <Image src={expenseRowData.icon} alt="" className="inline-block mr-2 dark:invert" />
            {expenseRowData.date}
          </td>
          <td className="px-0 pr-0 py-2 whitespace-nowrap ">
            <h3
              className={`relative pl-[11px] leading-[18px] ${
                expenseRowData.status == "Active"
                  ? "text-primary-green"
                  : "" || expenseRowData.status == "Draft"
                  ? "text-black/40 dark:text-white/40"
                  : ""
              } `}
            >
              <span
                className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                  expenseRowData.status == "Active"
                    ? "bg-secondary-greenb"
                    : "" || expenseRowData.status == "Draft"
                    ? "bg-black/40 dark:bg-white/40"
                    : ""
                } `}
              ></span>
              <strong>
              {expenseRowData.expenses}
              </strong>
              {expenseRowData.expeseName}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2 leading-normal">
            <Badges color={expenseRowData.color} name={expenseRowData.type} />
           </td>
          <td className="px-[5px] py-2 whitespace-nowrap leading-normal">
            <Button name={expenseRowData.inventory} secondary={"true"} outline={"true"} className={`${expenseRowData.inventoryStyle}`}></Button>
          </td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap leading-normal">{expenseRowData.amout}</td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap leading-normal">{expenseRowData.amountDeduc}</td>
          <td className="px-3 pr-[10px] py-2 leading-normal">
          <Badges name={expenseRowData.status} color={expenseRowData.statusColor} />
          </td>
          <td className="px-3 pr-[10px] py-2 leading-normal">
          <Badges name={expenseRowData.typeOfTime} color={expenseRowData.typeColor} />
          </td>
          <td className={`px-3 pr-[10px] py-2 leading-normal ${expenseRowData.actionsRowStyle}`}>
            <h6 className={`${expenseRowData.actionsStyle}`}>{expenseRowData.actions}</h6>
          </td>
          <td className={`leading-normal ${selected.includes(index) ? "group-hover:opacity-100" : "opacity-0 group-hover:opacity-100 pr-4"} `}>
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="w-[240px] !block right-0 p-2 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-t "
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { id: 1, title: "Set as active (or Set as draft)", link: "" },
                { id: 2, title: "Add to category", link: "" },
                { id: 3, title: "Remove from category", link: "" },
                { id: 4, title: "View details", link: "expenses/add-expense" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default ExpenseTable;
