import Image from "next/image";
import React from "react";
import ArchiveSelectTable from "../src/components/customers/ArchiveSelectTable";
import Button from "../src/components/ui/Button";
import selectStroke from "../src/assets/images/icon/select-stroke.svg";
import Pagetitle from "../src/components/ui/Pagetitle";
import Addicon from "../src/assets/images/icon/Add.svg";
import CustomersCard from "./../src/assets/images/icon/customers-main.svg";
import Card from "../src/components/ui/Card";
import FunnelSimple from "../src/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "../src/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "../src/assets/images/icon/searchico.svg";
import ArrowLineLeft from "../src/assets/images/icon/ArrowLineLeft.svg";
import Threedots from "../src/assets/images/icon/Dots-three-outline.svg";
import CheckCircle from "../src/assets/images/icon/CheckCircle.svg";
import RadioCircle from "../src/assets/images/icon/radio-circle.svg";
import CustomerPhoto from "../src/assets/images/users/customer-photo.png";
import Camera from "../src/assets/images/icon/camera.svg";
import Link from "next/link";
import PageHeader from "../src/components/ui/PageHeader";
import Alert from "../src/components/ui/Alert";
import UnsavedChanges from "../src/components/ui/UnsavedChanges";

import InputContent from "../src/components/ui/InputContent";
import OptionValue from "../src/components/products/OptionValue";
import VarientDropdown from "../src/components/ui/SelectOption";
import Toggle from "../src/components/ui/Toggle";
import { useState } from "react";
import MultiselectDropdown from "../src/components/ui/MultiselectDropdown";

const customers = () => {
  const [selectCustomersOpen, setSelectCustomersOpen] = useState(false);
  const SelectCustomersHandler = () => {
    setSelectCustomersOpen(true);
  };

  const [opentablepage, setopentablepage] = useState(false);

  const opentableHandler = () => {
    setopentablepage(true);
  };

  const [radiioBtn, setRadiioBtn] = useState(false);

  const productTypeHandler = () => {
    setRadiioBtn(!radiioBtn);
  };

  return (
    <>
      {!opentablepage ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <Pagetitle title={"Customers"} />
            {selectCustomersOpen ? (
              <div>
                <button className="py-[5px] px-2 mr-2 text-xs" type="button">
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
                name={"Add customer"}
                className="font-semibold mr-5"
                onClick={SelectCustomersHandler}
              />
              <Button color={"grey"} name={"Import"} className="font-semibold" />
            </Card>
          ) : (
            <>
              <div className="bg-primary-light rounded-lg p-2 mb-2 flex items-center justify-between">
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
                    <span className="mr-4 text-xs">1 Selected</span>
                    <Button color={"grey"} name={"Archive Selected"} />
                  </div>
                </div>
                <div className="relative">
                  <input
                    placeholder="Search"
                    className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 p-[3px] pr-3 focus-visible:outline-none"
                  />
                  <Image
                    src={Searchicon}
                    alt=""
                    className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert"
                  />
                </div>
              </div>
              <div className="min-h-[440px]">
                <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px] archive-select-table">
                  <thead>
                    <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                      <th className="font-normal pl-0 py-3 before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border ">
                        <Image src={selectStroke} alt="" className="mx-[5px] dark:invert" />
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
                      <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                        Amount spenta
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ArchiveSelectTable opentableHandler={opentableHandler} />
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
                      className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
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
        <>
          <UnsavedChanges>
            <Button color={"white"} name={"Discard"} className={"mr-5 dark:border-blacklight dark:text-black"} />
            <Button color={"green"} name={"Delete Selected"} />
          </UnsavedChanges>
          <PageHeader
            className={"mb-5 sm:flex-nowrap flex-wrap gap-5"}
            orderid={"New customer"}
            Badgesdata={[]}
          ></PageHeader>
          <div className="flex flex-wrap justify-between gap-y-5 mb-4">
            <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-11 p-5 sm:px-5 px-3">
              <div className="grid sm:grid-cols-2 sm:gap-6 ">
                <InputContent ontent title={"First name"} className="dark:bg-black/40">
                  <input type="text" name="" value="Baalkrishan" className="w-full dark:bg-transparent" />
                </InputContent>
                <InputContent title={"Last name"} className="dark:bg-black/40">
                  <input type="text" name="" value="Lal Sani" className="w-full dark:bg-transparent" />
                </InputContent>
              </div>
              <InputContent className={"py-2.5 dark:bg-black/40 dark:text-white/40"}>
                <VarientDropdown
                  selectitem={[
                    { id: 1, name: "Select Language..." },
                    { id: 2, name: "Maximum discount uses 2" },
                    { id: 3, name: "Maximum discount uses 3" },
                  ]}
                  className="dark:text-white/40"
                />
              </InputContent>
              <InputContent className={"py-2.5 dark:bg-black/40"}>
                <input
                  type="text"
                  name=""
                  value=""
                  placeholder="Email"
                  className="dark:bg-transparent dark:text-white/40 dark:placeholder-white/40"
                />
              </InputContent>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"Country code"} className={"dark:bg-black/40 dark:text-white/40"}>
                  <VarientDropdown
                    selectitem={[
                      { id: 1, name: "+91" },
                      { id: 2, name: "Select2" },
                    ]}
                    className="dark:text-white/40"
                  />
                </InputContent>
                <InputContent title={"Phone number"} className="dark:bg-black/40">
                  <input type="number" name="" value="8073589105" className="w-full dark:bg-transparent" />
                </InputContent>
              </div>
              <div className="product-type-radio grid">
                <input
                  id="product-type-1"
                  type="radio"
                  value=""
                  name="product-type"
                  className="h-0 w-0"
                  onClick={productTypeHandler}
                />
                <input
                  id="product-type-2"
                  type="radio"
                  value=""
                  name="product-type"
                  className="h-0 w-0"
                  onClick={productTypeHandler}
                />
                <div className="grid sm:grid-cols-2 sm:gap-6">
                  <label
                    for="product-type-1"
                    className={`cursor-pointer bg-white border border-black/10 rounded-lg py-6 px-5 mb-3 dark:border-secondary-purpleb dark:bg-black/40 relative ${
                      !radiioBtn ? "border-black" : "border-black/10"
                    }`}
                  >
                    {!radiioBtn ? (
                      <Image src={CheckCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    ) : (
                      <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        !radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Email subscription
                    </h3>
                    <p
                      className={` ${
                        !radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Customer agreed to receive marketing emails.
                    </p>
                  </label>
                  <label
                    for="product-type-2"
                    className={`cursor-pointer bg-white border border-black/10 rounded-lg py-6 px-5 mb-3 dark:bg-black/40 dark:border-white/10 relative ${
                      radiioBtn ? "border-black" : "border-black/10"
                    }`}
                  >
                    {radiioBtn ? (
                      <Image src={CheckCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    ) : (
                      <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      SMS subscription
                    </h3>
                    <p
                      className={` ${
                        radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Customer agreed to receive SMS marketing text messages.
                    </p>
                  </label>
                </div>
              </div>
              <h3 className="text-lg font-semibold pb-4">Address</h3>
              <InputContent className={"py-2.5 dark:bg-black/40 dark:text-white/40"}>
                <VarientDropdown
                  selectitem={[
                    { id: 1, name: "Select Country..." },
                    { id: 2, name: "Maximum discount uses 2" },
                    { id: 3, name: "Maximum discount uses 3" },
                  ]}
                />
              </InputContent>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"First name"} className="dark:bg-black/40">
                  <input type="text" name="" value="Baalkrishan" className="w-full dark:bg-transparent" />
                </InputContent>
                <InputContent title={"Last name"} className="dark:bg-black/40">
                  <input type="text" name="" value="Lal Sani" className="w-full dark:bg-transparent" />
                </InputContent>
              </div>
              <InputContent title={"Company"} className="dark:bg-black/40">
                <input type="text" name="" value="Company name" className="w-full dark:bg-transparent" />
              </InputContent>
              <InputContent title={"Address"} className="dark:bg-black/40">
                <input
                  type="text"
                  name=""
                  value="Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
                  className="w-full dark:bg-transparent"
                />
              </InputContent>
              <InputContent title={"Apartment etc."} className="dark:bg-black/40">
                <input type="text" name="" value="Apartment, suite, etc" className="w-full dark:bg-transparent" />
              </InputContent>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"City"} className="dark:bg-black/40">
                  <input type="text" name="" value="Pilani" className="w-full dark:bg-transparent" />
                </InputContent>
                <InputContent title={"State"} className="dark:bg-black/40 dark:text-white/40">
                  <VarientDropdown
                    selectitem={[
                      { id: 1, name: "Rajasthan" },
                      { id: 2, name: "Select2" },
                    ]}
                  />
                </InputContent>
              </div>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"Country code"} className="dark:bg-black/40 ">
                  <VarientDropdown
                    selectitem={[
                      { id: 1, name: "+91" },
                      { id: 2, name: "Select2" },
                    ]}
                  />
                </InputContent>
                <InputContent title={"Phone number"} className="dark:bg-black/40">
                  <input type="number" name="" value="8073589105" className="w-full dark:bg-transparent" />
                </InputContent>
              </div>

              <p className="mb-[6px] text-black/40 dark:text-white/40">Other options</p>
              <InputContent title={"Notes"} className="dark:bg-black/40">
                <input type="text" name="" value="Text" className="w-full dark:bg-transparent" />
              </InputContent>
              <InputContent title={"Add tags"} className={"mt-3 w-full cursor-pointer"}>
                <MultiselectDropdown
                  options={[
                    {
                      cat: "tag 1",
                      key: "tag 1",
                    },
                    {
                      cat: "tag 2",
                      key: "tag 2",
                    },
                    {
                      cat: "tag 3",
                      key: "tag 3",
                    },
                    {
                      cat: "tag 4",
                      key: "tag 4",
                    },
                  ]}
                  selectedValues={[
                    {
                      cat: "tag",
                      key: "tag",
                    },
                    {
                      cat: "tag",
                      key: "tag",
                    },
                  ]}
                />
              </InputContent>
              <div className="flex justify-end sm:py-9 py-5 pt-7 flex-wrap gap-4">
                <Button name={"Save"} className="font-normal text-sm text-white " color="green" size="large" />
              </div>
            </div>
            <div className="w-full md:max-w-[35%] ">
              <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:px-5 py-5 px-3 mb-7 dark:bg-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Media</h3>
                  <label className="bg-primary-blue text-xs font-semibold rounded-lg px-2 py-[5px] cursor-pointer dark:text-black">
                    {" "}
                    Add
                    <input className="font-semibold " type="file" />
                  </label>
                </div>
                <div>
                  <div className="relative group max-w-[120px] w-full">
                    <Image src={CustomerPhoto} alt="" className="rounded-lg cursor-pointer" />
                    <Image
                      src={Camera}
                      alt=""
                      className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <p className="my-[10px] text-black/40 dark:text-white/40">Allowed file types: png, jpg, jpeg.</p>
                </div>
              </div>
              <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:p-5 py-5 px-3 mb-8 dark:bg-white/5">
                <h3 className="text-lg font-semibold">Last placed orders</h3>
                <p className="text-lg font-semibold text-black/40 py-[13px] dark:text-white/40">
                  This customer hasn’t placed any orders.
                </p>
                <div>
                  <Button name={"Create order"} color={"purple"} className="font-normal text-sm " size="large" />
                </div>
              </div>
              <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:p-5 py-5 px-3 dark:bg-white/5">
                <h3 className="text-lg font-semibold mb-[10px]">Last placed orders</h3>
                <div className="flex justify-between bg-white py-[10px] px-4 mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
                  <h2 className="text-sm text-blacklight font-semibold border-black/5 dark:text-white">Total orders</h2>
                  <h2 className="text-sm text-blacklight font-semibold dark:text-white">2</h2>
                </div>
                <div className="flex justify-between py-[11px] px-4 bg-white mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
                  <p className="text-blacklight text-xs	leading-[18px] dark:text-white">#CM9805</p>
                  <p className="text-[#219653] text-xs	leading-[18px]">View details</p>
                </div>
                <div className="flex justify-between py-[11px] px-4 bg-white mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
                  <p className="text-blacklight text-xs	leading-[18px] dark:text-white">#CM9805</p>
                  <p className="text-[#219653] text-xs	leading-[18px]">View details</p>
                </div>
                <div>
                  <Button name={"Create order"} color={"purple"} className="text-sm" size="large" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default customers;
