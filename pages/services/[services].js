import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Alert from "@/components/ui/Alert";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import InputContent from "@/components/ui/InputContent";
import infoicon from "@/assets/images/icon/info-icon.svg";
import Layout from "@/layouts/layout";
import VarientDropdown from "@/components/ui/SelectOption";

const service = () => {
  const CureentMOnth = [
    {
      id: 1,
      company: "Becho INC",
      details: "550 Units",
      amount: "₹3,000.00",
      gst: "₹540.00",
      totleAmount: "₹3,540.00",
    },
    {
      id: 2,
      company: "ABC Pvt Ltd",
      details: "550 Units",
      amount: "₹3,000.00",
      totleAmount: "₹3,540.00",
      gst: "₹540.00",
    },
    {
      id: 2,
      company: "Shop Coffee Ltd",
      details: "550 Units",
      amount: "₹3,000.00",
      gst: "₹540.00",
      totleAmount: "₹3,540.00",
    },
  ];

  const [customerData, setCustomerData] = useState(true);
  return (
    <Layout container>
      <PageHeader arrow={true} className={"mb-[28px] gap-y-3"} orderid={"Electricity Bill"} Badgesdata={[]}>
        <Button
          name={"Download PDF"}
          outline={"true"}
          color={"grey"}
          size={"small"}
          className="!text-black/80 !leading-4"
        />
        <Button className="py-[5px] sm:px-2 px-[1px]  text-xs" name={"Edit invoice"} secondary={"true"} />
        <Dropdown
          className="right-0 left-[unset] text-xs"
          button={
            <div className="flex gap-2 items-center py-3 px-2 justify-end">
              More actions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                  fill="black"
                  className="fill-black dark:fill-white"
                ></path>
              </svg>
            </div>
          }
          dropdownitem={[
            { id: 1, title: "Download", link: "/" },
            { id: 2, title: "Download", link: "/" },
          ]}
        />
      </PageHeader>
      <UnsavedChanges>
        <Button
          color={"white"}
          outline={"true"}
          size={"small"}
          name={"Discard"}
          className={"mr-5 dark:!border-blacklight dark:!text-blacklight !py-1"}
        />
        <Button color={"primarygreen"} name={"Save Changes"} className={"!py-[5px]"} />
      </UnsavedChanges>
      <div className="my-7">
        <Alert
          color={"green"}
          title={"Name edited"}
          description={"Service name has been successfully edited to "}
          deatil={"Electricity Bill"}
          deatilStyle={"font-bold !text-black/80 dark:!text-white/80"}
          alertStyle={"pb-3.5 outline-primary-greenb outline outline-1 border-0"}
        />
        <div className="flex justify-between md:flex-row flex-col items-start xl:mt-9 mt-6 gap-y-8">
          <div className="md:max-w-[52%] w-full ">
            <div className="bg-primary-light dark:bg-white/5  md:px-6 md:py-4 p-3 rounded-2xl ">
              <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pb-4">
                Current Month (Feb 2023)
              </h2>
              <div className="bg-white dark:bg-black/40">
                <div className="overflow-x-auto">
                  <table className="w-[640px] lg:w-[600px] md:w-[590px] xl:w-full sm:w-full">
                    <thead>
                      <tr className="border-b border-black/5 dark:border-white/5">
                        <th className="text-left pl-4 py-3 text-xs leading-[18px]">Company</th>
                        <th className="text-left pl-4 py-3 text-xs leading-[18px]">Details</th>
                        <th className="text-left pl-4 py-3 text-xs leading-[18px]">Amount</th>
                        <th className="text-left pl-4 py-3 text-xs leading-[18px]">GST (18%)</th>
                        <th className="text-left pl-4 py-3 text-xs leading-[18px]">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CureentMOnth.map((item, index) => (
                        <tr
                          className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5"
                          key={index}
                        >
                          <td className="py-2.5 pl-4 text-xs leading-[18px] font-normal whitespace-nowrap">
                            {item.company}
                          </td>
                          <td className="py-2.5 pl-4 text-xs leading-[18px] font-normal">{item.details}</td>
                          <td className="py-2.5 pl-4 text-xs leading-[18px] font-normal whitespace-nowrap">
                            {item.amount}
                          </td>
                          <td className="py-2.5 pl-4 text-xs leading-[18px] font-normal">{item.gst}</td>
                          <td className="py-2.5 px-4 text-xs leading-[18px] font-normal">{item.totleAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white dark:bg-black/40 mt-4">
                <div className="overflow-x-auto">
                  <table className="w-[640px] sm:w-full">
                    <tbody className="w-full">
                      <tr className="text-blacklight border-b dark:text-white border-black/5 dark:border-white/5 w-full">
                        <td className="font-[11px]ormal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                          Subtotal
                        </td>
                        <td className="font-[11px]ormal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] px-4">
                          3 companies
                        </td>
                        <td className="font-[11px]ormal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                          ₹9,000.00
                        </td>
                      </tr>
                      <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                        <td className="font-[11px]ormal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">Tax</td>
                        <td className="font-[11px]ormal text-xs leading-[18px] text-green2 max-w-[33.33%] w-full py-[11px] px-4">
                          <Link className="flex whitespace-nowrap text-primary-greenb" href={"/"}>
                            18% GST
                            <Image src={infoicon} alt="" className="ml-[5px]" />
                          </Link>
                        </td>
                        <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                          ₹1,620.00
                        </td>
                      </tr>
                      <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                        <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5 pl-4">Total</td>
                        <td className="max-w-[33.33%] w-full py-2.5	px-4"></td>
                        <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5	pr-4 text-right">
                          ₹10,620.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white dark:bg-black/40 mt-4">
                <table className="w-full">
                  <tbody className="w-full">
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">
                        Total paid till date (17 Feb 2023)
                      </td>
                      <td className="w-full max-w-[50%] pr-4 py-[11px] text-xs leading-[18px] text-right">₹3,540.00</td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="w-full max-w-[50%] pl-4 py-2.5 text-sm font-semibold">
                        Balance (owed by companies)
                      </td>
                      <td className="w-full max-w-[50%] pr-4 py-2.5 text-sm font-semibold text-right">₹7,080.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-primary-light dark:bg-white/5  md:px-6 md:py-5 p-3 rounded-2xl mt-[22px]">
              <InputContent className={"mb-0 dark:!bg-transparent dark:text-white/40 border-0 !bg-primary-light !p-0"}>
                <VarientDropdown
                  selectitem={[
                    { id: 1, name: "January 2023" },
                    { id: 2, name: "December 2022" },
                    { id: 3, name: "November 2022" },
                  ]}
                  className="dark:!text-white !text-blacklight bg-transparent font-semibold"
                  buttonStyle={"!bg-transparent"}
                  arrowDown
                ></VarientDropdown>
              </InputContent>
            </div>
            <div className="bg-primary-light dark:bg-white/5  md:px-6 md:py-5 p-3 rounded-2xl mt-[22px]">
              <InputContent className={"!bg-primary-light mb-0 dark:!bg-transparent dark:text-white/40 border-0  !p-0"}>
                <VarientDropdown
                  selectitem={[
                    { id: 1, name: "December 2022" },
                    { id: 2, name: "January 2023" },
                    { id: 3, name: "November 2022" },
                  ]}
                  className="dark:!text-white !text-blacklight bg-transparent font-semibold"
                  buttonStyle={"!bg-transparent"}
                  arrowDown
                ></VarientDropdown>
              </InputContent>
            </div>
            <div className="bg-primary-light dark:bg-white/5  md:px-6 md:py-5 p-3 rounded-2xl mt-[22px]">
              <InputContent className={"mb-0 dark:!bg-transparent dark:text-white/40 border-0 !bg-transparent !p-0"}>
                <VarientDropdown
                  selectitem={[
                    { id: 1, name: "November 2022" },
                    { id: 2, name: "January 2023" },
                    { id: 3, name: "December 2022" },
                  ]}
                  className="dark:!text-white !text-blacklight bg-transparent font-semibold"
                  buttonStyle={"!bg-transparent"}
                  arrowDown
                ></VarientDropdown>
              </InputContent>
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 py-5 px-4 rounded-2xl w-full md:max-w-[46%]">
            <div>
              <div className="flex justify-between items-center gap-2 pb-4">
                <h3 className="font-semibold text-sm">Service Details</h3>
                <Button
                  color={"blacklight"}
                  name={"Edit"}
                  className="!py-2 !px-[22px]"
                  onClick={() => setCustomerData(false)}
                />
              </div>
              <div>
                <div className="flex w-full flex-wrap sm:flex-nowrap">
                  <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal  sm:max-w-[44%] w-full">
                    Service Name
                  </p>
                  <p className="text-blacklight dark:text-white text-sm leading-[18px] font-medium">Electricity Bill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default service;
