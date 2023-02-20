import Image from "next/image";
import Arrow from "../../assets/images/icon/arrowblack.svg";
import Arrowdown from "../../assets/images/icon/downblackarrow.svg";

const ProductData = [
  {
    title: "Customers",
    count: "3,781",
    growth: "+5.27%",
    img: Arrow,
    bgcolor: "bg-sky-100",
  },
  {
    title: "Orders",
    count: "3,219",
    growth: "+10.78%",
    img: Arrow,
  },
  {
    title: "Revenue",
    count: "₹6,10,895",
    growth: "-0.56%",
    img: Arrowdown,
    bgcolor: "thirdbox",
    counttext: "md:!text-lg",
    boxcontain: "2xl:!gap-2 gap-[1px]",
  },
  {
    title: "Product Sales",
    count: "6,766",
    growth: "-0.56%",
    img: Arrow,
    bgcolor: "bg-blue-50",
  },
];

export default function Dashboardbox() {
  return (
    <>
      <div className="lg:col-span-2 lg:row-span-2">
        <div className="grid grid-cols-2 sm:gap-x-7 gap-2 md:gap-y-8 gap-y-5 h-full">
          {ProductData.map((navi, index) => (
            <div
              key={index}
              className={`xl:p-6 p-4 px-3 bg-primary-light font-semibold rounded-2xl text-[#1c1c1c] xl:max-w-[202px] w-full ${navi.bgcolor}`}
            >
              <h3 className="md:text-sm text-xs font-semibold">{navi.title}</h3>
              <div
                className={`flex pt-3 items-center 2xl:gap-[26px] xl:gap-2 sm:gap-3 gap-1 justify-between lg:justify-start ${navi.boxcontain}`}
              >
                <span className={`md:text-2xl sm:text-lg text-sm ${navi.counttext}`}>{navi.count}</span>
                <div className="flex gap-[6px]">
                  <p className="sm:text-xs text-[10px] font-normal">{navi.growth}</p>
                  <Image src={navi.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
