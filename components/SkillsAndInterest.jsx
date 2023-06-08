import React from 'react';
import ColoredCrossLogo from '../assets/svgexport-26.svg';
import PencileLogo from '../assets/PENCIL.svg';

import Image from 'next/image';
import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px', // Customize input field border-radius
    placeholder: 'Skills',
    boxShadow: state.isFocused ? 'none' : 'none', // Customize focus ring color
    '&:hover': {
      borderColor: '#000000',
    },
    border: 'none', // Default border color
    input: {
      border: 'none',
      outline: 'none',
      borderColor: '#efefef',
    },
    focus: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px', // Customize dropdown border-radius
  }),
  multiValue: (provided) => ({
    ...provided,

    borderRadius: '4px', // Customize multi-value tag border-radius
  }),
  option: (provided, state) => ({
    ...provided,
    '&:hover': {
      backgroundColor: '#f4f4f4', // Change the hover color here
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    text: 'Skills',
  }),
};

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

const SkillsAndInterest = ({
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
          <p
            onClick={() => handleModal()}
            className="flex items-center gap-1 cursor-pointer text-primary hover:text-indigo-800 border-primary border px-4 py-[2px] hover:bg-primary/5 w-fit rounded-full">
            <Image
              src={ColoredCrossLogo}
              alt="SearchLogo"
              className=" w-5 h-5 rounded-lg "
            />
            <span className="font-medium leading-4 uppercase">Add SKILL</span>
          </p>
        )}
      </div>

      {isModalOpen && (
        <>
          <div className="h-screen w-full overflow-x-hidden bg-black/20 absolute top-0 left-0"></div>
          <div className="bg-white w-[512px] min-h-[250px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg py-6 px-8">
            <h1 className="text-[1.6rem] font-bold pb-5">
              {finalContent.length > 0 ? `Edit ${title}` : `Add ${title}`}
            </h1>
            <div className="lg:mb-7 mb-5 relative">
              <label className="block text-sm font-medium text-gray-500">
                What are your skills? You can also add your own!
              </label>

              <Select
                defaultValue={'Select Skills'}
                isMulti
                placeholder="Skills"
                styles={customStyles}
                name="colors"
                options={colourOptions}
                className="border border-black   rounded-lg placeholder:text-gray-500  w-full"
                classNamePrefix="select"
              />
            </div>
            {/* Buttons */}
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

export default SkillsAndInterest;
