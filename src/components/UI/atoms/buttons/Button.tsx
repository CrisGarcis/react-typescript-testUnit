import React from "react";
import "./style.css";

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

export const ButtonTheme = {
  DEFAULT: "default",
  ROUNDED: "rounded",
};

export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

type Props = {
  type: string;
  theme?: string;
  size?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Button = (props: Props): React.ReactElement => {
  const { type, onClick, children, theme, size, className, disabled, ...rest } =
    props;

  return (
    <button {...rest} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: "",
  disabled: false,
};

export default Button;
