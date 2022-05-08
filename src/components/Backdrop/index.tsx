import React from "react";
import cx from "classnames";

interface BackdropProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isShow: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick, isShow }) => {
  return (
    <div
      onClick={onClick}
      className={cx("modal-backdrop fade", { show: isShow })}
    ></div>
  );
};

export default Backdrop;
