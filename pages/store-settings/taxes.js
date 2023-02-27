import React from "react";
import TabList from "@/components/store-settings/tab-list";
import Button from "@/components/ui/Button";
import Badges from "@/components/ui/Badges";
import CheckBox from "@/components/ui/CheckBox";
import Layout from "@/layouts/layout";

const TaxesData = [
  {
    id: 1,
    name: "include tax",
    title: "Include tax in prices",
    discription:
      "Include taxes in product pricing and shipping rates for a complete, all-inclusive checkout experience.",
  },
  {
    id: 2,
    name: "shipping rates",
    title: "Charge tax on shipping rates",
    discription:
      "Include the cost of shipping in the tax calculation process. This is automatically done for Indian orders.",
  },
  {
    id: 3,
    name: "GST on digital goods",
    title: "Charge GST on digital goods",
    discription:
      "This will generate a grouping of digital items that you can add to. The Goods and Services Tax (GST) will be calculated for these products during checkout for customers based in India.",
  },
  {
    id: 4,
    name: "tax based",
    title: "Include or exclude tax based on your customer’s country",
    discription: "If not selected, the customer will be required to add both addresses before checkout.",
    border: "border-none",
  },
];

const Taxes = () => {
  return (
    <Layout container>
      <TabList />
      {/********  Taxes start **********/}
      <div>
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl lg:p-6 lg:pb-[5px] sm:px-5 py-6 px-3 mt-7">
          <div className="flex justify-between items-center flex-wrap gap-5">
            <h2 className="font-semibold text-sm leading-5">Manage taxes </h2>
            <div className="flex justify-end items-center gap-2">
              <Button
                color="lightgrey"
                secondary={"true"}
                name={"Discard"}
                className={"leading-[18px] text-xs !px-2 !py-[5px]"}
              ></Button>
              <Button
                color="blacklight"
                className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                name={"Save Changes"}
              ></Button>
            </div>
          </div>
          <div>
            <>
              {TaxesData.map((item) => (
                <div
                  className={`flex items-start md:items-center gap-3 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 ${item.border}`}
                >
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
            <div className="flex gap-2 items-center">
              <h3 className="text-sm font-semibold leading-5">
                Taxes for different countries
                <Badges name="Inactive" color="grey" className={"ml-1 sm:ml-2"} />
              </h3>
            </div>
            <Button color={"lightgrey"} size={"small"} name={"Manage"} secondary={"true"} />
          </div>
          <p className="text-sm leading-[18px] text-black/40 dark:text-white/40 mt-1">
            Include or exclude tax based on your customer’s country.
          </p>
        </div>
      </div>
      {/* {/ /********* Taxes end************/}
    </Layout>
  );
};

export default Taxes;
