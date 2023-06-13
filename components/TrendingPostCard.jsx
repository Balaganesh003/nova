import React from 'react';

const TrendingPostCard = ({ title, category, views, days }) => {
  return (
    <div className="px-7 2xl:px-8 py-[1.5rem]  bg-white hover:bg-primary/[8%] cursor-pointer rounded-xl flex flex-col space-y-2 font-graphik-regular">
      <p className="text-[0.77rem] font-graphik-semibold">{category}</p>
      <p className="text-[14px] ">{title}</p>
      <div className="flex text-xs space-x-[0.2rem] ">
        <p className="flex ">
          <span>{days}</span>d
        </p>
        <div className="font-extrabold">.</div>
        <p className="flex space-x-[0.15rem]">
          <span>{views}</span> <span>views</span>
        </p>
      </div>
    </div>
  );
};

export default TrendingPostCard;
