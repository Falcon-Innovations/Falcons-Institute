import React from 'react'
import Link from 'next/link'


export const NavLink = ({to, label}: {to: string, label: string}) => {
    return (
        <Link href={to} className="cursor-pointer list-none text-lg text-neutral-700 flex flex-col group">
            {label}
            <div className='group-hover:visible group-hover:transition group-hover:ease-in group-hover:delay-300 duration-300 invisible w-1/2 h-1 bg-deluge-600 rounded-md self-end' />
        </Link>
    )
}
