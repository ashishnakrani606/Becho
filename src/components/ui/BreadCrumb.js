import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumb= () => {
  let curl = useRouter();

  let currentLink = '';
  console.log(curl)

const crumbs = curl.asPath.split('/')
.filter(crumb => crumb !== '')
.map(crumb => {
  currentLink += `/${crumb}`;
console.log(currentLink)

var newcrumb = crumb.replace(/-/, ' ')
  return (
    
  <Link href="#0" className="text-sm text-blacklight dark:text-white" key={crumb}>
  {/* <span className={`${location === navi.href ? " " : "hidden"}`}> */}
    <span className="ml-1 d-inline-block font-normal capitalize">/ {newcrumb}</span>
  {/* </span> */}
</Link>
  )
})

  return (
    <>
      {crumbs}
    </>
  ); 
};

export default BreadCrumb;
