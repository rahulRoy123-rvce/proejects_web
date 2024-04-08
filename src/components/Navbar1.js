import React from 'react'
import logo from '../Assets/logo.png';
import Search from '../Ui/Search';

const Navbar1 = () => {
  return (
    <div className="bg-[#133009] flex flex-row">
      <div className="flex flex-row text-white">
         <img src={logo} alt="Logo" className="h-12 mr-3" />
         <div className="text-3xl font-bold mt-2">DeCarbonn</div>
      </div>
      <div className="flex flex-row  ">
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Home</a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Carbon Calculator</a>
        <a href="#" className=" flex flex-row py-5 px-3 text-white hover:text-gray-300">Projects</a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">About</a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Team</a>
        <Search/>
      </div>
    </div>
  )
}

export default Navbar1
