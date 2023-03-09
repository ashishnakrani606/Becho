import React from "react";
import Select from "@/components/dashboard/Select";
const ProductData = [
  {
    title: "Current Total Rent",
    count: "₹16,10,895",
    bgColor: "bg-secondary-yellow",
  },
  {
    title: "Current Active Clients",
    count: "8",
    bgColor:"bg-secondary-greenb"
  },
  {
    title: "Vacant Offices",
    count: "₹14",
    bgColor: "bg-secondary-greena",
  },
  {
    title: "Monthly Expense",
    count: "₹3,10,895",
    bgColor: "bg-secondary-bluea",
  },
  {
    title: "Open Leads",
    count: "17",
    bgColor: "bg-primary-blue",
  },
  {
    title: "Unpaid Invoices",
    count: "4",
    bgColor: "bg-[#ffc7c7]",
  },
  {
    title: "Electricity Bill this month",
    count: "₹1,10,895",
    bgColor: "bg-secondary-purpleb",
  },
  {
    title: "Expense - Eectricity",
    count: "₹2,00,000",
    bgColor: "bg-primary-purple",
  },
];

 function DashboardContent () {
  return (
    <>
      <div className="lg:col-span-2 lg:row-span-2">
      <div className="flex justify-end pb-5">
        <Select
              options={[
                { id: 1, name: "30 Days" },
                { id: 2, name: "24 hours" },
                { id: 3, name: "7 days" },
                { id: 4, name: "90 days" },
              ]}
            />
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-7 gap-2  gap-y-5 h-full">
          {ProductData.map((dashboardData, index) => (
            <div
              key={index}
              className={`xl:py-6 xl:pl-6 xl:pr-2.5 p-4 px-3 bg-primary-light font-semibold rounded-2xl text-blacklight xl:max-w-[202px] w-full ${dashboardData.bgColor}`}
            >
              <h3 className="md:text-sm text-xs font-semibold leading-5">{dashboardData.title}</h3>
              <div
                className={`pt-2 !leading-9 ${dashboardData.boxcontain}`}
              >
                <span className={`md:text-2xl !leading-9  sm:text-lg text-sm ${dashboardData.counttext}`}>
                  {dashboardData.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboardContent;