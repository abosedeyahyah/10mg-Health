"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 flex items-center w-full justify-between py-4">
          <div className="flex items-start">
            <Image
              src="/images/Group.png"
              alt="10mg Health"
              width={40}
              height={40}
            />
            <span className="ml-2 mt-2 text-xl font-semibold text-gray-800">
              10mg Health
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#api" className="text-gray-700 hover:text-blue-600">
              API
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-blue-600">
              FAQs
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow bg-transparent">
        <div className="relative w-full min-h-[705px] bg-[#fefffc] py-20 flex flex-col justify-center items-center">
          {/* Background Images */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/rightImg.png"
              alt="Center Background"
              layout="fill"
              objectFit="cover"
              className="opacity-5"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-0">
            <Image
              src="/images/LeftSide.png"
              alt="Left Bottom Background"
              layout="intrinsic"
              width={500}
              height={500}
              className="opacity-50"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-[865px] mx-auto px-4">
            <h1 className="md:text-[60px] text-[32px] leading-[72px] font-bold text-gray-800 mb-4">
              Empowering Healthcare Providers with Easy Access to Financing.
            </h1>
            <p className="text-xl max-w-[748px] mx-auto text-gray-600 mb-8">
              10MG connects pharmacies, hospitals, and healthcare vendors with
              fast, secure, and flexible loan solutions, so you can focus on
              saving lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="px-6 py-3 bg-white text-[#344054] rounded-lg border border-gray-400">
                {/* <Icon as={FiPlay} className="w-6 h-6" /> */}
                Demo
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Trusted Brands Section */}
        <div className="bg-white py-10">
          <h3 className="text-center text-lg text-gray-500 mb-6">
            Trusted by Thousands of Healthcare Providers
          </h3>
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center space-x-6 sm:space-x-24">
            <Image
              src="/images/Companylogo4.png"
              alt="Coinbase"
              width={100}
              height={50}
              className="mb-4"
            />
            <Image
              src="/images/Companylogo1.png"
              alt="Spotify"
              width={100}
              height={50}
              className="mb-4"
            />
            <Image
              src="/images/Companylogo.png"
              alt="Slack"
              width={100}
              height={50}
              className="mb-4"
            />
            <Image
              src="/images/Companylogo2.png"
              alt="Dropbox"
              width={100}
              height={50}
              className="mb-4"
            />
            <Image
              src="/images/Companylogo3.png"
              alt="Webflow"
              width={100}
              height={50}
              className="mb-4"
            />
            <Image
              src="/images/Companylogo5.png"
              alt="Zoom"
              width={100}
              height={50}
              className="mb-4"
            />
          </div>
          <div className="py-8">
            {/* Stars and Rating */}
            <div className="mt-4">
              <Image
                src="/images/Star.png"
                alt="Trustpilot Rating"
                width={500}
                height={82}
                quality={100}
                className="h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
