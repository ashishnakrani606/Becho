import React from 'react' 
import Image from "next/image"; 
import Link from "next/link";
import Brand from "../../../src/assets/images/img/brand-asset.svg";
import DashboardTablebox from "../../../src/components/dashboard/DashboardTablebox";
import Dashboardbox from "../../../src/components/dashboard/Dashboardbox";
import Select from "../../../src/components/dashboard/Select";
import Button from "../../../src/components/ui/Button";

const DashboardContent = () => {
  return (
    <>
     {/* *********Dashboard sec Start*********** */}
     <div className="md:px-3">
        <div className="flex items-center text-blacklight dark:text-white justify-between">
          <h3 className="font-semibold">Dashboard</h3>
          <Select />
        </div>
        <div class="lg:grid grid-rows-2 grid-cols-4 grid-flow-col lg:gap-x-7 gap-x-3 gap-y-8 mt-5">
          <Dashboardbox />
          <div class="row-span-2 col-span-2 lg:mt-0 mt-7">
            <div className="lg:p-7 lg:pl-6 lg:pr-4 p-4 bg-primary-light dark:bg-white/5 font-semibold rounded-2xl lg:h-full lg:flex">
              <div className="flex pt-3 gap-8">
                <Image src={Brand} alt="" className="sm:w-auto w-40 h-full dark:invert"/>
                <div className="gap-[6px]  xl:pt-6 pt-2">
                  <h2 className="text-sm font-semibold">Becho.io Learn</h2>
                  <p className="text-xs font-normal pt-1">Learn how to set up your business online step by step.</p>
                  <Button color="yellow" name="Start now" className="sm:mt-7 mt-5 text-blacklight" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**********Dashboard sec End************/}

      {/**********Orders Table sec Start************/}
      <div className="md:pl-3 md:pr-1">
        <div className="mt-14 text-blacklight dark:text-white">
          <h2 className="text-sm font-semibold">Recent Orders</h2>
          <div className="text-end pr-2 pb-1">
            <Link href="#0" className="text-xs text-black/40 dark:text-white/40">
              View all orders
            </Link>
          </div>
          <div className="xl:overflow-x-visible overflow-x-auto">
            <table class="xl:w-full lgm:w-[900px] lg:w-full w-[1020px]">
              <thead>
                <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                  <th className="font-normal pl-0 p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border">
                    Order ID
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                    Date
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                    Customer
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                    Payment status
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                    Fulfillment status
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                    Items
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start">
                    Delivery method
                  </th>
                </tr>
              </thead>
              <tbody>
                <DashboardTablebox />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/**********Orders Table sec End************/} 
    </>
  )
}

export default DashboardContent
