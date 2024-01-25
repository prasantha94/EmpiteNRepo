import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section  >
        <br />
        <div className="flex flex-col  w-full gap-2 sm:flex-row" >
            <div className="px-20 grid grid-cols-2">
              
                    <Image
                        className="pb-5 pt-3 flex justify-end "
                        src="/Group 17.svg"
                        width={30}
                        height={30}
                        alt=""
                    />

               
                <div>
                    <div className=" marginss2 text-5xl pt-1 font-mulish">236</div>
                </div>
                <div>
                    <p className=" font-spaceGrotesk font-bold pb-5 regular-16 block">Succeeded project</p>
                </div>
                <div>

                </div>
                <div>
                    <p className="font-mulish bold-22 lg:bold-48">Our clients describe us as a product team <br/>which creates <b>amazing UI/UX, by crafting<br/> top-notch user experience.</b></p>
                </div>
            </div>





            <div className="grid grid-cols-2">
                <div>
                    <Image
                        className=" pt-3 flex justify-end "
                        src="/Group 17.svg"
                        width={30}
                        height={30}
                        alt=""
                    />

                </div>
                <div>
                    <div className="marginss2 text-5xl pt-1 font-mulish ">9346</div>
                </div>
                <div>
                    <p className="font-spaceGrotesk font-bold  regular-16 block">Working hours Were spent</p>
                </div>
                <div>

                </div>
                <div>
                    <p className="font-mulish bold-22 lg:bold-48">We've structure our workflow process<br/> were from the funny<b> the century rather,</b> initial<br/> all the made,have spare to negatives.</p>
                </div>
            </div>
        </div>



    </section>
    )
}

export default Contact