import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Address_bar = () => {
    return (
        <section className="text-white bg-black ">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-2 gap-10 xl:gap-x-20 xl:gap-y-10 py-14 px-20 w-full pt-20 " >
                <div className="grid grid-cols-2 gap-16 " >
                    <div className="grid grid-cols-2">
                        <Link href="/" >
                            <Image src="/Group 5.svg" alt="logo" width={94} height={59} />
                        </Link>
                    </div>

                    <div>

                        <p className="bold-22 lg:bold-48 ">Melbourne</p>
                        <br />
                        <p className="bold-22 lg:bold-48 ">Level 1,Unit 9/677 </p>
                        <p className="bold-22 lg:bold-48 ">Springvale Road,</p>
                        <p className="bold-22 lg:bold-48 ">Mulgrave VIC 3170 </p>
                        <br />
                        <p className="bold-22 lg:bold-48 ">Colombo</p>
                        <br />
                        <p className="bold-22 lg:bold-48 ">Level 4,46/38 </p>
                        <p className="bold-22 lg:bold-48 ">Navam Mawatha,</p>
                        <p className="bold-22 lg:bold-48 ">Colombo 02, 00200 </p>

                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-2 gap-10 xl:gap-x-20 xl:gap-y-10 " >
                    <div>
                        <p className="bold-22 lg:bold-48 ">Work inquiries</p>
                        <p className="bold-22 lg:bold-48 ">Interested in working with us?</p>
                        <p className="bold-22 lg:bold-48 ">hello@empite.com</p>
                    </div>

                    <div>
                        <p className="bold-22 lg:bold-48 ">stay in touch</p>
                        <form className='flex'>
                            <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='email' type='email' aria-label='email address' placeholder='your email address' />
                            <label className='bg-gray-800  hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' >
                                Subscribe
                            </label>
                        </form>
                    </div>
                </div>
            </div>





        </section>
    )
}

export default Address_bar