export type Variant = "primary" | "link";

export interface ButtonProps extends React.RefAttributes<HTMLButtonElement> {
  onClick?: () => void;
  rightIcon?: string;
  leftIcon?: string;
  variant: Variant;
  disabled?: boolean;
  isMobile?: boolean;
}
