import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import Selecticon from "@/assets/images/icon/selecticon.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function VarientDropdown(props) {
  const [selected, setSelected] = useState(props.selectitem[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-pointer bg-white dark:bg-transparent text-left focus:border-0 focus:outline-none focus:ring-0 sm:text-sm">
                <span className={`truncate text-black/80 dark:!text-white/80 ${props.className}`}>{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Image src={Selecticon} className="dark:invert" />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black text-base shadow-lg ring-1 ring-black dark:ring-0 dark:border-white/10 dark:border ring-opacity-5 focus:outline-none sm:text-sm">
                  {props.selectitem.map((item) => (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-white bg-black dark:bg-white dark:text-black"
                            : "text-black/80 dark:text-white/80",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? "font-medium" : "font-normal", "block truncate")}>
                            {item.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
}
