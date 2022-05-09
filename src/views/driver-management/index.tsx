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
import { toFullName } from "~utils/common";
import { dateFormat } from "~utils/date";
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
          {drivers?.data?.map((driver, index) => {
            return (
              <Card driverId={driver.id.value} key={index}>
                <Avatar img={driver.picture.medium} />
                <DataRow
                  label="Nama Driver"
                  value={toFullName(driver.name.first, driver.name.last)}
                />
                <DataRow label="Telepon" value={driver.phone} />
                <DataRow label="Email" value={driver.email} />
                <DataRow
                  label="Tanggal Lahir"
                  value={dateFormat(driver.dob.date, "DD-MM-YYYY")}
                />
              </Card>
            );
          })}
        </WrapperData>
      </div>
      <Pagination
        hasNext={drivers?.info?.hasNext}
        hasPrevious={drivers?.info?.hasPrev}
        className="py-4"
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
};

export default memo(DriverManagement);
