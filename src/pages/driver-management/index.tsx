import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import DriverManagement from "~views/driver-management";

const DriverManagementPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Driver Management App</title>
      </Head>
      <DriverManagement />
    </>
  );
};

export default DriverManagementPage;
