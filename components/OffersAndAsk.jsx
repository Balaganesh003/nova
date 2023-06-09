import React from 'react';
import ColoredCrossLogo from '../assets/svgexport-26.svg';
import PencileLogo from '../assets/PENCIL.svg';
import Image from 'next/image';
import { useState } from 'react';

const OffersAndAsk = ({
  title,
  question,
  label,
  initialText,
  placeholderText,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('');

  const [finalContent, setFinalContent] = useState('');

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    setFinalContent(content);
    console.log(content);
  };

  return (
    <div className="w-full  h-full   ">
      <div className="flex justiify-between pt-5 pb-3 items-center w-full h-full ">
        <h1 className="text-xl font-bold  w-full capitalize">{title}</h1>
        {finalContent.length > 0 && (
          <Image
            onClick={() => setIsModalOpen(true)}
            src={PencileLogo}
            alt="Pencile Logo"
            className="w-[24px] h-[24px] cursor-pointer hover:bg-[#eee] rounded-full"
          />
        )}
      </div>
      <div className="pb-4">
        {finalContent.length > 0 ? (
          <div className="text-gray-800 w-full h-full ">
            <p className="mr-1 font-semibold text-black break-word">
              {initialText}
            </p>
            {finalContent}
          </div>
        ) : (
          <div
            onClick={() => handleModal()}
            className="flex items-center gap-5 group cursor-pointer">
            <Image
              src={ColoredCrossLogo}
              alt="SearchLogo"
              className="bg-transparent border w-12 h-12 border-primary rounded-lg px-3 py-2 group-hover:bg-primary/5"
            />

            <p className="text-primary group-hover:text-indigo-800 ">
              {question}
            </p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <>
          <div className="h-screen w-full overflow-x-hidden bg-black/20 absolute top-0 left-0"></div>
          <div className="bg-white w-[512px] lg:h-[300px] h-[280px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg py-6 px-8">
            <h1 className="text-[1.6rem] font-bold pb-5">
              {finalContent.length > 0 ? `Edit ${title}` : `Add ${title}`}
            </h1>
            <div className="lg:mb-7 mb-5">
              <label className="block text-sm font-medium text-gray-500">
                {label}
              </label>
              <textarea
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={placeholderText}
                className="mt-1 h-[80px] resize-none outline-none px-4 py-2 rounded-lg placeholder:text-gray-500 text-gray-500 w-full border border-black text-xs lg:text-base focus:ring-0  "
              />
            </div>
            <div className=" ml-auto  flex items-center justify-end gap-4 ">
              <button
                onClick={() => handleModal()}
                className="px-5 py-1 lg:px-[1.67rem] lg:py-[0.5rem] rounded-xl text-primary border border-primary hover:bg-primary/10  transition-all duration-300">
                Cancel
              </button>
              <button
                onClick={() => handleSubmit()}
                className="px-6 py-1 lg:px-[1.6rem] lg:py-2 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 text-white">
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OffersAndAsk;
