import React from 'react'
import Image from "next/image";
import Block from "../../../src/assets/images/img/Block.png";
import Link from "next/link";

const SellerCommunity = () => {
  return (
    <>
       {/**********Seller Community sec Start************/}
       <div class="flex md:flex-row flex-col mt-10 gap-5 md:mb-16 mb-10">
        <div class="max-w-[612px] w-full">
          <div className="relative">
            <Image src={Block} alt="" className="min-h-[250px]" />
            <div className=" absolute top-7 left-8">
              <p className=" text-xs font-semibold text-[#fff]">BECHO.IO SELLER COMMUNITY</p>
            </div>
            <div className=" absolute bottom-8 text-[#fff]  left-8">
              <h2 className="md:text-2xl text-lg max-w-[450px] w-full font-semibold leading-tight">
                Empowering Indian Entrepreneurs: Join the Becho Community
              </h2>
              <div className="mt-5">
                <Link href="#0" className="text-sm font-normal text-[#fff] py-[6px] px-2 rounded-lg bg-[#f0f8ff50]">
                  Start the journey
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="text-sm max-w-[232px] w-full">
          <h2 className="font-semibold">What’s New</h2>
          <div className="pt-5">
            <p className="font-normal">New theme “Bharat” now available</p>
            <span className="text-xs text-black/40 dark:text-white/40">25 Jan 2023</span>
            <p className="font-normal pt-4">New payment gateways added</p>
            <span className="text-xs text-black/40 dark:text-white/40">21 Jan 2023</span>
            <p className="font-normal pt-3">A new, faster way to create and sell products</p>
            <span className="text-xs text-black/40 dark:text-white/40">18 Jan 2023</span>
          </div>
          <div className="pt-4">
            <Link href="#0" className="text-black/40 dark:text-white/40">
              View more features
            </Link>
          </div>
        </div>
      </div>
      {/**********Seller Community sec End************/}
    </>
  )
}

export default SellerCommunity
