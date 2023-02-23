import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CheckBox from "../src/components/ui/CheckBox";
import Image from "next/image";
import InputContent from "../src/components/ui/InputContent";
import LinkIcon from "../src/assets/images/icon/Link.svg";
import EnvelopeSimple from "../src/assets/images/icon/envelopeSimple.svg";
import Phone from "../src/assets/images/icon/phone.svg";
import Bechopro from "../src/assets/images/icon/Bechogreen.svg";
import Info from "../src/assets/images/icon/info.svg";
import Button from "../src/components/ui/Button";
import Link from "next/link";
import clock from "../src/assets/images/icon/clock.svg";
import shield from "../src/assets/images/icon/shield-check.svg";
import google from "../src/assets/images/icon/google.svg";
import github from "../src/assets/images/icon/github.svg";
import Toggle from "../src/components/ui/Toggle.js";
import slack from "../src/assets/images/icon/slack.svg";
import Badges from "../src/components/ui/Badges";
import Alert from "../src/components/ui/Alert";
import SetupUpdate from "../src/components/ui/SetupUpdate";
import UnsavedChanges from "../src/components/ui/UnsavedChanges";
import Add from "../src/assets/images/icon/addb.svg";

const Sessions = [
  { id: 1, location: "USA(5)", device: "Chrome - Windows", IP: "236.125.56.78", clock: { clock }, time: "2 mins ago" },
  {
    id: 2,
    location: "United Kingdom(10)",
    device: "Safari - Mac OS",
    IP: "236.125.56.69",
    clock: { shield },
    time: "10 mins ago",
  },
  {
    id: 3,
    location: "Norway(-)",
    device: "Safari - Mac OS",
    IP: "236.125.56.69",
    clock: { google },
    time: "10 mins ago",
  },
  {
    id: 4,
    location: "Japan(112)",
    device: "iOS - iPhone Pro",
    IP: "236.125.56.54",
    clock: { github },
    time: "30 mins ago",
  },
  {
    id: 5,
    location: "Italy(5)",
    device: "Samsung Noted 5- Android",
    IP: "236.100.56.50",
    clock: { slack },
    time: "40 mins ago",
  },
];
const Information = [
  {
    id: 1,
    name: "full name",
    title: "Require full name",
    discription: "Select if full name is required for checkout. If not selected, only the first name will be required.",
  },
  {
    id: 2,
    name: "company name",
    title: "Require company name",
    discription: "Select if customer’s company name is required.",
  },
  {
    id: 3,
    name: "phone number",
    title: "Require phone number",
    discription: "Select if customer’s phone number is required.",
  },
  {
    id: 4,
    name: "address",
    title: "Use shipping address as billing address by default",
    discription: "If not selected, the customer will be required to add both addresses before checkout.",
    border:"border-none"
  },
];
const StoreDetaildata = [
  {
    id: 1,    
    title: "Legal business name",
    data: "Becho Ecommerce Pvt Ltd"
  },
  {
    id: 2,
    title: "Contact Phone",
    icon:Info,
    verified:"Verified",
    data: "+91 8276 454 935",
  },
  {
    id: 3,    
    title: "Address",
    data: "Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
  },
  {
    id: 4,    
    title: "Country",
    data: "India"
  },
  {
    id: 5,    
    title: "City, State",
    data: "Pilani, Rajasthan"
  },
  {
    id: 6,    
    title: "PIN code",
    data: "133496"
  },
  {
    id: 7,    
    title: "Store contact email",
    data: "hello@mystore.com"
  },
  {
    id: 8,    
    title: "Sender email",
    data: "contact@mystore.com"
  },  
];
const Taxesdata = [
  {
    id: 1,
    name: "include tax",
    title: "Include tax in prices",
    discription: "Include taxes in product pricing and shipping rates for a complete, all-inclusive checkout experience.",
  },
  {
    id: 2,
    name: "shipping rates",
    title: "Charge tax on shipping rates",
    discription: "Include the cost of shipping in the tax calculation process. This is automatically done for Indian orders.",
  },
  {
    id: 3,
    name: "GST on digital goods",
    title: "Charge GST on digital goods",
    discription: "This will generate a grouping of digital items that you can add to. The Goods and Services Tax (GST) will be calculated for these products during checkout for customers based in India.",
  },
  {
    id: 4,
    name: "tax based",
    title: "Include or exclude tax based on your customer’s country",
    discription: "If not selected, the customer will be required to add both addresses before checkout.",
    border:"border-none"
  },
];
const Emailorder = [
  {
    id: 1,
    icon: Add,
    title: "Order confirmation",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Threedot,
    title: "Order edited",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 3,
    icon: Add,
    title: "Order invoice",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Add,
    title: "Order cancelled",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Add,
    title: "Order refund",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Draft order invoice",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 6,
    icon: Threedot,
    title: "Abandoned POS checkout",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 7,
    icon: Add,
    title: "POS exchange receipt",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 8,
    icon: Threedot,
    title: "Payment error",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 9,
    icon: Threedot,
    title: "Pending payment error",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 10,
    icon: Add,
    title: "Pending payment success",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 11,
    icon: Add,
    title: "Payment reminder",
    discription: "Sent automatically to the customer after they place their order.",
  },
];
const Emailshipping = [
  {
    id: 1,
    icon: Add,
    title: "Fulfillment request",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Shipping confirmation",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Shipping update",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "Out for delivery",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Delivered",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 6,
    icon: Threedot,
    title: "Payment error",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
];
const Localdelivery = [
  {
    id: 1,
    icon: Add,
    title: "Local order out for delivery",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Local order delivered",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Local order missed delivery",
    discription: "Sent automatically to the customer after they place their order.",
  },
];
const Localpickup = [
  {
    id: 1,
    icon: Add,
    title: "Ready for pickup",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Picked up",
    discription: "Sent automatically to the customer after they place their order.",
  },
];
const Emailcustomer = [
  {
    id: 1,
    icon: Add,
    title: "Customer account invite",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Customer account welcome",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Customer account password reset",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "B2B access email",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Contact customer",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
];
const Emailmarketing = [
  {
    id: 1,
    icon: Add,
    title: "Customer marketing confirmation",
    discription: "Sent automatically to the customer after they place their order.",
  },
];
const Emailreturns = [
  {
    id: 1,
    icon: Add,
    title: "Return label/tracking for a return",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Return label for an order",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Return request confirmation",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "Return request approved",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Return request declined",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
];
const StoreDetails = () => {
  const [learnMore, setLearnMore] = useState(false);
  const text = "Payment methods that are available with one of Becho's approved payment providers. ";
  const para =
    "Inform your customers of expected delivery dates by specifying a processing time of 2 business days or less. This processing period will be added with the shipping transit time to give a complete delivery estimate. ";
  return (
    <>
      <Tabs>
        <TabList className={"flex overflow-x-auto max-w-[1163px] w-full"}>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Store Details
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Permissions
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Checkout
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Payment Gateways
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Shipping & Delivery
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Taxes
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Brand Assets
          </Tab>
          <Tab className={"p-2 outline-none border-0 mr-1 text-black/40 dark:text-white/40 min-w-max cursor-pointer"}>
            Email Settings
          </Tab>
        </TabList>

        {/************* store details start *************/}
        <TabPanel className={"mt-5"}>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4">
            <div className="mb-1 flex items-center justify-between">
              <h4 className="text-lg font-semibold">Becho Store</h4>
              <Image src={Bechopro}></Image>
            </div>
            <div className="flex items-center gap-x-4 mb-4 sm:flex-nowrap flex-wrap ">
              <div className="sm:pt-0 pt-3">
                <Link href={"#0"} className="ml-1 flex items-center gap-1 text-black/40 text-xs dark:text-white/40">
                  <Image src={LinkIcon} className={"dark:invert"}></Image>
                  mystore.becho.io
                </Link>
              </div>
              <div className="sm:pt-0 pt-3">
                <Link
                  href="tel:to+91 8276 454 935"
                  className="ml-1 flex items-center gap-1 text-black/40 text-xs dark:text-white/40"
                >
                  <Image src={Phone} className={"dark:invert"}></Image>
                  +91 8276 454 935
                </Link>
              </div>
              <div className="sm:pt-0 pt-3">
                <Link
                  href="mailto:hello@mystore.com"
                  className="ml-1 flex items-center gap-1  text-black/40 text-xs dark:text-white/40"
                >
                  <Image src={EnvelopeSimple} className={"dark:invert"}></Image>
                  hello@mystore.com
                </Link>
              </div>
            </div>
            <div className="sm:flex items-start grid grid-cols-1">
              <div className="flex flex-col pt-5 sm:pt-0 sm:pr-7 sm:border-r border-black/10 dark:border-white/10 lg:flex-grow-0 flex-grow md:flex-grow">
                <p className="text-sm text-blacklight dark:text-white ">Profile Compleation</p>
                <div className="w-[168px] bg-black/5 h-7 relative rounded-lg mt-1 dark:bg-white/20">
                  <span className="absolute top-[18%] left-1/2 -translate-x-1/2 font-semibold text-blacklight ">
                    51%
                  </span>
                  <div className="w-1/2 bg-secondary-purpleb h-7 rounded-l-lg"></div>
                </div>
              </div>
              <div className="flex flex-col pt-5 sm:pt-0 sm:px-7 sm:border-r border-black/10 dark:border-white/10 lg:flex-grow-0 flex-grow md:flex-grow ">
                <p className="text-sm text-blacklight dark:text-white">Earnings</p>
                <p className="text-lg font-semibold mt-1">₹1,45,000</p>
              </div>
              <div className="flex flex-col pt-5 sm:pt-0 sm:px-7 sm:border-r border-black/10 dark:border-white/10 lg:flex-grow-0 flex-grow md:flex-grow">
                <p className="text-sm text-blacklight dark:text-white">Orders</p>
                <p className="text-lg font-semibold mt-1">75</p>
              </div>
              <div className="flex flex-col pt-5 sm:pt-0 sm:pl-7 lg:flex-grow-0 flex-grow md:flex-grow">
                <p className="text-sm text-blacklight dark:text-white">Returning customers</p>
                <p className="text-lg font-semibold mt-1">10%</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 w-full rounded-2xl md:p-6 p-4 mt-7">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-blacklight dark:text-white">Store Details</h4>
              <Link href={"#0"} className="text-black/40 dark:text-white/40">
                Edit Profile
              </Link>
            </div>
            <>
              {StoreDetaildata.map((item) => (
                <div className="flex flex-col">
                  <div className="flex pb-[18px] flex-wrap sm:flex-nowrap">
                    <p className="sm:min-w-[225px] text-black/40 dark:text-white/40 text-xs pb-[6px] sm:pb-0 flex items-center sm:w-auto w-full flex-grow sm:flex-grow-0">
                      {" "}
                      {item.title} 
                      <Image src={item.icon} className="ml-1 opacity-20 dark:invert"/>
                    </p>
                    <p className="text-blacklight dark:text-white text-sm">
                      {item.data} 
                      <Badges color={"green"} name={item.verified} className={"ml-2"}></Badges>
                    </p>
                  </div>
                </div>
              ))}
            </>
            <Alert
              color={"reddark"}              
              title={"We need your attention!"}
              description={"Confirm that you have access to contact@mystore.com in"}
              deatil={"sender email settings."}
              className={"font-normal text-sm mt-1"}
            />
          </div>
        </TabPanel>
        {/************* store details end ***********/}

        {/* /********** permission start ************/}
        <TabPanel>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-7 md:p-6 p-4">
            <h4 className="text-lg font-semibold mb-4">Permissions</h4>
            <div className="flex items-center gap-4 justify-between border-b pb-4 mb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">Sanjeev Bhardwaj</p>
                <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                  Last login was Monday, January 30, 2023 9:52 AM GMT+5:30
                </p>
              </div>
              <Button
                name={"Transfer ownership"}
                color="redlight"
                className="font-normal text-xs px-3"
                size="small"
              />
            </div>
            <div className="flex justify-between items-center border-b-black/10 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">Staff (0 of 2)</p>
                <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                  Customize what your staff members can edit and access.
                </p>
              </div>
              <Button name={"Add staff"} color="yellow" className="font-normal text-xs !text-black/80 px-[14px]" />
            </div>
          </div>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4">
            <div className="flex justify-between mb-2">
              <h4 className="text-lg font-semibold">Login Sessions</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="sm:w-full w-[640px]">
                <tbody className="w-full">
                  <tr className="w-full border-b pb-4 mb-4 border-b-black/20 dark:border-b-white/20">
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[19%] w-full text-left dark:text-white/40">
                      Location
                    </th>
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[27%] w-full text-left dark:text-white/40">
                      Device
                    </th>
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                      IP Address
                    </th>
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                      Time
                    </th>
                  </tr>
                  {Sessions.map((item) => (
                    <tr>
                      <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                        {item.location}
                      </td>
                      <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                        {item.device}
                      </td>
                      <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                        {item.IP}
                      </td>
                      <td className="text-xs leading-[18px] text-blacklight text-left flex py-[11px] pr-4 dark:text-white">
                        <Image src={clock} className="mr-1 dark:invert" />
                        <p>{item.time}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
        {/* /********** permission end ************/}

        {/* /********** checkout start ************/}
        <TabPanel>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl lg:p-6 lg:pb-8 py-6 sm:px-5 px-3">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <h2 className="font-semibold text-sm leading-5">Checkout</h2>
              <div className="flex justify-end items-center gap-2">
                <Button
                  color="lightgrey"
                  size="large"
                  name={"Discard"}
                  secondary={"true"}
                  className={"leading-[18px] text-xs !px-2 !py-[5px]"}
                ></Button>
                <Button
                  color="blacklight"
                  size="large"
                  className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                  name={"Save Changes"}
                ></Button>
              </div>
            </div>
            <div className="flex justify-between items-center px-3 py-6 border-b border-black/10 dark:border-white/10 mb-5 gap-5">
              <h2 className="text-sm leading-5">Customer contact method</h2>
              <div className="flex justify-end items-center gap-2">
                <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-9">
                  <CheckBox name={"percentage"}>Email</CheckBox>
                  <CheckBox name={"fixed"}>Phone</CheckBox>
                </div>
              </div>
            </div>
            <SetupUpdate
              color={"red"}
              className={"mb-4"}
              title={"Email updates"}
              description={"To send email updates, please enter details."}
            >
              <Button color={"redlight"} name={"Setup emails"} className={"whitespace-nowrap"} />
            </SetupUpdate>
            <SetupUpdate color={"red"} title={"SMS Updates"} description={"To send SMS updates, please enter details."}>
              <Button color={"redlight"} name={"Setup SMS"} className={"whitespace-nowrap"} />
            </SetupUpdate>
          </div>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl lg:p-6 sm:px-5 py-6 px-3 mt-7">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <h2 className="font-semibold text-sm leading-5">Customer information for checkout</h2>
              <div className="flex justify-end items-center gap-2">
                <Button
                  color="lightgrey"
                  size="large"
                  name={"Discard"}
                  className={"leading-[18px] text-xs !px-2 !py-[5px]"}
                ></Button>
                <Button
                  color="blacklight"
                  size="large"
                  className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                  name={"Save Changes"}
                ></Button>
              </div>
            </div>
            <div>
              <>
                {Information.map((item) => (
                  <div className={`flex items-center md:items-center gap-3 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 ${item.border}`}>
                    <CheckBox name={item.name}></CheckBox>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <span className="text-xs text-black/40 dark:text-white/40 ">{item.discription}</span>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </TabPanel>
        {/* /********** checkout end************/}

        {/* /********** payment-gateway start ************/}
        <TabPanel>
          <div className="w-full bg-primary-light rounded-2xl md:p-6 p-4 dark:bg-white/5">
            <h4 className="text-sm font-semibold mb-4">Supported payment methods</h4>
            <div className="bg-[#E5ECF6]/50 flex items-start pt-4 px-4 pb-[34px] rounded-lg	dark:bg-white/5">
              <Image src={shield} className="mr-1 dark:invert" />
              <div>
                <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">
                  {learnMore ? text : `${text.substring(0, 250)}`}
                  <button className="btn text-secondary-purplea" onClick={() => setLearnMore(!learnMore)}>
                    {learnMore ? "Learn less " : "Learn more"}
                  </button>
                </p>
              </div>
            </div>
            <div className="flex justify-between border-b border-b-black/10 px-4 pt-4">
              <div className="flex pb-4 ">
                <Image src={google} className="mr-4" />
                <div>
                  <p className="font-semibold text-sm	text-blacklight dark:text-white">Google Pay</p>
                  <p className="text-xs	leading-[18px] text-secondary-red dark:text-white/40">Click here to setup.</p>
                </div>
              </div>
              <Toggle turnOff turnOn className={"dark:!bg-secondary-purpleb"} />
            </div>
            <div className="flex justify-between border-b border-b-black/10 px-4 pt-4">
              <div className="flex pb-4 ">
                <Image src={github} className="mr-4" />
                <div>
                  <p className="font-semibold text-sm	text-blacklight dark:text-white">PayTM</p>
                  <p className="text-xs	leading-[18px] text-primary-greenb dark:text-white/40">Activated successfully.</p>
                </div>
              </div>
              <Toggle></Toggle>
            </div>
            <div className="flex justify-between px-4 pt-4">
              <div className="flex">
                <Image src={slack} className="mr-4" />
                <div>
                  <p className="font-semibold text-sm	text-blacklight dark:text-white">PayU Money</p>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">Switch on to start setup.</p>
                </div>
              </div>
              <Toggle></Toggle>
            </div>
          </div>
          <div className="w-full bg-primary-light rounded-2xl mt-[18px] md:p-6 p-4 max-w-[568px] dark:bg-white/5">
            <h4 className="text-sm font-semibold mb-4">Set up Cash on Delivery (COD)</h4>
            <div className="py-4 px-5 bg-white border border-black/10 rounded-lg mb-4 dark:bg-white/5">
              <p className="text-xs leading-[18px] text-black/40 mb-1 dark:text-white/40">Additional notes</p>
              <p className="text-sm text-black/40 dark:text-white/40">
                Displays to customers when they’re choosing a payment method.
              </p>
            </div>
            <div className="py-4 px-5 bg-white border border-black/10 rounded-lg mb-4 dark:bg-white/5">
              <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">Payment instructions</p>
              <p className="text-sm	text-black/40 dark:text-white/40">
                Displays to customers after they place an order with this payment method.
              </p>
            </div>
            <Button
              name={"Activate Cash on Delivery (COD)"}
              color="primarygreen"
              className="text-xs"
              size="large"
            />
          </div>
        </TabPanel>
        {/* /********** payment-gateway end ************/}

        {/*********  Shipping & Delivery start***********/}
        <TabPanel>
          <div className="flex justify-between flex-wrap gap-y-5">
            <div className="w-full md:max-w-[49%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl p-6">
              <h2 className="font-semibold text-sm leading-5 md:pb-[34px] pb-5">General shipping rates</h2>
              <p className="text-xs text-black/40 dark:text-white/40 leading-[18px]">
                Manage rates for domestic & international orders for all products.
              </p>
              <div>
                <div className="md:pt-16 pt-7 gap-5 flex justify-between items-center">
                  <span className="text-xs text-black/40 dark:text-white/40">All products</span>
                  <Button
                    color="teal"
                    size="large"
                    name={"Manage"}
                    className={"!px-2 !py-[5px] leading-[18px]"}
                  ></Button>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[49%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl p-6">
              <h2 className="font-semibold text-sm leading-5 md:pb-8 pb-5">Custom shipping rates</h2>
              <p className="text-xs text-black/40 dark:text-white/40 leading-[18px]">
                Add custom rates or destination restrictions for groups of products.
              </p>
              <div>
                <div className="md:pt-16 pt-7 gap-5 flex justify-between items-center">
                  <span className="text-xs text-black/40 dark:text-white/40">Jun 10, 2022</span>
                  <Button
                    color="teal"
                    size="large"
                    name={"Manage"}
                    className={"!px-2 !py-[5px] leading-[18px]"}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-primary-light dark:bg-white/5 mt-6 rounded-2xl">
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="flex gap-3 items-center">
                <h3 className="text-sm font-semibold">Processing time</h3>
                <Badges name="Active" color="green" />
              </div>
              <Button color={"lightgrey"} name={"Manage"} />
            </div>
            <p className="text-xs leading-[18px] text-black/40 dark:text-white/40 mt-5">
              {learnMore ? [para] : `${para.substring(0, 220)}`}
              <button className="btn text-primary-green" onClick={() => setLearnMore(!learnMore)}>
                {learnMore ? " Learn less " : " Learn more"}
              </button>
            </p>
          </div>
        </TabPanel>
        {/*********  Shipping & Delivery end ***********/}
       
        {/********  Taxes start **********/}
        <TabPanel>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl lg:p-6 sm:px-5 py-6 px-3 mt-7">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <h2 className="font-semibold text-sm leading-5">Manage taxes  </h2>
              <div className="flex justify-end items-center gap-2">
                <Button
                  color="lightgrey"
                  size="large"                  
                  name={"Discard"}
                  className={"leading-[18px] text-xs !px-2 !py-[5px]"}
                ></Button>
                <Button
                  color="blacklight"
                  size="large"
                  className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                  name={"Save Changes"}
                ></Button>
              </div>
            </div>
            <div>
              <>
                {Taxesdata.map((item) => (
                  <div className={`flex items-start md:items-center gap-3 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 ${item.border}`}>
                    <div className="mt-[3px]">
                      <CheckBox name={item.name}></CheckBox>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <span className="text-xs text-black/40 dark:text-white/40 ">{item.discription}</span>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
          <div className="p-4 bg-primary-light dark:bg-white/5 mt-6 rounded-2xl">
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="flex gap-2 items-center py-3 px-2">
                <h3 className="text-sm font-semibold">Taxes for different countries</h3>
                <Badges name="Inactive" color="grey" />
              </div>
              <Button color={"lightgrey"} name={"Manage"} />
            </div>
            <p className="text-sm leading-[18px] text-black/40 dark:text-white/40 mt-1">
              Include or exclude tax based on your customer’s country.
            </p>
          </div>
        </TabPanel>
        {/* {/ /********* Taxes end************/}        
        <TabPanel>
          <h2>Brand Assets</h2>
        </TabPanel>
        <TabPanel>
          {/* /********** Email Settings start************/}
          <div className="mx-[5px]">
            <UnsavedChanges className="pr-[18px]" >
              <Button color={"green"} name={"Save "} className={"mr-5"} />
              <Button color={"white"} name={"Discard"} outline={'true'} className={"dark:border-blacklight dark:text-black"} />
            </UnsavedChanges>
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            <h3 className="text-lg font-semibold text-blacklight dark:text-white">Orders</h3>
            {Eorder.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm text-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            <h3 className="text-lg font-semibold text-blacklight dark:text-white">Shipping</h3>
            {Eshipping.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            <h3 className="text-lg font-semibold text-blacklight dark:text-white">Local delivery</h3>
            {Ldelivery.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            <h3 className="text-lg font-semibold text-blacklight dark:text-white">Local pickup</h3>
            {Lpickup.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            {Ecustomer.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            <h3 className="text-lg font-semibold text-blacklight dark:text-white">Email marketing</h3>
            {Emarketing.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
            <h3 className="text-lg font-semibold text-blacklight dark:text-white">Returns</h3>
            {Ereturns.map((item) => (
              <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
                <div>
                  <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
                  <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
                </div>
                <Image src={item.icon} className="mr-[18px] dark:invert" />
              </div>
            ))}
          </div>
          {/* /********** Email Settings end************/}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default StoreDetails;
