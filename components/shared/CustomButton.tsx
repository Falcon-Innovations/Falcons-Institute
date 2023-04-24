import React from 'react'
import {twMerge} from "tailwind-merge";

interface CustomButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    label: string,
    variant?: 'primary' | 'secondary',
    loading?: boolean,
    iconBefore?: JSX.Element,
    iconAfter?: JSX.Element,
    classNames?: string
}

const baseClasses = 'text-white whitespace-nowrap py-3 px-5 align-middle rounded-3xl bg-orange-500'
const primaryClasses = 'hover:bg-deluge-500  hover:text-white/75  bg-orange-500 text-white disabled:bg-neutral-100 disabled:text-neutral-300'
const secondaryClasses = 'hover:bg-deluge-500  hover:text-white/75  bg-blue-500 text-white disabled:bg-neutral-100 disabled:text-neutral-300'




export const CustomButton = ({label, variant = 'primary', loading, iconAfter, iconBefore, classNames, ...props}: CustomButtonProps) => {
    const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses
    return (
        <button
            className={twMerge
                (
                    baseClasses,
                    variantClasses,
                    classNames
                )}
            {...props}
        >
            {iconBefore && iconBefore}
            {loading ? 'Loading...' : label}
            {iconAfter && iconAfter}
        </button>
    )
}
