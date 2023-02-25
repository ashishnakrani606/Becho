import React, { useState } from "react";
import Image from "next/image";
import ProductSelectTable from "@/components/products/ProductSelectTable";
import Button from "@/components/ui/Button";
import selectStroke from "@/assets/images/icon/select-stroke.svg";
import Pagetitle from "@/components/ui/Pagetitle";
import Addicon from "@/assets/images/icon/Add.svg";
import ProductCard from "@/assets/images/icon/product-main.svg";
import Card from "@/components/ui/Card";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Threedots from "@/assets/images/icon/Dots-three-outline.svg";
import RadioCircle from "@/assets/images/icon/radio-circle.svg";
import MediaWall from "@/assets/images/img/media-wall.png";
import Camera from "@/assets/images/icon/camera.svg";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Alert from "@/components/ui/Alert";
import InputContent from "@/components/ui/InputContent";
import OptionValue from "@/components/products/OptionValue";
import VarientDropdown from "@/components/ui/SelectOption";
import Toggle from "@/components/ui/Toggle";
import Layout from "@/layouts/layout";
import CheckBox from "@/components/ui/CheckBox";
import brownThrowPillows from "@/assets/images/users/brown-throw-pillows.png";

const TableRow = [
  {
    id: 1,
    productImg: brownThrowPillows,
    product: "Brown Throw Pillows",
    status: "Active",
    type: "Indoor ",
    inventory: "26 in stock",
    vendor: "Rustic LTD",
    name: "brown",
  },
  {
    id: 2,
    productImg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    name: "antique",
  },
  {
    id: 3,
    productImg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ",
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name: "biodegradable",
  },
  {
    id: 4,
    productImg: brownThrowPillows,
    product: "Brown Throw Pillows",
    status: "Active",
    type: "Indoor ",
    inventory: "26 in stock",
    vendor: "Rustic LTD",
    name: "brownthrow",
  },
  {
    id: 5,
    productImg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    name: "antiquedrawers",
  },
  {
    id: 6,
    productImg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ",
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name: "cardboard",
  },
  {
    id: 7,
    productImg: brownThrowPillows,
    product: "Gardening hand trowel",
    status: "Draft",
    type: "Outdoor ",
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name: "gardening",
  },
  {
    id: 8,
    productImg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    name: "companybrownthrow",
  },
  {
    id: 9,
    productImg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ",
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name: "companycardboard",
  },
  {
    id: 10,
    productImg: brownThrowPillows,
    product: "Gardening hand trowel",
    status: "Draft",
    type: "Outdoor ",
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name: "handtrowel",
  },
];
const products = () => {
  const [selectProductOpen, setSelectProductOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const SelectProductHandler = () => {
    setSelectProductOpen(true);
  };
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };

  const [radiioBtn, setRadiioBtn] = useState(false);
  const productTypeHandler = () => {
    setRadiioBtn(!radiioBtn);
  };

  const selectProductItem = (e) => {
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
          <div className="flex items-center justify-between">
            <Pagetitle title={"products"} />
            {selectProductOpen ? (
              <div className="text-black/40 dark:text-white/40">
                <button className="py-[5px] px-2 mr-2 text-xs" type="button">
                  Export
                </button>
                <button className="py-[5px] px-2 mr-2 text-xs" type="button">
                  Import
                </button>
                <Button color={"green"} name={"Add product"} className="!py-[5px]"/>
              </div>
            ) : (
              ""
            )}
          </div>
          {!selectProductOpen ? (
            <Card
              className={"md:mt-16 mt-5"}
              cardImage={ProductCard}
              title={"Add your first product"}
              discription={
                "Create product descriptions, add images, and set prices for items to be sold. Learn about products."
              }
            >
              <Button
                color={"yellow"}
                secondary={"true"}
                size={"small"}
                name={"Add product"}
                className="font-semibold mr-5 !text-xs"
                onClick={SelectProductHandler}
              />
              <Button
                color={"grey"}
                secondary={"true"}
                size={"small"}
                name={"Import"}
                className="font-semibold !text-xs"
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
                      src={Threedots}
                      alt=""
                      className="dark:invert p-1 w-7 h-7 mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="bg-black/20 w-[1px] h-5 mr-4"></span>
                    <span className="mr-4 text-xs">{selected.length} Selected</span>
                    <Button color={"lightgrey"} secondary={"true"} name={"Archive Selected"} className={"text-sm"} />
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
                  <button type="button" className="ml-8 text-xs">
                    View Archived
                  </button>
                </div>
              </div>
              <div className="overflow-auto min-h-[493px]">
                <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px] archive-select-table">
                  <thead>
                    <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                      <th className="font-normal pl-0 py-3 dark:before:bg-white w-10 before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border ">
                        <CheckBox
                          className={"pl-[5px] flex items-center"}
                          name={"select all"}
                          onChange={selectAllCheckboxes}
                        />
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Product
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Status
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Type
                      </th>
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Inventory
                      </th>
                      <th className="font-normal p-3 pr-[10px] text-start relative h-full">Vendor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductSelectTable
                      selectAll={selectAll}
                      handleChange={selectProductItem}
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

export default products;
