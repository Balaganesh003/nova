import React, { useState } from 'react';
import Image from 'next/image';
import MoreLogo from '../assets/svgexport-16.svg';
import EmojiLogo from '../assets/svgexport-17.svg';
import CommentLogo from '../assets/svgexport-18.svg';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';
import Link from 'next/link';
import NoCommentLogo from '../assets/svgexport-19.svg';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { postsActions } from '@/store/posts-slice';
import { useDispatch } from 'react-redux';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (e) => {
    // const emoji = e.unified
    //   .split('-')
    //   .map((el) => String.fromCodePoint(`0x${el}`))
    //   .join('');
    dispatch(
      postsActions.addReaction({ reactionType: e.native, postId: post.id })
    );

    setShowEmojiPicker(false);

    // editor.chain().focus().insertContent(emoji).run();
  };
  return (
    <div className="relative">
      <div
        key={post.id}
        className=" max-h-[500px] overflow-hidden relative md:rounded-lg  w-full cursor-pointer shadow-sm bg-white  ">
        <div className={` p-8 `}>
          <div className="flex items-center justify-between  pb-4">
            <div className="flex items-center gap-4 ">
              <Image
                src={post?.author?.imgUrl}
                width={30}
                height={30}
                alt="ProfilePhoto"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col z-[50]">
                <div className="flex gap-1">
                  <p className="text-xs font-graphik-medium text-gray-600 hover:underline underline-gray-600">
                    {post?.author?.name}
                  </p>
                  <span className="text-xs text-gray-500">in</span>
                  <p className="text-xs text-gray-600 hover:underline underline-gray-600">
                    {post?.community}
                  </p>
                </div>
                <div className="flex gap-1">
                  <div className="flex text-xs space-x-[0.2rem] ">
                    <p className="flex text-gray-600">Building Hirable</p>
                    <div className="font-extrabold text-gray-600">.</div>
                    <p className="flex text-gray-600">
                      <TimeAgo date={post.createAt} />
                    </p>
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
          {/* Heading */}
          <h1 className="font-graphik-medium text-lg pb-2">{post?.title}</h1>
          {/* Description */}
          <div className="w-full max-h-[220px] mb-[3.5rem] text-sm overflow-hidden  font-graphik-regular">
            {parser(post?.description)}
          </div>
        </div>

        <div className="w-full h-[7rem] absolute bg-gradient-to-b from-[#fefefe] to-gray-200 blur-lg opacity-90 md:rounded-b-lg  bottom-0"></div>
        <div className=" group hover:bg-primary/10 md:rounded-lg h-full w-full absolute inset-0">
          <Link
            href={`posts/${post.id}`}
            className="w-full h-full inline-block"></Link>
          <div className="w-full h-14  pb-10 md:rounded-b-lg z-[90] absolute bottom-0 flex justify-between items-center px-8">
            <div className="flex gap-2">
              {post.reactions.map((reaction) => (
                <div
                  onClick={() =>
                    dispatch(
                      postsActions.addReaction({
                        reactionType: reaction.type,
                        postId: post.id,
                      })
                    )
                  }
                  key={reaction.id}
                  className={`  w-[3.15rem] py-1 items-center justify-center flex gap-[2px]  rounded-full ${
                    reaction?.selected
                      ? 'bg-primary/10 border-primary border'
                      : 'bg-[#ececec] hover:border-[#e0e0e0] hover:border '
                  } `}>
                  <span className="text-xs">{reaction?.type}</span>
                  <span className="text-xs">{reaction?.count}</span>
                </div>
              ))}

              <div
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="bg-[#eaeaea] w-[3.15rem] flex items-center justify-center py-1 rounded-full hover:border-[#e0e0e0] hover:border">
                <Image src={EmojiLogo} alt="CommentLogo" className="w-4 h-4" />
              </div>
            </div>

            <div className="flex gap-[5px] items-center">
              <Image
                src={post?.comments?.length === 0 ? NoCommentLogo : CommentLogo}
                alt="CommentLogo"
                className=""
              />
              <span className="text-gray-500 font-graphik-medium text-[1.15rem]">
                {post?.comments?.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Emoji */}
      {showEmojiPicker && (
        <Picker
          sheetSize={4}
          theme={'light'}
          previewPosition={'none'}
          style={{
            width: '100%',
            height: '200px !important',
          }}
          data={data}
          onEmojiSelect={addEmoji}
        />
      )}
    </div>
  );
};

export default PostCard;
