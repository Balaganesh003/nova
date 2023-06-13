import React, { useEffect } from 'react';
import { useState } from 'react';
import DropDown from './DropDown';
import CloseLogo from '../assets/svgexport-30.svg';
import BackLogo from '../assets/svgexport-29.svg';
import Image from 'next/image';

const companySizeOptions = [
  { value: '1', label: '< 10 employees' },
  { value: '2', label: '10-50 employees' },
  { value: '3', label: '51-100 employees' },
  { value: '4', label: '101-500 employees' },
  { value: '5', label: '501-1000 employees' },
  { value: '6', label: '1001-10000 employees' },
  { value: '7', label: '10000+ employees' },
];

const CompanyDetails = ({
  setIsCompanyModalOpen,
  companyLogo,
  setCompanyLogo,
  companyLogoLink,
  setCompanyLogoLink,
  companyName,
  setCompanyName,
  companyWebsite,
  setCompanyWebsite,
  companySize,
  setCompanySize,
  clearCompanyDetails,
  setIsCompanyAdded,
}) => {
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  const checkAllFieldsFilled = () => {
    if (
      companyLogo.length > 0 &&
      companyName.length > 0 &&
      companyWebsite.length > 0 &&
      companySize.length != ''
    ) {
      setIsAllFieldsFilled(true);
    } else {
      setIsAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    checkAllFieldsFilled();
  }, [companyLogo, companyName, companyWebsite, companySize]);

  return (
    <div>
      <div className="bg-black bg-opacity-50 w-screen h-full min-h-screen fixed top-0 left-0 z-[100] flex justify-center items-start overflow-y-auto py-5">
        <div className=" w-full  xw:w-[32rem] m-2  lg:w-[44.25rem] min-h-[33.75rem] bg-white shadow-black/10  rounded-xl shadow-xl z-[100] p-5 xw:p-8 relative">
          <div className="flex flex-col  space-y-[1.25rem]">
            {/*  Closing Logo*/}
            <div className="flex justify-between items-center">
              <Image
                onClick={() => setIsCompanyModalOpen(false)}
                src={BackLogo}
                width={20}
                height={20}
                alt="logo"
                className="cursor-pointer "
              />
              <Image
                onClick={() => setIsCompanyModalOpen(false)}
                src={CloseLogo}
                width={16}
                height={16}
                alt="logo"
                className="cursor-pointer"
              />
            </div>
            {/* Image */}
            <div
              className={`w-[200px] h-[200px] overflow-hidden ${
                companyLogo.length === 0 && 'bg-gray-500'
              }  rounded-full shadow-equal mx-auto my-6`}>
              <Image
                src={companyLogo}
                width={200}
                height={200}
                alt="logo"
                className="cursor-pointer rounded-full w-full h-full object-cover"
              />
            </div>
            {/* company logo */}
            <div className=" flex flex-col gap-1">
              <label className="text-sm font-graphik-medium text-gray-700">
                Company Logo <span className="text-red-500 -ml-1">*</span>
              </label>
              <div className="flex border border-black rounded-lg">
                <input
                  type="text"
                  required
                  onChange={(e) => setCompanyLogoLink(e.target.value)}
                  value={companyLogoLink}
                  placeholder="Upload your company logo"
                  className=" px-4 py-2  rounded-l-lg placeholder:text-gray-500 text-sm lg:text-base focus:outline-none w-full"></input>
                <button
                  onClick={() => setCompanyLogo(companyLogoLink)}
                  className="bg-[#e9ecef] border-l border-black text-[#616161] px-4 py-2 rounded-r-lg">
                  Upload
                </button>
              </div>
            </div>
            {/* Company Name */}
            <div className=" flex flex-col gap-1">
              <label className="text-sm font-graphik-medium text-gray-700">
                Company Name <span className="text-red-500 -ml-1">*</span>
              </label>
              <input
                type="text"
                required
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
                placeholder="Ex: Google"
                className="border border-black px-4 py-2 focus:border rounded-lg text-sm lg:text-base placeholder:text-gray-500  focus:outline-none w-full"
              />
            </div>
            {/* Company Website */}
            <div className=" flex flex-col gap-1">
              <label className="text-sm font-graphik-medium text-gray-700">
                Company Website <span className="text-red-500 -ml-1">*</span>
              </label>
              <input
                type="text"
                required
                onChange={(e) => setCompanyWebsite(e.target.value)}
                value={companyWebsite}
                placeholder="Upload your company logo"
                className="border border-black px-4 py-2 focus:border rounded-lg text-sm lg:text-base placeholder:text-gray-500  focus:outline-none w-full"
              />
            </div>
            {/* Company Size */}
            <div>
              <label className="text-sm font-graphik-medium text-gray-700">
                Company Size <span className="text-red-500 -ml-1">*</span>
              </label>
              <DropDown
                dropDownOptions={companySizeOptions}
                selected={companySize}
                setSelected={setCompanySize}
                isMulti={false}
                placeholder="Company Size"
              />
            </div>
            {/* Buttons */}
            <div className=" ml-auto flex items-center justify-end gap-4 pt-4">
              <button
                onClick={() => [
                  setIsCompanyModalOpen(false),
                  clearCompanyDetails(),
                ]}
                className="px-5 py-1 xw:px-[1.67rem] xw:py-[0.5rem] rounded-xl text-primary border border-primary hover:bg-primary/10  transition-all duration-300">
                Cancel
              </button>
              <button
                onClick={() => [
                  setIsCompanyModalOpen(false),
                  setIsCompanyAdded(true),
                ]}
                disabled={!isAllFieldsFilled}
                className={`px-6 py-1 xw:px-[1.6rem] xw:py-2 rounded-xl   transition-all duration-300  ${
                  isAllFieldsFilled
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'bg-[#e0e0e0] text-[#c5c4c4]'
                }`}>
                Add Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
