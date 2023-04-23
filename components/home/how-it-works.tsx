import React from "react";
import Image from "next/image";
import {CustomButton} from "../shared/CustomButton";
import Leaderboard from '../../public/Leaderboard.png'
import {motion} from "framer-motion";

const EXPLANATIONS =
  [{
    id: 1,
    title: "Set up account",
    description: "Register or login then set up your account with your information"
  },
  {
    id: 2,
    title: "Connect & learn",
    description: "Connect with peers learn from exclusive bootcamp resources"
  },
  {
    id: 3,
    title: "Earn points",
    description: "Participate in screenin projects, and earn points through recommendations"
  },
  {
    id: 4,
    title: "Get rewards",
    description: "Being one of the top performers, you get job offers, funding etc"
  }
  ]

const ExplanationCard = ({
  id,
  title,
  description
}: {
  id?: number,
  title: string,
  description: string
}) => (
  <div
    className="flex-shrink-0 w-full max-w-full rounded-2xl py-4 px-6 border border-deluge-900 shadow-md">
    <div className="flex items-center space-x-2 mb-4">
      <span className="h-6 w-6 bg-deluge-600 flex items-center text-sm justify-center rounded-full text-white">{id}</span>
      <h4 className="text-md sm:text-lg font-bold capitalize">{title}</h4>
    </div>
    <p className="text-black/8">{description}</p>
  </div>
);

const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: 3},
};


export const HowItWorks = () => {

  return (
    <section className="flex w-full px-4 sm:px-24 mt-20">
      <div className="hidden lg:block w-1/2">
        <Image
          src="patterns.svg"
          alt="background-svg-pattern"
          width={200}
          height={150}
        />
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.3}}
          viewport={{once: true}}
          className="-mt-12 relative z-10">
          <Image
            alt="lady-with-laptop"
            src={Leaderboard}
            placeholder="blur"
            width={350}
            height={150}
            quality={100}
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="absolute bottom-0 -z-10 right-12">
            <Image
              src="patterns.svg"
              alt="background-svg-pattern"
              width={200}
              height={150}
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex mb-12 w-full items-center justify-between">
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}>
            <p className="text-black/8 mb-2">Empowering People!</p>
            <h3 className="text-2xl font-bold capitalize">
              How the platform <br />{" "}
              <span className="text-deluge-600">works</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          >
            <div className="h-16 w-16 rounded-full bg-deluge-300 relative">
              <div className="h-24 w-24 rounded-full bg-deluge-200 opacity-50 absolute top-1/3 -left-16"></div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 place-items-center items-center justify-between mb-8 lg:-ml-12">
          {
            EXPLANATIONS.map((explanation) =>
            (<motion.div key={explanation.title} variants={item}>
              <ExplanationCard  {...explanation} />
            </motion.div>))
          }
        </motion.div>
        <div className="flex items-center space-x-36 sm:space-x-48">
          <CustomButton
            label="learn more"
          />
          <div className="h-16 w-16 rounded-full bg-deluge-300 opacity-50 -mt-4"></div>
        </div>
      </div>
    </section>
  );
};
