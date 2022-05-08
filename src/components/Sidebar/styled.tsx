import styled from "styled-components";

interface Menu {
  isActive: boolean;
}

const RED_COLOR = "#f04a41";

export const MenuStyled = styled.div<Menu>`
  border-left: ${(props) =>
    props.isActive ? `8px solid ${RED_COLOR}` : "8px solid white"};
  color: ${(props) => props.isActive && RED_COLOR};
  cursor: pointer;
  &:hover {
    color: ${RED_COLOR};
  }
`;
