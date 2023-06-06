import React from 'react';
import Tiptap from './Tiptap';
import { useState } from 'react';
import Image from 'next/image';
import CrossLogo from '../assets/svgexport-13.svg';
import ProfilePhoto from '../assets/profile-photo.jpg';
import DownArrow from '../assets/svgexport-21.svg';
const CreatePost = ({ closeCreatePost }) => {
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState('');

  const handelPost = () => {
    closeCreatePost();
    console.log(description);
  };

  return (
    <div className="w-full h-full ">
      <div className="bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-[40]"></div>

      <div className=" w-[95%] xw:w-[32rem]  lg:w-[44.25rem] min-h-[33.75rem] bg-white shadow-black/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl z-[100] p-8 flex flex-col space-y-[1.2rem] ">
        <div
          onClick={() => closeCreatePost()}
          className="w-8 h-8 absolute top-2 hover:opacity-50 cursor-pointer transition-all duration-200 right-2 rotate-45">
          <Image src={CrossLogo} alt="crossedlogo" className="w-full h-full" />
        </div>
        <h1 className="text-[1.75rem] leading-4 font-medium">
          Write a new post
        </h1>
        <div className="flex space-x-4 items-center">
          <div className=" h-8 outline outline-[1px] outline-gray-500 rounded-full flex items-center gap-2 pl-1 pr-5 py-1 cursor-pointer">
            <Image
              src={ProfilePhoto}
              alt="ProfilePhoto"
              className="rounded-full h-8 w-8 p-1 cursor-pointer hidden lg:block"
            />
            <span className="text-gray-700 text-[1.1rem] ">Balaganesh</span>
            <Image
              src={DownArrow}
              alt="downarrow"
              className="inline-block pt-1 h-[0.7rem] w-[0.7rem] "
            />
          </div>
          <span>In</span>
          <div className="flex items-center gap-2 cursor-pointer  px-4 py-1 outline outline-[1px] outline-gray-500 rounded-full">
            <p>Select a Community</p>
            <Image
              src={DownArrow}
              alt="DownArrow"
              className="h-[0.7rem] w-[0.7rem] pt-1 "
            />
          </div>
        </div>
        {/* Title */}
        <div className="pb-1">
          <input
            type="text"
            placeholder="Add a title"
            className="border border-black px-4 py-2  rounded-lg placeholder:text-gray-500 focus:ring-0 focus:border-black w-full"
          />
        </div>

        {/* Body */}

        <Tiptap setDescription={setDescription} />
        {/* Footer */}
        <div className="flex xw:justify-between flex-wrap  items-center pt-3">
          <div class="flex items-center">
            <input
              onChange={() => setChecked(!checked)}
              id="link-checkbox"
              type="checkbox"
              value={checked}
              className="w-5 h-5 text-primary bg-white border-gray-500 border-2 rounded focus:ring-0 focus:ring-offset-0 "
            />
            <label
              for="link-checkbox"
              class="ml-2 text-[0.9rem] font-medium dark:text-gray-500">
              Allow anonymous comments
            </label>
          </div>
          <div className="w-full xw:w-auto flex items-center justify-end space-x-4 ">
            <button
              onClick={() => closeCreatePost()}
              className="px-[1.67rem] py-[0.5rem] rounded-xl text-primary border border-primary hover:bg-primary/10  transition-all duration-300">
              Cancel
            </button>
            <button
              onClick={() => handelPost()}
              className="px-[1.6rem] py-2 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 text-white">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
