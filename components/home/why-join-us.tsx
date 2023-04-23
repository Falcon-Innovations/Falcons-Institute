import Image from 'next/image'
import React from 'react'
import {ChevronRight} from 'lucide-react';
import {CustomButton} from '../shared/CustomButton';
import CamsolSport from '../../public/sport.png'
import GroupSocials from '../../public/group-socials.png'
import GroupPicture from '../../public/group-picture.png'



export const WhyJoinUs = () => {
    return (
        <section className='w-full flex px-2 sm:px-24 mt-10'>
            <div className='hidden sm:block w-[45%]'>
                <div className="flex flex-col space-y-8">
                    <Image
                        alt="lady-with-laptop"
                        src={CamsolSport}
                        placeholder="blur"
                        width={400}
                        height={200}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <p className='text-black'>
                        But it &lsquo;s not just about individual achievement.
                        At Camsol, we value collaboration and teamwork. That &lsquo;s why we&lsquo;ve implemented an employee recommendation system, where you can earn points on the leadership board by receiving recommendations from your colleagues.
                    </p>
                    <Image
                        alt="Camsol social pictures"
                        src={GroupSocials}
                        placeholder="blur"
                        width={400}
                        height={200}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
            <div className='w-1/5 sm:w-[10%] h-[80vh] sm:h-[100vh] mt-12 hidden  sm:flex items-center  flex-col justify-between px-1 sm:px-4'>
                <div className="w-[2px] h-full bg-black/20 flex flex-col justify-between items-center">
                    <span className="w-8 h-8 bg-deluge-600 rounded-full flex justify-center text-white p-1 items-center text-center">1</span>
                    <span className="w-8 h-8 bg-deluge-600 rounded-full flex justify-center text-white p-1 items-center text-center">2</span>
                    <span className="w-8 h-8 bg-deluge-600 rounded-full flex justify-center text-white p-1 items-center text-center">3</span>
                </div>
            </div>
            <div className='w-full sm:w-[45%]'>
                <h3 className="text-2xl mb-4 font-bold capitalize">
                    Why{" "}
                    <span className="text-deluge-600">join</span>
                    {" "} us
                </h3>
                <ol className="sm:hidden relative border-l border-black/20 px-1">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-deluge-600 rounded-full mt-1.5 -left-1.5"></div>
                        <h3 className="text-black">
                            With Camsol social everyone is welcome to join and create an account.
                            You will be able to chat and post with your peers, as well access exclusive bootcamp resources to help
                            you sharpen your skills. Plus you will have the opportunity to Participate in screening projects
                            and tasks, which can earn you points on the camsol leadership board
                        </h3>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-deluge-600 rounded-full mt-1.5 -left-1.5"></div>
                        <h3 className="text-black">
                            With Camsol social everyone is welcome to join and create an account.
                            You will be able to chat and post with your peers, as well access exclusive bootcamp resources to help
                            you sharpen your skills. Plus you will have the opportunity to Participate in screening projects
                            and tasks, which can earn you points on the camsol leadership board
                        </h3>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-deluge-600 rounded-full mt-1.5 -left-1.5"></div>
                        <h3 className="text-black">And for those who excel in their screening projects and tasks, we have a special reward in store: job offers
                            from Camsol. That &lsquo;s right, the top performers on the
                            leadership board will have the chance to join the
                            Camsol team and take their careers to the next level.</h3>
                    </li>
                </ol>
                <div className="hidden sm:flex flex-col space-y-8 mb-4">
                    <p className='text-black'>
                        With Camsol social everyone is welcome to join and create an account.
                        You will be able to chat and post with your peers, as well access exclusive bootcamp resources to help
                        you sharpen your skills. Plus you will have the opportunity to Participate in screening projects
                        and tasks, which can earn you points on the camsol leadership board
                    </p>
                    <Image
                        alt="camsol group picture"
                        src={GroupPicture}
                        placeholder="blur"
                        width={400}
                        height={200}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <p className='text-black'>
                        And for those who excel in their screening projects and tasks, we have a special reward in store: job offers
                        from Camsol. That &lsquo;s right, the top performers on the
                        leadership board will have the chance to join the
                        Camsol team and take their careers to the next level.
                    </p>
                </div>
                <CustomButton
                    label='Register now'
                    iconAfter={<ChevronRight color="white" size={20} />}
                    classNames='mt-16 mb-8'
                />
            </div>
        </section>
    )
}
