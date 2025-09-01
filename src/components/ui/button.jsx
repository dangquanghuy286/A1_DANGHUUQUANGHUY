const Button = ({ children, variant = "solid", className, ...props }) => {
  const base =
    "flex items-center justify-center rounded-[48px] transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[#1ca8cb] text-white"
      : "border bg-transparent  hover:bg-white/10";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
