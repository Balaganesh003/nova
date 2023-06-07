import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-7 gap-3 lg:ml-[3.13rem] pt-[3.5rem] justify-center md:max-h-screen md:overflow-hidden  md:scrollbar-hide">
      <div className="md:w-[388px] flex-shrink-0 md:ml-7 md:pt-11 md:pb-14 md:overflow-y-scroll md:max-h-screen bg-gradient-to-b md:scrollbar-hide">
        <div className="w-full h-[200rem]  bg-gradient-to-b from-pink-600 to-blue-200"></div>
        {/* Content for the left column */}
      </div>
      <div className="md:max-w-[600px] md:mr-10 md:pt-11 md:pb-14 md:overflow-y-scroll md:max-h-screen bg-gradient-to-b md:scrollbar-hide ">
        {/* Content for the right column */}
        <div className="w-full  flex flex-wrap h-[200rem] bg-gradient-to-b from-black to-blue-200">
          <h1 className="text-white text-wrap">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
