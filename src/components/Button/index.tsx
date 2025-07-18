import type { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({disabled=false, label, type, loading, variant,onClick,style="" }) => {

const baseClasses = "flex items-center rounded-md gap-x-4 px-4 py-2 shadow-md justify-center disabled:cursor-not-allowed disabled:opacity-45 cursor-pointer transition-all duration-200 ease-in-out " + style;
const variantClasses ={
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-yellow-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
}
  return (
    <button  onClick={onClick} disabled={disabled} type={type} className={`${baseClasses} ${style} ${variantClasses[variant || "primary"]} `}>
      {label}
      {loading && (
        <img src="/assets/spinner.svg" className="w-6 animate-spin" alt="spinner"></img>
      )}
    </button>
  );
};

export default Button;

