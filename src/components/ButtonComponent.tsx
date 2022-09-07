import { FC } from "react";

import "../styles/Button.scss";

interface ButtonProps {
  children: string | string[];
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "telegram";
  variant?: "filled" | "outlined" | "flat" | "link" | "text" | "shadow";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: "quarter" | "half" | "full" | "auto";
  alignment?: "start" | "center" | "end";
  disabled?: boolean;
  onClick: () => void;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "filled",
  rounded = "sm",
  size = "sm",
  width = "auto",
  alignment = "start",
  disabled = false,
  onClick,
}) => {
  return (
    <div className={`storybook-button--${alignment}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`storybook-button storybook-button-${color}--${variant} storybook-button-rounded--${rounded} storybook-button--${size} 
        storybook-button-width--${width}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
