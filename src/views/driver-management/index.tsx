import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SearchControl,
  Button,
  Card,
  Avatar,
  DataRow,
  Pagination,
} from "~components/index";
import { setCurrentPage } from "~redux/drivers/reducer";
import { RootState } from "~redux/store";
import useResponsive from "~src/hooks/useResponsive";
import { WrapperData, WrapperHeader } from "./styled";

const DriverManagement: React.FC = () => {
  const { isMobile } = useResponsive();
  const dispatch = useDispatch();
  const drivers = useSelector((state: RootState) => state.drivers);

  const onNext = useCallback(() => {
    dispatch(setCurrentPage(drivers.info.page + 1));
  }, [dispatch, drivers]);

  const onPrev = useCallback(() => {
    dispatch(setCurrentPage(drivers.info.page - 1));
  }, [dispatch, drivers]);

  return (
    <div className="p-3">
      <WrapperHeader isMobile={isMobile}>
        <div>
          <h4>DRIVER MANAGEMENT</h4>
          <p>Data driver yang bekerja dengan Anda.</p>
        </div>
        <div>
          <SearchControl placeholder="Cari Driver" onChange={() => null} />
          <Button variant="primary" rightIcon="bi bi-plus">
            Tambah Driver
          </Button>
        </div>
      </WrapperHeader>
      <div className="overflow-auto">
        <WrapperData className="py-4" isMobile={isMobile}>
          <Card driverId="1234">
            <Avatar img="https://randomuser.me/api/portraits/men/24.jpg" />
            <DataRow label="Nama Driver" value="First Name, LastName" />
            <DataRow label="Telepon" value="74678172783" />
            <DataRow label="Email" value="mail@gmail.com" />
            <DataRow label="Tanggal Lahir" value="DD/mm/YYYY" />
          </Card>

          <Card driverId="1234">
            <Avatar img="https://randomuser.me/api/portraits/men/24.jpg" />
            <DataRow label="Nama Driver" value="First Name, LastName" />
            <DataRow label="Telepon" value="74678172783" />
            <DataRow label="Email" value="mail@gmail.com" />
            <DataRow label="Tanggal Lahir" value="DD/mm/YYYY" />
          </Card>

          <Card driverId="1234">
            <Avatar img="https://randomuser.me/api/portraits/men/24.jpg" />
            <DataRow label="Nama Driver" value="First Name, LastName" />
            <DataRow label="Telepon" value="74678172783" />
            <DataRow label="Email" value="mail@gmail.com" />
            <DataRow label="Tanggal Lahir" value="DD/mm/YYYY" />
          </Card>

          <Card driverId="1234">
            <Avatar img="https://randomuser.me/api/portraits/men/24.jpg" />
            <DataRow label="Nama Driver" value="First Name, LastName" />
            <DataRow label="Telepon" value="74678172783" />
            <DataRow label="Email" value="mail@gmail.com" />
            <DataRow label="Tanggal Lahir" value="DD/mm/YYYY" />
          </Card>

          <Card driverId="1234">
            <Avatar img="https://randomuser.me/api/portraits/men/24.jpg" />
            <DataRow label="Nama Driver" value="First Name, LastName" />
            <DataRow label="Telepon" value="74678172783" />
            <DataRow label="Email" value="mail@gmail.com" />
            <DataRow label="Tanggal Lahir" value="DD/mm/YYYY" />
          </Card>
        </WrapperData>
      </div>
      <Pagination
        hasNext={true}
        hasPrevious={false}
        className="py-4"
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
};

export default memo(DriverManagement);
