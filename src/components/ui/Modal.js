import React from "react";
import Image from "next/image";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Closebtn from "@/assets/images/icon/close-icon.svg";


const Modal = ({children, title, open, setOpen}) => {
   
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="fixed z-[999]" initialFocus={cancelButtonRef}  onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/60 dark:bg-black/80 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative transform shadow-xl transition-all bg-primary-light dark:bg-blacklight p-6 rounded-2xl w-full max-w-[500px]">
              <button ref={cancelButtonRef}  onClick={() => setOpen(false)} className="absolute bg-primary-light dark:bg-blacklight p-[3px] right-[-12px] top-[-12px] rounded-xl border border-black/10 dark:border-white/10" >
                <Image src={Closebtn} alt="" className="w-6 h-6 dark:invert" />
              </button>
               <h2 className="text-blacklight dark:text-white font-semibold text-lg text-left">{title}</h2>
               {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  );
};
export default Modal;