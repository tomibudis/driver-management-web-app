import styled from "styled-components";
import { COLORS } from "~constants/index";

interface Menu {
  isActive: boolean;
}

export const MenuStyled = styled.div<Menu>`
  border-left: ${(props) =>
    props.isActive ? `8px solid ${COLORS.RED}` : "8px solid white"};
  color: ${(props) => props.isActive && COLORS.RED};
  cursor: pointer;
  &:hover {
    color: ${COLORS.RED};
  }
`;
