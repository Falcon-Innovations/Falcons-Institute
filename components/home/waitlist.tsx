/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import {CustomButton} from '@/components/shared/CustomButton';
import {CustomInput} from '../shared/CustomInput';
import {CustomSelect} from '../shared/CustomSelect';
import {ref, child, push, update} from "firebase/database";
import {db} from '@/lib/firebase';
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

export const Waitlist = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [selectedProgram, setSelectedProgram] = useState(PROGRAMMES[0])

    const joinWaitlist = async () => {
        const freshStudent = {
            name,
            email,
            phone_number: phoneNumber,
            interest: selectedProgram.value
        }
        console.log(freshStudent)
        try {
            const result = await (ref(db, 'students/'), freshStudent);
            const newStudentKey = push(child(ref(db), 'students')).key;
            const updates = {};
            updates['/students/' + newStudentKey] = freshStudent;
            return update(ref(db), updates).then(() => {
                console.log("Data saved succesfully")
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <section className='w-[90%] sm:w-4/5 mx-auto flex bg-white rounded-[12px] shadow-xl'>
            <div className="hidden sm:block w-1/3 relative rounded-l-lg bg-red-600">
                <img
                    src="team.png"
                    className="rounded-l-[12px]"
                    alt="team picture"
                />
            </div>
            <div className="w-2/3 hidden  sm:flex flex-col justify-between px-8 py-6">
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
                    <CustomInput
                        placeholder='Your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <CustomInput
                        placeholder='Your email'
                        type="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full flex items-center space-x-3 justify-between">
                    <CustomInput
                        placeholder='Phone number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <CustomSelect
                        name="Programme"
                        selected={selectedProgram}
                        setSelected={setSelectedProgram}
                        options={PROGRAMMES}
                    />
                    <CustomButton label='Join waitlist' onClick={joinWaitlist} />
                </div>
            </div>
            {/* Mobile styles */}
            <div className="w-full gap-4 flex flex-col sm:hidden justify-between px-8 py-6">
                <div className='flex text-orange-500 items-center space-x-4'>
                    <span className="d-block w-8 h-[0.5px] bg-orange-500 " />
                    <p className="text-xs">
                        For everyone
                    </p>
                </div>
                <h2 className="text-black-400 text-lg font-semibold">
                    What are you waiting for? Start your tech career now.
                </h2>
                <CustomInput placeholder='Your name' />
                <CustomInput placeholder='Your email' type="email" />
                <CustomInput placeholder='Phone number' />
                <CustomSelect
                    name="Programme"
                    selected={selectedProgram}
                    setSelected={setSelectedProgram}
                    options={PROGRAMMES}
                />
                <CustomButton label='Join waitlist' />
            </div>
        </section>
    )
}