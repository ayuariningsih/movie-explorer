
import { MouseEventHandler } from "react"

export interface SearchBarProps {
  placeholder?: string
  handleSearch: (input:Params) => void
}

export interface Params {
  name: string
  limit: number
  after: string
}

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: any
}

