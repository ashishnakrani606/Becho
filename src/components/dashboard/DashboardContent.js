import React from "react";
import Image from "next/image";
import Link from "next/link";
import Brand from "@/assets/images/img/brand-asset.svg";
import DashboardTablebox from "@/components/dashboard/DashboardTablebox";
import Dashboardbox from "@/components/dashboard/Dashboardbox";
import Select from "@/components/dashboard/Select";
import Button from "@/components/ui/Button";
import Layout from "@/layouts/layout";

const DashboardContent = () => {
  return (
    <>
      {/* *********Dashboard sec Start*********** */}
      <Layout container>
        <div className="md:px-3">
          <div className="flex items-center text-blacklight dark:text-white justify-between">
            <h3 className="font-semibold">Dashboard</h3>
            <Select
              options={[
                { id: 1, name: "30 Days" },
                { id: 2, name: "60 Days" },
                { id: 3, name: "20 Days" },
                { id: 4, name: "10 Days" },
              ]}
            />
          </div>
          <div class="lg:grid grid-rows-2 grid-cols-4 grid-flow-col lg:gap-x-7 gap-x-3 gap-y-8 mt-5">
            <Dashboardbox />
            <div class="row-span-2 col-span-2 lg:mt-0 mt-7 max-w-[432px] mx-auto">
              <div className="lg:p-7 lg:pl-6 lg:pr-4 p-4 bg-primary-light dark:bg-white font-semibold rounded-2xl lg:h-full lg:flex">
                <div className="flex pt-3 gap-8 sm:flex-nowrap flex-wrap">
                  <Image src={Brand} alt="" className="sm:w-auto mx-auto" />
                  <div className="gap-[6px] xl:pt-6 pt-2 w-full">
                    <h2 className="text-sm font-semibold text-blacklight">Becho.io Learn</h2>
                    <p className="text-xs font-normal pt-1 text-blacklight">
                      Learn how to set up your business online step by step.
                    </p>
                    <Button
                      color="yellow"
                      secondary={"true"}
                      size={"small"}
                      name="Start now"
                      className="!text-xs sm:mt-7 mt-5 text-blacklight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      {/**********Dashboard sec End************/}

      {/**********Orders Table sec Start************/}
      <Layout>
        <div className="md:pl-3 md:pr-1">
          <div className="mt-14 text-blacklight dark:text-white">
            <h2 className="text-sm font-semibold">Recent Orders</h2>
            <div className="text-end pr-2 pb-1">
              <Link href="#0" className="text-xs text-black/40 dark:text-white/40">
                View all orders
              </Link>
            </div>
            <div className="xl:overflow-x-visible overflow-x-auto min-h-[306px]">
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
      </Layout>

      {/**********Orders Table sec End************/}
    </>
  );
};

export default DashboardContent;
