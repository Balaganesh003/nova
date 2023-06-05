import React from 'react';
import Image from 'next/image';
import HomeLogo from '../assets/svgexport-8.svg';
import PeopleLogo from '../assets/svgexport-9.svg';
import CheckLogo from '../assets/svgexport-10.svg';
import MessageLogo from '../assets/svgexport-11.svg';
import GiftboxLogo from '../assets/svgexport-12.svg';
import CrossLogo from '../assets/svgexport-13.svg';
import ColoredHamBurgerLogo from '../assets/svgexport-7.svg';

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const handleHover = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`fixed ${sidebarOpen ? 'top-0' : 'top-[3.5rem]'} left-0 `}>
      {/* On Not Hover */}
      <div
        onMouseOver={handleHover}
        className={`${
          sidebarOpen ? 'hidden' : 'block'
        } w-16 bg-white  shadow-xl shadow-gray-300 h-screen divide-y-[1px] flex flex-col overflow-y-scroll scrollbar-hide  px-2`}>
        <div className="flex flex-col justify-center items-center space-y-4 pt-8 pb-5">
          <div className="hover:bg-[#f4f4f4] rounded-full p-2">
            <Image
              src={HomeLogo}
              alt="HomeLogo"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2">
            <Image
              src={PeopleLogo}
              alt="HomeLogo"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2">
            <Image
              src={CheckLogo}
              alt="HomeLogo"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2">
            <Image
              src={MessageLogo}
              alt="HomeLogo"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2">
            <Image
              src={GiftboxLogo}
              alt="HomeLogo"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  space-y-4 pt-[0.9rem] pb-20">
          <div className="hover:bg-[#f4f4f4] rounded-full p-2  ">
            <Image src={CrossLogo} alt="HomeLogo" className=" cursor-pointer" />
          </div>
          <div className="hover:bg-[#f4f4f4]  rounded-full p-2 cursor-pointer">
            🚀
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            🌳
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            💱
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            🤝
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            🦋
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            📈
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            🎨
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            💵
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            🦄
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            💻
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            📝
          </div>
          <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer">
            🪜
          </div>
        </div>
      </div>
      {/* On Hover */}
      <div
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } absolute top-0 h-screen w-[calc(100vw-1.1rem)] `}>
        {/* Background effect */}
        <div className=" overflow-hidden h-screen z-0 bg-black bg-opacity-20"></div>
        {/* sideBar */}
        <div
          onMouseLeave={handleHover}
          className="bg-white  w-64 z-50 absolute top-0 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white ">
          <div className="h-14 bg-white px-2 md:px-5 flex items-center ">
            <Image
              src={ColoredHamBurgerLogo}
              alt="HamBurgerLogo"
              className="cursor-pointer"
            />
          </div>
          {/* Items */}
          <div className="w-full bg-white shadow-xl shadow-gray-300 h-[calc(100vh-3.5rem)] divide-y-[1px] flex flex-col overflow-y-scroll scrollbar-hide px-2 md:px-3">
            <div className="flex flex-col   space-y-4 pt-8 pb-5">
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 flex space-x-4 items-center cursor-pointer">
                <Image
                  src={HomeLogo}
                  alt="HomeLogo"
                  className="h-6 w-6 cursor-pointer"
                />
                <span className="text-lg text-gray-500">Home</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 flex space-x-4 items-center cursor-pointer">
                <Image
                  src={PeopleLogo}
                  alt="HomeLogo"
                  className="h-6 w-6 cursor-pointer"
                />
                <span className="text-lg text-gray-500">Get Referred</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 flex space-x-4 items-center cursor-pointer">
                <Image
                  src={CheckLogo}
                  alt="HomeLogo"
                  className="h-6 w-6 cursor-pointer"
                />
                <span className="text-lg text-gray-500">Courses</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 flex space-x-4 items-center cursor-pointer">
                <Image
                  src={MessageLogo}
                  alt="HomeLogo"
                  className="h-6 w-6 cursor-pointer"
                />
                <span className="text-lg text-gray-500">Coaching</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 flex space-x-4 items-center cursor-pointer">
                <Image
                  src={GiftboxLogo}
                  alt="HomeLogo"
                  className="h-6 w-6 cursor-pointer"
                />
                <span className="text-lg text-gray-500">Invite Friends</span>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col   space-y-4 pt-[0.9rem] pb-20">
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 flex space-x-4 items-center cursor-pointer">
                <Image
                  src={CrossLogo}
                  alt="HomeLogo"
                  className=" cursor-pointer"
                />
                <span className="text-lg text-gray-500">Add Communities</span>
              </div>
              <div className="hover:bg-[#f4f4f4]  rounded-full p-2 cursor-pointer flex space-x-4 items-center ">
                <span>🚀</span>
                <span className="text-lg text-gray-500">Startup Hub</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>🌳</span>
                <span className="text-lg text-gray-500">
                  Community Building
                </span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>💱</span>
                <span className="text-lg text-gray-500">Crypto Blockchain</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>🤝</span>
                <span className="text-lg text-gray-500">HR & Recruiting</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>🦋</span>
                <span className="text-lg text-gray-500">Creator Space</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>📈</span>
                <span className="text-lg text-gray-500">Marketing & Sales</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>🎨</span>
                <span className="text-lg text-gray-500">Design</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>💵</span>
                <span className="text-lg text-gray-500">Venture Capital</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>🦄</span>
                <span className="text-lg text-gray-500">Enterpreneurship</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>💻</span>
                <span className="text-lg text-gray-500">
                  Software Engineering
                </span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>📝</span>
                <span className="text-lg text-gray-500">General Advice</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-full p-2 cursor-pointer flex space-x-4 items-center">
                <span>🪜</span>
                <span className="text-lg text-gray-500">Ladder Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
