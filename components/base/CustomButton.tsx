"use client"

import { CustomButtonProps } from '@/types'
import clsx from 'clsx'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisable = false }: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={clsx('flex flex-row relative justify-center items-center py-2.5 px-5 min-w-[100px]', containerStyles)}
      onClick={ handleClick }
      disabled={isDisable}
    >
      <span className={clsx('flex bg-transparent', textStyles)}>
        { title }
      </span>

      { rightIcon }
    </button>
  )
}

export default CustomButton