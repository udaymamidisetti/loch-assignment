import React from "react";
import Bell from "../assets/Bell.png";
import smallBell from "../assets/smallbell.png";
import cohort from "../assets/Cohorts.png";
import Eye from "../assets/Eye.png";
import vector from "../assets/Vector.png";
import chart from "../assets/chart.png";
import clock from "../assets/clock.png";
import { FaCaretDown } from "react-icons/fa6";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LeftContent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="xl:w-[55%] radio w-[100%]">
      <div className="m-auto pt-[70px] flex flex-col sm:flex-row flex-shrink justify-between w-[90%]">
        <div>
          <div className="w-[100%] xl:w-[322px]">
            <img
              src={Bell}
              alt="Notification"
              className="h-[32px] w-[32px] hidden sm:block"
            />
            <h4 className="text-[#fff] text-center sm:text-left text-[31px]  font-medium xl:w-[313px] leading-[37.2px] mt-[10px]">
              Get notified when a highly correlated whale makes a move
            </h4>
            <p className="text-[16px] text-center sm:text-left text-[#F2F2F2] font-medium xl:w-[322px] leading-[19.2px] opacity-[70%] mt-[10px]">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div></div>
        </div>
        <div
          className="sm:w-[270px] mt-[10px] md:mt-0"
          style={{ position: "relative" }}
        >
          {/* <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={1000}
          arrows={false}
          centerMode={false}
          draggable
          focusOnSelect
          infinite
          minimumTouchDrag={80}
          pauseOnHover
        >
          <div className="h-[189.7px] w-[171.5px] rounded-[8.4px] bg-[#fff]">
            <div>
              <img src={smallBell} alt="No" />
              <p className="text-[#19191A] font-bold text-[9.2px]">Save</p>
            </div>
          </div>
          <div className="h-[189.7px] w-[171.5px] rounded-[8.4px] bg-[#fff]">
            rtyui
          </div>
          <div className="h-[189.7px] w-[171.5px] rounded-[8.4px] bg-[#fff]">
            mnbvqaz
          </div>
        </Carousel> */}
          <Slider {...settings}>
            <div className="h-[189.7px] w-[171.5px] rounded-[8.4px] bg-[#fff]">
              <div className="flex justify-between w-[90%] m-auto mt-[15px]">
                <img src={smallBell} alt="No" />
                <p className="text-[#19191A] font-bold text-[14px]">Save</p>
              </div>
              <p className="font-medium text-[14px] leading-[16.8px] w-[129px] pl-[15px] pt-[15px]">
                We’ll be sending notifications to you here
              </p>
              <input
                value="hello@gmail.com"
                className="w-[161.7px] h-[35px] text-[13px] leading-[15px] mt-[15px] ml-[15px] rounded-[5.6px] border-[0.7px] p-[15px] focus:outline-none bg-[#fff] border-[#D4D4D4"
              />
            </div>
            <div className="h-[189.7px] w-[171.5px] rounded-[8.4px] bg-[#fff]">
              <div className="flex justify-between w-[90%] m-auto mt-[15px]">
                <img src={chart} alt="No" />
                <input
                  type="checkbox"
                  checked={true}
                  className="rounded-md h-[14px] w-[14px]"
                />
              </div>
              <p className="font-medium text-[14px] leading-[16.8px] w-[129px] pl-[15px] pt-[15px]">
                Notify me when any wallets move more than
              </p>
              <button className="flex gap-[10px] items-center p-[8px] bg-[#E5E5E680] w-[66.4px] rounded-md ml-[15px] mt-[15px]">
                <p className="text-[7px] font-medium">$1,000.00</p>
                <FaCaretDown color="#96979A" />
              </button>
            </div>
            <div className="h-[189.7px] w-[171.5px] rounded-[8.4px] bg-[#fff]">
              <div className="flex justify-between w-[90%] m-auto mt-[15px]">
                <img src={clock} alt="No" />
                <input
                  type="checkbox"
                  checked={true}
                  className="rounded-md h-[14px] w-[14px]"
                />
              </div>
              <p className="font-medium text-[14px] leading-[16.8px] w-[129px] pl-[15px] pt-[15px]">
                Notify me when any wallet dormant for
              </p>
              <button className="flex gap-[10px] items-center p-[8px] bg-[#E5E5E680] w-[82px] rounded-md ml-[15px] mt-[15px]">
                <p className="text-[7px] font-medium">{">"} 30 days</p>
                <FaCaretDown color="#96979A" />
              </button>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row w-[90%] justify-between m-auto">
          <div className="m-auto sm:m-0">
            <img src={cohort} alt="Co" className="h-[306px] w-[336px]" />
          </div>
          <div className="sm:w-[305px]">
            <img
              src={Eye}
              alt="eye"
              className="block  sm:ml-auto sm:mt-[40px] w-[25px] object-contain"
            />
            <h4 className="font-medium text-[31px] sm:text-right sm:w-[305px] text-[#F2F2F2] leading-[37.2px]">
              Watch what the whales are doing
            </h4>
            <p className="font-medium text-[16px] leading-[19.2px] sm:text-right text-[#F2F2F2] opacity-[70%] pt-[10px]">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto border-b-[1px] border-b-solid sm:pb-[20px]">
        <h1 className="sm:text-right mt-[10px] sm:mt-0 font-medium text-[31px] leading-[37.2px] text-[#F2F2F2]">
          Testimonials
        </h1>
      </div>
      <div className="w-[90%] m-auto flex gap-[20px] mt-[20px] pb-[20px]">
        <img
          src={vector}
          alt="vec"
          className="w-[40px] h-[40px] self-end hidden sm:block"
        />
        <div className="sm:w-[353px] w-full bg-[#FFFFFF] rounded-[12px] self-end ml-auto">
          <Slider {...settings}>
            <div className="sm:w-[353px] h-[136px] p-[20px]">
              <p className="font-bold leading-[19.2px] text-[16px]">
                Jack F
                <span className="text-[#96979A] text-[13px] leading-[15.6px] font-medium pl-[5px]">
                  Ex Blackrock PM
                </span>
              </p>
              <p>
                “Love how Loch integrates portfolio analytics and whale watching
                into one unified app.”
              </p>
            </div>
            <div className="sm:w-[353px] h-[136px] p-[20px]">
              <p className="font-bold leading-[19.2px] text-[16px]">
                Yash P
                <span className="text-[#96979A] text-[13px] leading-[15.6px] font-medium pl-[5px]">
                  Research, 3poch Crypto Hedge Fund
                </span>
              </p>
              <p>
                “I use Loch everyday now. I don't think I could analyze crypto
                whale trends markets without it. I'm addicted!”
              </p>
            </div>
            <div className="sm:w-[353px] h-[136px] p-[20px]">
              <p className="font-bold leading-[19.2px] text-[16px]">
                Jack F
                <span className="text-[#96979A] text-[13px] leading-[15.6px] font-medium pl-[5px]">
                  Ex Blackrock PM
                </span>
              </p>
              <p>
                “Love how Loch integrates portfolio analytics and whale watching
                into one unified app.”
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
