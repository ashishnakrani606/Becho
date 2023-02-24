import React from "react";

const CheckBox = ({children, name, className, onChange , value = "", checked}) => {
  return (  
    <>
      <div class={`checkbox-icon inline-block relative ${className}`}>
        <input
          className="styled-checkbox"
          id={name}
          onChange={onChange}
          type="checkbox"
          value={value}
          checked={checked}
        />  
        <label for={name} className="relative cursor-pointer text-sm flex sm:items-center">
          {children}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
