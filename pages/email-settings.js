import React from "react";
import TabList from "@/components/store-settings/tab-list";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import Button from "@/components/ui/Button";
import Add from "@/assets/images/icon/addb.svg";
import Threedot from "@/assets/images/icon/threedot.svg";
import Image from "next/image";
import Layout from "@/layouts/layout";

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

const EmailSettings = () => {
  return (
    <Layout container>
      <TabList />
      {/* /********** Email Settings start************/}
      <UnsavedChanges className={"!pr-[18px] mx-[5px]"}>
        <Button
          color={"white"}
          name={"Discard"}
          outline={"true"}
          className={"mr-5 dark:border-blacklight dark:text-blacklight"}
        />
        <Button color={"primarygreen"} name={"Save"} />
      </UnsavedChanges>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Orders</h3>
        {Emailorder.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Shipping</h3>
        {Emailshipping.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Local delivery</h3>
        {Localdelivery.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Local pickup</h3>
        {Localpickup.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        {Emailcustomer.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Email marketing</h3>
        {Emailmarketing.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Returns</h3>
        {Emailreturns.map((item) => (
          <div className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10">
            <div>
              <h5 className="font-semibold text-sm color-blacklight">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} className="md:mr-[18px] dark:invert" />
          </div>
        ))}
      </div>
      {/* /********** Email Settings end************/}
    </Layout>
  );
};

export default EmailSettings;
