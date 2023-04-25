/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Container from '../layout/container'
import {BarChart, Clock, MapPin, Tag} from 'lucide-react'


const LeadText = ({label}: {label: string}) => {
    return (<div className='flex text-orange-500 items-center space-x-4'>
        <span className="d-block w-8 h-[0.5px] bg-orange-500 " />
        <p className="text-xs">
            {label}
        </p>
    </div>)
}

const Badge = ({label, icon}: {label: string, icon: React.ReactNode}) => {
    return (
        <div className="bg-orange-200 inline-flex text-[12px] items-center space-x-1 text-orange-500 py-[6px] px-[14px] rounded-[20px]">
            {icon}
            <p>
                {label}
            </p>
        </div>
    )
}
export const Courses = () => {
    return (
        <Container classNames='py-12 px-4'>
            <div className='py-12'>
                <LeadText label='Bootcamp' />
                <div className='flex items-center space-x-3 mb-6'>
                    <h1 className='font-semibold text-black-400 text-2xl'>Learn from experts in the industry</h1>
                </div>
                <div className="w-full flex flex-col sm:flex-row sm:space-x-10">
                    <div className='w-full'>
                        <img
                            src="design.png"
                            alt="team picture"
                        />
                    </div>
                    <div className='w-full flex flex-col justify-between'>
                        <div className="flex items-center my-8 sm:my-0 space-x-3">
                            <h3 className="text-blue-500 text-2xl sm:text-[28px]">UI/UX Design Bootcamp</h3>
                            <Badge icon={<MapPin className="w-4 h-6" />} label="onsite" />
                        </div>
                        <p className='text-black-400 text-base sm:text-[20px] mt-0 sm:-mt-16'>
                            The program will be delivered through
                            a combination of online learning materials, live interactive sessions,
                            hands-on projects, and mentoring.
                            Participants will have access to a personalized
                            learning plan that will guide them through the program and help them achieve their goals.
                        </p>
                        <p className='text-black-400 text-base sm:text-[20px] mt-0 sm:-mt-16'>
                            The training program is open to anyone who is passionate about technology and has a basic understanding of computer science. Whether you are a recent graduate,
                            a career changer, or a working professional,
                            this program will help you gain the skills and knowledge
                            needed to succeed in the tech industry.
                        </p>
                        <div className="w-full flex items-center mt-8 sm:mt-0 space-x-6">
                            <div className='flex items-center space-x-3 text-black-400 text-base sm:text-lg'>
                                <Clock className="text-blue-500 h-6 w-6" />
                                <p>2.5 Months</p>
                            </div>
                            <div className='flex items-center space-x-3 text-black-400 text-base sm:text-lg'>
                                <BarChart className="text-blue-500 h-6 w-6" />
                                <p>Beginner</p>
                            </div>
                            <div className='flex items-center space-x-3 text-black-400 text-base sm:text-lg'>
                                <Tag className="text-blue-500 h-6 w-6" />
                                <p>80k FCFA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-12'>
                <div className="w-full flex flex-col-reverse sm:flex-row sm:space-x-10">
                    <div className='w-full flex flex-col justify-between'>
                        <div className="flex items-center my-8 sm:my-0 space-x-3">
                            <h3 className="text-blue-500 text-2xl sm:text-[28px]">Web dev Bootcamp</h3>
                            <Badge icon={<MapPin className="w-4 h-6" />} label="onsite" />
                        </div>
                        <p className='text-black-400 text-base sm:text-[20px] mt-0 sm:-mt-16'>
                            The program will be delivered through
                            a combination of online learning materials, live interactive sessions,
                            hands-on projects, and mentoring.
                            Participants will have access to a personalized
                            learning plan that will guide them through the program and help them achieve their goals.
                        </p>
                        <p className='text-black-400 text-base sm:text-[20px] mt-0 sm:-mt-16'>
                            The training program is open to anyone who is passionate about technology and has a basic understanding of computer science. Whether you are a recent graduate,
                            a career changer, or a working professional,
                            this program will help you gain the skills and knowledge
                            needed to succeed in the tech industry.
                        </p>
                        <div className="w-full flex items-center mt-8 sm:mt-0 space-x-6">
                            <div className='flex items-center space-x-3 text-black-400 text-base sm:text-lg'>
                                <Clock className="text-blue-500 h-6 w-6" />
                                <p>2.5 Months</p>
                            </div>
                            <div className='flex items-center space-x-3 text-black-400 text-base sm:text-lg'>
                                <BarChart className="text-blue-500 h-6 w-6" />
                                <p>Beginner</p>
                            </div>
                            <div className='flex items-center space-x-3 text-black-400 text-base sm:text-lg'>
                                <Tag className="text-blue-500 h-6 w-6" />
                                <p>80k FCFA</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img
                            src="web-dev.png"
                            alt="team picture"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
