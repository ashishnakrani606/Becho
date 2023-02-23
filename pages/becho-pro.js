import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import Bechologo from "../src/assets/images/icon/becho-black-logo.svg";
import Bechopro from "../src/assets/images/icon/becho-pro.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from "../src/components/ui/Dropdown";
import clock from "../src/assets/images/icon/clock.svg";
import shield from "../src/assets/images/icon/shield-check.svg";
import google from "../src/assets/images/icon/google.svg";
import github from "../src/assets/images/icon/github.svg";
import Toggle from "../src/components/ui/Toggle.js";
import slack from "../src/assets/images/icon/slack.svg";
import Button from "../src/components/ui/Button";


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


const bechopro = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-[6px] mb-11'>
        <Image src={Bechologo} alt="" className='mr-4'/>
        <Image src={Bechopro} alt="" className=''/>
      </div>
      <div>
      <Tabs>
        <TabList>
          <Tab>Billing</Tab>
          <Tab>Custom Domain</Tab>
          <Tab>Themes</Tab>
        </TabList>

        <TabPanel>
        <div className=''>
          <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-7 md:p-6 p-4">
            <h4 className="text-lg font-semibold mb-4">Your plan details</h4>
            <div className="flex items-center gap-4 justify-between border-b pb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
              <div>
                <p className="font-semibold text-2xl	text-blacklight dark:text-white">Essential (Monthly)</p>
                <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                  Base plan with 20 products
                </p>
              </div> 
              <Link
                href={"#0"}
                className="font-semibold text-lg flex items-center px-[21px] py-2 bg-primary-greenb text-white rounded-md"
              >
                Update plan
                <svg className='ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07459 15.4419C6.80847 15.1979 6.80847 14.8021 7.07459 14.5581L11.5625 10.4419C11.8286 10.1979 11.8286 9.80214 11.5625 9.55806L7.07459 5.44194C6.80847 5.19786 6.80847 4.80214 7.07459 4.55806C7.34072 4.31398 7.77219 4.31398 8.03831 4.55806L12.5262 8.67418C13.3246 9.40641 13.3246 10.5936 12.5262 11.3258L8.03831 15.4419C7.77219 15.686 7.34072 15.686 7.07459 15.4419Z" fill="white"/>
                </svg>  
              </Link>
            </div>
            <div className="flex items-center gap-4 justify-between border-b py-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">₹101 per month</p>
                <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                  Next billing date: 03/03/2023
                </p>
              </div>
              <Button name={"Change billing cycle"}  className="mr-3 mt-2 leading-[18px]" size={"medium"} outline={"true"} secondary={"true"} color={"grey"} />
            </div>
            <div className="flex justify-between items-center py-4 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">Payment method</p>
                <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                  heena7786@oksbi
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
        </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>

      </div>  
    </>
  )
}

export default bechopro
