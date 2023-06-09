import { useState } from 'react';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import TrendingPosts from '../components/TrendingPosts';

export default function Home() {
  const [createPostOpen, setCreatePostOpen] = useState(false);

  const openCreatePost = () => {
    setCreatePostOpen(true);
  };

  const closeCreatePost = () => {
    setCreatePostOpen(false);
  };
  return (
    <main className={` min-h-[100vh]  bg-[#f4f4f4] overflow-x-hidden `}>
      <div className=" mx-auto lg:flex lg:ml-16 justify-center xs:w-full md:max-w-[34rem] lg:max-w-[100%]  lg:mr-5 lg:mt-[5.5rem] mt-[3.5rem] md:mt-[4rem]">
        <div className="grid grid-cols-10 lg:w-[93%] xl:w-[75%] 2xl:w-[72.5rem] gap-8 ">
          <div className="col-span-10 lg:col-span-7  w-full outline-2">
            <Feed openCreatePost={openCreatePost} />
          </div>
          <div className="hidden lg:block lg:col-span-3 ">
            <TrendingPosts />
          </div>
        </div>
      </div>
      <div>
        {createPostOpen && <CreatePost closeCreatePost={closeCreatePost} />}
      </div>
    </main>
  );
}
