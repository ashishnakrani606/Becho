import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import ArrLineDown from "@/assets/images/icon/ArrowLineDown.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";

const WalkInLeadsTable = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((walkInLeadsRowData, index) => (
        <tr
          className={`${
            selected.includes(index) ? "dark:bg-white/5 bg-primary-light" : ""
          } border-b border-black/5 dark:border-white/5 dark:hover:bg-white/5  hover:bg-primary-light  group transition-all duration-300 cursor-pointer text-xs ${
            walkInLeadsRowData.tablesec
          }`}
          key={index}
        >
          <td>
            <div className="pl-[5px] py-2 flex items-center">
              <CheckBox
                value={index}
                name={walkInLeadsRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />  
              {walkInLeadsRowData.orderId}
            </div>                                                                
          </td>
          <td className="px-3 py-2 whitespace-nowrap flex items-center">
            <Image  src={walkInLeadsRowData.ClientImage} alt="" className="mr-2 py-[6px]"/>
            <p className="leading-[18px]">{walkInLeadsRowData.clientsName}</p></td>
          <td className="px-3 pr-[10px] py-2">
            <p className="max-w-[94px] w-full leading-[18px]">{walkInLeadsRowData.type}</p></td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap leading-[18px]">{walkInLeadsRowData.floor}</td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap leading-[18px]">{walkInLeadsRowData.rent}</td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap">
            <p className="flex items-center leading-[18px]">
           <Image src={walkInLeadsRowData.calenderIcon} alt="" className="mr-1 dark:invert"/> 
           {walkInLeadsRowData.startDate}
            </p>
           </td>
          <td className="px-3 pr-[10px] py-2 whitespace-nowrap ">
            <p className="flex items-center leading-[18px]">
          <Image src={walkInLeadsRowData.calenderIcon} alt="" className="mr-1 dark:invert"/> 
            {walkInLeadsRowData.endDate}
            </p>
          </td>
          <td className="px-3 pr-[10px] py-2 leading-[18px]">
            <Button name={walkInLeadsRowData.NoticePeriod} outline={"true"} color={walkInLeadsRowData.buttonColor} secondary={"true"} className={`flex items-center whitespace-nowrap justify-center !py-[2px] px-2 !text-sm ${walkInLeadsRowData.buttonOutline}`} > 
            <Image src={walkInLeadsRowData.addIcon} alt="" className={`mr-1 w-4 ${walkInLeadsRowData.imageStyle}`}/> 
            </Button>
          </td>
          <td className="pr-4 leading-[18px]">
            <Dropdown
              className="right-0 left-[unset]"  
              itemsclass="w-[240px] right-0 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0"
              
              button={
                <div className="flex gap-1 items-center py-[2px] text-sm px-2 justify-center border rounded-lg border-black/10 dark:border-white/10 ">
                  {walkInLeadsRowData.agreement}
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
                {id:2, title: "View details", link: "/" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default WalkInLeadsTable;
