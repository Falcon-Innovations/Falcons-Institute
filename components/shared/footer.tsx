import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import {CustomButton} from './CustomButton'
import CamsolLogo from './CamsolLogo'

const MENUS = [
    ['About us', 'About us', 'Team', 'Projects', 'Magazine'],
    ['Company', 'Innovation', 'Technologies', 'Community', 'Training'],
    ['Social', 'Instagram', 'Linkedin', 'Tiktok'],
    ['Legal', 'Privacy policy', 'Imprint', 'Careers', 'Cookies']
]

export const Footer = () => {
    const today: Date | string = new Date()
    const year = today.getFullYear()

    return (
        <footer className='w-full px-4 sm:px-24 pt-24 pb-8  bg-white'>
            <div className='flex flex-col sm:flex-row items-start w-full space-x-0 justify-between'>
                <section className='w-full sm:w-1/3 max-w-[350px]'>
                    <CamsolLogo />
                    <p className='mt-2 text-neutral-800 text-sm'>
                        Empowering people trough technology.
                        Camsol Innovations GmbH
                        Widenmayerstraße 34
                        80538 München
                    </p>
                </section>
                <section className='grid grid-cols-2 w-full items-start content-between mt-4 sm:mt-0 sm:flex flex-1 justify-between'>
                    {
                        MENUS.map((menu, index) => (
                            <ol key={index} className='space-y-1 flex-1 sm:space-y-4 mb-4 sm:mb-0'>
                                {
                                    menu.map((link, idx) => (
                                        <li key={idx} className={classNames('text-neutral-800 cursor-pointer capitalize whitespace-nowrap mr-8', idx === 0 ? 'text-xl' : 'text-sm')}>{link}</li>
                                    ))
                                }
                            </ol>))
                    }
                    <div className='max-w-[270px]'>
                        <h3 className='text-neutral-800 cursor-pointer capitalize whitespace-nowrap text-xl mb-4'>Newsletter</h3>
                        <p className='text-neutral-800  cursor-pointer capitalize text-sm mb-2'>
                            The world of technology is constantly evolving
                            and we want to keep you up to date on the latest trends and innovations from Camsol.
                        </p>
                        <div className="space-x-2 w-full flex items-baseline">
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='focus:ring-transparent px-2 py-[10.5px]  text-sm  rounded-md border border-neutral-200 w-full block bg-transparent text-black'
                            />
                            <CustomButton
                                label='Send'
                                classNames='bg-deluge-700 rounded-2xl py-2 px-4 min-w-fit  rounded-md'
                            />
                        </div>
                    </div>
                </section>
            </div >
            <p className='mt-8 text-xs text-neutral-800'>
                Copyright &copy; {year} Camsol Technologies. All rights reserved
            </p>
        </footer>
    )
}
