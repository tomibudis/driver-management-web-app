import React, { useEffect } from "react";
import Image from "next/image";

import useResponsive from "~src/hooks/useResponsive";
import useDisclosure from "~src/hooks/useDisclosure";
import { MENU } from "~constants/index";

import Drawer from "../Drawer";
import Sidebar from "../Sidebar";
import { useRouter } from "next/router";

const Header = () => {
  const { isMobile } = useResponsive();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    if (isOpen && !isMobile) {
      onClose();
    }
  }, [isOpen, isMobile, onClose]);

  useEffect(() => {
    if (router.pathname && isMobile) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname, isMobile]);

  return (
    <div className="d-flex justify-content-between w-100 align-items-center">
      {isMobile && (
        <div className="px-3 cursor-pointer" onClick={onOpen}>
          <i className="bi bi-list fs-2" />
        </div>
      )}
      <Drawer isOpen={isOpen} onClose={onClose}>
        <Sidebar menu={MENU} />
      </Drawer>
      <div className="p-3">
        <Image
          src="/shipper-logo.png"
          alt="shipper-logo"
          width={130}
          height={35}
          className="p-1"
        />
      </div>
      <div className="d-flex align-items-center px-3">
        {!isMobile && <span className="p-2">Hello, Shipper User</span>}
        <i className="fs-2 bi bi-person-circle" />
      </div>
    </div>
  );
};

export default Header;
