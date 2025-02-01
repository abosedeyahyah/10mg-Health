import React from 'react';

const FAQs = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="px-5">
          <h2 className="text-3xl font-bold text-start mb-3">FAQs</h2>
          <p className="text-xl text-start text-[#667085] font-Onest">
            Got Questions? We &apos;ve Got Answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FAQ 1 */}
          <div className="rounded-lg p-6">
            <div className="items-center mb-2">
              <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3 mb-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    fill="#B8D3E9"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    stroke="#E8F1F8"
                    strokeWidth="8"
                  />
                  <path
                    d="M36.8401 20.61C36.3294 20.099 35.7229 19.6936 35.0555 19.4171C34.388 19.1405 33.6726 18.9982 32.9501 18.9982C32.2276 18.9982 31.5122 19.1405 30.8448 19.4171C30.1773 19.6936 29.5709 20.099 29.0601 20.61L28.0001 21.67L26.9401 20.61C25.9084 19.5783 24.5092 18.9987 23.0501 18.9987C21.5911 18.9987 20.1918 19.5783 19.1601 20.61C18.1284 21.6417 17.5488 23.041 17.5488 24.5C17.5488 25.959 18.1284 27.3583 19.1601 28.39L20.2201 29.45L28.0001 37.23L35.7801 29.45L36.8401 28.39C37.3511 27.8792 37.7565 27.2728 38.033 26.6053C38.3096 25.9379 38.4519 25.2225 38.4519 24.5C38.4519 23.7775 38.3096 23.0621 38.033 22.3946C37.7565 21.7272 37.3511 21.1208 36.8401 20.61V20.61Z"
                    stroke="#0B2F4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-Onest text-[#101828]">
                What is 10MG?
              </h3>
            </div>
            <p className="text-[#667085] font-Onest">
              10MG is a financing solution designed to help healthcare providers
              access loans for restocking inventory, expanding operations, or
              meeting urgent demands.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-lg p-6">
            <div className="items-center mb-2">
              <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3 mb-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    fill="#B8D3E9"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    stroke="#E8F1F8"
                    strokeWidth="8"
                  />
                  <path
                    d="M17 20V26M17 26H23M17 26L21.64 21.64C22.7147 20.5647 24.0444 19.7792 25.5048 19.3568C26.9652 18.9344 28.5089 18.8888 29.9917 19.2243C31.4745 19.5598 32.8482 20.2654 33.9845 21.2754C35.1209 22.2854 35.9828 23.5668 36.49 25M39 36V30M39 30H33M39 30L34.36 34.36C33.2853 35.4353 31.9556 36.2208 30.4952 36.6432C29.0348 37.0657 27.4911 37.1113 26.0083 36.7758C24.5255 36.4402 23.1518 35.7346 22.0155 34.7246C20.8791 33.7146 20.0172 32.4332 19.51 31"
                    stroke="#0B2F4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-Onest text-[#101828]">
                Who is eligible to apply for loans?
              </h3>
            </div>
            <p className="text-[#667085] font-Onest">
              Licensed healthcare providers, including pharmacies, hospitals,
              and clinics, are eligible. Eligibility is based on
              creditworthiness and operational history.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-lg p-6">
            <div className="items-center mb-2">
              <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3 mb-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    fill="#B8D3E9"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    stroke="#E8F1F8"
                    strokeWidth="8"
                  />
                  <path
                    d="M28 24V32M24 28H32M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                    stroke="#0B2F4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-Onest text-[#101828]">
                How do I apply for a loan?
              </h3>
            </div>
            <p className="text-[#667085] font-Onest">
              Simply sign up on our platform, complete your profile, and submit
              a loan application with the required documents. Approval is
              typically completed within 48 hours.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-lg p-6">
            <div className="items-center mb-2">
              <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3 mb-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    fill="#B8D3E9"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    stroke="#E8F1F8"
                    strokeWidth="8"
                  />
                  <path
                    d="M28 24V32M24 28H32M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                    stroke="#0B2F4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-Onest text-[#101828]">
                What are the interest rates?
              </h3>
            </div>
            <p className="text-[#667085] font-Onest">
              Interest rates vary based on the loan amount, repayment terms and
              your credit profile. Rates are competitive and tailored to meet
              your needs.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="rounded-lg p-6">
            <div className="items-center mb-2">
              <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3 mb-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    fill="#B8D3E9"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    stroke="#E8F1F8"
                    strokeWidth="8"
                  />
                  <path
                    d="M17 26H39M19 20H37C38.1046 20 39 20.8954 39 22V34C39 35.1046 38.1046 36 37 36H19C17.8954 36 17 35.1046 17 34V22C17 20.8954 17.8954 20 19 20Z"
                    stroke="#0B2F4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-Onest text-[#101828]">
                Can I choose my repayment schedule?
              </h3>
            </div>
            <p className="text-[#667085] font-Onest">
              Yes, we offer flexible repayment options designed to fit your cash
              flow. You can choose between weekly, bi-weekly, or monthly
              payments.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className=" rounded-lg p-6 ">
            <div className=" items-center mb-4">
              {" "}
              <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3 mb-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    fill="#B8D3E9"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="48"
                    height="48"
                    rx="12"
                    stroke="#E8F1F8"
                    strokeWidth="8"
                  />
                  <path
                    d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                    stroke="#0B2F4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-Onest text-[#101828]">
                What do I need to apply for a loan?
              </h3>
            </div>
            <p className="text-[#667085] font-Onest">
              You &apos;ll need a valid business registration certificate, proof
              of income, and a recent inventory report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;