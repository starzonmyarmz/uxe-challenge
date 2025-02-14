import { ReactNode } from "react"

import "./Button.scss"

type BaseButtonProps = {
  onClick: () => void
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "filled" | "outline"
}

type TextButtonProps = BaseButtonProps & {
  text: string
  children?: never
}

type ChildrenButtonProps = BaseButtonProps & {
  children: ReactNode
  text?: never
}

type ButtonProps = TextButtonProps | ChildrenButtonProps

export const Button = ({
  children,
  className = "",
  onClick,
  size = "md",
  variant = "filled",
  text = "",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${size} button--${variant} ${className}`}
      {...restProps}
    >
      {text || children}
    </button>
  )
}
