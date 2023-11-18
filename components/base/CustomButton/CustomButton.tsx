"use client"

import { CustomButtonProps } from '@/types'
import clsx from 'clsx'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisable = false }: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={clsx('flex flex-row relative justify-center items-center md:py-2.5 py-1.5 md:px-5 px-2 md:min-w-[100px] min-w-[75px]', containerStyles)}
      onClick={ handleClick }
      disabled={isDisable}
    >
      <span className={clsx('flex bg-transparent text-sm', textStyles)}>
        { title }
      </span>

      { rightIcon }
    </button>
  )
}

export default CustomButton