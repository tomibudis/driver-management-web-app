import React from "react";
import useResponsive from "~src/hooks/useResponsive";

import { StyledCard } from "./styled";
interface CardProps {
  driverId: string;
}
const Card: React.FC<CardProps> = ({ children, driverId }) => {
  const { isMobile } = useResponsive();
  return (
    <StyledCard isMobile={isMobile}>
      <div className="p-3">
        <div>
          Driver ID: <span>{driverId}</span>
        </div>
        <i className="bi bi-three-dots" />
      </div>

      <hr />
      <div className="p-3">{children}</div>
    </StyledCard>
  );
};

export default Card;
