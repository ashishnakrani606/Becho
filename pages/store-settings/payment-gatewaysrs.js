import React, { useState } from "react";
import TabList from '../../src/components/store-settings/tab-list' 
import shield from "../../src/assets/images/icon/shield-check.svg";
import google from "../../src/assets/images/icon/google.svg";
import github from "../../src/assets/images/icon/github.svg";
import Toggle from "../../src/components/ui/Toggle.js";
import slack from "../../src/assets/images/icon/slack.svg";
import Image from "next/image";
import Button from "../../src/components/ui/Button";

const PaymentGatewaysrs = () => {
  const [learnMore, setLearnMore] = useState(false);
  const text = "Payment methods that are available with one of Becho's approved payment providers. ";  
  return (
    <>
      <TabList/>
      {/* /********** payment-gateway start ************/}
      <div>
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
              className="text-xs !py-[6px]"
              size="large"
            />
          </div>
        </div>
        {/* /********** payment-gateway end ************/}
    </>
  )
}

export default PaymentGatewaysrs
