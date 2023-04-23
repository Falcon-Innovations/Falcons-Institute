import React from 'react'
import Image from "next/image";
import {CustomButton} from '@/components/shared/CustomButton';
import cn from 'classnames';
import Link from 'next/link';
import {CustomInput} from '@/components/shared/CustomInput';
import GuyWithSuit from '../../public/guy-in-suit.png';
import CustomFileUpload from '@/components/shared/CustomFileUpload';
import {useRouter} from 'next/router';
import {useWaitlistContext} from 'contexts/waitlist';
import {useForm} from 'react-hook-form'
import CamsolLogo from '@/components/shared/CamsolLogo';


type FormData = {
  githubProfileLink: string,
  referalSource: string,
  resume: string
};

const Connect = () => {
  const router = useRouter()
  const {dispatch, githubProfileLink, referalSource, resume} = useWaitlistContext()
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      githubProfileLink,
      referalSource,
      resume: undefined
    }
  });
  const onSubmit = (data: FormData) => {
    dispatch({type: "update_gh_link", payload: data.githubProfileLink})
    dispatch({type: "update_referal_source", payload: data.referalSource})
    router.push('/onboarding/waitlist')
  }
  return (
    <div className="flex w-full">
      <div className="w-full sm:w-2/3 pt-6 px-4 sm:pl-16 lg:pl-24">
        <nav className="flex items-baseline space-x-8 capitalize">
          <CamsolLogo />
        </nav>
        <h1 className="mt-8 text-4xl lg:leading-[35px] lg:text-3xl font-bold capitalize leading-[50px] text-black">
          Connect, participate and earn
          <br /> amazing{" "}
          <span className="capitalize text-deluge-600">rewards</span>
        </h1>
        <p className="text-black/8 mt-2 mb-4">
          Please provide the necessary information <br /> to setup your
          profile!
        </p>
        <div className="w-full lg:w-[65%]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center justify-between gap-4">
            <CustomInput
              placeholder="Link to your github profile"
              registration={register("githubProfileLink", {required: 'This is a required field'})}
              error={errors.githubProfileLink}
            />
            <CustomFileUpload
              name="uploadResume"
              placeholder="Click to upload resume"
            />
            <CustomInput
              placeholder="How did you hear about us"
              registration={register("referalSource", {required: 'This is a required field'})}
              error={errors.referalSource}
            />
            <div className="flex w-full space-x-2">
              <Link href="/onboarding" className="d-block w-full">
                <CustomButton
                  label="Back"
                  classNames="w-full"
                  variant="secondary"
                />
              </Link>
              <CustomButton label="Submit" classNames="w-full" />
            </div>
          </form>
        </div>
      </div>
      <div className="relative hidden sm:block -z-20 h-screen sm:w-1/3 bg-deluge-100 pt-6">
        <div className="flex cursor-pointer items-center justify-center space-x-2">
          {Array.from({length: 4}, (v, idx) => (
            <span
              key={idx}
              className={cn(
                "h-4 rounded-full",
                idx === 2 ? "w-8 bg-deluge-600" : "w-4 bg-deluge-200",
              )}
            />
          ))}
        </div>
        <div className="absolute  hidden lg:block -left-36 top-[15%]">
          <div className="relative">
            <Image
              alt="lady-with-laptop"
              src={GuyWithSuit}
              placeholder="blur"
              width={350}
              height={500}
              quality={100}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="mt mt-20 flex items-center justify-center">
          <Image src="/rocket.svg" alt="play-icon" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}

export default Connect