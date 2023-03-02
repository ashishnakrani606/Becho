import React from "react";

function Button({children, color, outline, name, onClick, size, className, secondary }) {
  return (
    <>
      <button
        className={`btn transition-all duration-500 text-xs px-2 py-[6px] rounded-lg leading-[18px]  
          ${secondary == "true" ? "text-blacklight dark:text-white" : "text-white"}
          ${
            color == "yellow"
              ? "bg-secondary-yellow !text-blacklight hover:bg-[#f7de87]"
              : "" || color == "grey"
              ? "bg-primary-purple !text-blacklight"
              : "" || color == "greydark"
              ? "bg-gray-1"
              : "" || color == "blue"
              ? "text-blacklight bg-primary-blue"
              : "" || color == "red"
              ? "bg-red-300"
              : "" || color == "secondary-red"
              ? "bg-secondary-red"
              : "" || color == "redlight"
              ? "bg-secondary-red/70 text-white"
              : "" || color == "lightgrey"
              ? "bg-black/5 dark:bg-white/5 text-blacklight dark:text-white"
              : "" || color == "lightgreen"
              ? "text-black bg-secondary-greenb hover:bg-[#a4eba9]"
              : "" || color == "primarygreen"
              ? "bg-primary-greenb"
              : "" || color == "green"
              ? " bg-primary-green"
              : "" || color == "teal"
              ? "text-blacklight bg-secondary-greena"
              : "" || color == "blacklight"
              ? "text-white bg-blacklight dark:bg-secondary-purpleb dark:text-blacklight"
              : "" || color == "purple"
              ? "bg-secondary-purplea text-white dark:!text-blacklight"
              : ""
          } 
          ${outline == "true" ? `border !bg-transparent` : ""}
          ${
            outline == "true" && color == "red"
              ? "border-secondary-red !text-secondary-red"
              : "" || (outline == "true" && color == "grey")
              ? "border-black/10 text-blacklight dark:!border-white/10 dark:!text-white"
              : "" || (outline == "true" && color == "blacklight")
              ? "border-black/20 text-blacklight dark:!border-white/20 dark:!text-white"
              : ""
          }
          ${
            size == "large"
              ? "px-3 !py-2 leading-[20px]"
              : "" || size == "medium"
              ? "px-2 !py-1 text-sm"
              : "" || size == "small"
              ? "px-2 !py-[5px]"
              : ""
          } 
          ${className}       
        `}
        onClick={onClick}
      >
        {children}
        {name}
      </button>
    </>
  );
}

export default Button;
