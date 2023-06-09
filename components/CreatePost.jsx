/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Tiptap from './Tiptap';
import { useState } from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';
import Image from 'next/image';
import CrossLogo from '../assets/svgexport-13.svg';
import DownArrow from '../assets/svgexport-21.svg';
import { useDispatch } from 'react-redux';
import { postsActions } from '../store/posts-slice';
import toast, { Toaster } from 'react-hot-toast';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const authorList = [
  {
    name: 'Balaganesh K',
    imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/23.jpg',
  },
  {
    name: 'Sathish Kumar',
    imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/24.jpg',
  },
];

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

const CreatePost = ({ closeCreatePost }) => {
  const dispatch = useDispatch();
  const titleRef = createRef();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(authorList[0]);
  const [community, setCommunity] = useState('Select a community');
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState('');
  const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);

  const postObj = {
    id: `${Math.floor(Math.random() * 100000000000000)}`,
    title: title,
    author: author,
    community: community,
    description: description,
    reactions: [
      {
        id: `${Math.floor(Math.random() * 100000000000000)}`,
        type: '👍',
        count: 1,
        selected: true,
      },
    ],
    comments: [],
    createAt: new Date().toLocaleString(),
  };

  const handelPost = () => {
    setTimeout(() => {
      if (
        title === '' ||
        description === '' ||
        community === 'Select a community'
      ) {
        toast.error('Please fill all the fields');
        return;
      }

      dispatch(postsActions.addPost(postObj));
      console.log(postObj);
      toast.success('Post created successfully');
      closeCreatePost();
    }, 100);
  };

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return (
    <div className="bg-black bg-opacity-50 w-screen h-full min-h-screen fixed top-0 left-0 z-[100] flex justify-center items-start overflow-y-auto py-5 font-graphik-regular">
      <Toaster />
      <div className=" w-full  xw:w-[32rem] m-2  lg:w-[44.25rem] min-h-[33.75rem] bg-white shadow-black/10  rounded-xl shadow-xl z-[100] p-5 xw:p-8 relative">
        <div className="flex flex-col  space-y-[1.25rem]">
          <div
            onClick={() => closeCreatePost()}
            className="w-8 h-8 absolute top-2 hover:opacity-50 cursor-pointer transition-all duration-200 right-2 rotate-45">
            <Image
              src={CrossLogo}
              alt="crossedlogo"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-[1.75rem] leading-4 font-graphik-medium">
            Write a new post
          </h1>
          <div className="flex w-full flex-wrap  gap-3 items-center ">
            {/* Author */}
            <div className="relative">
              <div
                onClick={() => setIsAuthorDropdownOpen(!isAuthorDropdownOpen)}
                className=" h-8 outline outline-[1px] outline-gray-500 rounded-full flex items-center gap-2 pl-1 pr-5 py-1 cursor-pointer">
                <Image
                  width={32}
                  height={32}
                  src={author.imgUrl}
                  alt="ProfilePhoto"
                  className="rounded-full h-8 w-8 p-1 cursor-pointer "
                />
                <span className="text-gray-700 text-[1.1rem] ">
                  {author.name}
                </span>
                <Image
                  src={DownArrow}
                  alt="downarrow"
                  className="inline-block pt-1 h-[0.7rem] w-[0.7rem] "
                />
              </div>
              {/* Author DropDown */}
              {isAuthorDropdownOpen && (
                <div className="bg-white flex flex-col  py-2 absolute top-[2.2rem] min-w-[13rem] rounded-lg z-[100]">
                  {authorList.map((author, i) => (
                    <div
                      onClick={() => [
                        setAuthor(author),
                        setIsAuthorDropdownOpen(false),
                      ]}
                      key={i * 99}
                      className="flex gap-3 items-center px-[0.4rem] py-1 w-full bg-white  hover:bg-[#f4f4f4] cursor-pointer ">
                      <Image
                        width={32}
                        height={32}
                        src={author.imgUrl}
                        alt="ProfilePhoto"
                        className="rounded-full h-8 w-8 p-1 cursor-pointer "
                      />
                      <span className="text-gray-700 text-[1.1rem] ">
                        {author.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span>In</span>
              {/* Community */}
              <div className="relative">
                <div
                  onClick={() =>
                    setIsCommunityDropdownOpen(!isCommunityDropdownOpen)
                  }
                  className="flex items-center gap-2 cursor-pointer  px-4 py-1 outline outline-[1px] outline-gray-500 rounded-full">
                  <p>{community}</p>
                  <Image
                    src={DownArrow}
                    alt="DownArrow"
                    className="h-[0.7rem] w-[0.7rem] pt-1 "
                  />
                </div>
                {/* Community DropDown */}
                {isCommunityDropdownOpen && (
                  <div className="bg-white flex flex-col  py-2 absolute top-[2.2rem] w-[14rem] max-h-[15rem] overflow-y-scroll z-[100] rounded-lg shadow-xl scrollbar-thin  scrollbar-thumb-[#aaa]/50 scrollbar-thumb-rounded-md ">
                    {communityList.map((community, i) => (
                      <p
                        onClick={() => [
                          setCommunity(community),
                          setIsCommunityDropdownOpen(false),
                        ]}
                        key={i * 89}
                        className="cursor-pointer px-4 py-2 hover:bg-[#f4f4f4]">
                        {community}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="pb-1">
            <input
              ref={titleRef}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Add a title"
              className="border border-black px-4 py-2 focus:border rounded-lg placeholder:text-gray-500  focus:outline-none w-full"
            />
          </div>

          {/* Body */}

          <Tiptap setDescription={setDescription} />
          {/* Footer */}
          <div className="flex w-full justify-between flex-wrap pt-3 items-center ">
            <li class="relative flex ml-0.5 items-center justify-center gap-2.5 bg-white    hover:border-gray-400">
              <div className="round -mb-1">
                <input
                  onChange={() => setChecked(!checked)}
                  type="checkbox"
                  value={checked}
                  id="checkbox"
                />
                <label for="checkbox"></label>
              </div>
              <label
                for="checkbox1"
                class="w-full cursor-pointer font-graphik-medium text-gray-600  ">
                Allow anonymous comments
              </label>
            </li>

            <div className=" ml-auto flex items-center justify-end gap-4 ">
              <button
                onClick={() => closeCreatePost()}
                className="px-5 py-1 xw:px-[1.67rem] xw:py-[0.5rem] rounded-xl text-primary border border-primary hover:bg-primary/10  transition-all duration-300">
                Cancel
              </button>
              <button
                onClick={() => handelPost()}
                className="px-6 py-1 xw:px-[1.6rem] xw:py-2 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 text-white">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
