import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarDropdown (props,opentableHandler) {
  return (
    <>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className={`${props.className}`}>{props.button}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-[999] overflow-hidden w-[150px] right-0 mt-2 origin-top-right divide-y divide-black/5 dark:divide-white/10 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 focus:outline-none ${props.className}`}
            >
            {props.dropdownitem.map((item) => (
              <Menu.Item>
                {({ active }) => (                
                  <a
                    href={item.link}
                    className={classNames(
                      active ? "bg-black/5 dark:bg-white/20" : "",
                      "group flex gap-1 items-center px-2 py-2 text-sm",                      
                    )}
                    key={item}                    
                    >
                    <Image src={item.icon} />                                 
                    {item.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
