import React ,{ useState } from "react";
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
import CheckCircle from "@/assets/images/icon/CheckCircle.svg";
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

const products = () => {
  const [selectProductOpen, setSelectProductOpen] = useState(false);  
  const [active, setActive] = useState(false);
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
                <Button color={"green"} name={"Add product"}/>
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
              <Button color={"grey"} secondary={"true"}  size={"small"} name={"Import"} className="font-semibold !text-xs" />
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
                    <span className="mr-4 text-xs">1 Selected</span>
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
                      <th className="font-normal pl-0 py-3 dark:before:bg-white before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border ">
                        <Image src={selectStroke} alt="" className="mx-[5px] w-[18px] dark:invert" />
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
                      <th className="font-normal p-3 pr-[10px] text-start relative h-full">
                        Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductSelectTable  opentableHandler={opentableHandler}/>
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
                      href={"#0"} onClick={setActive}
                      className={`rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center ${!active ? "bg-black/5 dark:bg-white/5" :  ""}`}>
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
                      className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center">
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
            <Button
              color={"white"}
              secondary={"true"}
              size={"small"}
              name={"Discard"}
              outline={"true"}
              className={"!text-xs mr-5 dark:border-blacklight dark:text-blacklight"}
            />
            <Button color={"primarygreen"} name={"Save"} />
          </UnsavedChanges>
          <PageHeader
            arrow={true}
            className={"mb-5 flex-wrap gap-5 mt-5"}
            orderid={"Antique Drawers"}
            Badgesdata={[
              { color: "green", name: "Active" },
              { color: "purple", name: "Draft" },
            ]}
          >
            <Link
              href={"#0"}
              className="hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg px-2 py-[5px] hover:text-black/80"
            >
              Duplicate
            </Link>
            <Link
              href={"#0"}
              className=" hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg px-2 py-[5px] hover:text-black/80"
            >
              Preview
            </Link>
            <Link
              href={"#0"}
              className="hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg px-2 py-[5px] hover:text-black/80"
            >
              Copy Link
            </Link>
          </PageHeader>
          <Alert
            color={"red"}
            title={"There is 1 error with this product:"}
            description={"Option name can’t be blank"}
          />
          <Alert
            color={"green"}
            className={"mb-5"}
            title={"Copy of Antique Drawers was created successfully. What’s next?"}
            description={"Edit other product details."}
          />
          <div className="flex flex-wrap justify-between gap-y-5 mb-4">
            <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 p-5 sm:px-5 px-3">
              <InputContent title={"title"}>
                <input type="text" name="" value="Antique Drawers" className="bg-transparent" />
              </InputContent>
              <InputContent title={"Description"}>
                <textarea
                  rows="5"
                  className="w-full dark:bg-transparent"
                  value={"Antique wooden chest of drawers"}
                ></textarea>
              </InputContent>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"Price"}>
                  <input type="text" name="" value="₹ 250.00" className="w-full bg-transparent" />
                </InputContent>
                <InputContent title={"Strikethrough Price (optional)"}>
                  <input type="text" name="" value="₹ 300.00" className="w-full bg-transparent" />
                </InputContent>
              </div>
              <InputContent title={"Charge tax on this product"} className="text-black/40 dark:text-white/40">
                <Toggle turnOff={"Off"} turnOn={"On"} />
              </InputContent>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"SKU"}>
                  <input type="text" name="" value="UGG-BB-PUR-06" className="w-full bg-transparent" />
                </InputContent>
                <InputContent title={"Barcode (ISBN, UPC, GTIN)"}>
                  <input type="number" name="" value="00123456789012" className="w-full bg-transparent" />
                </InputContent>
              </div>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"Quantity (numbers only)"}>
                  <input type="number" name="" value="44" className="w-full bg-transparent" />
                </InputContent>
                <InputContent title={"Track quantity"} className="text-black/40 dark:text-white/40">
                  <Toggle turnOff={"NO"} turnOn={"Yes"} />
                </InputContent>
              </div>
              <div className="product-type-radio grid">
                <p className="mb-[6px] text-black/40 dark:text-white/40">Product type (for shipping)</p>
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
                    className={`cursor-pointer bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-6 px-5 mb-3 relative ${
                      !radiioBtn ? "border dark:border-secondary-purpleb " : "border-black/10"
                    }`}
                  >
                    {!radiioBtn ? (
                      <svg width="26" height="26" className="absolute right-3 top-3" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fill-opacity="0.8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fill-opacity="0.8"
                      />
                    </svg>
                      
                    ) : (
                      <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        !radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Physical product
                    </h3>
                    <p
                      className={` ${
                        !radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Require customers to enter shipping details at checkout.
                    </p>
                  </label>

                  <label
                    for="product-type-2"
                    className={`cursor-pointer bg-white dark:bg-black/40  border border-black/10 rounded-lg py-6 px-5 mb-3 relative ${
                      radiioBtn ? "dark:border-secondary-purpleb" : "border-black/10 "
                    }`}
                  >
                    {radiioBtn ? (
                      <svg width="26" height="26" className="absolute right-3 top-3" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fill-opacity="0.8"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fill-opacity="0.8"
                        />
                      </svg>
                    ) : (
                      <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Digital product
                    </h3>
                    <p
                      className={` ${
                        radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Customers won’t enter shipping details at checkout.
                    </p>
                  </label>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <InputContent title={"Shipping weight"}>
                  <input type="number" name="" value="4.30" className="w-full bg-transparent" />
                </InputContent>
                <InputContent title={"Type"}>
                  <VarientDropdown
                    selectitem={[
                      { id: 1, name: "Select" },
                      { id: 2, name: "Select2" },
                    ]}
                  />
                </InputContent>
              </div>
              <div className="grid">
                <p className="mt-[2px] mb-[6px] text-black/40 dark:text-white/40">Variants</p>
                <InputContent title={"Option name"}>
                  <VarientDropdown
                    className={"!text-black/80 dark:!text-white/80"}
                    selectitem={[
                      { id: 1, name: "Style" },
                      { id: 2, name: "Style 2" },
                      { id: 3, name: "Style 3" },
                    ]}
                  />
                </InputContent>
              </div>
              <div className="grid">
                <p className="mt-[2px] text-black/40 dark:text-white/40">Option values</p>
                <OptionValue title={"Style 1"} />
                <OptionValue title={"Style 2"} />
                <OptionValue title={"Style 3"} />
                <Link
                  href={"#0"}
                  className="sm:max-w-[252px] w-full px-5 py-4 mt-3 text-black/20 border border-black/10 rounded-lg bg-white bg-transparent dark:text-white/20 dark:border-white/10"
                >
                  Add another value
                </Link>
                <div className="flex justify-between sm:py-9 py-5 pt-7 flex-wrap gap-4 ">
                  <div>
                    <Button
                      name={"Archive product"}
                      size={"medium"}
                      className="mr-3 mt-2"
                      outline={"true"}
                      color="grey"
                    />
                    <Button name={"Delete product"} size={"medium"} className=" mt-2" outline={"true"} color={"red"} />
                  </div>
                  <Button name={"Save"} className="font-normal text-sm  text-white" color={"green"} size="large" />
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[35%]">
              <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:px-5 py-5 px-3 mb-7">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-5">
                  <h3 className="text-lg font-semibold">Media</h3>
                  <label className="bg-primary-blue text-blacklight text-xs font-semibold rounded-lg px-2 py-[5px] cursor-pointer">
                    {" "}
                    Add
                    <input className="font-semibold" type="file" />
                  </label>
                </div>
                <div>
                  <div className="relative group max-w-[158px] w-full">
                    <Image src={MediaWall} alt="" className="rounded-lg cursor-pointer" />
                    <Image
                      src={Camera}
                      alt=""
                      className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <p className="my-[10px] text-black/40 dark:text-white/40">Allowed file types: png, jpg, jpeg.</p>
                  <div className="flex">
                    <Image src={MediaWall} alt="" className="w-full max-w-[50px] mr-1 rounded-lg" />
                    <Image src={MediaWall} alt="" className="w-full max-w-[50px] rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:p-5 py-5 px-3">
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="text-lg font-semibold">SEO</h3>
                </div>
                <div>
                  <p className="my-[10px] text-black/40 dark:text-white/40">
                    Edit page title, meta description & URL for search engines.
                  </p>
                  <InputContent title={"Page title"} className={"mb-0"}>
                    <input type="text" name="" value="Antique Drawers" className="w-full bg-transparent" />
                  </InputContent>
                  <p className="my-[10px] text-black/40 dark:text-white/40">15 of 70 characters used</p>
                  <InputContent title={"Description"} className={"mb-0"}>
                    <input
                      type="text"
                      name=""
                      value="Antique wooden chest of drawers"
                      className="w-full dark:!bg-transparent"
                    />
                  </InputContent>
                  <p className="my-[10px] text-black/40 dark:text-white/40">31 of 320 characters used</p>
                  <InputContent title={"URL handle"} className={"mb-0"}>
                    <Link href={"#0"} className="text-black/40 dark:text-white/40 break-all">
                      https://abc-store.becho.io/products/
                      <span className="text-black/80 dark:text-white/80">antique-drawers</span>
                    </Link>
                  </InputContent>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default products;
