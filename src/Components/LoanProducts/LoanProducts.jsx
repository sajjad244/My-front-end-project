import rent from "../../assets/rent.png";
import checkmark from "../../assets/checkmark-circle-03 (1).svg";
import checkmark1 from "../../assets/checkmark-circle-03.svg";
import information from "../../assets/information-circle (1).svg";
import information1 from "../../assets/information-circle.svg";
import group from "../../assets/Group (1).svg";
import construction from "../../assets/construction.png";
import fix from "../../assets/fix.png";
import group1 from "../../assets/Group.svg";

const LoanProducts = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#165831] mt-20 mb-20">
        Loan Products
      </h1>
      <div className="flex flex-wrap justify-center gap-10 p-2">
        {/* card-1 */}
        <div className="relative max-w-sm w-full text-white bg-[#165831] rounded-2xl overflow-hidden shadow-2xl p-6">
          {/* Content------>>> */}
          {/* Content------>>> */}
          <div className="relative z-20 flex flex-col items-center text-center gap-4 text-white">
            <div className="bg-white w-[80px] h-[70px] flex items-center justify-center rounded-xl">
              <img src={fix} className="w-12 h-12" alt="fix" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white uppercase">
                Fix and Flip
              </h2>
              <p className="text-white text-sm">Funding For Rehab + Purchase</p>
            </div>
            <ul className="text-white text-sm text-left space-y-1 self-start">
              <li className="flex items-center gap-2">
                <img src={checkmark1} alt="" />
                $50,000 up to $3,000,000
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark1} alt="" />
                Interest Rate 10.5%-12.99%
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark1} alt="" />
                Origination Fee From 1.5%
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark1} alt="" />
                Up to 85% of LTV
              </li>
              <li className="flex items-center gap-2">
                <img src={information1} alt="" />
                <a className="underline text-white text-sm font-semibold mt-2">
                  Learn More
                </a>
              </li>
            </ul>

            <button className="flex items-stretch w-full max-w-md bg-white text-[#165831] rounded-md overflow-hidden mt-4 shadow-2xl hover:bg-white transition">
              <div className="flex-1 pl-4 pr-4 py-3 text-[#165831] text-sm md:text-lg font-semibold">
                GET APPROVED ONLINE
              </div>

              {/* Right Slanted Icon Section */}
              <div
                className="w-[70px] bg-[#165831] flex items-center justify-start pl-4 border-4 border-white rounded-lg"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                }}
              >
                <img src={group1} className="w-6 h-6" alt="icon" />
              </div>
            </button>
          </div>
        </div>
        {/* card-2 */}
        <div className="relative max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-6">
          {/* Top-right green angle */}
          <div
            className="absolute top-0 left-0 w-[400px] h-[30px] bg-[#165831] z-10"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          ></div>
          {/* Bottom-right green angle */}
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[20px] bg-[#165831] z-10"
            style={{
              clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
            }}
          ></div>
          {/* Content------>>> */}
          {/* Content------>>> */}
          <div className="relative z-20 flex flex-col items-center text-center gap-4">
            <div className="bg-[#165831] w-[80px] h-[70px] flex items-center justify-center rounded-xl">
              <img src={rent} className="w-12 h-12" alt="rent" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#165831] uppercase">
                Rental Property
              </h2>
              <p className="text-[#165831] text-sm">
                30 Year DSCR loans in Florida and Texas
              </p>
            </div>
            <ul className="text-[#165831] text-sm text-left space-y-1 self-start">
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Up to $1,500,000
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Interest Rate 6.75%–8.25%
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Origination Fee From 1.5%
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Up to 85% of LTV
              </li>
              <li className="flex items-center gap-2">
                <img src={information} alt="" />
                <a className="underline text-[#165831] text-sm font-semibold mt-2">
                  Learn More
                </a>
              </li>
            </ul>

            <button className="flex items-stretch w-full max-w-md bg-[#165831] rounded-md overflow-hidden mt-4 shadow-2xl hover:bg-[#104523] transition">
              <div className="flex-1 pl-4 pr-4 py-3 text-white text-sm md:text-lg font-semibold">
                GET APPROVED ONLINE
              </div>

              {/* Right Slanted Icon Section */}
              <div
                className="w-[70px] bg-white flex items-center justify-start pl-4 border-4 border-[#165831] rounded-lg"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                }}
              >
                <img src={group} className="w-6 h-6" alt="icon" />
              </div>
            </button>
          </div>
        </div>
        {/* card-3 */}
        <div className="relative max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-6">
          {/* Top-right green angle */}
          <div
            className="absolute top-0 left-0 w-[400px] h-[30px] bg-[#165831] z-10"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          ></div>
          {/* Bottom-right green angle */}
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[20px] bg-[#165831] z-10"
            style={{
              clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
            }}
          ></div>
          {/* Content------>>> */}
          {/* Content------>>> */}
          <div className="relative z-20 flex flex-col items-center text-center gap-4">
            <div className="bg-[#165831] w-[80px] h-[70px] flex items-center justify-center rounded-xl">
              <img src={construction} className="w-12 h-12" alt="rent" />
            </div>
            <div className="">
              <h2 className="text-xl md:text-2xl font-semibold text-[#165831] uppercase whitespace-nowrap">
                Ground Up Construction
              </h2>
              <p className="text-[#165831] text-sm whitespace-nowrap">
                Ground Up Construction loans in Florida and Texas
              </p>
            </div>
            <ul className="text-[#165831] text-sm text-left space-y-1 self-start">
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Up to $3,500,000
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Interest Rate 11.25%–13.25%
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Origination Fee From 1.5%
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                Up to 85% of LTV
              </li>
              <li className="flex items-center gap-2">
                <img src={information} alt="" />
                <a className="underline text-[#165831] text-sm font-semibold mt-2">
                  Learn More
                </a>
              </li>
            </ul>

            <button className="flex items-stretch w-full max-w-md bg-[#165831] rounded-md overflow-hidden mt-4 shadow-2xl hover:bg-[#104523] transition">
              <div className="flex-1 pl-4 pr-4 py-3 text-white text-sm md:text-lg font-semibold">
                GET APPROVED ONLINE
              </div>

              {/* Right Slanted Icon Section */}
              <div
                className="w-[70px] bg-white flex items-center justify-start pl-4 border-4 border-[#165831] rounded-lg"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                }}
              >
                <img src={group} className="w-6 h-6" alt="icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanProducts;
