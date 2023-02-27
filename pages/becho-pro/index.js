import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";
import Bechologo from "@/assets/images/icon/becho-black-logo.svg";
import WarningCircle from "@/assets/images/icon/warning-circle.svg";
import Bechoproimg from "@/assets/images/icon/becho-pro.svg";
import CheckBox from "@/components/ui/CheckBox";
import Upi from "@/assets/images/icon/upi-icon.svg";
import Button from "@/components/ui/Button";
import ThemesCard from "@/components/becho-pro/ThemesCard";
import Layout from "@/layouts/layout";
import Badges from "@/components/ui/Badges";

const BillingHistory = [
  {
    id: 1,
    date: "Nov 01, 2022",
    description: "Invoice for Ocrober 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 2,
    date: "Oct 08, 2022",
    description: "Invoice for September 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 3,
    date: "Aug 24, 2022",
    description: "5% Commission",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 4,
    date: "Aug 01, 2022",
    description: "Invoice for July 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 5,
    date: "Jul 01, 2022",
    description: "Invoice for June 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
];

const Information = [
  {
    id: 1,
    name: "full name",
    title: "Successful payments",
    discription: "Receive a notification for every successful payment.",
  },
  {
    id: 2,
    name: "full name2",
    title: "Paid orders",
    discription: "Receive a notification each time you collect a fee from sales.",
  },
  {
    id: 3,
    name: "full name3",
    title: "Unpaid orders",
    discription: "Receive a notification if a payment is disputed by a customer and for dispute purposes.",
  },
  {
    id: 4,
    name: "full name4",
    title: "Refund requests",
    discription: "Receive a notification if a payment is stated as risk by the Finance Department.",
  },
  {
    id: 5,
    name: "full name5",
    title: "Invoice Payments",
    discription: "Receive a notification if a customer sends an incorrect amount to pay their invoice.",
  },
  {
    id: 6,
    name: "full name6",
    title: "Order delivery status",
    discription: "Receive notifications for consistently failing webhook API endpoints.",
    border: "border-none",
  },
];

const Bechopro = () => {
  const [learnMore, setLearnMore] = useState(false);
  const text = "For extra security, this requires you to confirm your email and phone number confirm your email. ";

  return (
    <Layout container>
      <div className="flex justify-center items-center mt-[6px] mb-11">
        <Image src={Bechologo} alt="" className="mr-4 dark:invert" />
        <Image src={Bechoproimg} alt="" className="" />
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Billing</Tab>
            <Tab>Custom Domain</Tab>
            <Tab>Themes</Tab>
          </TabList>

          <TabPanel>
            <div className="">
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-6 md:p-6 p-4">
                <h4 className="text-lg font-semibold mb-6">Your plan details</h4>
                <div className="flex items-center gap-4 justify-between border-b pb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                  <div>
                    <h4 className="font-semibold text-2xl	text-blacklight dark:text-white">Essential (Monthly)</h4>
                    <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">Base plan with 20 products</p>
                  </div>
                  <Link
                    href={"#0"}
                    className="font-semibold text-lg flex items-center px-[21px] py-2 bg-primary-greenb text-white rounded-md"
                  >
                    Update plan
                    <svg
                      className="ml-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.07459 15.4419C6.80847 15.1979 6.80847 14.8021 7.07459 14.5581L11.5625 10.4419C11.8286 10.1979 11.8286 9.80214 11.5625 9.55806L7.07459 5.44194C6.80847 5.19786 6.80847 4.80214 7.07459 4.55806C7.34072 4.31398 7.77219 4.31398 8.03831 4.55806L12.5262 8.67418C13.3246 9.40641 13.3246 10.5936 12.5262 11.3258L8.03831 15.4419C7.77219 15.686 7.34072 15.686 7.07459 15.4419Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-between border-b py-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                  <div>
                    <h5 className="font-semibold text-sm	text-blacklight dark:text-white">₹101 per month</h5>
                    <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                      Next billing date: 03/03/2023
                    </p>
                  </div>
                  <Button
                    name={"Change billing cycle"}
                    className="leading-[18px] !px-[13px] !py-1"
                    size={"smaill"}
                    outline={"true"}
                    secondary={"true"}
                    color={"grey"}
                  />
                </div>
                <div className="flex justify-between items-center pt-4 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
                  <div>
                    <h5 className="font-semibold text-sm	text-blacklight dark:text-white">Payment method</h5>
                    <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40 flex items-center">
                      <Image src={Upi} alt="" className="mr-[2px]" />
                      heena7786@oksbi
                    </p>
                  </div>
                  <Button
                    name={"Change payment method"}
                    className="leading-[18px] px-[10px] !py-1"
                    size={"smaill"}
                    outline={"true"}
                    secondary={"true"}
                    color={"grey"}
                  />
                </div>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4 mb-6">
                <div className="flex justify-between mb-[15px] flex-wrap">
                  <h4 className="text-sm font-semibold">Billing History</h4>
                  <div>
                    <Link href={"#0"} className="text-xs text-blacklight dark:text-white py-1 px-2 font-semibold">
                      Month
                    </Link>
                    <Link href={"#0"} className="text-xs text-black/40 dark:text-white/40 ml-1 py-1 px-2">
                      Year
                    </Link>
                    <Link href={"#0"} className="text-xs text-black/40 dark:text-white/40 ml-1 py-1 px-2">
                      All Time
                    </Link>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="sm:w-full w-[640px]">
                    <tbody className="w-full">
                      <tr className="w-full border-b pb-4 mb-4 border-b-black/20 dark:border-b-white/20">
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[19%] w-full text-left dark:text-white/40">
                          Date
                        </th>
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[27%] w-full text-left dark:text-white/40">
                          Description
                        </th>
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                          Amounts
                        </th>
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                          Invoice
                        </th>
                      </tr>
                      {BillingHistory.map((item) => (
                        <tr>
                          <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                            {item.date}
                          </td>
                          <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                            {item.description}
                          </td>
                          <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                            {item.amount}
                          </td>
                          <td className="text-xs leading-[18px] text-secondary-purplea text-left flex py-[11px] pr-4 ">
                            <p>{item.invoice}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4 mb-6">
                <h4 className="text-sm font-semibold mb-4">Billing Address</h4>
                <div className="bg-primary-purple/50 dark:bg-black/40 rounded-2xl p-4">
                  <div className="flex justify-between items-center">
                    <h4 className="dark:text-white text-blacklight font-semibold">Heena Vinayak’s Address</h4>
                    <Button
                      color="lightgrey"
                      name={"Edit"}
                      secondary={"true"}
                      className={"leading-[18px] px-2 !py-[5px]"}
                    ></Button>
                  </div>
                  <p className="w-full max-w-[236px] text-black/40 dark:text-white/40">
                    Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani 459501 Pilani Rajasthan India{" "}
                  </p>
                </div>
                <div className="bg-primary-purple/50 dark:bg-black/40 rounded-2xl p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <h4 className="dark:text-white text-blacklight font-semibold">
                      Company - ABC Services Private Limited
                    </h4>
                    <Button
                      color="lightgrey"
                      name={"Edit"}
                      secondary={"true"}
                      className={"leading-[18px] px-2 !py-[5px]"}
                    ></Button>
                  </div>
                  <p className="w-full max-w-[236px] text-black/40 dark:text-white/40">
                    Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani 459501 Pilani Rajasthan India{" "}
                  </p>
                </div>
                <p className="w-full text-black/40 dark:text-white/40 mt-4">Tax Location : India - 18% GST</p>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 md:pb-2 p-4 mb-6">
                <div className="flex justify-between items-center flex-wrap gap-5">
                  <h2 className="font-semibold text-sm leading-5">Email Preferences</h2>
                  <div className="flex justify-end items-center gap-2">
                    <Button
                      color="lightgrey"
                      size="small"
                      name={"Discard"}
                      secondary={"true"}
                      className={"leading-[18px]"}
                    ></Button>
                    <Button color="blacklight" size="small" className={"leading-[18px]"} name={"Save Changes"}></Button>
                  </div>
                </div>
                <>
                  {Information.map((item) => (
                    <div
                      className={`flex items-center md:items-center gap-3 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 ${item.border}`}
                    >
                      <CheckBox name={item.name}></CheckBox>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <span className="text-xs text-black/40 dark:text-white/40 ">{item.discription}</span>
                      </div>
                    </div>
                  ))}
                </>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 md:pb-[30px] p-4 mb-6">
                <div className="flex justify-between items-center flex-wrap gap-5 mb-4">
                  <h2 className="font-semibold text-sm leading-5">Deactivate Account & Store</h2>
                  <div className="flex justify-end items-center gap-2">
                    <Button color="secondary-red" size="small" name={"Deactivate store"} className={""}></Button>
                  </div>
                </div>
                <div className="bg-primary-purple/50 flex items-start py-4 px-4 rounded-lg	dark:bg-white/5">
                  <Image src={WarningCircle} className="mr-1 dark:invert" />
                  <div>
                    <h4 className="text-xs leading-[18px]">You Are Deactivating Your Account</h4>
                    <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">
                      {learnMore ? text : ` ${text.substring(0, 77)}`}
                      <button className="btn text-secondary-purplea" onClick={() => setLearnMore(!learnMore)}>
                        {learnMore ? "Learn less " : " Learn more"}
                      </button>
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <CheckBox name={"confirm my account"} className="ml-4">
                    <h4>I confirm my account deactivation</h4>
                  </CheckBox>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-7 md:p-6 p-4">
              <div className="flex items-center gap-4 justify-between border-b pb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-2xl	text-blacklight dark:text-white">Custom Domain</h4>
                    <Badges color={"green"} name={"Activated"} />
                  </div>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                    https://thehustlecompany.com/
                  </p>
                </div>
                <Link
                  href={"#0"}
                  className="text-xs flex items-center px-2 py-[5px] bg-primary-greenb text-white rounded-lg"
                >
                  Edit domain
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-4 justify-between border-b py-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                <div>
                  <h5 className="font-semibold text-sm	text-blacklight dark:text-white">Becho.io domain</h5>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">hustle.becho.io</p>
                </div>
                <Button
                  name={"Edit"}
                  className="leading-[18px] !px-[11px] !py-1"
                  size={"smaill"}
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                />
              </div>
              <div className="flex justify-between items-center pt-4 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
                <div>
                  <h5 className="font-semibold text-sm	text-blacklight dark:text-white">Docs/help</h5>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40 flex items-center">
                    Read our docs on how to use a custom domain name with becho.io.
                  </p>
                </div>
                <Button
                  name={"Read docs"}
                  className="leading-[18px] px-[11px] !py-1"
                  size={"smaill"}
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[10px]"}>
              <ThemesCard
                badgesName={"All store types"}
                badgeColor={"bg-secondary-greenb"}
                title={"Bharat (Default)"}
                description={"Start with our default theme, fit for all types of ecommerce stores."}
                activated
              />
              <ThemesCard
                badgesName={"Clothing"}
                badgeColor={"bg-secondary-blueb"}
                title={"Bharat 2"}
                description={"Start with our default theme, fit for all types of ecommerce stores."}
                activate
              />
              <ThemesCard
                badgesName={"Food/Beverages"}
                badgeColor={"bg-secondary-greena"}
                title={"Bharat 3"}
                description={"Start with our default theme, fit for all types of ecommerce stores."}
                activate
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Bechopro;
