import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Pickup from "~views/pickup";

const PickupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Driver Management App</title>
      </Head>
      <Pickup />
    </>
  );
};

export default PickupPage;
