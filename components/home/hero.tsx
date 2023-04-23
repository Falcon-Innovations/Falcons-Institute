/* eslint-disable @next/next/no-img-element */
import React, {Fragment} from 'react'
import Image from "next/image";
import {CustomButton} from '@/components/shared/CustomButton';
import Link from 'next/link';
import {NavLink} from '../shared/NavLink';
import LandingImg from '../../public/landing-image.png'
import {Pencil, User} from 'lucide-react';
import {motion} from 'framer-motion';
import {CollapsibleNavLink} from '../shared/CollapsibleNavLink';
import {Code, Heart, MessageSquare, Newspaper, Rocket} from 'lucide-react'
import MobileNavbar from '../shared/MobileNavbar';
import CamsolLogo from '../shared/CamsolLogo';


const COMPANY_SUBLINKS = [
    {
        title: 'Camsol innovation',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Rocket,
        link: '/'
    },
    {
        title: 'Camsol Technology',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Code,
        link: '/'
    },
    {
        title: 'Camsol Foundation',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Heart,
        link: '/'
    },
    {
        title: 'Camsol Platform',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: MessageSquare,
        link: '/'
    },
    {
        title: 'Camsol Learning',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Newspaper,
        link: '/'
    }
]

const TEAM_SUBLINKS = [
    {
        title: 'Consultant',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: User,
        link: '/'
    },
    {
        title: 'Developer',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Code,
        link: '/'
    },
    {
        title: 'Designer',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Pencil,
        link: '/'
    },
    {
        title: 'C-Level',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: MessageSquare,
        link: '/'
    },
    {
        title: 'Data scientist',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Newspaper,
        link: '/'
    }
]


export const Hero = () => {

    return (
        <>
            <div className="w-full flex">
                <div className="w-full px-4 sm:w-2/3 pt-6 sm:pl-16 lg:pl-24">
                    <nav className="hidden sm:flex capitalize items-center gap-8">
                        <CamsolLogo />
                        <NavLink to='about-us' label='about' />
                        <NavLink to='services' label='our process' />
                        <CollapsibleNavLink
                            label="Company"
                            sublinks={COMPANY_SUBLINKS}
                        />
                        <CollapsibleNavLink
                            label="Team"
                            sublinks={TEAM_SUBLINKS}
                        />
                    </nav>
                    <MobileNavbar />
                    <motion.div
                        initial={{opacity: 0, x: -90}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.3}}
                        viewport={{once: true}}
                    >
                        <h1 className="capitalize mt-4 sm:mt-16 text-black font-bold text-4xl sm:text-5xl leading-10 sm:leading-[55px]">A new way to
                            <br /> connect, collaborate<br /> and excel in the <br />
                            <span className="text-deluge-600 capitalize">tech industry.</span>
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
                                    label="Get started ~ now"
                                />
                            </Link>
                            <Link href="/login">
                                <CustomButton
                                    variant='secondary'
                                    label="watch video"
                                    iconBefore={
                                        <Image
                                            src="./play.svg"
                                            alt="play-icon"
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                            </Link>
                        </div>
                        <div className="isolate flex -space-x-1 overflow-hidden my-6">
                            <img
                                className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <p className="text-black font-bold">80+</p>
                            <span className="w-2 h-2 rounded-full bg-deluge-600"></span>
                            <p className="text-black/8">Active users across the globe</p>
                        </div>
                    </motion.div>
                </div>
                <div className="hidden sm:block w-1/3 relative bg-deluge-100 pt-6">
                    <div className="flex cursor-pointer -ml-28 items-center justify-center">
                        <Link href="/login">
                            <CustomButton
                                label="Book consultant"
                            />
                        </Link>
                    </div>
                    <div className="absolute -left-40 top-1/5 hidden lg:block">
                        <motion.div className="relative"
                            initial={{opacity: 0, x: 90}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.3}}
                            viewport={{once: true}}
                        >
                            <Image
                                alt="lady-with-laptop"
                                src={LandingImg}
                                placeholder="blur"
                                width={350}
                                height={150}
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </motion.div>
                    </div>
                    <div className="flex items-center mt justify-center mt-20">
                        <Image
                            src="rocket.svg"
                            alt="play-icon"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className='mt-2 sm:-mt-12 w-full relative z-50'>
                <p className='text-center text-black/8 mb-2'>Trusted by</p>
                <div className='mx-auto text-lg sm:text-2xl sm:max-w-lg bg-white ring-white ring-8 shadow-2xl px-8 py-2 space-x-8 rounded-2xl flex text-deluge-400 sm:w-full items-center justify-center'>
                    <p>Karla</p>
                    <p>Finanzegruppe</p>
                    <p>GasVisor</p>
                </div>
            </motion.div>
        </>
    )
}
