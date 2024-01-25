import Image from 'next/image'
import React from 'react'

const Video_tab = () => {
    return (
        <section>
            <div className="h-[520px] w-full flex">
            <div className="image3 flex flex-col items-center justify-center flex-1 px-10 text-center">
        {/* <Image
          layout="responsive"
          className=" w-full h-full"
          src="/Mask Group 2.png"
          width={6002
          height={600}
          alt=""
        /> */}
        <div className="flex flex-col  flex-6 px-10 ">
        <Image
                        className=''
                        src="/Group 16.svg"
                        width={74}
                        height={74}
                        alt="hero"
                    />
        </div>
      </div>
                <div className='w-[30%]'>
                        <Image
                            className='h-[520px] w-full object-cover'
                            src="/Mask Group 5.png"
                            width={400}
                            height={400}
                            alt=""
                        />
                    </div>
                    <div className='w-[15%]'>
                        <Image
                            className='h-[520px] w-full object-cover'
                            src="/Mask Group 6.png"
                            width={600}
                            height={600}
                            alt=""
                        />
                    </div>
            </div>

        </section>
    )
}

export default Video_tab