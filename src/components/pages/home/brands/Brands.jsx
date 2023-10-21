import brand1 from "../../../../assets/mercedes-benz-9-logo-png-transparent.png";
import brand2 from "../../../../assets/bmw-logo-png-transparent.png";
import brand3 from "../../../../assets/Tesla-Logo-PNG-Photos.png";
import brand4 from "../../../../assets/9ip8onj00vv01pf2sc6mkqvv6l.png";
import brand5 from "../../../../assets/Toyota-logo-icon-on-transparent--PNG.png";
import brand6 from "../../../../assets/ford-1-logo-png-transparent.png";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    { id: "mercedes-benz", name: "Mercedes-Benz", image: brand1 },
    { id: "bmw", name: "BMW", image: brand2 },
    { id: "tesla", name: "Tesla", image: brand3 },
    { id: "ferrari", name: "Ferrari", image: brand4 },
    { id: "toyota", name: "Toyota", image: brand5 },
    { id: "ford", name: "Ford", image: brand6 },
  ];

  return (
    <div className="bg-[#17252a]">
      <div className="max-w-7xl xl:mx-auto md:mx-10 mx-5 text-[#feffff]">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-Ubuntu font-bold pt-24 mb-4">
          Discover The Quality Of Our Trusted Brands
        </h1>
        <p className="lg:text-lg font-Ubuntu text-center mx-auto mb-5">
          At <span className="text-[#3aafa9] font-bold">Brand Shop</span>, we
          take pride in offering you a selection of the world&apos; s most
          trusted brands. Our commitment to quality, reliability, knowing that
          the products you choose are backed by the best names in the industry.
          Explore a world of options, all from brands that have earned the trust
          of millions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-16 pb-24">
          {brands.map((brand) => (
            <Link to={`/brand/${brand.id}`} key={brand.id}>
              <div className="flex flex-col justify-center items-center bg-[#def2f1] py-5 space-y-5 rounded-xl transition-transform duration-300 hover:scale-105 ">
                <img className="w-40 h-40" src={brand.image} alt={brand.name} />
                <h3 className="text-2xl font-Ubuntu font-bold text-[#17252a]">
                  {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
