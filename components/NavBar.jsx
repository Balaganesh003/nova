import React from 'react';
import Image from 'next/image';
import HamBurgerLogo from '../assets/svgexport-1.svg';
import NovaLogo from '../assets/svgexport-2.svg';
import SearchLogo from '../assets/svgexport-3.svg';
import MessageLogo from '../assets/svgexport-4.svg';
import BookMarkLogo from '../assets/svgexport-5.svg';
import BellLogo from '../assets/svgexport-6.svg';
import ProfilePhoto from '../assets/profile-photo.jpg';
import LeftArrow from '../assets/svgexport-28.svg';
import MoreLogo from '../assets/svgexport-16.svg';

import Link from 'next/link';
import { useState } from 'react';

const NavLinks = [
  {
    title: 'My Profile',
    link: '/profile',
  },
  {
    title: 'Settings',
    link: '/settings',
  },
  {
    title: 'Help',
    link: '/help',
  },
  {
    title: 'Log Out',
    link: '/logout',
  },
];

const NavLinksMobile = [
  {
    title: 'Settings',
    link: '/settings',
  },
  {
    title: 'Help',
    link: '/help',
  },
  {
    title: 'Invite your Friends',
    link: '/invite',
  },
  {
    title: 'Log Out',
    link: '/logout',
  },
];

const NavBar = ({ setSidebarOpen, isProfilePage }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const openSideBar = () => {
    setSidebarOpen(true);
  };

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r z-50 from-accent via-accent-dark to-accent-dark fixed top-0 flex justify-center w-screen ">
      <div
        className={`${
          isProfilePage && 'hidden md:flex'
        } w-full xs:w-full md:max-w-[34.5rem] lg:max-w-full h-14 flex justify-between items-center px-2 md:px-5 xl:mr-4`}>
        <div className="flex items-center space-x-4 lg:space-x-11">
          <div onMouseOver={openSideBar}>
            <Image
              src={HamBurgerLogo}
              alt="HamBurgerLogo"
              className="cursor-pointer"
            />
          </div>
          <Link href="/">
            <Image src={NovaLogo} alt="NovaLogo" className="cursor-pointer" />
          </Link>
        </div>
        {/* Nav links */}
        <div className="flex items-center space-x-4 lg:pr-7 ">
          <div className="flex items-center space-x-2 sm:space-x-4 ">
            <div className="hover:bg-white rounded-full p-1 duration-500 transition-all  cursor-pointer relative">
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
            onClick={() => setIsWindowOpen(!isWindowOpen)}
            src={ProfilePhoto}
            alt="ProfilePhoto"
            className="rounded-full h-8 w-8 cursor-pointer hidden lg:block"
          />
          {isWindowOpen && (
            <div className="absolute w-[10rem] py-2  bg-white top-16 right-16 rounded-lg shadow-md">
              {NavLinks.map((link, index) => (
                <Link
                  onClick={() => setIsWindowOpen(false)}
                  key={index}
                  href={link.link}>
                  <p className="block leading-5 text-md text-black px-4 py-2  hover:bg-[#f4f4f4]">
                    {link.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav for profile page*/}
      <div
        className={`${
          isProfilePage ? 'flex md:hidden' : 'hidden'
        }  h-14 w-full  justify-between items-center`}>
        <Link href="/">
          <div className="px-4 py-4 ">
            <Image
              src={LeftArrow}
              alt="LeftArrow"
              className="h-3 w-3 cursor-pointer"
            />
          </div>
        </Link>
        <div>
          <p className="text-[16px] font-bold  text-[#212121]">
            Innovative Changemaker
          </p>
        </div>
        <div className="mr-7 relative">
          <Image
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            src={MoreLogo}
            alt="MoreLogo"
            className=" cursor-pointer rotate-90"
          />
          {isDropDownOpen && (
            <div className="w-[140px] h-fit bg-white absolute right-0 top-12 py-2 rounded-lg shadow-equal z-[100]">
              {NavLinksMobile.map((link, index) => (
                <Link
                  onClick={() => setIsDropDownOpen(false)}
                  key={index}
                  href={link.link}>
                  <p className="block leading-5 text-sm text-black px-2 py-[4px]  hover:bg-[#f4f4f4]">
                    {link.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
