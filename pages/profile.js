import React from 'react';
import ProfileBanner from '../assets/nova-profile-banner.png';
import Image from 'next/image';
import ProfilePhoto from '../assets/profile-photo.jpg';
import PencileLogo from '../assets/PENCIL.svg';
import OtherLogo from '../assets/svgexport-23.svg';
import BatchLogo from '../assets/svgexport-24.svg';
import DegreeLogo from '../assets/svgexport-25.svg';
import OffersAndAsk from '../components/OffersAndAsk';
import { useState } from 'react';
import Contact from '../components/Contact';
import SkillsAndInterest from '../components/SkillsAndInterest';

const communityList = [
  '🚀 Startup Hub',
  '🌳 Community Building',
  '💱 Crypto Blockchain',
  '🤝 HR & Recruiting',
  '🦋 Creator Space',
  '📈 Marketing & Sales',
  '🎨 Design',
  '💵 Enterpreneurship',
  '💻 Software Engineering',
  '📝 General Advice',
  '🪜 Ladder Community',
];

const Profile = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:gap-7 gap-3 lg:ml-[3.13rem] pt-[3.5rem] justify-center md:max-h-screen md:overflow-hidden  md:scrollbar-hide">
      {/* Content for the left column */}
      <div className="md:w-[400px] h-full flex-shrink-0 md:ml-7 md:pt-11 md:pb-14 md:overflow-y-scroll md:max-h-screen bg-gradient-to-b md:scrollbar-hide ">
        <div className="w-full h-full">
          <div className=" rounded-lg mx-2  mb-3 shadow-equal">
            {/* Profile Banner */}
            <div className="w-full  h-48 rounded-t-lg">
              <div className="rounded-t-lg relative">
                <Image
                  src={ProfileBanner}
                  alt="Profile Banner"
                  className="rounded-t-lg"
                />
                <div className="w-[150px] h-[150px] bg-white rounded-full absolute top-[18px] left-8 shadow-lg">
                  <Image
                    src={ProfilePhoto}
                    alt="Profile Photo"
                    className="w-full h-full rounded-full p-1"
                  />
                </div>
                <div className="absolute top-[7.7rem] right-8 rounded-full hover:bg-[#eee] cursor-pointer  duration-200 transition-all">
                  <Image
                    src={PencileLogo}
                    alt="Pencile Logo"
                    className="w-[24px] h-[24px] "
                  />
                </div>
              </div>
            </div>
            {/* Profile Details */}
            <div className="w-full px-8 py-2 ">
              <div className="flex justify-between gap-5 items-center">
                <p className="flex text-2xl font-medium">
                  Innovative Chnagemaker
                </p>
                <p className="flex text-xl text-gray-500">
                  <span>(</span>
                  <span>He/Him</span>
                  <span>)</span>
                </p>
              </div>
              <p className="text-xl pt-2">Building Hirable</p>
              <p className="text-md pt-1 text-gray-500">@chnagemaker</p>
            </div>
            {/* Profile Stats */}
            <div className="w-full px-8 py-7 ">
              <div className="flex  gap-[16px] items-center">
                <p className="flex items-center text-gray-500">
                  <span className="font-medium text-black pr-1">1</span>post
                </p>
                <p className="flex items-center text-gray-500">
                  <span className="font-medium text-black pr-1">3</span>comments
                </p>
                <p className="flex items-center text-gray-500">
                  <span className="font-medium text-black pr-1">12</span>
                  communities
                </p>
              </div>
            </div>
            {/* Profile Bio */}
            <div className="w-full flex flex-col pt-3 gap-3 px-8 pb-8 ">
              <div className="flex items-center ">
                <Image src={OtherLogo} alt="Other Logo" />
                <p className="pl-3 text-black">Other</p>
              </div>
              <div className="flex items-center ">
                <Image src={BatchLogo} alt="Other Logo" />
                <p className="pl-3 text-black">Class of 2020</p>
              </div>
              <div className="flex items-center ">
                <Image src={DegreeLogo} alt="Other Logo" />
                <p className="pl-3 text-black">MBA in Entrepreneurship</p>
              </div>
            </div>
          </div>
          <div className=" rounded-lg m-2 mb-12 shadow-equal  px-8 pb-10 flex flex-col gap-5  divide-y-[1px]">
            {/* Profile Banner */}
            <OffersAndAsk
              title="Offers"
              question="How can you help others?"
              initialText="I can help with"
              label="I can help with:"
              placeholderText="Ex: Resume review, Interview prep, etc."
            />
            <OffersAndAsk
              title="Offers"
              question="How can you help others?"
              initialText="I can help with"
              label="I can help with:"
              placeholderText="Ex: Resume review, Interview prep, etc."
            />
          </div>
        </div>
      </div>
      {/* Content for the right column */}
      <div className="md:max-w-[600px] h-full md:mr-10 md:pt-11 md:pb-14 md:overflow-y-scroll md:max-h-screen bg-gradient-to-b md:scrollbar-hide ">
        <div className="h-full w-full ">
          <div className=" rounded-lg mx-2 mb-12 shadow-equal">
            {/* Slidebar */}
            <div className="w-full mb-3">
              <div className="flex w-fit py-3 px-4 transition-all duration-300">
                <div
                  onClick={() => [setShowProfile(true), setShowActivity(false)]}
                  className={`flex-1 text-center px-9 cursor-pointer ${
                    showProfile && 'font-bold'
                  }`}>
                  Profile
                </div>
                <div
                  onClick={() => [setShowProfile(false), setShowActivity(true)]}
                  className={`flex-1 text-center px-4 cursor-pointer ${
                    showActivity && 'font-bold'
                  }`}>
                  Activity
                </div>
              </div>
              <div
                className={`h-1 rounded-full w-full bg-[#e8e7e7] relative before:content-[''] before:w-[110px] before:absolute ${
                  showProfile ? 'before:left-[28px]' : 'before:left-[126px]'
                }  before:h-1 before:bg-primary before:rounded-lg`}></div>
            </div>
            <div className="px-8 divide-y-[1px] flex flex-col gap-4">
              {/* About */}
              <OffersAndAsk
                title="About"
                question="Tell us about yourself"
                initialText="I am a"
                label="About me:"
                placeholderText="Ex: Product Manager, Software Engineer, etc."
              />
              {/* Experience */}
              <OffersAndAsk
                title="Experience"
                question="What have you done?"
                initialText="I have worked at"
                label="Experience:"
                placeholderText="Ex: Google, Facebook, etc."
              />

              {/* Skills */}
              <SkillsAndInterest title="Skills" />

              {/* Interests */}

              {/* Communities */}
              <div className="pt-5">
                <p className="text-2xl font-medium">Communities</p>
                <div className="my-4 flex flex-wrap gap-2">
                  {communityList.map((community, i) => (
                    <p
                      key={i * 77}
                      className="text-base leading-[1.65rem] hover:bg-[#f4f4f4] transition-all duration-300 cursor-pointer font-medium w-fit px-5 py-1 outline outline-[1px] outline-gray-300 rounded-full text-gray-500">
                      {community}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <Contact
                title="Contact"
                question="How can we get in contact?"
                initialText="You can reach me at"
                label="Contact:"
                placeholderText="Ex: Email, LinkedIn, etc."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
