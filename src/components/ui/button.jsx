// Button component đơn giản
const Button = ({ children, variant = "solid", className, ...props }) => {
  const base =
    "flex items-center justify-center rounded-[48px] transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[#1ca8cb] text-white hover:bg-[#1ca8cb]/90"
      : "border border-white bg-transparent text-white hover:bg-white/10";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
