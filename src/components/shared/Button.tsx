import {FC, ReactNode, DetailedHTMLProps, ButtonHTMLAttributes} from "react";
import {clsx} from "clsx";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const Button: FC<ButtonProps> = ({ children, className, ...rest}) => {
  const classNames = "flex items-center gap-3 px-4 py-3 text-white text-base leading-4 button"
  return (
    <button {...rest} className={clsx(classNames, className)}>{children}</button>
  )
}

export default Button