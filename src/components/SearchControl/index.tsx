import React from "react";

import { StyledSearchControl, StyledWrapper } from "./styled";

interface SearchControlProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchControl: React.FC<SearchControlProps> = ({
  placeholder = "Enter here...",
  onChange,
}) => {
  return (
    <StyledWrapper>
      <i className="bi bi-search" />
      <StyledSearchControl
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </StyledWrapper>
  );
};

export default SearchControl;
