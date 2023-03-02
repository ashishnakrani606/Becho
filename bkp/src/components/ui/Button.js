import React from "react";

function Button(props) {
  return (
    <>
      <button
        className={`btn transition-all duration-500 text-xs px-2 py-[6px] rounded-lg leading-[18px]  
          ${props.secondary == "true" ? "text-blacklight dark:text-white" : "text-white"}
          ${
            props.color == "yellow"
              ? "bg-secondary-yellow !text-blacklight hover:bg-[#f7de87]"
              : "" || props.color == "grey"
              ? "bg-primary-purple !text-blacklight"
              : "" || props.color == "greydark"
              ? "bg-gray-1"
              : "" || props.color == "blue"
              ? "text-blacklight bg-primary-blue"
              : "" || props.color == "red"
              ? "bg-red-300"
              : "" || props.color == "secondary-red"
              ? "bg-secondary-red"
              : "" || props.color == "redlight"
              ? "bg-secondary-red/70 text-white"
              : "" || props.color == "lightgrey"
              ? "bg-black/5 dark:bg-white/5 text-blacklight dark:text-white"
              : "" || props.color == "lightgreen"
              ? "text-black bg-secondary-greenb hover:bg-[#a4eba9]"
              : "" || props.color == "primarygreen"
              ? "bg-primary-greenb"
              : "" || props.color == "green"
              ? " bg-primary-green"
              : "" || props.color == "teal"
              ? "text-blacklight bg-secondary-greena"
              : "" || props.color == "blacklight"
              ? "text-white bg-blacklight dark:bg-secondary-purpleb dark:text-blacklight"
              : "" || props.color == "purple"
              ? "bg-secondary-purplea text-white dark:!text-blacklight"
              : ""
          } 
          ${props.outline == "true" ? `border !bg-transparent` : ""}
          ${
            props.outline == "true" && props.color == "red"
              ? "border-secondary-red !text-secondary-red"
              : "" || (props.outline == "true" && props.color == "grey")
              ? "border-black/10 text-blacklight dark:!border-white/10 dark:!text-white"
              : "" || (props.outline == "true" && props.color == "blacklight")
              ? "border-black/20 text-blacklight dark:!border-white/20 dark:!text-white"
              : ""
          }
          ${
            props.size == "large"
              ? "px-3 !py-2 leading-[20px]"
              : "" || props.size == "medium"
              ? "px-2 !py-1 text-sm"
              : "" || props.size == "small"
              ? "px-2 !py-[5px]"
              : ""
          } 
          ${props.className}       
        `}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;