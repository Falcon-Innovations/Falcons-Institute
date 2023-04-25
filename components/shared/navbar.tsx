import React from 'react'
import {Phone, Mail, MapPin} from 'lucide-react'
import Container from '@/components/layout/container'
import {CustomButton} from './CustomButton'
const Navbar = () => {
    return (
        <Container>
            <div className="w-full p-3">
                <div className="w-full flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-1">
                        <Phone
                            aria-hidden="true"
                            className="h-4 w-4 text-orange-500"
                        />
                        <p className="text-black-400 text-sm">+237 673993113</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Mail
                            aria-hidden="true"
                            className="h-4 w-4 text-orange-500"
                        />
                        <p className="text-black-400 text-sm">contact@falcon-institute.com</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <MapPin
                            aria-hidden="true"
                            className="h-4 w-4 text-orange-500"
                        />
                        <p className="text-black-400 text-sm">Ange Raphael, Douala</p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className='flex items-center w-full space-x-12'>
                        <h1 className='text-black-500 font-bold text-2xl'>Falcon<span className='text-orange-500'>Institute</span></h1>
                        <p className="text-blue-600 text-[20px] font-semibold">Education</p>
                    </div>
                    <CustomButton label="Get started" />
                </div>
            </div>
        </Container>
    )
}

export default Navbar