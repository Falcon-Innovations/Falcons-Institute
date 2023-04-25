import classNames from 'classnames'
import React from 'react'
import Image from 'next/image'
import {Phone} from 'lucide-react'
import {Mail} from 'lucide-react'
import {MapPin} from 'lucide-react'
import Container from '../layout/container'

const MENUS = [
    ['Useful links', 'About us', 'Careers'],
    ['Social', 'Instagram', 'Linkedin', 'Tiktok'],
]

export const Footer = () => {
    const today: Date | string = new Date()
    const year = today.getFullYear()

    return (
        <footer className='w-full relative'>
            <Container classNames='py-12'>
                <div className='flex flex-col sm:flex-row items-start w-full justify-between'>
                    <section className=''>
                        <div className='flex items-center w-full space-x-12'>
                            <h1 className='text-black-500 font-bold text-2xl'>Falcon<span className='text-orange-500'>Institute</span></h1>
                        </div>
                        <p className='mt-2 text-neutral-800 text-sm'>
                            Fostering innovations through the use of technology
                        </p>
                    </section>
                    <section className='grid grid-cols-2 items-start content-between mt-4 sm:mt-0 sm:flex sm:w-3/5  justify-between'>
                        {
                            MENUS.map((menu, index) => (
                                <ol key={index} className='space-y-1 flex-1 sm:space-y-4 mb-4 sm:mb-0'>
                                    {
                                        menu.map((link, idx) => (
                                            <li key={idx} className={classNames('text-black-200 cursor-pointer capitalize whitespace-nowrap mr-8', idx === 0 ? 'text-xl text-orange-500' : 'text-sm')}>{link}</li>
                                        ))
                                    }
                                </ol>))
                        }
                        <div className='max-w-[270px]'>
                            <h3 className='text-orange-500 cursor-pointer capitalize whitespace-nowrap text-xl mb-4'>Contact</h3>
                            <p className='text-black-200  cursor-pointer capitalize text-sm mb-2'>
                                Dont hesitate to get in touch.
                            </p>
                            <div className="w-full flex flex-col gap-4">
                                <div className="flex items-center space-x-1">
                                    <Phone
                                        aria-hidden="true"
                                        className="h-4 w-4 text-orange-500"
                                    />
                                    <p className="text-black-200 text-sm">+237 673993113</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Mail
                                        aria-hidden="true"
                                        className="h-4 w-4 text-orange-500"
                                    />
                                    <p className="text-black-200 text-sm">contact@falcon-institute.com</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <MapPin
                                        aria-hidden="true"
                                        className="h-8 w-4 text-orange-500"
                                    />
                                    <p className="text-black-200 text-sm">Ange Raphael, Douala</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
                <p className='mt-8 text-xs text-center text-black-400'>
                    Copyright &copy; {year} Falcons Institute. All rights reserved
                </p>
            </Container>
            <Image
                src="patterns.svg"
                alt="background-svg-pattern"
                width={200}
                height={150}
                className='absolute z-50 bottom-0  left-[5%]'
            />
        </footer>
    )
}
