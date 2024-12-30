import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const BasicButton: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  isLoading = false,
  disabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-white text-sm font-medium ${className} ${
        disabled || isLoading
          ? "bg-purple-400 cursor-not-allowed"
          : "bg-primary-dark hover:bg-dark-2 hover:shadow-md hover:shadow-white/10"
      }`}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default BasicButton;
