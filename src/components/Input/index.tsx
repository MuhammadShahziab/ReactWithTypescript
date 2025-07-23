import React from "react";

interface InputProps {
  type: "text" | "email" | "password" | "number" | "date";
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  type,
  value,
  className = "",
}) => {
  const baseClass =
    "h-11 w-full border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-blue-500";
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClass} ${className}`}
    ></input>
  );
};

export default Input;
