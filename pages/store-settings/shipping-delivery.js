import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import Button from "@/components/ui/Button";
import Badges from "@/components/ui/Badges";
import Layout from "@/layouts/layout";

const ShippingDelivery = () => {
  const [learnMore, setLearnMore] = useState(false);
  // const text = "Payment methods that are available with one of Becho's approved payment providers. ";
  const para =
    "Inform your customers of expected delivery dates by specifying a processing time of 2 business days or less. This processing period will be added with the shipping transit time to give a complete delivery estimate. Inform your customers complete delivery estimate. ";

  return (
    <Layout container>
      <TabList />
      {/*********  Shipping & Delivery start***********/}
      <div>
        <div className="flex justify-between flex-wrap gap-y-5">
          <div className="w-full md:max-w-[49%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl p-6">
            <h2 className="font-semibold text-sm leading-5 md:pb-[34px] pb-5">General shipping rates</h2>
            <p className="text-xs text-black/40 dark:text-white/40 leading-[18px]">
              Manage rates for domestic & international orders for all products.
            </p>
            <div className="md:pt-16 pt-7 gap-5 flex justify-between items-center">
              <span className="text-xs text-black/40 dark:text-white/40">All products</span>
              <Button
                color="teal"
                name={"Manage"}
                className={"!px-2 !py-[5px] leading-[18px] !text-blacklight"}
              ></Button>
            </div>
          </div>
          <div className="w-full md:max-w-[49%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl p-6">
            <h2 className="font-semibold text-sm leading-5 md:pb-8 pb-5">Custom shipping rates</h2>
            <p className="text-xs text-black/40 dark:text-white/40 leading-[18px]">
              Add custom rates or destination restrictions for groups of products.
            </p>
            <div className="md:pt-16 pt-7 gap-5 flex justify-between items-center">
              <span className="text-xs text-black/40 dark:text-white/40">Jun 10, 2022</span>
              <Button
                color="teal"
                name={"Manage"}
                className={"!px-2 !py-[5px] leading-[18px] !text-blacklight"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-primary-light dark:bg-white/5 mt-6 rounded-2xl">
          <div className="flex justify-between gap-4 flex-wrap">
            <div className="flex gap-3 items-center">
              <h3 className="text-sm font-semibold">Processing time</h3>
              <Badges name="Active" color="green" />
            </div>
            <Button color={"lightgrey"} size={"small"} name={"Manage"} secondary={"true"} />
          </div>
          <p className="text-xs leading-[18px] text-black/40 dark:text-white/40 mt-5">
            {learnMore ? [para] : `${para.substring(0, 215)}`}
            <button className="btn text-primary-green" onClick={() => setLearnMore(!learnMore)}>
              {learnMore ? " Learn less " : " Learn more "}
            </button>
          </p>
        </div>
      </div>
      {/*********  Shipping & Delivery end ***********/}
    </Layout>
  );
};

export default ShippingDelivery;
