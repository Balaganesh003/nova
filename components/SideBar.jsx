import React from 'react';
import Image from 'next/image';
import HomeLogo from '../assets/svgexport-8.svg';
import PeopleLogo from '../assets/svgexport-9.svg';
import CheckLogo from '../assets/svgexport-10.svg';
import MessageLogo from '../assets/svgexport-11.svg';
import GiftboxLogo from '../assets/svgexport-12.svg';
import CrossLogo from '../assets/svgexport-13.svg';
import ColoredHamBurgerLogo from '../assets/svgexport-7.svg';
import ProfilePhoto from '../assets/profile-photo.jpg';
import BookMarkLogo from '../assets/svgexport-5.svg';

const sideBarList = [
  {
    id: 1,
    logo: HomeLogo,
    name: 'Home',
  },
  {
    id: 22,
    logo: BookMarkLogo,
    name: 'Bookmarks',
  },
  {
    id: 2,
    logo: PeopleLogo,
    name: 'Get Referred',
  },
  {
    id: 3,
    logo: CheckLogo,
    name: 'Courses',
  },
  {
    id: 4,
    logo: MessageLogo,
    name: 'Coaching',
  },
  {
    id: 5,
    logo: GiftboxLogo,
    name: 'Invite Friends',
  },
];

const sideBarList2 = [
  {
    id: 7,
    logo: CrossLogo,
    name: 'Add Communities',
  },
  {
    id: 8,
    logo: null,
    emoji: '🚀',
    name: 'Startup Hub',
  },
  {
    id: 9,
    logo: null,
    emoji: '🌳',
    name: 'Community Building',
  },
  {
    id: 10,
    logo: null,
    emoji: '💱',
    name: 'Crypto Blockchain',
  },
  {
    id: 11,
    logo: null,
    emoji: '🤝',
    name: 'HR & Recruiting',
  },
  {
    id: 12,
    logo: null,
    emoji: '🦋',
    name: 'Creator Space',
  },
  {
    id: 13,
    logo: null,
    emoji: '📈',
    name: 'Marketing & Sales',
  },
  {
    id: 14,
    logo: null,
    emoji: '🎨',
    name: 'Design',
  },
  {
    id: 15,
    logo: null,
    emoji: '💵',
    name: 'Enterpreneurship',
  },
  {
    id: 16,
    logo: null,
    emoji: '💻',
    name: 'Software Engineering',
  },
  {
    id: 17,
    logo: null,
    emoji: '📝',
    name: 'General Advice',
  },
  {
    id: 18,
    logo: null,
    emoji: '🪜',
    name: 'Ladder Community',
  },
];

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const openSideBar = () => {
    setSidebarOpen(true);
  };

  const closeSideBar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div
        onClick={closeSideBar}
        className={`w-full opacity-30 z-[60] h-screen  ${
          sidebarOpen ? 'block' : 'hidden'
        } bg-black fixed top-0 left-0`}></div>
      <div
        onMouseOver={openSideBar}
        className={`fixed top-0 left-0 shadow-xl shadow-gray-300 ${
          sidebarOpen ? 'w-64  z-[100]' : 'lg:w-16 lg:block hidden '
        }`}>
        <div
          onMouseLeave={closeSideBar}
          className={`h-screen overflow-y-scroll scrollbar-hide bg-white  cursor-pointer`}>
          <div className="flex  items-center lg:h-14 h-12 mx-4">
            <Image
              src={ColoredHamBurgerLogo}
              alt="ColoredHamBurgerLogo"
              className="cursor-pointer"
            />
          </div>
          {/* Porfile */}
          <div className="divide-y-[1px] lg:divide-y-0">
            <div className="lg:hidden flex space-x-4 mx-4 pt-8 pb-4 items-center">
              <Image
                src={ProfilePhoto}
                alt="HomeLogo"
                className="rounded-full h-8 w-8 cursor-pointer "
              />
              <span className="font-semibold">Balaganesh K</span>
            </div>
            {/* items */}
            <div className="divide-y-[1px] mx-[0.75rem] pb-10 ">
              <div className="flex flex-col pt-8 pb-5 space-y-4  overflow-x-hidden justify-center items-start">
                {sideBarList.map((item) => (
                  <div
                    key={item.id}
                    className={`${
                      item.name == 'Bookmarks' ? 'lg:hidden' : 'lg:flex'
                    } flex space-x-4 items-center  hover:bg-[#f4f4f4] rounded-full px-2  h-10 w-full`}>
                    <Image
                      src={item.logo}
                      alt="HomeLogo"
                      className="cursor-pointer "
                    />
                    <p className="text-[1rem] captilize">{item.name}</p>
                  </div>
                ))}
              </div>
              {/* Second Nav */}
              <div className="flex flex-col pt-4 space-y-4 scrollbar-hide overflow-x-hidden items-start justify-center ">
                {sideBarList2.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 items-center justify-start hover:bg-[#f4f4f4] rounded-full px-2  h-10 w-full ">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt="HomeLogo"
                        className="cursor-pointer "
                      />
                    ) : (
                      <p className="text-[1rem] captilize">{item.emoji}</p>
                    )}
                    <p
                      className={`text-[1rem] captilize ${
                        sidebarOpen ? 'block' : 'hidden'
                      }`}>
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
