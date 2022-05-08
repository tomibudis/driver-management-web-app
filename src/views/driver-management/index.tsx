import React, { memo } from "react";

import {
  SearchControl,
  Button,
  Card,
  Avatar,
  DataRow,
  Pagination,
} from "~components/index";
import useResponsive from "~src/hooks/useResponsive";
import { WrapperData, WrapperHeader } from "./styled";

const DriverManagement: React.FC = () => {
  const { isMobile } = useResponsive();

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
        onNext={() => null}
        onPrev={() => null}
      />
    </div>
  );
};

export default memo(DriverManagement);
