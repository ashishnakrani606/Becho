import React from "react";

function Badges(props) {
  return(
    <>
      <span className={`rounded-2xl leading-normal text-xs inline-block px-[6px] ${props.className} ${ 
        props.color == 'yellow' ? "text-black/80  bg-secondary-yellow"  : "" ||
        props.color == 'red' ? "text-white bg-secondary-red/70"  : ""  ||
        props.color == 'dot' ? "dot-active pl-[10px]"  : ""  ||
        props.color == 'purple' ? "bg-secondary-purpleb/20 text-secondary-purplea"  : "" ||
        props.color == 'grey' ? "bg-black/10 dark:bg-white/10 text-black/40 dark:white/40 "  : "" ||
        props.color == 'green' ? "text-primary-greena bg-primary-greena/10"  : ""  }`} 
      >
        {props.name}
      </span>
    </>
  );
}

export default Badges;

