import React from "react";
import Header from "./header/Header";
import RightSidebar from "./sidebars/vertical/RightSidebar";
import Sidebar from "./sidebars/vertical/Sidebar";

const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };
  const [opensidebar, setOpensidebar] = React.useState(false);
  const showMobilesidebar = () => {
    setOpensidebar(!opensidebar);
  };

  return (
    <main>
      <div className="pageWrapper lgm:flex overflow-hidden">
        {/******** Sidebar **********/}
        <div
          className={`lgm:relative fixed lgm:w-[212px] bg-white dark:bg-blacklight border-r border-black/10 dark:border-white/10 lgm:h-screen h-full overflow-auto z-50 custom-scrollbar duration-300 transition-all ${
            open ? "lgm:-ml-[212px]" : "lgm:ml-0 -ml-[212px] showSidebar"
          }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </div>

        {/********Content Area**********/}
        <div className={`${!open ? 'lgm:w-[calc(100vw-212px)]' : "w-full" } flex`}>
          <div className="content-wrapper bg-white dark:bg-blacklight w-full">

            {/********header**********/}
            <Header showMobmenu={() => showMobilemenu()} showsidebar={() => showMobilesidebar()} />

            {/********Middle Content**********/}
            <div className="overflow-y-auto h-[calc(100vh-80px)] custom-scrollbar">
              <div className="max-w-[1000px] mx-auto md:px-8 px-4">
                <div className="pt-7">{children}</div>
              </div>
            </div>
          </div>
          {/********Right Sidebar**********/}
          <div
            className={`lgm:relative fixed right-0 md:w-[280px] w-[212px] lg:h-screen h-full overflow-auto z-10 border-l border-l-black/10 dark:border-l-white/10 custom-scrollbar bg-white dark:bg-blacklight duration-300 transition-all' ${
              opensidebar ? "lgm:-mr-[280px]" : "lgm:mr-0 md:-mr-[280px] -mr-[212px] showrightSidebar"
            }`}
          >
            <RightSidebar showMobilesidebar={() => showMobilesidebar()} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
