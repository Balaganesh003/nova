import React from 'react';
import ColoredCrossLogo from '../assets/svgexport-26.svg';
import PencileLogo from '../assets/PENCIL.svg';
import Image from 'next/image';
import { useState } from 'react';
import Select from 'react-select';

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
    borderRadius: '8px',
    // Customize dropdown border-radius
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

const SkillsAndInterest = ({ title, label, dropDownOptions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [finalSelected, setFinalSelected] = useState([]);

  const [selected, setSelected] = useState(finalSelected);

  const handleModal = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsModalOpen(!isModalOpen);
  };

  const handelChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    setFinalSelected(selected);
  };

  return (
    <div className="w-full  h-full   ">
      <div className="flex justiify-between pt-8 pb-4 items-center w-full h-full ">
        <h1 className="text-xl font-bold  w-full capitalize">{title}</h1>
        {finalSelected.length > 0 && (
          <Image
            onClick={() => setIsModalOpen(true)}
            src={PencileLogo}
            alt="Pencile Logo"
            className="w-[24px] h-[24px] cursor-pointer hover:bg-[#eee] rounded-full"
          />
        )}
      </div>
      <div className="">
        {finalSelected.length > 0 ? (
          <div className="text-gray-800 w-full h-full flex gap-2 flex-wrap">
            {finalSelected.map((item, index) => (
              <p
                key={index * 88}
                className=" w-fit uppercase text-black  bg-[#eee] px-4 font-bold py-[3px] text-[12px] leading-4 rounded-full">
                {item.label}
              </p>
            ))}
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
            <span className="font-medium leading-4 uppercase">
              Add {title.slice(0, title.length - 1)}
            </span>
          </p>
        )}
      </div>

      {isModalOpen && (
        <div className="h-screen w-screen overflow-x-hidden bg-black/30 fixed top-0 left-0 flex justify-center items-center">
          <div className="bg-white w-[512px] min-h-[250px]  rounded-lg py-6 px-8">
            <h1 className="text-[1.6rem] font-bold pb-5">
              {finalSelected.length > 0 ? `Edit ${title}` : `Add ${title}`}
            </h1>
            <div className="lg:mb-7 mb-5 relative">
              <label className="block text-sm font-medium text-gray-500">
                {label}
              </label>

              <Select
                defaultValue={finalSelected}
                isMulti
                placeholder={title}
                styles={customStyles}
                onChange={handelChange}
                options={dropDownOptions}
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
        </div>
      )}
    </div>
  );
};

export default SkillsAndInterest;
