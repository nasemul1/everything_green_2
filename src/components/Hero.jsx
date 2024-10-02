import React from 'react'
import hero from '../assets/hero_img.png'

function Hero() {
  return (
    <>
        <div className='px-12 pt-20 pb-24  w-full bg-gradient-to-r from-[#035762] to-[#23b07d] flex flex-col-reverse md:flex-row items-center md:justify-center'>
            <div className='flex flex-col justify-center md:justify-start'>
                <h1 className='text-white text-[40px] font-bold '>Unlock Insights for a Greener Future!</h1>
                <p className='text-white text-[14px] my-8'>Download our comprehensive whitepaper now and embark on a journey towards a more sustainable future.</p>
                <button className='ml-auto mr-auto md:ml-0 md:mr-auto px-8 py-4 rounded-full bg-[#D9D9D9] hover:bg-[#448687] drop-shadow-2xl text-[15px] text-[#212529] font-bold'>Download Now!</button>
            </div>
            <div className='flex items-center justify-center'>
                <img src={hero} alt="hero image" className='w-4/5 md:w-full'/>
            </div>
        </div>
    </>
  )
}

export default Hero