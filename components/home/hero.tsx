/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import Image from "next/image";
import {CustomButton} from '@/components/shared/CustomButton';
import Link from 'next/link';
import LadyWithBooks from '../../public/lady-with-books.png';
import {motion} from 'framer-motion';
import Container from '@/components/layout/container';
import {Waitlist} from './waitlist';


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
                            <div className="flex w-full justify-evenly sm:justify-start items-center space-x-4">
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
                            <motion.div className="relative flex items-center justify-center mt-12 sm:hidden"
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
                <Waitlist />
            </Container>
        </div>
    )
}
