import React from "react";
import { ButtonProps } from "@/interface";


const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor,
}) => {
  // Map color names to Tailwind bg classes (add more if needed)
  const bgColorClass =
    {
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      orange: "bg-orange-500 hover:bg-orange-600",
    }[buttonBackgroundColor] || "bg-gray-500";

  return (
    <button
      onClick={action}
      className={`${bgColorClass} text-white font-semibold py-2 px-4 rounded transition-colors duration-200`}
      type="button"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
