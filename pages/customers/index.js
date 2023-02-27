import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArchiveSelectTable from "@/components/customers/ArchiveSelectTable";
import Button from "@/components/ui/Button";
import Pagetitle from "@/components/ui/Pagetitle";
import CustomersCard from "@/assets/images/icon/customers-main.svg";
import Card from "@/components/ui/Card";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Dots from "@/assets/images/icon/Union.svg";
import Layout from "@/layouts/layout";
import CheckBox from "@/components/ui/CheckBox";
import customer1 from "@/assets/images/users/customersimg-1.png";
import customer2 from "@/assets/images/users/customersimg-2.png";

const TableRow = [
  {
    id: 1,
    customersImg: customer1,
    customerName: "Baalkrishan Lal Sani",
    subscription: "Subscribed",
    orders: "0 orders ",
    location: "Pilani RJ, India",
    amount: "₹ 0.00",
    name: "pilani",
  },
  {
    id: 2,
    customersImg: customer2,
    customerName: "Sahil Kohli",
    subscription: "Not subscribed",
    orders: "1 order",
    location: "Chandigarh CH, India",
    amount: "₹ 2000.00",
    name: "chandigarh",
  },
];
const customers = () => {
  const [selectCustomersOpen, setSelectCustomersOpen] = useState(false);
  const SelectCustomersHandler = () => {
    setSelectCustomersOpen(true);
  };

  const [opentablepage, setopentablepage] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);

  const opentableHandler = () => {
    setopentablepage(true);
  };

  const [radiioBtn, setRadiioBtn] = useState(false);

  const productTypeHandler = () => {
    setRadiioBtn(!radiioBtn);
  };
  // checkbox
  const selectCustomerItem = (e) => {
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
      {!opentablepage ? (
        <>
          <div className="flex-wrap flex items-center justify-between mb-4 gap-3">
            <Pagetitle title={"Customers"} />
            {selectCustomersOpen ? (
              <div>
                <button className="py-[5px] px-2 sm:pl-2 pl-0 mr-2 text-xs" type="button">
                  Export
                </button>
                <button className="py-[5px] px-2 mr-2 text-xs" type="button">
                  Import
                </button>
                <Button color={"green"} name={"Add customers"} />
              </div>
            ) : (
              ""
            )}
          </div>
          {!selectCustomersOpen ? (
            <Card
              cardImage={CustomersCard}
              title={"Your customers will show here"}
              discription={"Manage all customers at one place. You can import old customers or add new ones."}
            >
              <Button
                color={"yellow"}
                size={"small"}
                name={"Add customer"}
                secondary={"true"}
                className="!text-xs font-semibold dark:!text-blacklight mr-5"
                onClick={SelectCustomersHandler}
              />
              <Button
                color={"grey"}
                secondary={"true"}
                size={"small"}
                name={"Import"}
                className="font-semibold dark:!text-blacklight text-xs"
              />
            </Card>
          ) : (
            <>
              <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5 mt-5">
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <Image
                      src={FunnelSimple}
                      alt=""
                      className="dark:invert p-1 w-7 h-7 mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300"
                    />
                    <Image
                      src={ArrowsDownUp}
                      alt=""
                      className="dark:invert p-1 w-7 h-7 mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300"
                    />
                    <Image
                      src={Dots}
                      alt=""
                      className="dark:invert p-2 w-7 h-7 mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="bg-black/20 dark:bg-white/20 w-[1px] h-5 mr-4"></span>
                    <span className="mr-4 text-xs">{selected.length} Selected</span>
                    <Button
                      color={"grey"}
                      name={"Delete Selected"}
                      secondary={"true"}
                      className={"dark:bg-white/5 dark:!text-white"}
                    />
                  </div>
                </div>
                <div className="relative">
                  <input
                    placeholder="Search"
                    className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/5 p-[3px] pr-3 focus-visible:outline-none"
                  />
                  <Image
                    src={Searchicon}
                    alt=""
                    className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert"
                  />
                </div>
              </div>
              <div className="min-h-[440px] overflow-x-auto">
                <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px] archive-select-table">
                  <thead>
                    <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                      <th className="font-normal pl-0 py-3 before:top-0 w-10 before:right-0 before:h-full before:absolute relative h-full text-start heading-border ">
                        <CheckBox name={"select all"} onChange={selectAllCheckboxes} className={"pl-[5px]"} />
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Customer name
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Email subscription
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Orders
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Location
                      </th>
                      <th className="font-normal p-3 pr-[10px]  text-start relative h-full heading-border">
                        Amount spenta
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ArchiveSelectTable
                      selectAll={selectAll}
                      handleChange={selectCustomerItem}
                      opentableHandler={opentableHandler}
                      TableRow={TableRow}
                      selected={selected}
                    />
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-10">
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
                      className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                    >
                      <Image src={ArrowLineLeft} alt="" className="dark:invert rotate-180" />
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      ) : (
       " "
      )}
    </Layout>
  );
};
export default customers;
