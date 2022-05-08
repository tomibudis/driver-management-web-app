import React from "react";
import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  rightIcon,
  onClick,
  children,
  disabled = false,
  ...props
}) => (
  <div>
    <StyledButton
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
      {rightIcon && <i className={rightIcon} />}
    </StyledButton>
  </div>
);

export default Button;
