import styled from "styled-components";

export const StyledDataRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  > span:nth-child(1) {
    font-size: 12px;
    opacity: 0.5;
  }

  > span:nth-child(2) {
    font-weight: 500;
  }
`;
