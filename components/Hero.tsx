import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <div id='about'>  {/*className='pb-20 pt-36'*/}
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>

        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center abolute top-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vx] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic web magic with next js</h2>
                    <TextGenerateEffect 
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Transforming concepts to seemless User Experiences'
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi i&apos;m Sanjay Baskar, a passionate web developer with a love for creating seamless user experiences</p>
                    <a href='#about'>
                        <MagicButton 
                            title="show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
