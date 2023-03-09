import React, { useState } from "react";
import Head from "next/head";
import DashboardContent from "@/components/dashboard/DashboardContent";
import Layout from "@/layouts/layout";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="description" content="Becho dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout container>
        <DashboardContent />
      </Layout>
    </>
  );
}
