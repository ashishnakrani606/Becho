import React from "react";
import { useState } from "react";
import Card from "../../src/components/ui/Card";
import PageHeader from "../../src/components/ui/PageHeader";
import ordersCard from "../../src/assets/images/img/orders-card.svg";
import selectStroke from "../../src/assets/images/icon/select-stroke.svg";
import Addicon from "../../src/assets/images/icon/Add.svg";
import FunnelSimple from "../../src/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "../../src/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "../../src/assets/images/icon/searchico.svg";
import ArrowLineLeft from "../../src/assets/images/icon/ArrowLineLeft.svg";
import Button from "../../src/components/ui/Button";
import Pagetitle from "../../src/components/ui/Pagetitle";
import SelectPlanTable from "../../src/components/orders/SelectPlanTable";
import Dots from "../../src/assets/images/icon/Union.svg";
import Image from "next/image";
import Dropdown from "../../src/components/ui/Dropdown";
import Link from "next/link";
import Alert from "../../src/components/ui/Alert";
import UnsavedChanges from "../../src/components/ui/UnsavedChanges";
import pillows from "../../src/assets/images/users/brown-throw-pillows.png";
import TexDetail from "../../src/assets/images/icon/tax-detail.svg";
import Due from "../../src/assets/images/icon/Add-payment-due.svg";
import NoteCustomer from "../../src/assets/images/icon/warning-circle.svg";
import MultiselectDropdown from "../../src/components/ui/MultiselectDropdown";
import InputContent from "../../src/components/ui/InputContent";

const orders = () => {
  const [selectPlanOpen, setSelectPlanOpen] = useState(false);
  const [active, setActive] = useState(false);
  const SelectPlanHandler = () => {
    setSelectPlanOpen(true);
  };
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };
  const Fulfilled = [
    {
      id: 1,
      productimg: pillows,
      product: "Brown Throw Pillows",
      productitem: "5",
      price: "₹19.99 × 5",
      totleprice: "₹99.95",
    },
    {
      id: 2,
      productimg: pillows,
      product: "Brown Throw Pillows",
      productitem: "5",
      price: "₹19.99 × 5",
      totleprice: "₹99.95",
    },
    {
      id: 3,
      productimg: pillows,
      product: "Brown Throw Pillows",
      productitem: "5",
      price: "₹19.99 × 5",
      totleprice: "₹99.95",
    },
    {
      id: 4,
      productimg: pillows,
      product: "Brown Throw Pillows",
      productitem: "5",
      price: "₹19.99 × 5",
      totleprice: "₹99.95",
    },
  ];

  return (
    <>
      {!opentablepage ? (
        <>
          <Pagetitle title={"orders"} />
          <div className="mb-8 Fvmt-5">
            {!selectPlanOpen ? (
              <Card
                className={"md:mt-16 mt-5"}
                cardImage={ordersCard}
                title={"Your orders will show here"}
                discription={
                  "Select a plan to receive orders and accept payments. Billing starts after free trial ends."
                }
              >
                <Button
                  color={"lightgreen"}
                  name={"Select plan"}
                  className="font-semibold "
                  onClick={SelectPlanHandler}
                />
              </Card>
            ) : (
              <>
                <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5 mt-5">
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      <Image
                        src={Addicon}
                        alt=""
                        className="dark:invert mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300 w-7 h-7 p-1"
                      />
                      <Image
                        src={FunnelSimple}
                        alt=""
                        className="dark:invert mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300 w-7 h-7 p-1"
                      />
                      <Image
                        src={ArrowsDownUp}
                        alt=""
                        className="dark:invert mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300 w-7 h-7 p-1"
                      />
                      <Image
                        src={Dots}
                        alt=""
                        className="dark:invert cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300 w-7 h-7 p-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="bg-black/20 w-[1px] h-5 mr-4 dark:bg-white/20"></span>
                      <span className="mr-4 text-xs">2 Selected</span>
                      <Button color={"lightgrey"} secondary={"true"} name={"Delete"} className={"text-sm"}/>
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
                <div className="overflow-x-auto min-h-[463px]">
                  <table class="xl:w-full lgm:w-[900px] lg:w-full w-[1020px]">
                    <thead>
                      <tr class="text-black/40 dark:text-white/40 border-b text-xs">
                        <th class="whitespace-nowrap font-normal pl-[5px] px-3 py-[11px] pr-[10px] before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border flex">
                          <Image src={selectStroke} alt="" className="mr-[10px] w-[18px] dark:invert" />
                         <p>Order ID</p> 
                        </th>
                        <th class="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                          Date
                        </th>
                        <th class="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                          Customer
                        </th>
                        <th class="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border whitespace-nowrap">
                          Payment status
                        </th>
                        <th class="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border whitespace-nowrap">
                          Fulfillment status
                        </th>
                        <th class="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                          Items
                        </th>
                        <th class="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start whitespace-nowrap">
                          Delivery method
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <SelectPlanTable opentableHandler={opentableHandler} />
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end mt-5">
                  <ul className="flex">
                    <li className="mr-2">
                      <Link
                        href={"#0"} 
                        className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center">
                        <Image src={ArrowLineLeft} alt="" className="dark:invert" />
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link
                        href={"#0"} onClick={setActive}
                        className={`rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center ${!active ? "bg-black/5 dark:bg-white/5" : ""}`}
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
          </div>
        </>
      ) : (
        <>
          <PageHeader
            arrow={true}
            className={"mb-[28px] gap-y-3"}
            orderid={"#CM9805"}
            Badgesdata={[
              { color: "yellow", name: "Payment pending" },
              { color: "red", name: "Unfulfilled" },
              { color: "dot", name: "Paid" },
              { color: "dot", name: "Fulfilled" },
            ]}
          >
            <button className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs" type="button">
              Restock
            </button>
            <button className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs" type="button">
              Edit order
            </button>
            <Dropdown
              className="right-0 left-[unset] text-xs"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  More actions
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                      fill="black"
                      class="fill-black dark:fill-white"
                    ></path>
                  </svg>
                </div>
              }
              dropdownitem={[
                { title: "Download", link: "/" },
                { title: "Download", link: "/" },
              ]}
            />
          </PageHeader>
          <UnsavedChanges>
            <Button
              color={"white"}
              outline={"true"}
              name={"Discard"}
              className={"mr-5 dark:!border-blacklight dark:!text-blacklight"}
            />
            <Button color={"primarygreen"} name={"Save Changes"} />
          </UnsavedChanges>
          <div className="my-7">
            <Alert color={"green"} title={"Items fulfilled."} description={"20 items have been fulfilled."} />
          </div>
          <Alert
            color={"green"}
            title={"Payment collected."}
            description={"Successfully marked payment as received."}
          />
          <div className="flex justify-between md:flex-row flex-col items-start xl:mt-9 mt-6 gap-y-8">
            <div className="bg-primary-light dark:bg-white/5 md:px-6 md:py-4 p-3 rounded-2xl w-full md:max-w-[52%]">
              <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pb-4"> Unfulfilled(4)</h2>
              <div className="bg-white dark:bg-black/40">
                <div className="overflow-x-auto">
                  <table className="w-[640px] sm:w-full">
                    <tbody>
                      {Fulfilled.map((item, index) => (
                        <tr
                          className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5"
                          key={index}
                        >
                          <td className="py-[11px] pl-4 pr-2 max-w-[4%] w-full">
                            <Image src={item.productimg} className="w-full min-w-[24px]" />
                          </td>
                          <td className="py-[11px] max-w-[41%] w-full text-xs leading-[18px] font-normal whitespace-nowrap">
                            {item.product}
                          </td>
                          <td className="py-[11px] px-4 max-w-[9%] w-full text-xs leading-[18px] font-normal">
                            {item.productitem}
                          </td>
                          <td className="py-[11px] pr-4 max-w-[13%] w-full text-xs leading-[18px] font-normal whitespace-nowrap">
                            {item.price}
                          </td>
                          <td className="py-[11px] px-4 max-w-[7%] w-full text-xs leading-[18px] font-normal">
                            {item.totleprice}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end w-full py-4 pr-7 border-b border-black/10 dark:border-white/10">
                  <Button
                    color={"blackoutline"}
                    name={"Hold fulfillment"}
                    className="mr-5 text-sm text-blacklight border-black/10 border dark:border-white/10 dark:text-white dark:border-white/2"
                  />
                  <Button color={"green"} name={"Fulfill items"} className="text-sm whitespace-nowrap" />
                </div>
              </div>
              <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pt-4 pb-3.5">Pending</h2>
              <div className="bg-white dark:bg-black/40">
                <div className="overflow-x-auto">
                  <table className="w-[640px] sm:w-full mb-3.5">
                    <tbody className="w-full">
                      <tr className="text-blacklight border-b dark:text-white border-black/5 dark:border-white/5 w-full">
                        <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                          Subtotal
                        </td>
                        <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] px-4">
                          20 items
                        </td>
                        <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                          ₹1,019.91
                        </td>
                      </tr>
                      <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                        <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">Tax</td>
                        <td className="font-normal text-xs leading-[18px] text-green2 max-w-[33.33%] w-full py-[11px] px-4">
                          <Link className="flex whitespace-nowrap" href={"/"}>
                            Show tax details
                            <Image src={TexDetail} className="ml-[5px]" />
                          </Link>
                        </td>
                        <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                          ₹183.58
                        </td>
                      </tr>
                      <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                        <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5 pl-4">Total</td>
                        <td className="max-w-[33.33%] w-full py-2.5	px-4"></td>
                        <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5	pr-4 text-right">₹1,203.49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white dark:bg-black/40">
                <table className="w-full">
                  <tbody className="w-full">
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">Paid by customer</td>
                      <td className="w-full max-w-[50%] pr-4 py-[11px] text-xs leading-[18px] text-right">₹0.00</td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">No payment due date</td>
                      <td className="w-full max-w-[50%] pr-4 py-[11px] font-normal text-xs leading-[18px] text-green2">
                        <Link className="flex justify-end text-[#27AE60]" href={"/"}>
                          Add due date
                          <Image src={Due} className="ml-[5px]" />
                        </Link>
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="w-full max-w-[50%] pl-4 py-2.5 text-sm font-semibold">
                        Balance (owed by customer)
                      </td>
                      <td className="w-full max-w-[50%] pr-4 py-2.5 text-sm font-semibold text-right">₹1,203.49</td>
                    </tr>
                  </tbody>
                </table>
                <div className="py-4 flex justify-end border-b items-center border-black/10 dark:border-white/10 px-2 sm:flex-nowrap flex-wrap gap-3">
                  <Button outline={"true"} color={"blacklight"} secondary={'true'} name={"Send invoice"} className="mr-4 text-sm" />
                  <Dropdown
                    className="right-0 left-[unset]"
                    button={
                      <div className="flex gap-2 items-center py-3 px-2 justify-end py-2 lg:pl-4 lg:pr-5 px-2 text-sm lg:text-lg font-semibold transition-all duration-500 rounded-lg text-white bg-[#27AE60]">
                        Collect payment
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                            fill="black"
                            class="fill-white"
                          ></path>
                        </svg>
                      </div>
                    }
                    dropdownitem={[
                      { title: "Download", link: "/" },
                      { title: "Download", link: "/" },
                    ]}
                  />
                </div>
              </div>
              <InputContent title={"Add tags"} className={"mt-4 w-full max-w-[400px] cursor-pointer"}>
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
              <div className="max-w-[400px] w-full mt-4"></div>
            </div>
            <div className="bg-primary-light dark:bg-white/5 py-5 pl-4 sm:pr-6 p-3 rounded-2xl w-full md:max-w-[46%]">
              <div className="bg-primary-purple/50 dark:bg-black/40 flex items-start p-4 rounded-lg">
                <Image src={NoteCustomer} className="mr-1 font-normal text-sm dark:invert" />
                <div>
                  <h4 className="flex">Note from customer</h4>
                  <p className="text-sm leading-[18px] text-black/40 dark:text-white/40">
                    Sample note from customer during checkout.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between my-[15px] items-center gap-2">
                  <h3 className="text-blacklight dark:text-white font-semibold text-sm">Customer Details</h3>
                  <Button color={"blacklight"} name={"Remove Customer"} className="!py-2 px-[12px] " />
                </div>
                <div>
                  <div className="flex w-full mb-4 flex-wrap sm:flex-nowrap">
                    <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal  sm:max-w-[44%] w-full">
                      Name
                    </p>
                    <p className="text-blacklight dark:text-white text-xs leading-[18px] font-normal">
                      Baalkrishan Lal Sani
                    </p>
                  </div>
                  <div className="flex mb-4 w-full flex-wrap sm:flex-nowrap">
                    <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                      Phone
                    </p>
                    <p className="text-blacklight dark:text-white text-xs leading-[18px] font-normal ">
                      No phone provided{" "}
                      <Button outline={"true"} color={"blacklight"} name={"Add phone"} className="ml-2 " />
                    </p>
                  </div>
                  <div className="flex mb-4 w-full flex-wrap sm:flex-nowrap">
                    <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                      Email
                    </p>
                    <p className="text-blacklight dark:text-white text-xs leading-[18px] font-normal ">
                      No email provided{" "}
                      <Button
                        outline={"true"}
                        color={"blacklight"}
                        name={"Add email"}
                        className="ml-2 text-blacklight"
                      />
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap sm:flex-nowrap">
                    <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                      Address
                    </p>
                    <div className="text-blacklight dark:text-white text-xs leading-[18px] font-normal lg:max-w-[45%] w-full flex items-center ">
                      <p>
                        Baalkrishan Lal Sani<br></br>
                        Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani 459501 Pilani Rajasthan
                        India
                        <Link className="block" href="tel:123-456-7890">
                          +91 80735 89105
                        </Link>
                      </p>
                      <Button color={"blacklight"} outline={"true"} name={"Edit"} className="md:ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default orders;
