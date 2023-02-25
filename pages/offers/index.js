import React, { useState } from "react";
import Image from "next/image";
import Pagetitle from "@/components/ui/Pagetitle";
import Card from "@/components/ui/Card";
import offersCards from "@/assets/images/img/offers-card.svg";
import Button from "@/components/ui/Button";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import Threedots from "@/assets/images/icon/Dots-three-outline.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import PageHeader from "@/components/ui/PageHeader";
import Amountorder from "@/components/offers/Amountoffer";
import Alert from "@/components/ui/Alert";
import Link from "next/link";
import InputContent from "@/components/ui/InputContent";
import VarientDropdown from "@/components/ui/SelectOption";
import CheckBox from "@/components/ui/CheckBox";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import DAtePicker from "@/components/ui/DatePicker";
import Layout from "@/layouts/layout";
import AmountOffer from "@/components/offers/Amountoffer";

const TableRow = [
  {
    id: 1,
    product: "EKHKSS3S266H",
    status: "Active",
    type: "40% off entire order • One use per customer ",
    inventory: "Code",
    vendor: "0",
    name: "active",
  },
  {
    id: 2,
    product: "Copy of EKHKSS3S266H",
    status: "Draft",
    type: "40% off entire order • One use per customer ",
    inventory: "Automatic",
    vendor: "0",
    name: "draft",
  },
];
const Offers = () => {
  const [selectPlanOpen, setSelectPlanOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const SelectPlanHandler = () => {
    setSelectPlanOpen(true);
  };
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };
  // checkbox
  const selectOfferItem = (e) => {
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
          <div className="flex justify-between items-center text mb-5 flex-wrap gap-5">
            <Pagetitle title={"Offers & Discounts"} />
            {selectPlanOpen ? (
              <Button color={"green"} name={"Create discount"} className="font-semibold text-blacklight" />
            ) : (
              ""
            )}
          </div>
          {!selectPlanOpen ? (
            <div className={"md:mt-16 mt-5"}>
              <Card
                cardImage={offersCards}
                title={"Create Offers & Discounts"}
                discription={"Generate discount codes and set up automatic discounts for checkout."}
              >
                <Button
                  color={"yellow"}
                  name={"Create discount"}
                  size={"small"}
                  className="!text-xs font-semibold dark:text-blacklight !text-blacklight"
                  onClick={SelectPlanHandler}
                />
              </Card>
            </div>
          ) : (
            <>
              <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5">
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
                      src={Threedots}
                      alt=""
                      className="dark:invert p-1 w-7 h-7 mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="bg-black/20 w-[1px] h-5 mr-4 dark:bg-white/20"></span>
                    <span className="mr-4 text-xs">{selected.length} Selected</span>
                    <Button color={"lightgrey"} name={"Archive Selected"} secondary={"true"} className={"text-sm"} />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="relative mr-3 md:mr-5">
                    <input
                      placeholder="Search"
                      className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/5 p-[3px] pr-3 focus-visible:outline-none"
                    />
                    <Image
                      src={Searchicon}
                      alt=""
                      className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert mr-6"
                    />
                  </div>
                  <button type="button">View Archived</button>
                </div>
              </div>
              <div className="min-h-[440px] overflow-x-auto">
                <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px] archive-select-table">
                  <thead>
                    <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                      <th className="font-normal pl-0 py-3 before:top-0 before:right-0 w-10 before:h-full before:absolute relative h-full text-start heading-border ">
                        <CheckBox name={"select all"} onChange={selectAllCheckboxes} className={"pl-[5px]"} />
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Title
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Status
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Description
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Method
                      </th>
                      <th className="font-normal p-3 pr-[10px] text-start relative h-full heading-border">Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AmountOffer
                      selectAll={selectAll}
                      handleChange={selectOfferItem}
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
        ""
      )}
    </Layout>
  );
};

export default Offers;
