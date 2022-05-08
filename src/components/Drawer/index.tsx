import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

import cx from "classnames";
import Backdrop from "../Backdrop";

export type PlacementTypeDrawer = "start" | "end";
interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  placement?: PlacementTypeDrawer;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  placement = "start",
}) => {
  const modalNode = useRef<HTMLDivElement>(null);

  const [showClassName, setShowClassName] = useState("");

  const onClickAway = (event: React.MouseEvent) => {
    const target = event.target as HTMLDivElement;

    if (modalNode.current && !modalNode.current.contains(target)) {
      onClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClassName(isOpen ? "show" : "");
    }, 100);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const drawer = (
    <div
      className={cx("offcanvas w-auto", {
        show: showClassName,
        visible: isOpen,
        invisible: !isOpen,
        "offcanvas-start": placement === "start",
        "offcanvas-end": placement === "end",
      })}
      tabIndex={-1}
    >
      <div ref={modalNode} className="offcanvas-body p-0">
        {children}
      </div>
    </div>
  );
  return (
    <>
      {isOpen &&
        createPortal(
          <>
            {drawer}
            <Backdrop onClick={onClickAway} isShow={!!showClassName} />
          </>,
          document.body
        )}
    </>
  );
};

export default Drawer;
