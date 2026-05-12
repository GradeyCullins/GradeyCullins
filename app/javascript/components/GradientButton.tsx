import {ReactNode} from "react"

interface GradientButtonProps {
  children: ReactNode
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  className?: string
}

export default function GradientButton({ 
  children, 
  disabled = false, 
  type = "button", 
  onClick, 
  className = "" 
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer relative inline-flex items-center bg-gray-950 text-white px-8 py-3 text-base font-medium rounded-sm hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    >
      <div className="relative z-10 flex items-center">{children}</div>
      <div className="absolute inset-0 bg-white rounded-sm opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
    </button>
  )
}
