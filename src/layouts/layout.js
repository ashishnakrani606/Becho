import React from "react";

const Layout = ({ children, container }) => {
  return (
    <div
      className={`mx-auto md:px-8 px-4 ${container ? "max-w-[1064px]" : ""}`}
    >
      {children}
    </div>
  );
};

export default Layout;
