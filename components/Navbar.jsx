import { NavLink } from "react-router-dom";
import logo from "../src/assets/images/logo.png";
import { useState } from "react";

const Navbar = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="text-xl relative">
      <div className="py-4 md:py-[22px] px-5 md:px-8 text-base 2xl:text-xl flex items-center shadow-md justify-between">
        <div className="">
          <p className="text-[#DC4A2D] font-bold mx-0 md:mx-2 2xl:text-xl text-base bg-[#E7E7E7] py-2 md:py-4 px-4 md:px-6">
            Logo
          </p>
        </div>
        <div className="hidden md:block ">
          <div className="flex items-center gap-x-4 ml-5 ">
            <div className="bg-[#DC4A2D] flex items-center h-fit py-3 justify-center border-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-[#FCB4A5] rounded-full  px-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M8 21.2446V7.24463C8 6.31466 8 5.84967 8.10222 5.46817C8.37962 4.4329 9.18827 3.62425 10.2235 3.34685C10.605 3.24463 11.07 3.24463 12 3.24463C12.93 3.24463 13.395 3.24463 13.7765 3.34685C14.8117 3.62425 15.6204 4.4329 15.8978 5.46817C16 5.84967 16 6.31466 16 7.24463V21.2446M5.2 21.2446H18.8C19.9201 21.2446 20.4802 21.2446 20.908 21.0266C21.2843 20.8349 21.5903 20.5289 21.782 20.1526C22 19.7248 22 19.1647 22 18.0446V10.4446C22 9.32452 22 8.76447 21.782 8.33665C21.5903 7.96032 21.2843 7.65436 20.908 7.46262C20.4802 7.24463 19.9201 7.24463 18.8 7.24463H5.2C4.07989 7.24463 3.51984 7.24463 3.09202 7.46262C2.71569 7.65436 2.40973 7.96032 2.21799 8.33665C2 8.76447 2 9.32452 2 10.4446V18.0446C2 19.1647 2 19.7248 2.21799 20.1526C2.40973 20.5289 2.71569 20.8349 3.09202 21.0266C3.51984 21.2446 4.0799 21.2446 5.2 21.2446Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-white  ml-2">Jobs</p>
            </div>
            <div className="px-11 flex font-normal cursor-pointer border-[0.5px] text-[#B0B0B0] gap-x-4 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border-[#D1D1D1] py-[14px]">
              <div className=" flex items-center justify-center  relative px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V11.2C19 12.8802 19 13.7202 18.673 14.362C18.3854 14.9265 17.9265 15.3854 17.362 15.673C16.7202 16 15.8802 16 14.2 16H7.68375C7.0597 16 6.74767 16 6.44921 16.0613C6.18443 16.1156 5.9282 16.2055 5.68749 16.3285C5.41617 16.4671 5.17252 16.662 4.68521 17.0518L2.29976 18.9602C1.88367 19.2931 1.67563 19.4595 1.50054 19.4597C1.34827 19.4599 1.20422 19.3906 1.10923 19.2716C1 19.1348 1 18.8684 1 18.3355V5.8Z"
                    stroke="#B0B0B0"
                    stroke-width="2"
                  />
                </svg>
                <p className="  ml-2">Messages</p>
                <div className="bg-[#DC4A2D] w-[6px] h-[6px] absolute top-2 rounded-full left-8"></div>
              </div>
              <div className=" flex items-center justify-center   px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none">
                  <path
                    d="M12.5295 8.09649C11.9571 8.50458 11.2566 8.74463 10.5 8.74463C8.567 8.74463 7 7.17763 7 5.24463C7 3.31163 8.567 1.74463 10.5 1.74463C11.753 1.74463 12.8522 2.40305 13.4705 3.39277M5 19.8318H7.61029C7.95063 19.8318 8.28888 19.8723 8.61881 19.9533L11.3769 20.6235C11.9753 20.7693 12.5988 20.7835 13.2035 20.666L16.253 20.0727C17.0585 19.9158 17.7996 19.5301 18.3803 18.9651L20.5379 16.8663C21.154 16.268 21.154 15.2971 20.5379 14.6977C19.9832 14.1581 19.1047 14.0973 18.4771 14.5549L15.9626 16.3895C15.6025 16.6527 15.1643 16.7945 14.7137 16.7945H12.2855L13.8311 16.7944C14.7022 16.7944 15.4079 16.108 15.4079 15.2605V14.9538C15.4079 14.2501 14.9156 13.6366 14.2141 13.4665L11.8286 12.8864C11.4404 12.7922 11.0428 12.7446 10.6431 12.7446C9.67833 12.7446 7.93189 13.5434 7.93189 13.5434L5 14.7695M19 6.24463C19 8.17763 17.433 9.74463 15.5 9.74463C13.567 9.74463 12 8.17763 12 6.24463C12 4.31163 13.567 2.74463 15.5 2.74463C17.433 2.74463 19 4.31163 19 6.24463ZM1 14.3446L1 20.1446C1 20.7047 1 20.9847 1.10899 21.1986C1.20487 21.3868 1.35785 21.5398 1.54601 21.6356C1.75992 21.7446 2.03995 21.7446 2.6 21.7446H3.4C3.96005 21.7446 4.24008 21.7446 4.45399 21.6356C4.64215 21.5398 4.79513 21.3868 4.89101 21.1986C5 20.9847 5 20.7047 5 20.1446V14.3446C5 13.7846 5 13.5046 4.89101 13.2906C4.79513 13.1025 4.64215 12.9495 4.45399 12.8536C4.24008 12.7446 3.96005 12.7446 3.4 12.7446L2.6 12.7446C2.03995 12.7446 1.75992 12.7446 1.54601 12.8536C1.35785 12.9495 1.20487 13.1025 1.10899 13.2906C1 13.5046 1 13.7846 1 14.3446Z"
                    stroke="#B0B0B0"
                    stroke-width="2"
                  />
                </svg>
                <p className="  ml-2">Payments</p>
              </div>
              <div className=" flex items-center justify-center   px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none">
                  <path
                    d="M21 19V17C21 15.1362 19.7252 13.5701 18 13.126M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5C17 6.67869 15.9659 8.11585 14.5 8.70924M16 19C16 17.1362 16 16.2044 15.6955 15.4693C15.2895 14.4892 14.5108 13.7105 13.5307 13.3045C12.7956 13 11.8638 13 10 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
                    stroke="#B0B0B0"
                    stroke-width="2"
                  />
                </svg>
                <p className="  ml-2">Application</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex 2xl:mx-3 items-center gap-x-2 justify-center ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              className="w-5 md:w-full">
              <path
                d="M15.3187 26.3333H9.98538M20.652 9C20.652 6.87827 19.8092 4.84344 18.3089 3.34315C16.8086 1.84285 14.7738 1 12.652 1C10.5303 1 8.49548 1.84285 6.99519 3.34315C5.4949 4.84344 4.65204 6.87827 4.65204 9C4.65204 13.1202 3.61267 15.9413 2.4516 17.8072C1.47221 19.3812 0.982521 20.1681 1.00048 20.3877C1.02036 20.6308 1.07186 20.7235 1.26774 20.8688C1.44465 21 2.24216 21 3.83718 21H21.4669C23.0619 21 23.8594 21 24.0363 20.8688C24.2322 20.7235 24.2837 20.6308 24.3036 20.3877C24.3216 20.1681 23.8319 19.3812 22.8525 17.8072C21.6914 15.9413 20.652 13.1202 20.652 9Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="bg-[#DC4A2D] w-[6px] h-[6px] absolute top-[2px] rounded-full left-4"></div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              onClick={() => setShowModal(true)}>
              <path
                d="M17.5 10H2.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 6H2.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 14H2.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 18H2.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {showModal ? (
              <div
                className="absolute top-0 flex justify-center items-center bg-black/50 w-full h-screen right-0"
                onClick={() => setShowModal(false)}>
                <div className="flex flex-col items-center bg-white  justify-center  w-fit py-8 px-6 h-fit  gap-x-4 ">
                  <div className="bg-[#DC4A2D] w-fit flex items-center justify-center border-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-[#FCB4A5] rounded-full px-4 py-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none">
                      <path
                        d="M12 0C12.7956 0 13.5587 0.316071 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V5C0 4.46957 0.210714 3.96086 0.585786 3.58579C0.960859 3.21071 1.46957 3 2 3H5C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.316071 7.20435 0 8 0H12ZM13 5H7V15H13V5ZM18 5H15V15H18V5ZM5 5H2V15H5V5ZM12 2H8C7.75507 2.00003 7.51866 2.08996 7.33563 2.25272C7.15259 2.41547 7.03566 2.63975 7.007 2.883L7 3H13C13 2.75507 12.91 2.51866 12.7473 2.33563C12.5845 2.15259 12.3603 2.03566 12.117 2.007L12 2Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white  ml-2">Jobs</p>
                  </div>
                  <div className="px-6 flex flex-col w-fit  cursor-pointer  text-[#B0B0B0]  py-2">
                    <div
                      className=" flex 
                     items-center justify-center border-b border-[#B0B0B0]  relative p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none">
                        <path
                          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V11.2C19 12.8802 19 13.7202 18.673 14.362C18.3854 14.9265 17.9265 15.3854 17.362 15.673C16.7202 16 15.8802 16 14.2 16H7.68375C7.0597 16 6.74767 16 6.44921 16.0613C6.18443 16.1156 5.9282 16.2055 5.68749 16.3285C5.41617 16.4671 5.17252 16.662 4.68521 17.0518L2.29976 18.9602C1.88367 19.2931 1.67563 19.4595 1.50054 19.4597C1.34827 19.4599 1.20422 19.3906 1.10923 19.2716C1 19.1348 1 18.8684 1 18.3355V5.8Z"
                          stroke="#B0B0B0"
                          stroke-width="2"
                        />
                      </svg>
                      <div className="bg-[#DC4A2D] w-[6px] h-[6px] absolute top-4 rounded-full left-11"></div>

                      <p className="  ml-2">Messages</p>
                    </div>
                    <div className=" flex items-center justify-center  border-b border-[#B0B0B0]  p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none">
                        <path
                          d="M12.5295 8.09649C11.9571 8.50458 11.2566 8.74463 10.5 8.74463C8.567 8.74463 7 7.17763 7 5.24463C7 3.31163 8.567 1.74463 10.5 1.74463C11.753 1.74463 12.8522 2.40305 13.4705 3.39277M5 19.8318H7.61029C7.95063 19.8318 8.28888 19.8723 8.61881 19.9533L11.3769 20.6235C11.9753 20.7693 12.5988 20.7835 13.2035 20.666L16.253 20.0727C17.0585 19.9158 17.7996 19.5301 18.3803 18.9651L20.5379 16.8663C21.154 16.268 21.154 15.2971 20.5379 14.6977C19.9832 14.1581 19.1047 14.0973 18.4771 14.5549L15.9626 16.3895C15.6025 16.6527 15.1643 16.7945 14.7137 16.7945H12.2855L13.8311 16.7944C14.7022 16.7944 15.4079 16.108 15.4079 15.2605V14.9538C15.4079 14.2501 14.9156 13.6366 14.2141 13.4665L11.8286 12.8864C11.4404 12.7922 11.0428 12.7446 10.6431 12.7446C9.67833 12.7446 7.93189 13.5434 7.93189 13.5434L5 14.7695M19 6.24463C19 8.17763 17.433 9.74463 15.5 9.74463C13.567 9.74463 12 8.17763 12 6.24463C12 4.31163 13.567 2.74463 15.5 2.74463C17.433 2.74463 19 4.31163 19 6.24463ZM1 14.3446L1 20.1446C1 20.7047 1 20.9847 1.10899 21.1986C1.20487 21.3868 1.35785 21.5398 1.54601 21.6356C1.75992 21.7446 2.03995 21.7446 2.6 21.7446H3.4C3.96005 21.7446 4.24008 21.7446 4.45399 21.6356C4.64215 21.5398 4.79513 21.3868 4.89101 21.1986C5 20.9847 5 20.7047 5 20.1446V14.3446C5 13.7846 5 13.5046 4.89101 13.2906C4.79513 13.1025 4.64215 12.9495 4.45399 12.8536C4.24008 12.7446 3.96005 12.7446 3.4 12.7446L2.6 12.7446C2.03995 12.7446 1.75992 12.7446 1.54601 12.8536C1.35785 12.9495 1.20487 13.1025 1.10899 13.2906C1 13.5046 1 13.7846 1 14.3446Z"
                          stroke="#B0B0B0"
                          stroke-width="2"
                        />
                      </svg>
                      <p className="  ml-2">Payments</p>
                    </div>
                    <div className=" flex items-center justify-center   p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none">
                        <path
                          d="M21 19V17C21 15.1362 19.7252 13.5701 18 13.126M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5C17 6.67869 15.9659 8.11585 14.5 8.70924M16 19C16 17.1362 16 16.2044 15.6955 15.4693C15.2895 14.4892 14.5108 13.7105 13.5307 13.3045C12.7956 13 11.8638 13 10 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
                          stroke="#B0B0B0"
                          stroke-width="2"
                        />
                      </svg>
                      <p className="  ml-2">Applications</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className=" hidden md:flex items-center  ">
            <img src={logo} className="rounded-full" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              className="ml-2">
              <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.2" />
            </svg>
          </div>
        </div>
      </div>

      <nav>
        <ul className="border border-[#E7E7E7] text-[#888888] md:py-1 px-5 md:px-[78px] 2xl:px-24 text-xs sm:text-sm md:text-base 2xl:text-xl gap-x-6 sm:gap-x-8  md:gap-x-[72px]   flex  items-center">
          <li className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block py-4 w-full  text-[#DC4A2D] underline-active"
                  : "block py-4 w-full border-b-2 border-transparent hover-underline-hover"
              }>
              Job preview
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/Applicants"
              className={({ isActive }) =>
                isActive
                  ? "block py-4 w-full  text-[#DC4A2D] underline-active"
                  : "block py-4 w-full border-b-2 border-transparent hover-underline-hover"
              }>
              Applicants
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/Match"
              className={({ isActive }) =>
                isActive
                  ? "block py-4 w-full  text-[#DC4A2D] underline-active"
                  : "block py-4 w-full border-b-2 border-transparent hover-underline-hover"
              }>
              Match
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/Messages"
              className={({ isActive }) =>
                isActive
                  ? "block py-4 w-full  text-[#DC4A2D] underline-active"
                  : "block py-4 w-full border-b-2 border-transparent hover-underline-hover"
              }>
              Messages
            </NavLink>
          </li>
        </ul>
      </nav>

      <div
        className="w-3/4
      ">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
