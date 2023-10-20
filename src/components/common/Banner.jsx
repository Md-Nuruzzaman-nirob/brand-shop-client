import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
      className="h-[30vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[85vh] "
    >
      <div className=" h-[30vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[85vh]  text-white text-center pt-10 md:pt-16 xl:pt-20 2xl:pt-40">
        <p className="font-Heebo text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-200 w-10/12 md:w-full mx-auto">
          Your next adventure starts here. Drive with confidence in our
          high-quality, well-maintained vehicles.
        </p>
        <h3 className="font-Bebas text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl my-2 lg:my-4">
          Quality vehicles for Every Journey
        </h3>
        <button className="btn btn-sm lg:btn-md rounded-md">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Banner;
