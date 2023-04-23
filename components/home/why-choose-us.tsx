import React from 'react'
import Image from 'next/image'
import CamsolTalent from '../../public/talent.png'
import {motion} from 'framer-motion'

const CARDS = [
    {
        title: 'job placement',
        percentage: 98,
        description: 'Top performers on the leadership board recieve job offers from companies'
    },
    {
        title: 'funded',
        percentage: 70,
        description: 'Top performers on the leadership board recieve job offers from companies'
    },
    {
        title: 'career guidance',
        percentage: 100,
        description: 'Work on top projects from Europe learning from the best'
    },
    {
        title: 'remote',
        percentage: 100,
        description: 'Collaborate with colleagues around africa and the worls from the comfort of your home'
    },
]

const Card = ({percentage, title, description}: {
    percentage: number,
    title: string,
    description: string
}) => {
    return (
        <motion.div
            initial={{opacity: 0, x: 90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.3}}
            viewport={{once: true}}
            className='rounded-2xl flex flex-col items-center justify-center flex-shrink-0 w-full min-h-[12rem] sm:w-56 sm:h-56  p-2 sm:p-4 border border-deluge-900 shadow-md'>
            <h3 className='text-deluge-600 text-2xl sm:text-4xl mb-2'>{percentage} %</h3>
            <p className='text-black text-lg sm:text-2xl text-center font-medium mb-1 capitalize'>{title}</p>
            <p className="text-black/8 text-sm sm:text-base text-center">
                {description}
            </p>
        </motion.div>
    )
}

export const WhyChooseUs = () => {
    return (
        <section className='w-full mt-6 p-4 sm:p-24 flex relative'>
            <div className='w-full lg:w-1/2'>
                <p className='text-black/6 capitalize'>your future is now</p>
                <h3 className='text-2xl font-bold capitalize'>why the best <br />talents
                    <span className='font-bold text-deluge-600'> Choose</span> us
                </h3>
                <div className="flex lg:hidden w-full justify-between mt-4 flex-wrap items-center">
                    {
                        CARDS.map((el) => (
                            <div key={el.title} className='mb-4'>
                                <Card
                                    {...el}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className='hidden lg:flex space-y-28 w-full'>
                    <div className='mt-12 flex items-baseline flex-col w-1/2 pr-6'>
                        <div className='w-full'>
                            <Image
                                src="patterns.svg"
                                alt="background-svg-pattern"
                                width={100}
                                style={{width: "100%"}}
                                height={150}
                            />
                        </div>
                        <div className='mt-10'>
                            <Card
                                title="job placement"
                                percentage={98}
                                description='Top performers on the leadership board recieve job offers from companies'
                            />
                        </div>
                    </div>
                    <div className='flex items-baseline flex-col w-1/2'>
                        <div className='-mt-16'>
                            <Card
                                title="career guidance"
                                percentage={100}
                                description='Work on top projects from Europe learning from the best'
                            />
                        </div>
                        <div className='mt-20 relative left-8'>
                            <Card
                                title="remote"
                                percentage={100}
                                description='Collaborate with colleagues around africa and the worls from the comfort of your home'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='flex ml-12 gap-12'>
                    <div className=''>
                        <Card
                            title="job placement"
                            percentage={98}
                            description='Top performers on the leadership board recieve job offers from companies'
                        />
                    </div>
                    <div className='mt-10'>
                        <Card
                            title="funded"
                            percentage={70}
                            description='70% of top performers have a business idea funded'
                        />
                    </div>
                </div>
                <div className='absolute right-0 mt-6'>
                    <div className='w-[85%] rounded-l-full absolute top-0 right-0 h-[50vh] bg-gradient-to-t from-deluge-700 to-deluge-200 mt-20'></div>
                    <div className='relative top-0'>
                        <div>
                            <Image
                                alt="camsol-talent"
                                src={CamsolTalent}
                                placeholder="blur"
                                width={600}
                                height={250}
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
