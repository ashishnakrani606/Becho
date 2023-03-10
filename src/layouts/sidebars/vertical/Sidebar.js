import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Userid from "@/assets/images/users/user.png";
import dashboard from "@/assets/images/icon/dashboard.svg";
import orders from "@/assets/images/icon/orders.svg";
import products from "@/assets/images/icon/products.svg";
import offers from "@/assets/images/icon/offers.svg";
import customers from "@/assets/images/icon/customers.svg";
import StoreDetails from "@/assets/images/icon/store-details.svg";
import Permissions from "@/assets/images/icon/permissions.svg";
import Checkout from "@/assets/images/icon/checkout.svg";
import rupee from "@/assets/images/icon/rupee.svg";
import shipping from "@/assets/images/icon/shipping.svg";
import Percentage from "@/assets/images/icon/percentage.svg";
import Brandassets from "@/assets/images/icon/brand-assets.svg";
import Email from "@/assets/images/icon/Email.svg";
import SEO from "@/assets/images/icon/SEO.svg";
import Policies from "@/assets/images/icon/Policies.svg";
import Bechopro from "@/assets/images/icon/Bechopro.svg";
import Logobecho from "@/assets/images/icon/Logobecho.svg";
import Closebtn from "@/assets/images/icon/closeicon.svg";
import Dropdown from "@/components/ui/Dropdown";
import User from "@/assets/images/icon/user.svg";
import LogOut from "@/assets/images/icon/logout.svg";
import Chats from "@/assets/images/icon/chats.svg";
import NoteBook from "@/assets/images/icon/notebook.svg";
import Blog from "@/assets/images/icon/blog.svg";
import { useState } from "react";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: dashboard,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: orders,
  },
  {
    title: "Products",
    href: "/products",
    icon: products,
  },
  {
    title: "Offers",
    href: "/offers",
    icon: offers,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: customers,
  },
];

const StoreSettings = [
  {
    title: "Store Details",
    href: "/store-details",
    icon: StoreDetails,
  },
  {
    title: "Permissions",
    href: "/permissions",
    icon: Permissions,
  },
  {
    title: "Checkout",
    href: "/checkout",
    icon: Checkout,
  },
  {
    title: "Payment Gateways",
    href: "/payment-gateways",
    icon: rupee,
  },
  {
    title: "Shipping & Delivery",
    href: "/shipping-delivery",
    icon: shipping,
  },
  {
    title: "Taxes",
    href: "/taxes",
    icon: Percentage,
  },
  {
    title: "Brand Assets",
    href: "/brand-assets",
    icon: Brandassets,
  },
  {
    title: "Email Settings",
    href: "/email-settings",
    icon: Email,
  },
  {
    title: "SEO Settings",
    href: "/seo-settings",
    icon: SEO,
  },
  {
    title: "Policies",
    href: "/policies",
    icon: Policies,
  },
];

const Sidebar = ({ Mobilemenu, showMobilemenu, showMobile }) => {
  let curl = useRouter();
  const location = curl.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <>
      <div className="h-screen flex justify-between flex-col">
        <div className="py-5 px-4 relative z-50">
          <div className="flex items-center">
            <Dropdown 
              className="right-0 left-[unset]"
              itemsclass="p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:!border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 !w-[200px]"
              button={
                <div className={`flex gap-[6px] pl-[3px] pt-1 ${dropdownOpen ? "" : "items-center"}`}  onClick={()=> setDropdownOpen(!dropdownOpen)}>
                  <div className="w-[30px] h-[30px]">
                    <Image src={Userid} alt=""/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-left text-sm font-semibold text-black/80 dark:text-white/80">Kathryn Murphy</p>
                    {dropdownOpen &&
                    <Link href={""} className={`text-[9px] text-black/80 dark:text-white/80 pointer-events-none`}>
                      KathrynMurphy5286@email.com
                    </Link> }
                  </div>
                </div>
              }
              dropdownitem={[
                { id: 1, title: "Manage account", link: "/", icon: User },
                { id: 2, title: "Logout", link: "/", icon: LogOut },
                { id: 3, title: "Help center", link: "/", icon: Chats },
                { id: 4, title: "Changelog", link: "/", icon: NoteBook },
                { id: 5, title: "Blog", link: "/", icon: Blog },
              ]}
            />
            {/*  <Dropdown
          className="right-0 left-[unset] text-xs"
          itemsclass="left-2 top-[28px]"
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
        /> */}
            <span className="ml-3 lgm:hidden block">
              <button onClick={showMobilemenu} className="flex">
                <Image src={Closebtn} alt="" className="w-6 dark:invert" />
              </button>
            </span>
          </div>
          <div className="sidebar-left">
            <div className="pt-5">
              <div className="list-none flex-col flex">
                {navigation.map((navi, index) => (
                  <div key={index}>
                    <Link href={navi.href} onClick={showMobile}>
                      <span
                        className={`nav-link flex items-center hover:opacity-70 w-full font-semibold text-sm py-[6px] pl-7 rounded-lg relative ${
                          location === navi.href || curl.query[navi.href.replace("/", "")]
                            ? "bg-black/5 dark:bg-white/5 active hover:opacity-100 after:w-1 after:h-4 after:absolute after:top-[50%] after:bg-black dark:after:bg-secondary-purpleb after:rounded-[3px] after:left-0 after:translate-y-[-50%]"
                            : ""
                        }`}
                      >
                        <Image src={navi.icon} alt="" className="dark:invert" />
                        <span className="ml-1 d-inline-block font-normal">{navi.title}</span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-black/40 dark:text-white/40 mb-2 pl-3">Store Settings</h4>
              <div className="list-none flex-col flex">
                {StoreSettings.map((navi, index) => (
                  <div key={index}>
                    <Link href={navi.href} onClick={showMobile}>
                      <span
                        className={`nav-link flex gap-1 hover:opacity-70 items-center w-full font-semibold text-sm py-[6px] pl-6 rounded-lg relative ${
                          location === navi.href
                            ? "bg-black/5 dark:bg-white/5 active hover:opacity-100 after:w-1 after:h-4 after:absolute after:top-[50%] after:bg-black dark:after:bg-secondary-purpleb after:rounded-[3px] after:left-0 after:translate-y-[-50%]"
                            : ""
                        }`}
                      >
                        <Image src={navi.icon} alt="" className="dark:invert" />
                        <span className="d-inline-block font-normal">{navi.title}</span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="list-none flex-col flex">
              <Link href={"/becho-pro"} onClick={showMobile}>
                <span
                  className={`nav-link flex hover:opacity-70 transition-all duration-75 items-center w-full font-semibold text-sm py-1 pl-7 rounded-lg relative mb-1 ${
                    location === "/becho-pro"
                      ? "bg-black/5 dark:bg-white/5 active hover:opacity-100 after:w-1 after:h-4 after:absolute after:top-[50%] after:bg-black dark:after:bg-secondary-purpleb after:rounded-[3px] after:left-0 after:translate-y-[-50%]"
                      : ""
                  }`}
                >
                  <Image src={Bechopro} alt="" className="dark:invert" onClick={showMobile} />
                  <span className="ml-1 d-inline-block font-normal">Becho(Pro)</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/" className="bottom-0 left-0 px-3 flex justify-center w-full" onClick={showMobile}>
          <Image src={Logobecho} alt="" className="dark:invert mb-6" />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
