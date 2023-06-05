import React from 'react';
import Image from 'next/image';
import HamBurgerLogo from '../assets/svgexport-1.svg';
import NovaLogo from '../assets/svgexport-2.svg';
import SearchLogo from '../assets/svgexport-3.svg';
import MessageLogo from '../assets/svgexport-4.svg';
import BookMarkLogo from '../assets/svgexport-5.svg';
import BellLogo from '../assets/svgexport-6.svg';
import ProfilePhoto from '../assets/profile-photo.jpg';

const NavBar = ({ sidebarOpen, setSidebarOpen }) => {
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gradient-to-r from-accent via-accent-dark to-accent-dark fixed top-0 flex justify-center w-screen ">
      <div className="w-full xs:w-full md:max-w-[34.5rem] lg:max-w-full h-14 flex justify-between items-center px-2 md:px-5">
        <div className="flex items-center space-x-4 lg:space-x-11">
          <div onMouseOver={handleSidebar}>
            <Image
              src={HamBurgerLogo}
              alt="HamBurgerLogo"
              className="cursor-pointer"
            />
          </div>

          <Image src={NovaLogo} alt="NovaLogo" className="cursor-pointer" />
        </div>
        {/* Nav links */}
        <div className="flex items-center space-x-4 lg:pr-7 ">
          <div className="flex items-center space-x-2 sm:space-x-4 ">
            <div className="hover:bg-white rounded-full p-1 duration-500 transition-all  cursor-pointer">
              <Image src={SearchLogo} alt="SearchLogo" className="lg:hidden " />
            </div>
            <div className="hover:bg-white rounded-full p-1 duration-500 transition-all  cursor-pointer">
              <Image src={MessageLogo} alt="MessageLogo" className="h-6 w-6" />
            </div>
            <div className="hover:bg-white rounded-full p-1 duration-500 transition-all hidden lg:block cursor-pointer">
              <Image
                src={BookMarkLogo}
                alt="BookMarkLogo"
                className="h-6 w-6"
              />
            </div>
            <div className="hover:bg-white rounded-full p-1 duration-500 transition-all  cursor-pointer">
              <Image src={BellLogo} alt="BellLogo" className="h-6 w-6" />
            </div>
          </div>
          <Image
            src={ProfilePhoto}
            alt="ProfilePhoto"
            className="rounded-full h-8 w-8 cursor-pointer hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
