import React from "react";

function Button(props) {
  return (
    <>
      <button
        className={`${props.className} transition-all duration-500 text-xs px-2 py-[6px] rounded-lg  
        ${props.secondary == "true" ? "text-blacklight" : "text-white"}
      ${
        props.color == "yellow"
          ? "bg-secondary-yellow text-blacklight"
          : "" || props.color == "grey"
          ? "bg-primary-purple text-blacklight"
          : "" || props.color == "blue"
          ? "text-blacklight bg-primary-blue "
          : "" || props.color == "red"
          ? "bg-red-300"
          : "" || props.color == "redlight"
          ? "bg-secondary-red/70 text-white"
          : "" || props.color == "lightgrey"
          ? "bg-black/5 dark:bg-white/5 text-blacklight dark:text-white"
          : "" || props.color == "lightgreen"
          ? "text-black bg-secondary-greenb"
          : "" || props.color == "primarygreen"
          ? "bg-primary-greenb"
          : "" || props.color == "green"
          ? " bg-primary-green"
          : "" || props.color == "teal"
          ? "text-blacklight bg-secondary-greena"
          : "" || props.color == "blacklight"
          ? "text-white bg-blacklight dark:bg-secondary-purpleb dark:text-blacklight"
          : "" || props.color == "purple"
          ? "bg-[#95A4FC] text-white"
          : ""
      } 

        ${props.outline == "true" ? `border !bg-transparent` : ""}
        ${
          props.outline == "true" && props.color == "red"
            ? "border-secondary-red text-secondary-red"
            : "" || (props.outline == "true" && props.color == "grey")
            ? "border-black/10 text-blacklight dark:!border-white/10 dark:!text-white"
            : "" || (props.outline == "true" && props.color == "blacklight")
            ? "border-black/20 text-blacklight dark:!border-white/20 dark:!text-white"
            : ""
        }
        ${props.size == "large" ? "px-3 !py-2" : "" || props.size == "medium" ? "px-2 !py-1 text-sm" : ""}          
      `}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
