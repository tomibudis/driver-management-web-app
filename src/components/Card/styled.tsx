import styled from "styled-components";
import { COLORS } from "~constants/index";

export const StyledCard = styled.div`
  background: white;
  width: 250px;
  border-radius: 4px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    > div > span {
      color: ${COLORS.RED};
    }
  }

  > hr {
    height: 2px;
    opacity: 0.1;
    padding: 0px;
    margin: 0px;
  }
`;
