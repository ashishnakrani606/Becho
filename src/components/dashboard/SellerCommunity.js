import Image from "next/image";
import Arrow from "@/assets/images/icon/arrowblack.svg";
import Arrowdown from "@/assets/images/icon/downblackarrow.svg";

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
    // img: Arrowdown,  
    bgColor: "bg-secondary-greena",
    // counttext: "md:!text-lg",
    // boxcontain: "2xl:!gap-2 gap-[1px]",
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

export default function Dashboardbox() {
  return (
    <>
      <div className="lg:col-span-2 lg:row-span-2">
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-x-7 gap-2 md:gap-y-8 gap-y-5 h-full">
          {ProductData.map((dashboardData, index) => (
            <div
              key={index}
              className={`xl:py-6 xl:pl-6 xl:pr-2.5 p-4 px-3 bg-primary-light font-semibold rounded-2xl text-blacklight xl:max-w-[202px] w-full ${dashboardData.bgColor}`}
            >
              <h3 className="md:text-sm text-xs font-semibold">{dashboardData.title}</h3>
              <div
                className={`flex pt-2.5 items-center 2xl:gap-[26px] xl:gap-2 sm:gap-3 gap-1 justify-between lg:justify-start ${dashboardData.boxcontain}`}
              >
                <span className={`md:text-2xl sm:text-lg text-sm ${dashboardData.counttext}`}>
                  {dashboardData.count}
                </span>
                <div className="flex gap-[6px]">
                  <p className="sm:text-xs text-[10px] font-normal">{dashboardData.growth}</p>
                  <Image src={dashboardData.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

