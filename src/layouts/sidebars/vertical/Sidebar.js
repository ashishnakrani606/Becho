import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Avatar from "@/assets/images/users/avatar.png";
import dashboard from "@/assets/images/icon/dashboard.svg";
import orders from "@/assets/images/icon/orders.svg";
import products from "@/assets/images/icon/products.svg";
import offers from "@/assets/images/icon/offers.svg";
import customers from "@/assets/images/icon/customers.svg";
import StoreDetails from "@/assets/images/icon/store-details.svg";
import Permissions from "@/assets/images/icon/permissions.svg";
import Checkout from "@/assets/images/icon/checkout.svg";
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
import Rupee from "@/assets/images/icon/rupee.svg";
import Notebook from "@/assets/images/icon/notebook.svg";
import UsersThree from "@/assets/images/icon/usersThree.svg";
import IdentificationCard from "@/assets/images/icon/identificationCard.svg";
import IdentificationBadge from "@/assets/images/icon/identificationBadge.svg";
import BookOpen from "@/assets/images/icon/bookopen.svg";
import ListBullets from "@/assets/images/icon/listbullets.svg";
// import Percentage from "@/assets/images/icon/percentage.svg";
import { title } from "process";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: dashboard,
  },
  {
    title: "Rent Calendar",
    href: "/rent-calendar",
    icon: Rupee,
  },
  {
    title: "Invoices",
    href: "/invoices",
    icon: Notebook,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: UsersThree,
  },
  {
    title: "Online Leads",
    href: "/online-leads",
    icon: IdentificationCard,
  },
  {
    title: "Walk in Leads",
    href: "/walk-in-leads",
    icon: IdentificationBadge,
  },

  {
    title: "Expenses",
    href: "/expenses",
    icon: BookOpen,
  },
];

const StoreSettings = [
  {
    title: "Offices",
    href: "/offices",
    icon: StoreDetails,
  },
  {
    title: "Services",
    href: "/services",
    icon: ListBullets,
  },
  {
    title: "Payment Gateways",
    href: "/payment-gateways",
    icon: Rupee,
  },

  {
    title: "Taxes",
    href: "/taxes",
    icon: Percentage,
  },

  // {
  //   title: "Email Settings",
  //   href: "/email-settings",
  //   icon: Brandassets,
  // },
  {
    title: "Email Settings",
    href: "/email-settings",
    icon: Email,
  },
  {
    title: "Agreements",
    href: "/agreements",
    icon: SEO,
  },
  {
    title: "Building Staff",
    href: "/building-staff",
    icon: Policies,
  },
];

const Sidebar = ({ Mobilemenu, showMobilemenu, showMobile }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <>
      <div className="h-screen flex justify-between flex-col">
        <div className="py-5 px-4 relative z-50">
          <div className="flex items-center">
            <Dropdown
              button={
                <div className="flex gap-2 pl-2 pt-1 items-center">
                  <Image src={Avatar} alt="" />
                  Heena Vinayak
                </div>
              }
              dropdownitem={[
                { id:1, title: "Heena Vinayak", link: "/", icon: Avatar },
                { id:2, title: "Heena Vinayak", link: "/", icon: Avatar },
              ]} />
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
                          (location === navi.href || curl.query[navi.href.replace("/", "")])
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
              <h4 className="text-black/40 dark:text-white/40 mb-2">Building Settings</h4>
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
