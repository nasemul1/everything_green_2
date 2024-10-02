import {React, useState} from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo-black.png'

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <nav className="absolute bg-white md:bg-transparent text-white p-4">
      <div className="w-full flex justify-between items-center">
        <div className="text-2xl mx-4 font-bold w-1/5 flex justify-center items-center">
          <a href="/" className='w-full inline-block'>
            <img src={logo} alt="logo" className='w-full hidden md:block'/>
            <img src={logo2} alt="logo" className='w-full md:hidden'/>
          </a>
        </div>

        <div className="w-full hidden md:flex items-center gap-x-5 relative">
          <div className="flex-grow h-[1px] w-2/5 bg-white mr-5"></div>
          <ul className="md:flex gap-x-5">
            <li className='w-40'><a href="/" className="hover:text-gray-300">Sustainable Websites</a></li>
            <li><a href="/" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/" className="hover:text-gray-300">Login</a></li>
          </ul>
          <div className="flex-grow h-[1px] bg-white ml-5"></div>
        </div>
        
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            <div class="space-y-2">
                <span class="block h-1 w-7 origin-center rounded-full bg-slate-500"></span>
                <span class="block h-1 w-7 origin-center rounded-full bg-slate-500"></span>
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2 p-4 text-center">
          <li><a href="/" className="block text-black hover:text-gray-300">Sustainable Websites</a></li>
          <li><a href="/" className="block text-black hover:text-gray-300">Blog</a></li>
          <li><a href="/" className="block text-black hover:text-gray-300">Contact Us</a></li>
          <li><a href="/" className="block text-black hover:text-gray-300">Login</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar