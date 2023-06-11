/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ColoredCrossLogo from '../assets/svgexport-26.svg';
import PencileLogo from '../assets/PENCIL.svg';
import Image from 'next/image';
import CloseLogo from '../assets/svgexport-30.svg';
import CrossLogo from '../assets/svgexport-13.svg';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import DropDown from './DropDown';
import CompanyDetails from './CompanyDetails';
import { useSelector } from 'react-redux';
import { experienceActions } from '../store/experience-slice';

const monthOptions = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

const yearOptions = [];
const currentYear = new Date().getFullYear();
const startYear = 1971;

for (let year = startYear; year <= currentYear + 5; year++) {
  yearOptions.unshift({ value: year.toString(), label: year.toString() });
}

const Experience = ({ title, question }) => {
  const dispatch = useDispatch();

  const { experienceList } = useSelector((state) => state.experience);
  const [experienceId, setExperienceId] = useState(experienceList.length + 1);
  const [checked, setChecked] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [description, setDescription] = useState('');
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [companyLogo, setCompanyLogo] = useState('');
  const [companyLogoLink, setCompanyLogoLink] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companySize, setCompanySize] = useState('');

  const [isCompanyAdded, setIsCompanyAdded] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const isCurrentlyWorking = () => {
    if (checked) {
      setEndMonth('present');
      setEndYear('present');
    }
  };

  const getMonthValue = (monthName) => {
    const monthOption = monthOptions.find(
      (option) => option.label.toLowerCase() === monthName.toLowerCase()
    );

    return monthOption ? monthOption.value : null;
  };

  const calculateDifference = (startMonth, startYear, endMonth, endYear) => {
    startMonth = getMonthValue(startMonth);

    endMonth =
      endMonth === 'present'
        ? new Date().getMonth() + 1
        : (endMonth = getMonthValue(endMonth));
    endYear = endYear === 'present' ? new Date().getFullYear() : endYear;

    // Check if the end year is the current year
    const isCurrentYear = endYear === new Date().getFullYear();

    // Calculate the difference in months
    let months = 0;
    if (isCurrentYear) {
      months = endMonth - startMonth;
    } else {
      months = 12 - startMonth + endMonth + 12 * (endYear - startYear - 1);
    }

    // Calculate the difference in years
    let years = endYear - startYear;

    // Adjust the months if it exceeds 12
    if (months >= 12) {
      months %= 12;
    }

    years = startMonth > endMonth ? years - 1 : years;

    const duration =
      years > 0 && months > 0
        ? `${years} years and ${months} months`
        : years > 0
        ? `${years} years`
        : `${months} months`;
    // Return the difference in months and years
    return duration;
  };

  useEffect(() => {
    isCurrentlyWorking();
  }, [checked]);

  useEffect(() => {}, [
    experienceList,
    isExperienceModalOpen,
    isCompanyModalOpen,
    isCompanyAdded,
    checked,
  ]);

  const clearCompanyDetails = () => {
    setCompanyLogo('');
    setCompanyLogoLink('');
    setCompanyName('');
    setCompanyWebsite('');
    setCompanySize('');
    setIsCompanyAdded(false);
  };

  const clearExperienceDetails = () => {
    setJobTitle('');
    setStartMonth('');
    setStartYear('');
    setEndMonth('');
    setEndYear('');
    setDescription('');
    setIsEditMode(false);
    setChecked(false);
    setExperienceId(experienceList.length + 1);
    clearCompanyDetails();
    setIsExperienceModalOpen(false);
    setIsCompanyModalOpen(false);
  };

  const experienceObj = {
    id: experienceId,
    jobTitle: jobTitle,
    description: description,
    duration: {
      startMonth: startMonth,
      startYear: startYear,
      endMonth: endMonth,
      endYear: endYear,
    },
    checked: checked,
    company: {
      logo: companyLogo,
      name: companyName,
      website: companyWebsite,
      size: companySize?.label,
    },
  };

  const handelExperience = () => {
    if (
      jobTitle === '' ||
      startMonth === '' ||
      startYear === '' ||
      (endMonth === '' && !checked && endYear === '') ||
      isCompanyAdded === false
    ) {
      toast.error('Please fill all the fields');
      return;
    }

    dispatch(experienceActions.addExperience(experienceObj));
    toast.success('Experience added successfully');
    setIsExperienceModalOpen(false);
    setIsCompanyModalOpen(false);
    setChecked(false);
    setIsCompanyAdded(false);
    clearExperienceDetails();
    setIsEditMode(false);
  };

  const updateExperience = (experienceObj) => {
    setIsEditMode(true);
    setExperienceId(experienceObj.id);
    setChecked(experienceObj.checked);
    setJobTitle(experienceObj.jobTitle);
    setStartMonth(experienceObj.duration.startMonth);
    setStartYear(experienceObj.duration.startYear);
    setEndMonth(experienceObj.duration.endMonth);
    setEndYear(experienceObj.duration.endYear);
    setDescription(experienceObj.description);
    setCompanyLogo(experienceObj.company.logo);
    setCompanyName(experienceObj.company.name);
    setCompanyWebsite(experienceObj.company.website);
    setCompanySize(experienceObj.company.size);
    setIsCompanyAdded(true);
    setIsExperienceModalOpen(true);
  };

  const handelDeleteExperience = (id) => {
    dispatch(experienceActions.deleteExperience(id));
    setIsEditMode(false);
    setChecked(false);
    setIsCompanyModalOpen(false);
    setIsExperienceModalOpen(false);
    toast.success('Experience deleted successfully');
  };

  return (
    <div className="w-full  h-full   ">
      <div className="flex justiify-between pt-8 pb-3 items-center w-full h-full ">
        <h1 className="text-xl font-bold  w-full capitalize">{title}</h1>
        {experienceList.length > 0 && (
          <Image
            onClick={() => setIsExperienceModalOpen(true)}
            src={CrossLogo}
            alt="Pencile Logo"
            className=" cursor-pointer hover:bg-[#eee] rounded-full -mr-1"
          />
        )}
      </div>
      <div className="pt-2">
        {experienceList.length > 0 ? (
          <div className="flex flex-col gap-4">
            {experienceList.map((experience) => (
              <div
                key={experience.id}
                className="text-gray-800 w-full h-full flex  ">
                <div className="flex gap-4 w-full">
                  <div className="w-fit flex-shrink-0">
                    <Image
                      width={1200}
                      height={1200}
                      src={experience.company.logo}
                      alt="company logo"
                      className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200"
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-full">
                      <div className=" flex justify-between w-full ">
                        <h1 className="text-lg font-bold ">
                          {experience.company.name}
                        </h1>
                        <div>
                          <Image
                            onClick={() => updateExperience(experience)}
                            src={PencileLogo}
                            alt="Pencile Logo"
                            width={24}
                            height={24}
                            className=" cursor-pointer flex-shrink-0 hover:bg-[#eee] rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-gray-500">
                      {experience.jobTitle}
                    </p>

                    <div className="flex flex-wrap gap-[3px] text-sm items-center w-full break-words">
                      <div className="flex ">
                        <p className="flex">
                          <span>{experience.duration.startMonth}</span>
                          <span>{experience.duration.startYear} </span>
                          <p className="ml-1">-</p>
                        </p>
                        <span className="ml-1">
                          {experience.duration.endYear == 'present'
                            ? 'Current'
                            : experience.duration.endMonth +
                              '' +
                              experience.duration.endYear}
                        </span>
                      </div>
                      <div className="h-1 w-1 rounded-full bg-gray-800 mx-[2px]"></div>

                      {calculateDifference(
                        experience.duration.startMonth,
                        experience.duration.startYear,
                        experience.duration.endMonth,
                        experience.duration.endYear
                      )
                        .split(' ')
                        .map((item, index) => (
                          <span key={index}>{item}</span>
                        ))}
                    </div>

                    <p className="text-sm mt-[6px]">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => setIsExperienceModalOpen(true)}
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

      {isExperienceModalOpen && (
        <div className="bg-black bg-opacity-50 w-screen h-full min-h-screen fixed top-0 left-0 z-[100] flex justify-center items-start overflow-y-auto py-5">
          <div className=" w-full  xw:w-[32rem] m-2  lg:w-[44.25rem] min-h-[33.75rem] bg-white shadow-black/10  rounded-xl shadow-xl z-[100] p-5 xw:p-8 relative">
            <div className="flex flex-col  space-y-[1.25rem]">
              {/* Title */}
              <h1 className="text-[1.6rem] font-bold pb-5 ">Add Experience</h1>
              {/* Job Title */}
              <div className=" flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Job Title<span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setJobTitle(e.target.value)}
                  value={jobTitle}
                  placeholder="Ex: Software Engineer"
                  className="border border-black px-4  py-2  text-sm lg:text-base focus:border rounded-lg placeholder:text-gray-500  focus:outline-none w-full"
                />
              </div>

              {/* Company / Organization */}
              <div className=" flex flex-col gap-1 relative">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700">
                  Company/Organization
                  <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  placeholder="Company/Organization"
                  className="border border-black px-4 py-2 text-sm lg:text-base focus:border rounded-lg placeholder:text-gray-500  focus:outline-none w-full "
                />
                {isCompanyAdded && (
                  <Image
                    onClick={() => clearCompanyDetails()}
                    src={CloseLogo}
                    alt="addCompany"
                    width={30}
                    height={30}
                    className="absolute bottom-[0.3rem] right-2 cursor-pointer p-2"
                  />
                )}
                {/* Add Company */}
                {companyName.length > 0 && !isCompanyAdded && (
                  <div
                    onClick={() => setIsCompanyModalOpen(true)}
                    className=" absolute -bottom-[3.5rem] left-0 w-full cursor-pointer py-2 shadow-equal bg-white rounded-lg z-[100]">
                    <p className="text-sm font-medium text-gray-700 flex items-center  px-2 py-[6px] bg-[#f4f4f4] ">
                      <Image
                        src={CrossLogo}
                        alt="addCompany"
                        width={24}
                        height={24}
                      />
                      <span className="text-base mx-2">Add </span>
                      <span className="text-base ">{`"${companyName}"`}</span>
                    </p>
                  </div>
                )}
              </div>
              <div>
                {/* Is Currently Working checkbox*/}
                <div className="mb-2">
                  <li
                    onClick={() => setChecked(!checked)}
                    class="relative flex ml-0.5 items-center justify-center gap-2.5 bg-white   hover:border-gray-400 ">
                    <input
                      value={checked}
                      onClick={() => setChecked(!checked)}
                      type="checkbox"
                      id="checkbox1"
                      className="peer  relative h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[2px] border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-primary outline checked:outline-primary outline-gray-500 -outline-offset-[1px] checked:border-none"
                    />
                    <label
                      for="checkbox1"
                      className="w-full cursor-pointer font-medium text-gray-600 text-sm lg:text-base ">
                      I currently work here
                    </label>
                  </li>
                </div>

                {/* Start and End Date  */}
                <div className=" block ">
                  <div className="flex w-full ">
                    <div className={`flex-1 lg:mr-4 mr-2`}>
                      <label
                        htmlFor="title"
                        className="text-sm font-medium text-gray-500">
                        Start Date
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2 ">
                        <div className="w-[60%]">
                          <DropDown
                            dropDownOptions={monthOptions}
                            isMulti={false}
                            defaultValue={startMonth}
                            selected={startMonth}
                            setSelected={setStartMonth}
                            placeholder="Month"
                          />
                        </div>
                        <div className="w-[40%]">
                          <DropDown
                            dropDownOptions={yearOptions}
                            isMulti={false}
                            defaultValue={startYear}
                            selected={startYear}
                            setSelected={setStartYear}
                            placeholder="Year"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 w-full lg:mr-4 mr-2">
                      {!checked && (
                        <>
                          <label
                            htmlFor="title"
                            className="text-sm font-medium text-gray-500">
                            End Date
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="flex gap-2">
                            <div className="w-[58%]">
                              <DropDown
                                dropDownOptions={monthOptions}
                                isMulti={false}
                                defaultValue={endMonth}
                                selected={endMonth}
                                setSelected={setEndMonth}
                                placeholder="Month"
                              />
                            </div>
                            <div className="w-[42%]">
                              <DropDown
                                dropDownOptions={yearOptions}
                                isMulti={false}
                                selected={endYear}
                                setSelected={setEndYear}
                                defaultValue={endYear}
                                placeholder="Year"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className=" flex flex-col gap-1">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Ex: Worked on the mobile app team and learned a lot about coding iOS apps. It was a great experience! I loved it!"
                  className="border border-black px-4 py-2 text-sm lg:text-base resize-none focus:border rounded-lg placeholder:text-gray-500 h-[90px] focus:outline-none w-full"
                />
              </div>
              {/* Footer */}
              <div className="flex w-full justify-between  pt-3 ">
                {/*  */}
                <div className={` ${!isEditMode && 'hidden'}`}>
                  <button
                    onClick={() => handelDeleteExperience(experienceObj.id)}
                    className="px-5 py-1 xw:px-[1.67rem] xw:py-[0.5rem] rounded-xl text-primary border border-primary hover:bg-primary/10  transition-all duration-300">
                    Delete
                  </button>
                </div>
                <div className=" ml-auto flex items-center justify-end gap-4 flex-wrap">
                  <button
                    onClick={() => clearExperienceDetails()}
                    className="px-5 py-1 xw:px-[1.67rem] xw:py-[0.5rem] rounded-xl text-primary border border-primary hover:bg-primary/10  transition-all duration-300">
                    Cancel
                  </button>
                  <button
                    onClick={() => handelExperience()}
                    className="px-6 py-1 xw:px-[1.6rem] xw:py-2 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Modal */}
      {isCompanyModalOpen && (
        <CompanyDetails
          setIsCompanyModalOpen={setIsCompanyModalOpen}
          companyLogo={companyLogo}
          companyName={companyName}
          companyWebsite={companyWebsite}
          companySize={companySize}
          companyLogoLink={companyLogoLink}
          setCompanyLogo={setCompanyLogo}
          setCompanyName={setCompanyName}
          setCompanyWebsite={setCompanyWebsite}
          setCompanySize={setCompanySize}
          setCompanyLogoLink={setCompanyLogoLink}
          setIsCompanyAdded={setIsCompanyAdded}
          clearCompanyDetails={clearCompanyDetails}
        />
      )}
    </div>
  );
};

export default Experience;
