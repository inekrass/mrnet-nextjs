export default function Card({ 
  children, 
  variant = "cyan", 
  className = "",
  ...props 
}) {
  const variants = {
    cyan: "border-cyan-400 bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent",
    orange: "border-orange-600 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent",
    gradient: "bg-gradient-to-br from-orange-600 via-purple-400 to-cyan-400",
  };
  
  return (
    <div
      className={`border rounded-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}


