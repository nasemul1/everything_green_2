import React from 'react'

function Footer() {
  return (
    <>
        <div className="w-full hidden md:flex items-center gap-x-5 relative">
          <div className="flex-grow h-[1px] bg-[#1B9876] mr-5"></div>
          <ul className="md:flex gap-x-5 text-[#1B9876] font-medium">
            <li className='w-40'><a href="/" className="hover:text-gray-300">Sustainable Websites</a></li>
            <li><a href="/" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/" className="hover:text-gray-300">Contact</a></li>
          </ul>
          <div className="flex-grow h-[1px] bg-[#1B9876] ml-5"></div>
        </div>
        <div className="my-10 mx-20 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">
            <div className='text-center flex flex-col justify-center'>
                <p className='text-[#1B9876]'>Contact:</p>
                <p className='w-full md:w-fit flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    contact@everythinggreen.org
                </p>
            </div>
            <div className='text-center flex flex-col justify-center'>
                <a href="/" className='hover:underline'>Privacy Policy</a>
            </div>
            <div className='text-center flex flex-col justify-center'>
                <p className='text-[#1B9876]'>Address:</p>
                <p>
                China Hong Kong City Block 3, Room 1203, 12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer