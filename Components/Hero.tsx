import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-2 " >
                <div className="relative">
                    <Image
                        className='w-full h-full'
                        src="/mimi-thian.png"
                        width={800}
                        height={800}
                        alt="hero"
                    />
                </div>
                <div className='flex pl-32 py-10 items-center'>
                    <div className='flex flex-col gap-7'>
                        <h1 className="text-7xl font-playfairDisplay font-bold tracking-wide leading-tight">Pushing <br /> The Envelope <br /> Of Software <br /> Development</h1>
                        <p className="font-mulish text-xl">With unique business ideas and the <br /> passinate people behind</p>

                        <div className="flex flex-col  w-full gap-3 sm:flex-row">
                            {/* <Button
                                type="button"
                                title="Get Started"

                                variant="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            /> */}
                            <button className='font-semibold btn-black'>Get Started</button>
                            
                            <Button
                                type="button"
                                title="How it work?"
                                icon="/Group 16.svg"
                                variant="btn_white_text bg-white-800 "

                            />

                        </div>
                        

                    </div>

                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Hero