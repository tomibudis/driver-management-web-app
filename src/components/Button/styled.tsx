import styled from "styled-components";

import { COLORS } from "~constants/index";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background: ${(props) => (props.variant === "primary" ? COLORS.RED : "none")};
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  width: inherit;
  color: ${(props) => (props.variant === "primary" ? "white" : "black")};
  :hover {
    background: ${(props) => props.variant === "primary" && "#f04a41d4"};
    color: ${(props) => props.variant === "link" && "#000000db"};
  }

  :disabled {
    opacity: 0.5;
  }
`;
