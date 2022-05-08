import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SidebarMenu } from "~src/types/components";

import { MenuStyled } from "./styled";

const Sidebar: React.FC<{ menu: SidebarMenu[] }> = ({ menu }) => {
  const { asPath } = useRouter();
  return (
    <div
      className="d-flex bg-white flex-column overflow-auto h-100"
      style={{ minWidth: "280px" }}
    >
      {menu.map((data, index): JSX.Element | null => {
        const isActive = asPath.includes(data.link);
        return (
          <div key={index}>
            <Link href={!isActive ? data.link : "#"} passHref>
              <MenuStyled
                isActive={isActive}
                className="d-flex align-items-center justify-content-between p-3"
              >
                <div className="d-flex align-items-center">
                  <div className="d-flex mb-1">
                    <i className={data.icon} />
                  </div>
                  <span className="ms-2">{data.label}</span>
                </div>
              </MenuStyled>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
