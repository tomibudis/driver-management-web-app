import styled from "styled-components";

export const StyledSearchControl = styled.input`
  border: 1px solid #dddddd;
  padding: 10px 10px 6px 32px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  width: inherit;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  > i {
    position: absolute;
    margin-left: 10px;
    margin-top: 2px;
  }
`;
