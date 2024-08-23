import { ButtonHTMLAttributes, } from "react";
import PropTypes from "prop-types";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps>=({
  isLoading = false,
  variant = "primary",
  children,
  className="",
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
        className={`${variant} ${className} `}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
};

Button.propTypes = {
    variant: PropTypes.oneOf<ButtonVariant>(["primary", "secondary"]),
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool


}

export default Button;