import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "submit" | "login";
  className?: string;
}

export const Button = ({
  variant = "submit",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={variant === "submit" ? "submit" : "button"}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
