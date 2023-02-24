import React from "react";
import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import brownThrowPillows from "@/assets/images/users/brown-throw-pillows.png"; 
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";
const TableRow = [
  {
    id: 1, 
    productImg: brownThrowPillows,
    product: "Brown Throw Pillows",
    status: "Active",
    type: "Indoor ", 
    inventory: "26 in stock",
    vendor: "Rustic LTD",
    name:"brown"
  },
  {
    id: 2, 
    productImg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    name:"antique"
  },
  {
    id: 3, 
    productImg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name:"biodegradable"
  },
  {
    id: 4, 
    productImg: brownThrowPillows,
    product: "Brown Throw Pillows",
    status: "Active",
    type: "Indoor ", 
    inventory: "26 in stock",
    vendor: "Rustic LTD",
    name:"brownthrow"
  },
  {
    id: 5, 
    productImg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    name:"antiquedrawers"
  },
  {
    id: 6, 
    productImg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name:"cardboard"
  },
  {
    id: 7, 
    productImg: brownThrowPillows,
    product: "Gardening hand trowel",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name:"gardening"
  }, 
  {
    id: 8, 
    productImg: brownThrowPillows,
    product: "Antique Drawers",
    status: "Active",
    type: "Outdoor ",
    lowstock: "lowstock",
    inventory: "7 in stock",
    vendor: "Company LTD",
    Selected: 'true',
    name:"companybrownthrow"
  },
  {
    id: 9, 
    productImg: brownThrowPillows,
    product: "Biodegradable cardboard pots",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name:"companycardboard"
  },
  {
    id: 10, 
    productImg: brownThrowPillows,
    product: "Gardening hand trowel",
    status: "Draft",
    type: "Outdoor ", 
    inventory: "Inventory not tracked",
    vendor: "Company LTD",
    name:"handtrowel"
  }, 
   
];

const ProductSelectTable = ({ opentableHandler }) => { 
  return (
    <>
      {TableRow.map((productRowData, index) => (
        <tr
          className={`border-b border-black/5 dark:border-white/5 hover:bg-[#F7F9FB] hover:border-[#F7F9FB] dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${productRowData.tablesec}`}
          key={index}
          >
          <td className="pl-[5px] py-2">
           <div className="">
            <CheckBox name={productRowData.name} />
           </div>
          </td>
          <td className="px-3 py-2">
            <Image
              src={productRowData.productImg}
              alt=""
              className="inline-block mr-2"
            />
            {productRowData.product}
          </td>
          <td className="px-3 pr-0 py-2">
            <h3 className={`relative pl-[11px] ${
                productRowData.status == 'Active' ? 'text-primary-green' : "" || 
                productRowData.status == 'Draft' ? 'text-black/40 dark:text-white/40' : ""
              } `}>
              <span className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                productRowData.status == 'Active' ? 'bg-secondary-greenb' : "" || 
                productRowData.status == 'Draft' ? 'bg-black/40 dark:bg-white/40' : ""
              } `}
              ></span>
              {productRowData.status}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{productRowData.type}</td>
          <td className="px-4 py-2">
            <h3 className={`${ productRowData.lowstock == "lowstock" ? "text-secondary-red" : ""} `}>
              {productRowData.inventory}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{productRowData.vendor}</td>
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { title: "View details", link: "products/name"}
              ]}  
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default ProductSelectTable;
