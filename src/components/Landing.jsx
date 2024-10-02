import React from 'react'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import alpha from '../assets/alphabet.png'
import redInc from '../assets/redInc.png'
import logo2 from '../assets/logo2.svg'

function Landing() {
  return (
    <>
        <div className='py-20 flex justify-center'>
            <p className='text-2xl text-center font-thin w-3/5 text-[#5a5a5a]'>The CO2 footprint of the Internet's data centers alone may already be comparable to that of global air travel. The good news is that a growing number of major Internet corporations are becoming more environmentally conscientious, opting for more renewable energy sources for their data centers and operations.</p>
        </div>
        <div className='flex flex-col justify-center'>
            <p className='mb-10 text-center text-[#1B9876] text-4xl font-extrabold '>sustainable<br/>example websites</p>
            <div className="w-[220px] md:w-[540px] mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-16">
                <div className='flex flex-col items-center'>
                    <img src={google} alt="" className='shadow-[0_8px_30px_rgb(0,0,0,0.12)]'/>
                    <p className='text-[#1B9876] text-[16px] font-bold'>Google</p>
                    <p className='text-[#1B9876]'>0.26gm/per visit</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={facebook} alt="" className='shadow-[0_8px_30px_rgb(0,0,0,0.12)]'/>
                    <p className='text-[#1B9876] text-[16px] font-bold'>Google</p>
                    <p className='text-[#1B9876]'>0.26gm/per visit</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={alpha} alt="" className='shadow-[0_8px_30px_rgb(0,0,0,0.12)]'/>
                    <p className='text-[#1B9876] text-[16px] font-bold'>Google</p>
                    <p className='text-[#1B9876]'>0.26gm/per visit</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={redInc} alt="" className='shadow-[0_8px_30px_rgb(0,0,0,0.12)]'/>
                    <p className='text-[#1B9876] text-[16px] font-bold'>Google</p>
                    <p className='text-[#1B9876]'>0.26gm/per visit</p>
                </div>
            </div>
        </div>
        <div className='mx-auto py-20 flex flex-col items-center'>
            <p className='text-2xl text-center font-thin w-3/5 text-[#5a5a5a]'>These websites avoid bloated frameworks by using compressed graphics, efficient file formats, and lightweight fonts. Check out our information on developing sustainable websites and establishing a page weight budget if you want to learn more.</p>
            <button className='my-6 px-7 py-2 bg-[#223333] hover:bg-[#1B9876] text-white font-semibold border-4 border-white hover:border-gray-300 rounded-full drop-shadow-xl flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    Test Now
            </button>
        </div>
        <div className='flex flex-col items-center'>
            <p className='mb-10 text-center text-[#1B9876] text-4xl font-extrabold'>learn more about<br/>web sustainability?</p>
            <div className='w-3/5 border-2 rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col items-center'>
                <p className='text-[#1B9876] text-center text-[22px] font-semibold my-3'>join the greenWeb newsletter</p>
                <form className='w-full md:w-fit my-6 flex flex-col items-center md:flex-row'>
                    <input type="email" placeholder='Your email address' className=' bg-[#ECECEC] w-3/4 md:w-80 mr-2 px-4 py-2 rounded-full'/>
                    <button className='mx-auto my-4 md:my-0 px-7 py-2 bg-[#223333] hover:bg-[#1B9876] text-white font-semibold border-4 border-white hover:border-gray-300 rounded-full drop-shadow-xl'>
                        Subscribe
                    </button>
                </form>
                <p className='text-center text-gray-500'>The greenWeb team will send you occasional updates on web accessibility and sustainability. There will be no spam, only high-quality information.</p>
            </div>
        </div>
        <div className='mx-auto my-20 w-4/5 border rounded-lg overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <div className='py-4 bg-[#1B9876] text-white text-center text-[24px] font-bold'>claim and download your greenWeb certificate</div>
            <div className='py-5 px-8 flex flex-col items-center'>
                <img src={logo2} alt="logo" className='w-56'/>
                <p className='text-center my-2 text-gray-800 font-medium'>The greenWeb team designed this website's carbon calculator to inspire and enlighten people about the importance of creating websites with low carbon emissions.</p>
            </div>
        </div>
    </>
  )
}

export default Landing

