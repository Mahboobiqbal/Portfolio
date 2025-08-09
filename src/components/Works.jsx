// eslint-disable-next-line no-unused-vars
import react from "react";
import project1 from "../assets/desktop-design.webp";
import project2 from "../assets/Amazing-car-company.webp";
import project3 from "../assets/Shawlser.webp";
import worki1 from "../assets/proj1.jpg";
import worki2 from "../assets/proj2.jpg";
import worki3 from "../assets/proj3.jpg";
import worki4 from "../assets/proj4.jpg";
import project4 from "../assets/Superheroes.webp";
import project5 from "../assets/mobile-design.webp";
import project6 from "../assets/Music-player.webp";
import { useDarkMode } from "./DarkModeContex";

function Works() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`contact-area ${
        isDarkMode ? "bg-black " : "bg-white "
      } rounded-[20px] px-5 laptop:px-[60px] pt-[60px]  pb-4`}
    >
      <div className="contact-heading mb-4">
        <h2
          className={`text-[36px] relative inline-block ${
            isDarkMode ? "text-white " : "text-black "
          } mt-0 font-bold leading-[1.5px]`}
        >
          Portfolio
          <div className="absolute w-[100px] tablet:w-[200px] h-[3px] bg-gradient-to-r from-red-500 to-pink-500 left-[122%] top-1/2 -translate-y-1/2 rounded-[5px]"></div>
        </h2>
      </div>
      <div className="portfolio-area">
        <div className="row grid grid-cols-1 gap-4 laptop:grid-cols-2 mobile:grid-cols-1">
          <div className="work-items flex flex-col px-[10px]">
            {/* New Worki Projects */}
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={worki4}
                  alt="University FAQs Chatbot AI"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                University FAQs, AI Chatbot
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                University FAQs Chatbot AI
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={worki1}
                  alt="School Accuracy System"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                School Management, Accuracy System
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                School Accuracy System
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={worki2}
                  alt="Face Recognition"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                AI, Face Recognition System
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                Face Recognition
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={worki3}
                  alt="E-commerce for Bakery"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                E-commerce Website, Bakery
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                E-commerce for Bakery
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={project1}
                  alt="Project Image"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                E-Commerce Website
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                Sneakers
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535]"
                  : "bg-[#eef5fa] "
              }  w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={project2}
                  alt="Project Image"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                Services Website, HTML CSS
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                Cars
              </h6>
            </div>

          </div>
          <div className="work-items flex flex-col px-[10px]">
             <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              }  w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={project5}
                  alt="Project Image"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                Interactive Card, HTML, CSS
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                }leading-normal mt-0`}
              >
                Payment
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#eef5fa] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={project3}
                  alt="Project Image"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                E-commerce Store, WordPress
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                ShawlsLer
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={project4}
                  alt="Project Image"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                Portfolio, Reactjs
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                Superheroes
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#eef5fa] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={project6}
                  alt="Project Image"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                Music Player, HTML CSS
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                Songs
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={worki4}
                  alt="University FAQs Chatbot AI"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                University FAQs, AI Chatbot
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                University FAQs Chatbot AI
              </h6>
            </div>
            <div
              className={`item ${
                isDarkMode
                  ? "bg-[#1d1d1d] border-[1px] border-[#353535] "
                  : "bg-[#fff4f4] "
              } w-full mb-5 rounded-xl p-5`}
            >
              <a href="#" className="rounded-xl mb-4 overflow-hidden ">
                <img
                  src={worki1}
                  alt="School Accuracy System"
                  width="310 px"
                  height="310 px"
                  className=" object-cover rounded-xl mb-4"
                />
              </a>
              <span
                className={`block text-xs capitalize font-normal ${
                  isDarkMode ? "text-[#7a8383] " : "text-[#44566c] "
                } font-sans`}
              >
                School Management, Accuracy System
              </span>
              <h6
                className={`text-base font-medium mb-0 capitalize font-sans ${
                  isDarkMode ? "text-white " : "text-black "
                } leading-normal mt-0`}
              >
                School Accuracy System
              </h6>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Works;
