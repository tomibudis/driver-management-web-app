import React from "react";
import { DEFAULT_EMPTY } from "~constants/index";

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
      <span>{value || DEFAULT_EMPTY}</span>
    </StyledDataRow>
  );
};

export default DataRow;
