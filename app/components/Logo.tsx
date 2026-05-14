type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const color = variant === "dark" ? "#0A174C" : "#FFFFFF";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 14 L16 6 L26 14 L26 16 L24 16 L24 26 L8 26 L8 16 L6 16 Z"
          fill={color}
        />
        <text
          x="16"
          y="23"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={variant === "dark" ? "#FFFFFF" : "#0A174C"}
          fontFamily="Georgia, serif"
        >
          B
        </text>
      </svg>
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${
          variant === "dark" ? "text-navy-800" : "text-white"
        }`}
      >
        Bertila
      </span>
    </span>
  );
}
