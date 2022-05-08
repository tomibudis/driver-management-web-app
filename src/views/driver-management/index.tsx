import React, { memo } from "react";

import { SearchControl, Button } from "~components/index";
import useResponsive from "~src/hooks/useResponsive";
import { WrapperHeader } from "./styled";

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
            TAMBAH DRIVER
          </Button>
        </div>
      </WrapperHeader>
    </div>
  );
};

export default memo(DriverManagement);
