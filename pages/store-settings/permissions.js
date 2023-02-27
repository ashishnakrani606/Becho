import React from "react";
import TabList from "@/components/store-settings/tab-list";
import clock from "@/assets/images/icon/clock.svg";
import shield from "@/assets/images/icon/shield-check.svg";
import google from "@/assets/images/icon/google.svg";
import github from "@/assets/images/icon/github.svg";
import slack from "@/assets/images/icon/slack.svg";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Select from "@/components/dashboard/Select";

import Layout from "@/layouts/layout";

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

const permissions = () => {
  return (
    <Layout container>
      <TabList />
      {/* /********** permission start ************/}
      <div className="">
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-7 md:p-6 p-4">
          <h4 className="text-lg font-semibold mb-4">Permissions</h4>
          <div className="flex items-center gap-4 justify-between border-b pb-4 mb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
            <div>
              <p className="font-semibold text-sm	text-blacklight dark:text-white">Sanjeev Bhardwaj</p>
              <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                Last login was Monday, January 30, 2023 9:52 AM GMT+5:30
              </p>
            </div>
            <Button name={"Transfer ownership"} color="redlight" className="font-normal text-xs px-3" size="small" />
          </div>
          <div className="flex justify-between items-center border-b-black/10 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
            <div>
              <p className="font-semibold text-sm	text-blacklight dark:text-white">Staff (0 of 2)</p>
              <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                Customize what your staff members can edit and access.
              </p>
            </div>
            <Button
              name={"Add staff"}
              color="yellow"
              size={"small"}
              className="font-normal text-xs !text-black/80 px-[14px]"
            />
          </div>
        </div>
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4">
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold">Login Sessions</h4>
            <Select
              options={[
                { id: 1, name: "1 Hours" },
                { id: 2, name: "2 Hours" },
                { id: 3, name: "3 Hours" },
                { id: 4, name: "4 Hours" },
              ]}
            />
          </div>
          <div className="mb-2">
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
      </div>
      {/* /********** permission end ************/}
    </Layout>
  );
};

export default permissions;
