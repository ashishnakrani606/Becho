import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import shield from "@/assets/images/icon/shield-check.svg";
import google from "@/assets/images/icon/google.svg";
import github from "@/assets/images/icon/github.svg";
import Toggle from "@/components/ui/Toggle.js";
import slack from "@/assets/images/icon/slack.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Layout from "@/layouts/layout";
import InputContent from "@/components/ui/InputContent";

const PaymentGatewaysrs = () => {
  const [learnMore, setLearnMore] = useState(false);
  const text = "Payment methods that are available with one of Becho's approved payment providers. ";
  return (
    <Layout container>
      <TabList />
      {/* /********** payment-gateway start ************/}
      <>
        <div className="w-full bg-primary-light rounded-2xl md:p-6 md:pb-2 p-4 dark:bg-white/5">
          <h4 className="text-sm font-semibold mb-4">Supported payment methods</h4>
          <div className="bg-[#E5ECF6]/50 flex items-start pt-4 px-4 pb-[34px] rounded-lg	dark:bg-white/5">
            <Image src={shield} alt="" className="mr-1 dark:invert" />
            <div>
              <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">
                {learnMore ? text : `${text.substring(0, 250)}`}
                <button className="btn text-secondary-purplea" onClick={() => setLearnMore(!learnMore)}>
                  {learnMore ? "Learn less " : "Learn more"}
                </button>
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b border-b-black/10 dark:border-white/10 px-4 py-4">
            <div className="flex ">
              <Image src={google} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">Google Pay</p>
                <p className="text-xs	leading-[18px] text-secondary-red dark:text-white/40">Click here to setup.</p>
              </div>
            </div>
            <Toggle turnOff turnOn className={"dark:!bg-secondary-purpleb"} />
          </div>
          <div className="flex justify-between border-b border-b-black/10 dark:border-white/10 px-4 py-4">
            <div className="flex">
              <Image src={github} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">PayTM</p>
                <p className="text-xs	leading-[18px] text-primary-greenb dark:text-white/40">Activated successfully.</p>
              </div>
            </div>
            <Toggle/>
          </div>
          <div className="flex justify-between px-4 py-4">
            <div className="flex">
              <Image src={slack} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">PayU Money</p>
                <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">Switch on to start setup.</p>
              </div>
            </div>
            <Toggle/>
          </div>
        </div>
        <div className="w-full bg-primary-light rounded-2xl mt-[18px] md:p-6 p-4 max-w-[568px] dark:bg-white/5">
          <h4 className="text-sm font-semibold mb-4">Set up Cash on Delivery (COD)</h4>
          <div className="border border-black/10 py-4 px-5 rounded-lg bg-white dark:bg-black/40 dark:border-white/10 mb-4">
            <label className="text-xs leading-[18px] text-black/40 dark:text-white/40">
            Additional notes
            </label>
            <div contentEditable="false" className="text-sm text-black/40 w-full dark:bg-transparent dark:text-white/40 outline-none" >Displays to customers when they’re choosing a payment method.</div>
          </div>
          <div className="border border-black/10 py-4 px-5 rounded-lg bg-white dark:bg-black/40 dark:border-white/10 mb-4">
            <label className="text-xs leading-[18px] text-black/40 dark:text-white/40">
            Payment instructions
            </label>
            <div contentEditable="false" className="text-sm text-black/40 w-full dark:bg-transparent dark:text-white/40 outline-none" >Displays to customers after they place an order with this payment method.</div>
          </div>
          <Button
              name={"Activate Cash on Delivery (COD)"}
              color="primarygreen"
              className="text-xs leading-[18px]"
              size="small"
            />
        </div>      
      </>
      {/* /********** payment-gateway end ************/}
    </Layout>
  );
};

export default PaymentGatewaysrs;
