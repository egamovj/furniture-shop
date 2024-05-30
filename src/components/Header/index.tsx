import bg from "../../assets/images/bg2.png";

const Header = () => {
  return (
    <div
      className="w-full md:h-[105vh] h-screen bg-cover relative bg-center md:px-[80px] px-8 py-[40px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full flex items-center justify-between">
        <span className="text-white font-bold text-[28px] cursor-pointer">
          Panto
        </span>
        <div className="hidden md:flex items-center gap-[62px]">
          <a
            href="/"
            className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#e58411]"
          >
            Furniture
          </a>
          <a
            href="/"
            className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#e58411]"
          >
            Shop
          </a>
          <a
            href="/"
            className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#e58411]"
          >
            About
          </a>
          <a
            href="/"
            className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#e58411]"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
