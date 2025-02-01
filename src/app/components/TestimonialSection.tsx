import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "10MG transformed our operations. The financing allowed us to stock up on life-saving medications during a critical shortage. The process was quick, transparent, and stress-free!",
      author: "Dr. Adebayo Christain",
      location: "City Pharmacy",
    },
    {
      text: "I was skeptical about taking loans for my business, but 10MG proved to be a reliable partner. Their flexible repayment terms helped me expand my inventory without disrupting my cash flow.",
      author: "Fatima Sule",
      location: "City Pharmacy",
    },
    {
      text: "10MG isn't just a loan provider, they're a partner in growth. Their insightful recommendations and competitive rates gave us the confidence to take on bigger projects.",
      author: "Chibuzor Nwoke",
      location: "City Pharmacy",
    },
  ];

  // Define different background colors for the cards
  const colors = [
    "bg-[#FEF0C7]",
    "bg-[#D1FADF]",
    "bg-[#E0F2FE]",
    "bg-red-100",
    "bg-purple-100",
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F9FAFB]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Reviews</h2>
        <p className="text-lg mb-8 text-center text-gray-600">
          Trusted by Thousands of Healthcare Providers
        </p>

        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div
                className={`rounded-lg p-8 shadow-md h-full ${
                  colors[index % colors.length]
                } text-center`}
              >
                <p className="text-[#1D2939] font-Onest text-lg mb-8">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">
            Want to give it a try? Join Us Today
          </h2>
          <p className="text-xl text-[#667085] font-Onest mb-6">
            Your Healthcare Financing Partner Starts Here
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-[#FFFFFF] text-[#344054] rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
            <button className="px-6 py-3 bg-[#0B2F4D] text-[#FFFFFF] rounded-lg hover:bg-gray-300">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
