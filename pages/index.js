import Head from "next/head";
import DashboardContent from "./../src/components/dashboard/DashboardContent";
import SetupGuide from "./../src/components/dashboard/SetupGuide";
import SellerCommunity from "./../src/components/dashboard/SellerCommunity";
import Footer from "./../src/components/dashboard/footer";
import { useState } from "react";
import PopupStyle from "../src/components/ui/PopupStyle";
import Star from "./../src/assets/images/icon/Star.svg";

export default function Home() {

  const [openDashboard, setOpenDashboard] = useState(false);
  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="description" content="Becho dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <PopupStyle 
        icon={Star} 
        color={'green'}
        title={'5 Tips to increase your orders and customers'}
        description={'Learn how to set up your business online step by step and sell effectively.'}
      /> */}

      {openDashboard ? <DashboardContent/> : <SetupGuide setOpenDashboard={setOpenDashboard}/>}

      <SellerCommunity/>

      <Footer />
    </>
  );
}
