import React, { useCallback } from "react";

import { StyledSearchControl, StyledWrapper } from "./styled";

interface SearchControlProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchControl: React.FC<SearchControlProps> = ({
  placeholder = "Enter here...",
  onChange,
}) => {
  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <StyledWrapper>
      <i className="bi bi-search" />
      <StyledSearchControl
        type="text"
        placeholder={placeholder}
        onChange={onSearch}
      />
    </StyledWrapper>
  );
};

export default SearchControl;
