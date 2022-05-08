import React from "react";

import { SidebarMenu } from "~types/components";
import { useResponsive } from "~hooks/useResponsive";
import Sidebar from ".";

const WrappedSidebar: React.FC<{ menu: SidebarMenu[] }> = (props) => {
  const { isMobile } = useResponsive();
  if (isMobile) return null;
  return <Sidebar menu={props.menu} />;
};

export default WrappedSidebar;
