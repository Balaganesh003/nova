import React, { use } from 'react';
import Image from 'next/image';
import ProfilePhoto from '../assets/profile-photo.jpg';
import { useState } from 'react';
import EyeLogo from '../assets/svgexport-15.svg';
import DownArrow from '../assets/svgexport-14.svg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PostCard from './PostCard';

const Feed = ({ openCreatePost }) => {
  const [selectedCommunity, setSelectedCommunity] = useState('All Communities');

  const { posts } = useSelector((state) => state.posts);

  const [communityDropDown, setCommunityDropDown] = useState(false);
  const [hidePost, setHidePost] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Hot');
  const [sortDropDown, setSortDropDown] = useState(false);

  useEffect(() => {}, [posts]);

  return (
    <div>
      {/* Input Box */}
      <div className="w-[100%] h-full flex p-4 space-x-4 items-center bg-white md:rounded-lg">
        <div>
          <Image
            src={ProfilePhoto}
            alt="ProfilePhoto"
            className="rounded-full w-9 h-9 cursor-pointer "
          />
        </div>
        <div className="w-full">
          <input
            onFocus={() => openCreatePost()}
            type="text"
            placeholder="Write a post..."
            className="bg-[#f4f4f4] outline-none px-4 py-2 rounded-lg placeholder:text-black  w-full border border-none  focus:ring-0 focus:border-black "
          />
        </div>
      </div>
      {/* Slidebar */}
      <div className="hidden md:block w-full my-3">
        <div className="flex w-full pb-3 transition-all duration-300">
          <div
            onClick={() => setSelectedCommunity('All Communities')}
            className={`flex-1 text-center cursor-pointer ${
              selectedCommunity == 'All Communities' && 'font-bold'
            }`}>
            All Communities
          </div>
          <div
            onClick={() => setSelectedCommunity('Your Communities')}
            className={`flex-1 text-center cursor-pointer ${
              selectedCommunity == 'Your Communities' && 'font-bold'
            }`}>
            Your Communities
          </div>
        </div>
        <div
          className={`h-1 rounded-full w-full bg-[#e8e7e7] relative before:content-[''] before:w-[50%] before:absolute ${
            selectedCommunity == 'All Communities'
              ? 'before:left-0'
              : 'before:right-0'
          }  before:h-1 before:bg-primary before:rounded-lg`}></div>
      </div>
      {/* Sorting */}
      <div className="w-full flex justify-between px-4 lg:px-0 py-4 items-center">
        <div className="flex gap-3 items-center">
          <div className="md:hidden px-4 py-[0.15rem] text-xs text-white rounded-full bg-primary uppercase font-medium  relative">
            <div
              className="flex items-center gap-2 cursor-pointer  "
              onClick={() => setCommunityDropDown(!communityDropDown)}>
              <p>{selectedCommunity}</p>
              <Image src={DownArrow} alt="DownArrow" className="" />
            </div>
            {/* DropDown */}
            {communityDropDown && (
              <div className="absolute z-[100] top-6 left-0 w-[10.5rem] py-2 bg-white rounded-lg shadow-lg">
                <p
                  onClick={() => [
                    setSelectedCommunity('All Communities'),
                    setCommunityDropDown(false),
                  ]}
                  className="text-gray-500 hover:bg-[#f4f4f4]  cursor-pointer text-base capitalize px-3 py-1">
                  All Communities
                </p>
                <p
                  onClick={() => [
                    setSelectedCommunity('Your Communitues'),
                    setCommunityDropDown(false),
                  ]}
                  className="text-gray-500 text-base hover:bg-[#f4f4f4]  cursor-pointer capitalize px-3 py-1">
                  Your Communitues
                </p>
              </div>
            )}
          </div>

          <div className="flex space-x-3 items-center ">
            <p className="text-xs font-medium">Sort posts by</p>
            <div className=" text-xs text-white rounded-full bg-primary relative font-medium uppercase  ">
              <div
                className="flex items-center gap-2 cursor-pointer px-4  py-[0.15rem]"
                onClick={() => setSortDropDown(!sortDropDown)}>
                <p>{selectedSort}</p>
                <Image src={DownArrow} alt="EyeLogo" className="" />
              </div>
              {/* DropDown */}
              {sortDropDown && (
                <div className="absolute top-6 z-[100] left-0 w-[8rem] py-2 bg-white rounded-lg shadow-lg">
                  <p
                    onClick={() => [
                      setSelectedSort('Hot'),
                      setSortDropDown(false),
                    ]}
                    className="text-gray-500 text-sm capitalize hover:bg-[#f4f4f4]  cursor-pointer px-3 py-1">
                    Hot
                  </p>
                  <p
                    onClick={() => [
                      setSelectedSort('New'),
                      setSortDropDown(false),
                    ]}
                    className="text-gray-500 text-sm capitalize hover:bg-[#f4f4f4]  cursor-pointer px-3 py-1">
                    New
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => setHidePost(!hidePost)}
          className={`flex items-center relative cursor-pointer before:content-[''] before:h-[0.1rem] before:w-full before:absolute before:top-3 ${
            !hidePost && 'before:hidden'
          }  before:-rotate-[45deg] before:bg-gray-500`}>
          <Image src={EyeLogo} alt="EyeLogo" className="" />
        </div>
      </div>
      {/* Posts */}

      <div>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard key={post.id} post={post} hidePost={hidePost} />
          ))}
      </div>
    </div>
  );
};

export default Feed;
