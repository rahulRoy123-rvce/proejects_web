// import React from 'react';
// import logo from '../Assets/logo.png'

// const Navbar = () => {
//   return (
//     <nav className="bg-[#133009]">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-4">
//             {/* logo */}
//             <div>
//               <a href="#" className="flex items-center py-5 px-2 text-white">
//                 <img src={logo} alt="Logo" className="86px mr-3" />
//                 DeCarbonn
//               </a>
//             </div>

//             {/* primary nav */}
//             <div className="hidden md:flex items-center space-x-1">
//               <a href="#" className="py-5 px-3 text-white">Home</a>
//               <a href="#" className="py-5 px-3 text-white">Carbon Calculator</a>
//               <a href="#" className="py-5 px-3 text-white">Projects</a>
//               <a href="#" className="py-5 px-3 text-white">About</a>
//               <a href="#" className="py-5 px-3 text-white">Team</a>
//             </div>
//           </div>

//           {/* secondary nav */}
//           <div className="hidden md:flex items-center space-x-1">
//             <a href="#" className="py-2 px-3">
//               <svg className="h-6 w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                 <path d="M19 12H5m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//               </svg>
//             </a>
//           </div>

//           {/* mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button className="mobile-menu-button">
//               <svg className="h-6 w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                 <path d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* mobile menu */}
//       <div className="mobile-menu hidden md:hidden">
//         <a href="#" className="block py-2 px-4 text-sm text-white">Home</a>
//         <a href="#" className="block py-2 px-4 text-sm text-white">Carbon Calculator</a>
//         <a href="#" className="block py-2 px-4 text-sm text-white">Projects</a>
//         <a href="#" className="block py-2 px-4 text-sm text-white">About</a>
//         <a href="#" className="block py-2 px-4 text-sm text-white">Team</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-[#133009]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 text-white">
              {/* Assuming logo.svg is your logo path */}
              <img src={logo} alt="Logo" className="h-12 mr-3" />
              <span className="font-bold">DeCarbonn</span>
            </a>
          </div>

          {/* primary nav */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Home</a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Carbon Calculator</a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Projects</a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">About</a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Team</a>
          </div>

          {/* secondary nav */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="py-2 px-3 text-white hover:text-gray-300">
              {/* Icon or search bar */}
            </a>
          </div>

          {/* mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm text-white">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Carbon Calculator</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Projects</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">About</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Team</a>
      </div>
    </nav>
  );
};

export default Navbar;