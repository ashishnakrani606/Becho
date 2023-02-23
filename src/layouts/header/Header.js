import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Squre from "../../assets/images/icon/squre.svg";
import Roundbox from "../../assets/images/icon/round.svg";
import Searchicon from "../../assets/images/icon/searchico.svg";
import Themechange from "../../assets/images/icon/Sun.svg";
import Menuicon from "../../assets/images/icon/menuicon.svg";
import Dotsmenu from "../../assets/images/icon/threedots.svg";
import Squreflip from "../../assets/images/icon/squreflip.svg";

const Header = ({ showMobmenu, showsidebar, showheadermenu }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <span role="button" onClick={() => setTheme("light")}>
          <Image src={Themechange} alt="" className="w-5 dark:invert" />
        </span>
      );
    } else {
      return (
        <span role="button" onClick={() => setTheme("dark")}>
          <Image src={Themechange} alt="" className="w-5" />
        </span>
      );
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="border-b border-black/10 dark:border-white/10 relative z-10">
        <div className="flex items-center justify-between md:px-7 px-4 md:py-6 py-4 md:gap-2 gap-7 header-top">
          <Button color="primary" className="md:hidden block" onClick={showMobmenu}>
            <Image src={Menuicon} alt="" className="w-7 dark:invert" />
          </Button>
          <div isOpen={isOpen} className={`dashbord-img ${isOpen ? "md:block" : "md:block hidden"}`}>
            <div className="flex md:static absolute md:shadow-none shadow-layer-shadow dark:shadow-md bg-white dark:bg-blacklight w-full left-0 top-[61px] items-center md:px-0 px-3 md:py-0 py-5 gap-3">
              <Button color="primary" className="lgm:hidden md:block hidden" onClick={showMobmenu}>
                <Image src={Menuicon} alt="" className="w-7 dark:invert" />
              </Button>
              <Button color="primary" className="lgm:block hidden" onClick={showMobmenu}>
                <Image src={Squre} alt="" className="dark:invert" />
              </Button>
              <Image src={Roundbox} alt="" className="dark:invert" />
              <div className="text-black/40 dark:text-white/40">
                <Link href="#0" className="text-sm">
                  Becho.io Panel
                </Link>
                <span className="px-2">/</span>
                <Link href="#0" className="text-sm text-blacklight dark:text-white">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div className="flex sm:w-1/2 w-full xl:gap-8 sm:gap-4 gap-3 items-center justify-end">
            <div className="relative w-fit">
              <input
                placeholder="Search"
                className="rounded-lg max-w-[261px] w-full lg:w-[261px] pl-[26px] placeholder:text-sm text-xs bg-black/5 dark:bg-white/5 p-[6px] pr-3 focus-visible:outline-none"
              />
              <Image src={Searchicon} alt="" className="absolute top-[7px] left-[7px] dark:invert" />
            </div>
            <Link href="#0">{renderThemeChanger()}</Link>
            <Button color="primary" onClick={showsidebar}>
              <Image src={Squreflip} alt="" className="dark:invert" />
            </Button>
            <Button color="primary" className="md:hidden block" onClick={Handletoggle}>
              <Image src={Dotsmenu} alt="" className="w-5 dark:invert" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
