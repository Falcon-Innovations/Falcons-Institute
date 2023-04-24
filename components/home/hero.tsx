/* eslint-disable @next/next/no-img-element */
import React, {Fragment} from 'react'
import Image from "next/image";
import {CustomButton} from '@/components/shared/CustomButton';
import Link from 'next/link';
import LadyWithKaba from "../../public/lady-with-kaba.png";
import {motion} from 'framer-motion';
import Container from '@/components/layout/container';
export const Hero = () => {

    return (
        <div className="w-full bg-blue-50 flex min-h-[100vh]">
            <Container>
                <div className="w-full flex">
                    <div className="w-full px-4 sm:w-2/3 ">
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
                                        label="watch video"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="hidden sm:block w-1/3 relative pt-6">
                        <div className="absolute -left-40 top-1/5 hidden lg:block">
                            <motion.div className="relative"
                                initial={{opacity: 0, x: 90}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.3}}
                                viewport={{once: true}}
                            >
                                <Image
                                    alt="lady-with-laptop"
                                    src={LadyWithKaba}
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
                        <div className="flex items-center mt justify-center mt-20">
                            <Image
                                src="patterns.svg"
                                alt="background-svg-pattern"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
