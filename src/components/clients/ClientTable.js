import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import ArrLineDown from "@/assets/images/icon/ArrowLineDown.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";


const ClientTable = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((clientsRowData, index) => (
        <tr
          className={`${
            selected.includes(index) ? "dark:bg-white/5 bg-primary-light" : ""
          } border-b border-black/5 dark:border-white/5 dark:hover:bg-white/5  hover:bg-primary-light group transition-all duration-300 cursor-pointer text-xs ${
            clientsRowData.tablesec
          }`}
          key={index}
        >
          <td>
            <div className="pl-[5px] py-2 flex">
              <CheckBox
                value={index}
                name={clientsRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />  
              {clientsRowData.orderId}
            </div>  
          </td>
          <td className="px-3 py-2 whitespace-nowrap flex items-center">
            <Image  src={clientsRowData.clientImage} alt="" className="mr-2 py-[6px]"/>
            <p className="leading-[18px]">{clientsRowData.clientsName}</p></td>
          <td className="px-3 pr-[10px] py-2">
            <p className="max-w-[94px] w-full leading-[18px]">{clientsRowData.type}</p></td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap leading-[18px]">{clientsRowData.floor}</td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap leading-[18px]">{clientsRowData.rent}</td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap">
            <p className="flex items-center leading-[18px]">
           <Image src={clientsRowData.calenderIcon} alt="" className="mr-1 dark:invert"/> 
           {clientsRowData.startDate}
            </p>
           </td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap">
            <p className="flex items-center leading-[18px]">
          <Image src={clientsRowData.calenderIcon} alt="" className="mr-1 dark:invert"/> 
            {clientsRowData.endDate}
            </p>
          </td>
          <td className={`px-3 pr-[10px] py-2 whitespace-nowrap`}>
            <Button name={clientsRowData.noticePeriod} outline={"true"} color={clientsRowData.buttonColor} secondary={"true"} className={`flex items-center whitespace-nowrap justify-center !py-[2px] pr-2 !text-sm ${clientsRowData.buttonOutline}`} > 
            <Image src={clientsRowData.addIcon} alt="" className={`mr-1 w-4 ${clientsRowData.imageStyle}`}/> 
            </Button>
          </td>
          <td className={`px-4 ${clientsRowData.tabelBorder}`}>
            <Dropdown
              className="right-0 left-[unset]"  
              itemsclass="w-[240px] right-0 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0"              
              button={
                <div className={`flex gap-1 text-sm items-center !py-[2px] px-2 justify-center border rounded-lg border-black/10 dark:border-white/10 `}>
                  {clientsRowData.agreement}
                  <Image src={ArrLineDown} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                {id:1, title: "download", link: "/" },
              ]}
            />
          </td>

          <td className={`${selected.includes(index) ? "group-hover:opacity-100" : "opacity-0 group-hover:opacity-100 pr-4"} `}>
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="w-[240px] !block right-0 p-2 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-center">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                {id:1, title: "Activate offer (or Deactivate offer)", link: "" },
                {id:2, title: "View details", link: "./clients/new-clients" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default ClientTable;
