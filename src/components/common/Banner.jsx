import { Link } from "react-router-dom";
import banner from "../../assets/pngwing.com (3).png";

const Banner = () => {
  return (
    <div className="bg-[#3aafa9]">
      <div className="lg:h-[700px] xl:h-[800px] max-w-7xl mx-5 md:mx-10 xl:mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-5 justify-between items-center py-20 md:py-24 lg:py-0">
        <div className=" text-[#feffff] text-center lg:text-left">
          <h3 className="font-Ubuntu font-bold text-[35px] md:text-6xl lg:text-5xl xl:text-7xl mt-3">
            Quality vehicles for{" "}
            <span className="text-[#17252a] block">Every Journey</span>
          </h3>
          <p className="font-Ubuntu text-sm md:text-xl lg:text-sm xl:text-lg text-[#feffff] my-5 lg:my-3">
            Your next adventure starts here. Drive with confidence in our
            high-quality,
            <span className="md:block">well-maintained vehicles.</span>
          </p>
          <Link
            to={"/"}
            className="btn rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
          >
            Explore More
          </Link>
        </div>
        <div className="flex-1">
          <img
            className="w-[450px] xl:w-[580px] h-52 lg:h-60"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
