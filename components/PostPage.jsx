import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import MoreLogo from '../assets/svgexport-16.svg';
import EmojiLogo from '../assets/svgexport-17.svg';
import CommentLogo from '../assets/svgexport-18.svg';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';
import RightArrow from '../assets/svgexport-33.svg';
import LeftArrow from '../assets/svgexport-28.svg';
import NoCommentLogo from '../assets/svgexport-19.svg';

const PostPage = ({ selectedPost }) => {
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

  return (
    <div>
      {/* Input Box */}
      <div className="w-[100%] h-full flex  space-x-4 items-center bg-white md:rounded-lg">
        <div className="w-full">
          {selectedPost && selectedPost != null && (
            <div
              key={selectedPost.id}
              className=" md:rounded-lg  w-full  mb-8 ">
              <div className={`px-3 md:px-6 py-6  lg:p-8`}>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-4 ">
                    <Image
                      src={selectedPost?.author?.imgUrl}
                      width={32}
                      height={32}
                      alt="ProfilePhoto"
                      className="w-9 h-9 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <p className="text-sm font-bold text-gray-900 hover:underline underline-gray-600">
                          {selectedPost?.author?.name}
                        </p>
                        <span className="text-sm text-gray-900">in</span>
                        <p className="text-sm font-bold text-gray-900 hover:underline underline-gray-600">
                          {selectedPost?.community}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex text-sm space-x-[0.3rem] items-center">
                          <p className="flex text-gray-600">Building Hirable</p>
                          <div className="font-extrabold bg-gray-600 w-[3px] h-[3px] rounded-full"></div>
                          <p className="flex text-gray-600">
                            <TimeAgo date={selectedPost.createAt} />
                          </p>
                          <div className="font-extrabold bg-gray-600 w-[3px] h-[3px] rounded-full"></div>
                          <p className="flex text-gray-600"> 252 views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={MoreLogo}
                      alt="PostImage"
                      className="w-full  rotate-90"
                    />
                  </div>
                </div>
                {/*  */}
                <div>
                  <p className=" w-fit uppercase text-black my-5 bg-[#eee] px-4 font-bold py-[4px] text-[12px] leading-4 rounded-full">
                    General
                  </p>
                </div>
                {/* Heading */}

                <h1 className="font-bold text-xl pb-2">
                  {selectedPost?.title}
                </h1>
                {/* Description */}
                <div className="w-full h-full mb-[1rem]  overflow-hidden">
                  {selectedPost.description && parser(selectedPost.description)}
                </div>
                <div className="w-full  py-5  md:rounded-b-lg z-[10]   flex justify-between items-center ">
                  <div className="flex gap-2">
                    {selectedPost?.reactions?.map((reaction) => (
                      <div
                        key={reaction.id}
                        className="bg-[#ececec] cursor-pointer w-[3.15rem] py-1 items-center justify-center flex gap-[2px] hover:border-[#e0e0e0] hover:border rounded-full">
                        <span className="text-xs">{reaction?.type}</span>
                        <span className="text-xs">{reaction?.count}</span>
                      </div>
                    ))}

                    <div className="bg-[#eaeaea] w-[3.15rem] flex items-center cursor-pointer justify-center py-1 rounded-full hover:border-[#e0e0e0] hover:border">
                      <Image
                        src={EmojiLogo}
                        alt="CommentLogo"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>

                  <div className="flex gap-[5px] items-center cursor-default">
                    <Image
                      src={
                        selectedPost?.comments?.length === 0
                          ? NoCommentLogo
                          : CommentLogo
                      }
                      alt="CommentLogo"
                      className=""
                    />
                    <span className="text-gray-500 font-medium text-[1.15rem]">
                      {selectedPost?.comments?.length}
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center pt-3">
                  <div
                    onClick={() =>
                      setIsProfileDropDownOpen(!isProfileDropDownOpen)
                    }
                    className="border border-[#e0e0e0] rounded-full cursor-pointer flex-shrink-0 p-[6px] w-fit flex gap-2 items-center active:scale-[95%] transition-all duration-200">
                    <Image
                      src={selectedPost?.author?.imgUrl}
                      width={32}
                      height={32}
                      alt="ProfilePhoto"
                      className="w-8 h-8 rounded-full border"
                    />
                    <Image
                      src={LeftArrow}
                      alt="DownArrow"
                      className={`w-4 h-4 -rotate-90 pr-1 transi duration-300 ${
                        isProfileDropDownOpen && 'rotate-[90deg]'
                      }`}
                    />
                  </div>
                  <div
                    className={`bg-[#f4f4f4] w-full h-11 rounded-full flex px-2 justify-between items-center ${
                      isCommentBoxOpen &&
                      'outline outline-[1px] outline-primary'
                    } `}>
                    <div className="w-full">
                      <input
                        onFocusCapture={() => setIsCommentBoxOpen(true)}
                        onBlurCapture={() => setIsCommentBoxOpen(false)}
                        type="text"
                        placeholder="Add a comment"
                        className="w-full h-full outline-none px-2 bg-transparent"
                      />
                    </div>
                    <div className="flex gap-4 items-center flex-shrink-0">
                      <Image
                        src={EmojiLogo}
                        alt="EmojiLogo"
                        className="w-5 h-5 cursor-pointer"
                      />
                      <div className="bg-gradient-to-l from-indigo-500 to-primary p-2 hover:opacity-90 transition-all duration-300 rounded-full cursor-pointer">
                        <Image
                          src={RightArrow}
                          alt="EmojiLogo"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
