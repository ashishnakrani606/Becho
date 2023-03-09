import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import shield from "@/assets/images/icon/shield-check.svg";
import google from "@/assets/images/icon/google.svg";
import github from "@/assets/images/icon/github.svg";
import Toggle from "@/components/ui/Toggle.js";
import slack from "@/assets/images/icon/slack.svg";
import Note from "@/assets/images/icon/notepencil.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import closeico from "@/assets/images/icon/close-circle.svg";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";

const PaymentGatewaysrs = () => {
  const [open, setOpen] = useState(false);
  const [openupi, setOpenupi] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  const text = "Payment methods that are available with one of Becho's approved payment providers. ";
  const data = "";
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
                <p
                  className="text-xs	leading-[18px] text-secondary-red dark:text-white/40 cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Click here to setup.
                </p>
              </div>
            </div>
            <Toggle turnOff turnOn />
          </div>
          <div className="flex justify-between border-b border-b-black/10 dark:border-white/10 px-4 py-4">
            <div className="flex">
              <Image src={github} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">PayTM</p>
                <p className="text-xs	leading-[18px] text-primary-greenb dark:text-white/40">Activated successfully.</p>
              </div>
            </div>
            <Toggle />
          </div>
          <div className="flex justify-between px-4 py-4">
            <div className="flex">
              <Image src={slack} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">PayU Money</p>
                <p
                  className="text-xs	leading-[18px] text-black/40 dark:text-white/40 cursor-pointer"
                  onClick={() => setOpenupi(true)}
                >
                  Switch on to start setup.
                </p>
              </div>
            </div>
            <Toggle />
          </div>
        </div>
        <div className="w-full bg-primary-light rounded-2xl mt-[18px] md:p-6 p-4 max-w-[568px] dark:bg-white/5">
          <h4 className="text-sm font-semibold mb-4">Set up Cash on Delivery (COD)</h4>
          <div className="border border-black/10 py-4 px-5 rounded-lg bg-white dark:bg-black/40 dark:border-white/10 mb-4">
            <label htmlFor={""} className="text-xs leading-[18px] text-black/40 dark:text-white/40">
              Additional notes
            </label>
            <div
              contentEditable="false"
              className="text-sm text-black/40 w-full dark:bg-transparent dark:text-white/40 outline-none"
            >
              Displays to customers when they’re choosing a payment method.
            </div>
          </div>
          <div className="border border-black/10 py-4 px-5 rounded-lg bg-white dark:bg-black/40 dark:border-white/10 mb-4">
            <label htmlFor={""} className="text-xs leading-[18px] text-black/40 dark:text-white/40">
              Payment instructions
            </label>
            <div
              contentEditable="false"
              className="text-sm text-black/40 w-full dark:bg-transparent dark:text-white/40 outline-none"
            >
              Displays to customers after they place an order with this payment method.
            </div>
          </div>
          <Button
            name={"Activate Cash on Delivery (COD)"}
            color="primarygreen"
            className="text-xs leading-[18px]"
            size="small"
          />
        </div>
      </>
      <Modal open={openupi} setOpen={setOpenupi} className={"max-w-[544px] w-full mx-auto"}>
        <div className="px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Setup UPI Payments</h2>
            <Image src={closeico} alt="" onClick={() => setOpenupi(false)} className={"cursor-pointer dark:invert"} />
          </div>
          <form autocomplete="off" method="post" action="">
            <label htmlFor={""} className="text-graydark text-lg font-semibold pb-4 ">
              API Key
            </label>
            <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
              <input
                type="email"
                id="emailadress"
                className={"w-full pr-14 px-4 py-[18px] bg-transparent"}
                autoComplete="off"
              />
              <Image src={Note} alt="" className={"dark:invert absolute right-5 top-[50%] translate-y-[-50%]"} />
            </div>
            <label htmlFor={""} className="text-graydark text-lg font-semibold pt-6 pb-4 ">
              API Secret{" "}
            </label>
            <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
              <input
                type="password"
                id="password"
                className="w-full pr-14 px-4 py-[18px] bg-transparent"
                data-sign="*"
                autoComplete="new-password"
              />
              <Image src={Note} alt="" className={"dark:invert absolute right-5 top-[50%] translate-y-[-50%]"} />
            </div>
          </form>
          <div className="flex justify-between md:py-9 py-4">
            <p className="font-semibold text-sm	text-blacklight dark:text-white">Activate</p>
            <Toggle blueToggle={"true"} />
          </div>
          <Button
            color="bluedark"
            secondary="true"
            name={"Save Settings"}
            className={"sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-2xl font-semibold"}
          ></Button>
          <div className="text-center mt-10">
            {learnMore ? data : `${data.substring(0, 0)}`}
            <button className="btn text-blue-1" onClick={() => setLearnMore(!learnMore)}>
              {learnMore ? "Learn less " : "Learn more"}
            </button>
          </div>
        </div>
      </Modal>

      <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto"}>
        <div className="px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Setup Google Pay</h2>
            <Image src={closeico} alt="" onClick={() => setOpen(false)} className={"cursor-pointer dark:invert"} />
          </div>
          <label htmlFor={""} className="text-graydark text-lg font-semibold pb-4 ">
            API Key
          </label>
          <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
            <input type="email" className={"w-full pr-14 px-4 py-[18px] bg-transparent"} />
            <Image src={Note} alt="" className={"dark:invert absolute right-5 top-[50%] translate-y-[-50%]"} />
          </div>
          <label htmlFor={""} className="text-graydark text-lg font-semibold pt-6 pb-4 ">
            API Secret
          </label>
          <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
            <input
              type="password"
              className={"w-full pr-14 px-4 py-[18px] bg-transparent"}
              autoComplete="new-password"
            />
            <Image src={Note} alt="" className={"dark:invert absolute right-5 top-[50%] translate-y-[-50%]"} />
          </div>
          <div className="flex justify-between md:py-9 py-4">
            <p className="font-semibold text-sm	text-blacklight dark:text-white">Activate</p>
            <Toggle blueToggle={"true"} />
          </div>
          <Button
            color="bluedark"
            secondary="true"
            name={"Save Settings"}
            className={"sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-2xl font-semibold"}
          ></Button>
          <div className="text-center mt-10">
            {learnMore ? data : `${data.substring(0, 0)}`}
            <button className="btn text-blue-1" onClick={() => setLearnMore(!learnMore)}>
              {learnMore ? "Learn less " : "Learn more"}
            </button>
          </div>
        </div>
      </Modal>
      {/* /********** payment-gateway end ************/}
    </Layout>
  );
};

export default PaymentGatewaysrs;
