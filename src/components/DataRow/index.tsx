import React from "react";

import { StyledDataRow } from "./styled";

interface DataRowProps {
  label: string;
  value: string;
  isDate?: boolean;
}
const DataRow: React.FC<DataRowProps> = ({ value, label }) => {
  return (
    <StyledDataRow>
      <span>{label}</span>
      <span>{value}</span>
    </StyledDataRow>
  );
};

export default DataRow;
