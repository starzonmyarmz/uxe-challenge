import { ReactNode } from "react"

import "./VisuallyHidden.scss"

type VisuallyHiddenProps = {
  children: ReactNode
}

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <span className="visually-hidden">{children}</span>
}
