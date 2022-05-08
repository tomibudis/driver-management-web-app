import React from "react";
import useResponsive from "~src/hooks/useResponsive";
import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  rightIcon,
  onClick,
  children,
  disabled = false,
  ...props
}) => {
  const { isMobile } = useResponsive();
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      isMobile={isMobile}
      {...props}
    >
      {children}
      {rightIcon && <i className={rightIcon} />}
    </StyledButton>
  );
};

export default Button;
