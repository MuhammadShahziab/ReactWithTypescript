import React from "react";

interface InputProps {
  type: "text" | "email" | "password" | "number" | "date"|"checkbox";
  name: string;
  placeholder: string;
  value?: string ;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  type,
  value,
  checked,
  className = "",
}) => {
  const baseClass =
    ` ${type === "checkbox" ? "h-4 w-4":"w-full h-11 border border-gray-300 rounded-md px-3"}    focus:outline-none focus:ring-1 focus:ring-blue-500`;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={type === "checkbox" ? undefined : value}
      checked={type === "checkbox"? checked : undefined}
      onChange={onChange}
      className={`${baseClass} ${className}`}
    ></input>
  );
};

export default Input;
