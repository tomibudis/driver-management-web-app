export type Variant = "primary" | "link";

export interface ButtonProps extends React.RefAttributes<HTMLButtonElement> {
  onClick?: () => void;
  rightIcon?: string;
  variant: Variant;
  disabled?: boolean;
}
