/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import Image from "next/image";
import {CustomButton} from '@/components/shared/CustomButton';
import Link from 'next/link';
import LadyWithBooks from '../../public/lady-with-books.png';
import {motion} from 'framer-motion';
import Container from '@/components/layout/container';
import {CustomInput} from '../shared/CustomInput';
import {CustomSelect} from '../shared/CustomSelect';

const PROGRAMMES = [
    {
        label: 'Interest',
        value: 'placeholder'
    },
    {
        label: 'Web dev',
        value: 'Web dev'
    },
    {
        label: 'UI / UX',
        value: 'ui/ux'
    },
]

const WaitListForm = () => {
    const [selectedProgram, setSelectedProgram] = useState(PROGRAMMES[0])

    return (
        <section className='w-4/5 mx-auto flex bg-white rounded-[12px]'>
            <div className="w-1/3 relative rounded-l-lg bg-red-600">
                <img
                    src="team.png"
                    className="rounded-l-[12px]"
                    alt="team picture"
                />
            </div>
            <div className="w-2/3 flex flex-col justify-between px-8 py-6">
                <div className='flex text-orange-500 items-center space-x-4'>
                    <span className="d-block w-8 h-[0.5px] bg-orange-500 " />
                    <p className="text-xs">
                        For everyone
                    </p>
                </div>
                <h2 className="text-black-400 text-2xl font-semibold">
                    What are you waiting for? Start your tech career now.
                </h2>
                <div className="w-full flex items-center space-x-3">
                    <CustomInput placeholder='Your name' />
                    <CustomInput placeholder='Your email' type="email" />
                </div>
                <div className="w-full flex items-center space-x-3 justify-between">
                    <CustomInput placeholder='Phone number' />
                    <CustomSelect
                        name="Programme"
                        selected={selectedProgram}
                        setSelected={setSelectedProgram}
                        options={PROGRAMMES}
                    />
                    <CustomButton label='Join waitlist' />
                </div>
            </div>
        </section>
    )
}

export const Hero = () => {


    return (
        <div className="w-full bg-blue-50 pb-8">
            <Container>
                <div className="w-full flex">
                    <div className="w-full px-4 sm:w-1/2 ">
                        <motion.div
                            initial={{opacity: 0, x: -90}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.3}}
                            viewport={{once: true}}
                        >
                            <h1 className="capitalize max-w-[80%] mt-4 sm:mt-16 text-black font-bold text-4xl sm:text-5xl leading-10 sm:leading-[55px]">
                                Providing hands on trainings for amazing tech prospects.
                            </h1>
                            <p className="text-black/8 my-6">
                                We empowering people through technology. here you <br />
                                learn, participate in screening tasks and get rewards.
                            </p>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/getting-started"
                                >
                                    <CustomButton
                                        label="Join us now!"
                                    />
                                </Link>
                                <Link href="/login">
                                    <CustomButton
                                        variant='secondary'
                                        label="Learn more"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="hidden sm:block w-1/2 relative pt-6">
                        <div className="hidden lg:flex justify-end">
                            <motion.div className="relative"
                                initial={{opacity: 0, x: 90}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.3}}
                                viewport={{once: true}}
                            >
                                <Image
                                    alt="lady-with-laptop"
                                    src={LadyWithBooks}
                                    placeholder="blur"
                                    width={500}
                                    height={500}
                                    quality={100}
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <WaitListForm />
            </Container>
        </div>
    )
}
