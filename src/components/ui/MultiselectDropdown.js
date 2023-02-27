import React from "react";
import Multiselect from "multiselect-react-dropdown";
import CloseIcon from "@/assets/images/icon/closebtn.svg";
import Image from "next/image";
import selecticonarrow from "@/assets/images/icon/selecticon.svg";

const MultiselectDropdown = ({ options, title, selectedValues, image }) => {
  return (
    <>
      <div className="relative multiselectitem">
        <Multiselect
          customCloseIcon={
            <>
              <Image src={CloseIcon} alt="" className="" />
            </>
          }
          title={title}
          className=""
          displayValue="key"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={options}
          image={image}
          selectedValues={selectedValues}
          placeholder={""}
        />
        <Image
          src={selecticonarrow}
          className="absolute right-0 top-[50%] -translate-y-[50%] pointer-events-none dark:invert"
        />
      </div>
    </>
  );
};

export default MultiselectDropdown;
