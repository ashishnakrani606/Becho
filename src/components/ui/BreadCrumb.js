import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumb= () => {
  let curl = useRouter();
  let currentLink = '';

  const crumbs = curl.asPath.split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
    currentLink += `/${crumb}`;
    return (      
      <Link href={currentLink} className="text-sm text-blacklight dark:text-white" key={crumb}>
        <span className="ml-1 d-inline-block font-normal">/ {crumb}</span>
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
