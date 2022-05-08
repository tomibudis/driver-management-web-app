import React, { useEffect } from "react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";

import DriverManagement from "~views/driver-management";
import customAxios from "~utils/axios";
import { useDispatch } from "react-redux";
import { setDrivers } from "~redux/drivers/reducer";

const DriverManagementPage = ({
  drivers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDrivers(drivers));
  }, []);

  return (
    <>
      <Head>
        <title>Driver Management App</title>
      </Head>
      <DriverManagement />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await customAxios.get(
    "https://randomuser.me/api/?results=30"
  );
  const drivers = await data;

  return {
    props: {
      drivers,
    },
    revalidate: 10, // In seconds
  };
}

export default DriverManagementPage;
