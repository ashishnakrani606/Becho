import React from "react";

function Badges(props) {
  return(
    <>
      <span className={`rounded-2xl leading-normal text-xs inline-block px-[6px] ${props.className} ${ 
        props.color == 'yellow' ? "text-black/80  bg-secondary-yellow"  : "" ||
        props.color == 'red' ? "text-white bg-red-400"  : ""  ||
        props.color == 'dot' ? "dot-active pl-[10px]"  : ""  ||
        props.color == 'purple' ? "bg-secondary-purpleb/20 text-secondary-purplea"  : "" ||
        props.color == 'green' ? "text-primary-greena bg-primary-greena/10"  : ""  }`} 
      >
        {props.name}
      </span>
    </>
  );
}

export default Badges;

