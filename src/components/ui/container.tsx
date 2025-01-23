import { ReactNode } from "react"
import { cn } from "lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-4xl px-4", className)}>
      {children}
    </div>
  )
}