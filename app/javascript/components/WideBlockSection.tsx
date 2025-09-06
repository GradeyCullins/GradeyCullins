import {ReactNode} from "react";

interface WideBlockSectionProps {
  children: ReactNode
  className?: string
}

export default function WideBlockSection({ children, className }: WideBlockSectionProps) {
  return (
    <div className={`border-b border-gray-200 py-8 ${className}`}>
      {children}
    </div>
  )

}