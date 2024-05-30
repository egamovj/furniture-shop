/* eslint-disable @typescript-eslint/no-unused-vars */
import chair1 from "../../assets/images/chair1.png";
import chair2 from "../../assets/images/chair2.png";
import chair3 from "../../assets/images/chair3.png";
import chair4 from "../../assets/images/chair4.png";
import stars from "../../assets/images/stars.png";
import arrow from '../../assets/images/arrow.png';

const Products = () => {
  const chairs = [
    { title: "Sakarias Armchair", price: "392", image: chair1 },
    { title: "Baltsar Chair", price: "299", image: chair2 },
    { title: "Anjay Chair", price: "519", image: chair3 },
    { title: "Nyantuy Chair", price: "921", image: chair4 },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] py-[50px] md:px-[120px] px-[40px] flex flex-col items-center justify-center">
      <span className="font-bold text-[42px] text-[#1e1e1e]">
        Best Selling Product
      </span>
      <div className="w-full flex md:flex-row flex-col items-center justify-between mt-10 gap-10">
        {chairs.map((chair) => (
          <div
            key={chair.title}
            className="bg-white w-full rounded-[20px] flex flex-col items-center justify-center"
          >
            <div className="grid place-items-center w-full bg-[#fafafa]">
              <img src={chair.image} alt={chair.title} />
            </div>
            <div className="w-full px-[20px] pb-[27px] pt-4 flex flex-col">
              <span className="text-[#8d8d8d]">Chair</span>
              <span className="font-semibold text-[#0d1b39] text-[20px] my-[5px]">
                {chair.title}
              </span>
              <img src={stars} alt="Product rate" className="w-[30%]" />
              <div className="flex w-full items-center justify-between mt-7">
                <span className="font-semibold text-[22px] text-[#0d1b39]">
                  $ {chair.price}
                </span>
                <div className="rounded-full grid place-items-center bg-[#0d1b39] w-[48px] h-[48px] cursor-pointer">
                  <span className="text-white mt-[-1px] text-[35px]">+</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-3 mt-14">
        <a href="#" className="font-medium text-[18px] text-[#e58411]">View All</a>
        <img src={arrow} alt="Arrow right" />
      </div>
    </div>
  );
};

export default Products;
