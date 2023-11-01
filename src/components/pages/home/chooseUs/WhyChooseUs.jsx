import { useEffect } from "react";
import image from "../../../../assets/award_ribbon_check_mark_with_stars.jpg";

const WhyChooseUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="max-w-7xl xl:mx-auto md:mx-10 mx-5 text-[#feffff] py-16">
      <div className="container mx-auto text-center font-Ubuntu font-medium">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-Ubuntu font-bold text-[#17252a] mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Point 1 */}
          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Quality Selection" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Quality Selection
            </h3>
            <p className="text-gray-700">
              We offer a wide range of high-quality vehicles to meet your needs.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Expertise" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Expertise
            </h3>
            <p className="text-gray-700">
              Our team of automotive experts is here to assist you at every
              step.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img
              src={image}
              alt="Customer Satisfaction"
              className="w-40 h-40"
            />
            <h3 className="text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-gray-700">
              We prioritize your satisfaction above all else, ensuring a
              seamless experience.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Flexible Financing" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Flexible Financing
            </h3>
            <p className="text-gray-700">
              We provide a range of flexible financing options to fit your
              budget.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Certified Pre-Owned" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Certified Pre-Owned
            </h3>
            <p className="text-gray-700">
              Our used vehicles undergo rigorous inspections and meet
              high-quality standards.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Transparency" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Transparency
            </h3>
            <p className="text-gray-700">
              We believe in full transparency in all our dealings with no hidden
              fees or surprises.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Dedicated Support" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Dedicated Support
            </h3>
            <p className="text-gray-700">
              Our team is dedicated to providing you with exceptional support
              and service.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img src={image} alt="Competitive Pricing" className="w-40 h-40" />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-700">
              We offer competitive pricing and special deals to save you money.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
            <img
              src={image}
              alt="Community Involvement"
              className="w-40 h-40"
            />
            <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#17252a] font-Ubuntu font-bold mt-2 mb-2">
              Community Involvement
            </h3>
            <p className="text-gray-700">
              We actively support and engage with our local community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
