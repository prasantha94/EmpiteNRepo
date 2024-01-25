import Image from 'next/image'
import React from 'react'
interface DigitalProps {
    text: string,
    image: string
}

const Digital = ({ text, image }: DigitalProps) => {
    return (
        <div className="pl-32 items-center grid grid-cols-2">

            <div >
                <p className="text-xl font-spaceGrotesk w-full h-full bold-22 lg:bold-48 ">{text}</p>
            </div>
            <div>
                <div className="">
                    <Image
                        src="/bracket.svg"
                        width={30}
                        height={30}
                        alt=""
                    />
                    <p className="text-2xl font-spaceGrotesk font-bold ">Web Application</p>
                    <p className="text-xl font-mooli bold-22 lg:bold-48 text-white">We typically build all web applications from scratch to satisfy your requirements.</p>
                </div>

            </div>
           
            <div>
                <div className="">
                    <Image
                        src="/computer.svg"
                        width={30}
                        height={30}
                        alt=""
                    />
                    <p className="text-2xl font-spaceGrotesk font-bold">custom software</p>
                    <p className="text-xl font-mooli bold-22 lg:bold-48 text-white">We create solutions that salve your business problems.
                        <br /> Our team has a decade long sucess track recode.</p>
                </div>

            </div>
            <div>
                <div className="">
                    <Image
                        src="/ux-design.svg"
                        width={30}
                        height={30}
                        alt=""
                    />
                    <p className="text-2xl font-spaceGrotesk font-bold">UI/ UX Design</p>
                    <p className="text-xl font-mooli bold-22 lg:bold-48 text-white">We craft better user experience and interface designs for your digital products.</p>
                </div>

            </div>
            <div>
                <div className="">
                    <Image
                        src="/weather.svg"
                        width={30}
                        height={30}
                        alt=""
                    />
                    <p className="text-2xl font-spaceGrotesk font-bold text-white">Mobile Application</p>
                    <p className="text-xl font-mooli bold-22 lg:bold-48 text-white">We transform your mobile app ideas into high qulity customised apps that are easy to use.
                    </p>
                </div>
                <div className="">
                    <Image
                        src="/ux-design.svg"
                        width={30}
                        height={30}
                        alt=""
                    />
                    <p className="text-2xl font-spaceGrotesk font-bold text-white">UI/ UX Design</p>
                    <p className="text-xl font-mooli bold-22 lg:bold-48 text-white">We craft better user experience and interface designs for your digital products.</p>
                </div>
            </div>

        </div>


    )
}

export default Digital