import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/layouts/layout";

const StoreSettings = [
  {
    title: "Store Details",
    href: "/store-settings/store-details",
  },
  {
    title: "Permissions",
    href: "/store-settings/permissions",
  },
  {
    title: "Checkout",
    href: "/store-settings/checkout",
  },
  {
    title: "Payment Gateways",
    href: "/store-settings/payment-gatewaysrs",
  },
  {
    title: "Shipping & Delivery",
    href: "/store-settings/shipping-delivery",
  },
  {
    title: "Taxes",
    href: "/store-settings/taxes",
  },
  {
    title: "Brand Assets",
    href: "/store-settings/brand-assets",
  },
  {
    title: "Email Settings",
    href: "/store-settings/email-settings",
  },
];

const TabList = () => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <>
      <div className={" overflow-x-auto "}>
        <div className="flex mb-5 xxl:w-auto w-[870px]">
          {StoreSettings.map((navi, index) => (
            <div key={index}>
              <Link href={navi.href}>
                <span className={`tabs-main ${location === navi.href ? "selected  relative" : ""}`}>
                  <span
                    className={`${
                      location === navi.href ? "font-semibold text-blacklight dark:text-secondary-purpleb" : ""
                    }`}
                  >
                    {navi.title}
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabList;
