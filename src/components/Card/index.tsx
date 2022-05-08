import React from "react";

import { StyledCard } from "./styled";
interface CardProps {
  driverId: string;
}
const Card: React.FC<CardProps> = ({ children, driverId }) => {
  return (
    <StyledCard>
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
