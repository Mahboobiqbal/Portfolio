// eslint-disable-next-line no-unused-vars
import react from "react";
import cert1 from "../assets/1.jpg";
import cert2 from "../assets/2.jpg";
import cert3 from "../assets/3.jpg";
import cert4 from "../assets/4.jpg";
import cert5 from "../assets/5.jpg";
import cert6 from "../assets/6.jpg";
import cert7 from "../assets/7.jpg";
import cert8 from "../assets/8.jpg";
import cert9 from "../assets/9.jpg";
import cert10 from "../assets/10.jpg";
import cert11 from "../assets/11.jpg";
import cert12 from "../assets/12.jpg";
import { useDarkMode } from "./DarkModeContex";

function Certificates() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`contact-area ${
        isDarkMode ? "bg-black " : "bg-white "
      } rounded-[20px] px-5 laptop:px-[60px] pt-[60px]  pb-4`}
    >
      <div className="contact-heading mb-4">
        <h2
          className={`text-[30px] laptop:text-[36px] relative inline-block ${
            isDarkMode ? "text-white " : "text-black "
          } mt-0 font-bold leading-[1.5px]`}
        >
          Certificates
          <div className="absolute w-[50%] tablet:w-[200px] h-[3px] bg-gradient-to-r from-red-500 to-pink-500 left-[110%] laptop:left[122%] top-1/2 -translate-y-1/2 rounded-[5px]"></div>
        </h2>
      </div>
      <div className="certificates-area">
        <div className="row grid grid-cols-1 gap-4 laptop:grid-cols-2 mobile:grid-cols-1">
          {[cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert10, cert11, cert12].map((cert, idx) => (
            <div
              key={idx}
              className={`item ${
                isDarkMode
                  ? "bg-[#0d0d0d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <img
                src={cert}
                alt={`Certificate ${idx + 1}`}
                width="310 px"
                height="310 px"
                className=" object-cover  mb-4"
              />
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                Certificate {idx + 1}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
