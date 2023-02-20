import React from "react";

const CheckBox = ({children, name}) => {
  return (  
    <>
      <div class="checkbox-icon">
        <input
          class="styled-checkbox"
          id={name}
          type="checkbox"
          value="value1"
        />  
        <label for={name} className="relative cursor-pointer text-[#1c1c1c] text-sm flex sm:items-center">
          {children}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
