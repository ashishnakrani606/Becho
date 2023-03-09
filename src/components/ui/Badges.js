import React from "react";

function Badges(props) {
  return (
    <>
      <span
        className={`rounded-2xl leading-normal text-xs inline-block px-[6px] ${props.className} ${
          props.color == "yellow"
            ? "text-black/80  bg-secondary-yellow"
            : "" || props.color == "red"
            ? "text-white bg-secondary-red/70"
            : "" || props.color == "dot"
            ? "dot-active pl-4"
            : "" || props.color == "purple"
            ? "bg-secondary-purpleb/20 text-secondary-purplea"
            : "" || props.color == "greylight"
            ? "bg-grey-light dark:bg-white/10 text-[#070707] dark:text-white "
            : "" || props.color == "grey"
            ? "bg-black/10 dark:bg-white/10 text-black/40 dark:text-white/40 "
            : "" || props.color == "green"
            ? "text-primary-greena bg-primary-greena/10"
            : "" || props.color == "lightred"
            ? "text-black/80 bg-secondary-red/50"
            : "" || props.color == "darkred"
            ? "text-white bg-secondary-red"
            : "" || props.color == "darkgreen"
            ? "text-black/80 bg-secondary-greenb"
            : "" || props.color == "lightblue"
            ? "text-black/80 bg-[#EDEDFF]"
            : "" || props.color == "aliceblue"
            ? "text-black/80 bg-[#E2F5FF]"
            : "" || props.color == "greydarker"
            ? "text-black/80 bg-[#E0E0E0]"
            : "" || props.color == "blueb"
            ? "text-black/80 bg-secondary-blueb"
            : ""
        }`}
      >
        {props.name}
      </span>
    </> 
  );
}

export default Badges;
