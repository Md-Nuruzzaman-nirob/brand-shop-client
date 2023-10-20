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
      className=" h-[100vh] "
    >
      <div className="h-[100vh] text-white text-center pt-52">
        <p className="font-Heebo text-xl text-gray-200">
          Your next adventure starts here. Drive with confidence in our
          high-quality, well-maintained vehicles.
        </p>
        <h3 className="font-Bebas text-8xl my-4">
          Quality vehicles for Every Journey
        </h3>
        <button className="btn">Explore More</button>
      </div>
    </div>
  );
};

export default Banner;
