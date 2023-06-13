import React from 'react';
import ColoredCrossLogo from '../assets/svgexport-26.svg';
import PencileLogo from '../assets/PENCIL.svg';
import TwitterLogo from '../assets/twitter.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import InstagramLogo from '../assets/instagram.svg';
import PortfolioLogo from '../assets/website.svg';
import Image from 'next/image';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Link from 'next/link';

const Contact = ({ title, question }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [twitterLink, setTwitterLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  const [finalLinks, setFinalLinks] = useState(['', '', '', '', '']);

  const handleModal = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsModalOpen(!isModalOpen);
  };

  const checkVaildLink = (link) => {
    if (link.length === 0) return true;
    const regex = new RegExp(
      '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    );
    return regex.test(link);
  };

  const handleSubmit = () => {
    if (
      checkVaildLink(twitterLink) &&
      checkVaildLink(linkedinLink) &&
      checkVaildLink(instagramLink) &&
      checkVaildLink(portfolioLink)
    ) {
      setIsModalOpen(false);
      setFinalLinks([twitterLink, linkedinLink, instagramLink, portfolioLink]);
      toast.success('Links updated successfully');
    } else {
      toast.error('Please enter a valid link');
    }
  };

  return (
    <div className="w-full  h-full  pb-5 font-graphik-regular">
      <Toaster />
      <div className="flex justiify-between pt-5 pb-3 items-center w-full h-full ">
        <h1 className="text-xl font-graphik-semibold  w-full capitalize">
          {title}
        </h1>
        {(finalLinks[0].length ||
          finalLinks[1].length ||
          finalLinks[2].length ||
          finalLinks[3].length) > 0 && (
          <Image
            onClick={() => setIsModalOpen(true)}
            src={PencileLogo}
            alt="Pencile Logo"
            className="w-[24px] h-[24px] cursor-pointer hover:bg-[#eee] rounded-full"
          />
        )}
      </div>
      <div className="pb-4">
        {finalLinks[0].length ||
        finalLinks[1].length ||
        finalLinks[2].length ||
        finalLinks[3].length > 0 ? (
          <div className="flex gap-8  w-full h-full ">
            {finalLinks[0].length > 0 && (
              <Link href={'https://twitter.com/'} target="_blank">
                <div className="hover:bg-[#eaeaea] p-1 rounded transition-all duration-300">
                  <Image
                    src={TwitterLogo}
                    alt="Twitter Logo"
                    className=" hover:scale-95"
                  />
                </div>
              </Link>
            )}
            {finalLinks[1].length > 0 && (
              <Link href={'https://www.linkedin.com/'} target="_blank">
                <div className="hover:bg-[#eaeaea] p-1 rounded transition-all duration-300">
                  <Image
                    src={LinkedinLogo}
                    alt="Twitter Logo"
                    className="hover:scale-95"
                  />
                </div>
              </Link>
            )}
            {finalLinks[2].length > 0 && (
              <Link href={'https://www.instagram.com/'} target="_blank">
                <div className="hover:bg-[#eaeaea] p-1 rounded transition-all duration-300">
                  <Image
                    src={InstagramLogo}
                    alt="Twitter Logo"
                    className="hover:scale-95 "
                  />
                </div>
              </Link>
            )}
            {finalLinks[3].length > 0 && (
              <Link href={'https://balaganesh-dev.vercel.app/'} target="_blank">
                <div className="hover:bg-[#eaeaea] p-1 rounded transition-all duration-300">
                  <Image
                    src={PortfolioLogo}
                    alt="Twitter Logo"
                    className=" hover:scale-95"
                  />
                </div>
              </Link>
            )}
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
          <div className="h-screen w-full overflow-x-hidden bg-black/20 fixed top-0 left-0 flex items-center justify-center ">
            <div className="bg-white w-full xw:w-[512px] lg:h-[358px] min-h-[320px]  rounded-lg py-6 px-8 mx-2">
              <h1 className="text-[1.6rem] font-graphik-semibold pb-8">
                {finalLinks[0].length ||
                finalLinks[1].length ||
                finalLinks[2].length ||
                finalLinks[3].length > 0
                  ? `Edit ${title}`
                  : `Add ${title}`}
              </h1>
              <div className="flex flex-col gap-3 lg:gap-5 lg:mb-7 mb-5">
                <div className=" flex flex-col lg:flex-row gap-3 lg:gap-5">
                  <div className="w-full lg:w-[50%]">
                    <label className="block text-sm font-graphik-medium text-gray-500">
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      placeholder={'Twitter'}
                      className="mt-1  resize-none outline-none px-2 py-[6px] lg:py-1 rounded-lg placeholder:text-gray-500 text-gray-500 w-full border text-sm lg:text-base focus:ring-0 border-black "
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label className="block text-sm font-graphik-medium text-gray-500">
                      Linkedin
                    </label>
                    <input
                      type="text"
                      value={linkedinLink}
                      onChange={(e) => setLinkedinLink(e.target.value)}
                      placeholder={'Linkedin'}
                      className="mt-1  resize-none outline-none px-2 py-[6px] lg:py-1 rounded-lg placeholder:text-gray-500 text-gray-500 w-full border text-sm lg:text-base focus:ring-0 border-black "
                    />
                  </div>
                </div>
                <div className=" flex flex-col lg:flex-row gap-3 lg:gap-5">
                  <div className="w-full lg:w-[50%]">
                    <label className="block text-sm font-graphik-medium text-gray-500">
                      Instagram
                    </label>
                    <input
                      type="text"
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)}
                      placeholder={'Instagram'}
                      className="mt-1  resize-none outline-none px-2 py-[6px] lg:py-1 rounded-lg placeholder:text-gray-500 text-gray-500 w-full border text-xm lg:text-base focus:ring-0 border-black "
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label className="block text-sm font-graphik-medium text-gray-500">
                      Portfolio / personal website
                    </label>
                    <input
                      type="text"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder={'Website URL'}
                      className="mt-1  resize-none outline-none px-2 py-[6px] lg:py-1 rounded-lg placeholder:text-gray-500 text-gray-500 w-full border text-xm lg:text-base focus:ring-0 border-black "
                    />
                  </div>
                </div>
              </div>
              <div className=" ml-auto pt-4 flex items-center justify-end gap-4 ">
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
        </>
      )}
    </div>
  );
};

export default Contact;
