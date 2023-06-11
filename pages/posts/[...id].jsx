import React from 'react';
import TrendingPosts from '../../components/TrendingPosts';
import PostPage from '../../components/PostPage';
import CrossLogo from '@/assets/svgexport-34.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postsActions } from '@/store/posts-slice.js';
import { useSelector } from 'react-redux';

//home, jobs, companies, aws;
const Post = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const postId = router.query.id;

  const { selectedPost } = useSelector((state) => state.posts);

  useEffect(() => {
    if (postId) {
      dispatch(postsActions.getPostById(postId[0]));
    }
  }, [router.query.id]);

  return (
    <main
      className={`h-screen w-full flex justify-center pt-14 bg-[#f4f4f4] overflow-x-hidden lg:pl-16`}>
      <div className="flex gap-10 w-full justify-center pt-4 md:py-7 xl:py-14 mx-auto lg:px-7 xs:w-full md:max-w-[34rem] lg:max-w-full pb-7">
        <div className="max-w-[730px] 2xl:max-w-[816px] w-full">
          <div className="w-fit">
            <Link href="/" className="w-fit">
              <div className="flex gap-2 pb-2 lg:pb-4 px-2 w-fit">
                <Image
                  src={CrossLogo}
                  width={24}
                  height={24}
                  alt="CloseLogo"
                  className="cursor-pointer"
                />
                <span className="text-gray-800 w-fit">Close</span>
              </div>
            </Link>
          </div>
          <PostPage selectedPost={selectedPost} />
        </div>
        <div className=" flex-shrink-0 w-[269px] 2xl:max-w-[303px] hidden lg:flex">
          <TrendingPosts />
        </div>
      </div>
    </main>
  );
};

export default Post;
