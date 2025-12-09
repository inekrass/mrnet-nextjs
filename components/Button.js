export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  ...props 
}) {
  const baseStyles = "rounded-full font-medium uppercase tracking-[0.07em] transition-all duration-200";
  
  const variants = {
    primary: "bg-cyan-400 text-black hover:bg-cyan-300",
    secondary: "bg-black text-white border border-white hover:bg-white hover:text-black",
    gradient: "bg-gradient-to-r from-orange-600 via-purple-400 to-cyan-400 text-black hover:opacity-90",
  };
  
  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-2 text-sm",
    lg: "px-12 py-3 text-xl",
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


