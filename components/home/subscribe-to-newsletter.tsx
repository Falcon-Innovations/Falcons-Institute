import React from 'react'
import {CustomButton} from '../shared/CustomButton'
import Container from '../layout/container'
import Image from 'next/image'
export const SubscribeToNewsletter = () => {
    return (
        <section className='relative py-6  sm:py-16 text-white flex flex-col bg-blue-500 sm:flex-row items-center w-full mx-auto'>
            <Image
                src="patterns.svg"
                alt="background-svg-pattern"
                width={200}
                height={150}
                className='absolute z-50 top-0  left-[10%]'
            />
            <Container classNames='text-white  flex flex-col bg-blue-500 sm:flex-row sm:gap-4 items-center'>
                <div className='w-full sm:w-1/2'>
                    <h3 className="text-[20px] relative sm:text-3xl text-white font-semibold capitalize mb-6 sm:mb-2">
                        subscribe to our
                        <br className='block sm:hidden' />
                        <span className="">{" "}Newsletter for latest updates</span>
                    </h3>
                </div>
                <div className='w-full rounded-2xl flex items-center justify-center py-1.5 px-2 sm:py-3 sm:px-[14px] bg-white sm:w-1/2'>
                    <div className='flex items-baseline justify-between w-full space-x-4'>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='focus:ring-transparent text-black-500 p-2 text-sm focus:border-none rounded-md border-none w-full outline-none block bg-transparent'
                        />
                        <div className=''>
                            <CustomButton
                                label='Subscribe'
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
