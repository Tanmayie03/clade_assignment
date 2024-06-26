import adobe_icon from "../src/assets/images/adobe_icon.png";
import figma_icon from "../src/assets/images/figma_icon.png";
import xdIcon from "../src/assets/images/xd_icon.png";
import atlassian_img from "../src/assets/images/atlassian_img.png";
import logo from "../src/assets/images/logo.png";

const Jobs = () => {
  return (
    <div className="flex flex-col w-full md:flex-row no-scrollbar">
      <div className="md:w-3/4 w-full md:pt-[42px] py-5 border border-[#E7E7E7] ">
        <div className="flex  items-center px-5 md:px-[78px] 2xl:px-24 gap-x-1.5 md:gap-x-3">
          <p className="md:text-3xl text-base 2xl:text-[35px] font-bold text-[#3D3D3D]">
            Senior Product Designer
          </p>
          <div className=" bg-[#D1D1D1]  h-1 w-1 rounded-full"></div>
          <p className=" text-[#888888] md:text-sm  text-[10px] ">
            posted 2 days ago
          </p>
          <div className="rounded-full flex border border-[#ABEFC6]  items-center px-2 py-[2px] md:py-1 text-[10px] md:text-xs font-medium bg-[#ECFDF3] text-[#067647]">
            <div className=" bg-[#17B26A] mr-1 h-[6px] w-[6px] rounded-full"></div>
            <p className=""> Open</p>
          </div>
        </div>
        <div className="flex px-5 md:px-[78px] 2xl:px-24 2xl:py-8 items-center text-sm md:text-base 2xl:text-xl text-[#5D5D5D] py-5 md:py-6 gap-x-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              className="w-4 md:w-fit">
              <path
                d="M9 12.5302C10.6569 12.5302 12 11.187 12 9.53015C12 7.8733 10.6569 6.53015 9 6.53015C7.34315 6.53015 6 7.8733 6 9.53015C6 11.187 7.34315 12.5302 9 12.5302Z"
                stroke="#5D5D5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 21.5302C13 17.5302 17 13.9484 17 9.53015C17 5.11187 13.4183 1.53015 9 1.53015C4.58172 1.53015 1 5.11187 1 9.53015C1 13.9484 5 17.5302 9 21.5302Z"
                stroke="#5D5D5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 ">Delaware, USA</p>
          </div>
          <div className=" bg-[#D1D1D1] h-1 w-1 rounded-full"></div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="w-5 md:w-fit">
              <path
                d="M13 5.53027C13 6.63484 10.5376 7.53027 7.5 7.53027C4.46243 7.53027 2 6.63484 2 5.53027M13 5.53027C13 4.4257 10.5376 3.53027 7.5 3.53027C4.46243 3.53027 2 4.4257 2 5.53027M13 5.53027V7.03027M2 5.53027V17.5303C2 18.6348 4.46243 19.5303 7.5 19.5303M7.5 11.5303C7.33145 11.5303 7.16468 11.5275 7 11.5221C4.19675 11.4303 2 10.5736 2 9.53027M7.5 15.5303C4.46243 15.5303 2 14.6348 2 13.5303M22 12.0303C22 13.1348 19.5376 14.0303 16.5 14.0303C13.4624 14.0303 11 13.1348 11 12.0303M22 12.0303C22 10.9257 19.5376 10.0303 16.5 10.0303C13.4624 10.0303 11 10.9257 11 12.0303M22 12.0303V19.5303C22 20.6348 19.5376 21.5303 16.5 21.5303C13.4624 21.5303 11 20.6348 11 19.5303V12.0303M22 15.7803C22 16.8848 19.5376 17.7803 16.5 17.7803C13.4624 17.7803 11 16.8848 11 15.7803"
                stroke="#5D5D5D"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 ">$300k-$400k</p>
          </div>
        </div>
        <div className="border-t px-5 md:px-[78px] 2xl:px-24 border-[#E7E7E7] py-5 md:py-6 2xl:py-6">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-y-8 md:gap-y-0 w-full 2xl:w-4/5 justify-start gap-x-16 2xl:gap-x-[26px]">
            <div className="">
              <p className=" text-[#6E6D6D] text-sm">Skills Required</p>
              <div className=" border flex my-2 items-center p-1 rounded-md w-fit border-[#D0D5DD] text-xs shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)] text-[#344054]">
                <img src={figma_icon} className="mr-1" />
                <p className="">Figma</p>
              </div>
              <div className=" border flex my-2 items-center p-1 rounded-md w-fit border-[#D0D5DD] text-xs shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)] text-[#344054]">
                <img src={adobe_icon} className="mr-1" />
                <p className="">Adobe Illustrator</p>
              </div>
              <div className=" border flex my-2 items-center p-1 roun-rounded-mdded w-fit border-[#D0D5DD] text-xs shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)] text-[#344054]">
                <img src={xdIcon} className="mr-1" />
                <p className="">Adobe XD</p>
              </div>
            </div>
            <div className="">
              <p className=" text-[#6E6D6D] text-sm">Preferred Language</p>
              <p className="text-[#3D3D3D] text-base my-2">English</p>
            </div>
            <div className="">
              <p className=" text-[#6E6D6D] text-sm">Type</p>
              <p className="text-[#3D3D3D] text-base my-2">Full time</p>
            </div>
            <div className="">
              <p className=" text-[#6E6D6D] text-sm">Years of Experience</p>
              <p className="text-[#3D3D3D] text-base my-2">
                3+ Years of Experience
              </p>
            </div>
          </div>
        </div>
        <div className="border-t px-5 py-5 md:px-[78px] 2xl:pb-9 2xl:px-24 border-[#E7E7E7] md:py-7">
          <p className=" text-[#6E6D6D] text-sm mb-2">About the job</p>
          <div className=" md:w-[40%] 2xl:w-[48%] text-sm md:text-base leading-9 text-[#3D3D3D]">
            <p className="py-[2px]">1. Handle the UI/UX research design </p>
            <p className="py-[2px]">
              2. Work on researching on latest web applications designs & trends
            </p>
            <p className="py-[2px]">
              {" "}
              3. Work on conceptualizing and visualizing.
            </p>
            <p className="py-[2px]">
              4. Work on creating graphics content and other graphic related
              works
            </p>
            <p className="py-[3px]">Benefits: </p>
            <ul className="pl-8 py-[2px]">
              <li className="list-disc py-[2px]"> Health insurance</li>
              <li className="list-disc py-[2px]">Provident Fund</li>
            </ul>
            <p className="py-[2px]">Schedules: </p>
            <ul className="pl-8 py-[2px]">
              <li className="list-disc"> Day shift</li>
            </ul>
            <p className="py-[2px]">Supplemental pay types: </p>
            <ul className="pl-8 py-[2px]">
              <li className="list-disc"> Performance bonus...</li>
            </ul>
          </div>
        </div>
        <div className="border-t px-5 py-5 md:px-[78px] 2xl:px-24 border-[#E7E7E7] md:py-10">
          <div className="flex items-center py-2 gap-x-4">
            <img src={logo} />
            <p className="text-[#4F4F4F] text-base md:text-xl">Atlassian </p>
            <button className="text-[#003788] rounded-lg px-4 py-1 text-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-bold bg-[#E0EBF9]">
              Follow
            </button>
          </div>
          <div className="flex justify-start gap-x-4 md:gap-x-24">
            <div className="py-6 2xl:py-4">
              <div className="">
                <p className=" text-[#6E6D6D] text-sm">Company size</p>
                <p className="text-[#3D3D3D] text-sm md:text-base my-2">
                  1k - 2k Employees
                </p>
              </div>
              <div className="py-6 2xl:py-4">
                <p className=" text-[#6E6D6D] text-sm">Sector</p>
                <p className="text-[#3D3D3D] text-sm md:text-base my-2">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div className="">
                <p className=" text-[#6E6D6D] text-sm">Founded In</p>
                <p className="text-[#3D3D3D] text-sm md:text-base my-2">2019</p>
              </div>
              <div className="">
                <p className=" text-[#B0B0B0] mt-6 underline text-xs">
                  Report this listing
                </p>
              </div>
            </div>
            <div className="py-6 2xl:py-4">
              <div className="">
                <p className=" text-[#6E6D6D] text-sm">Type</p>
                <p className="text-[#3D3D3D] text-sm md:text-base my-2">
                  Private
                </p>
              </div>
              <div className="py-6 2xl:py-4">
                <p className=" text-[#6E6D6D] text-sm">Funding</p>
                <p className="text-[#3D3D3D] text-sm md:text-base my-2">
                  Bootstrapped
                </p>
              </div>
              <div className="">
                <p className=" text-[#6E6D6D] text-sm">Founded By</p>
                <p className="text-[#3D3D3D] text-sm md:text-base my-2">
                  <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw">
                    Scott Farquhar
                  </a>

                  <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA">
                    , Mike Cannon-Brookes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4  py-9  bg-[#FCFCFC]  border  border-[#E7E7E7]">
        <div className="flex justify-center px-5 md:px-[30px] gap-x-4">
          <div className="flex items-center justify-center w-full  px-6 md:px-4 py-3 2xl:px-9  text-[#DC4A2D] border border-[#DC4A2D] rounded-lg bg-[#FEF4F2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none">
              <path
                d="M6 1.03027H11M1 3.53027H16M14.3333 3.53027L13.7489 12.2963C13.6612 13.6116 13.6174 14.2692 13.3333 14.7678C13.0833 15.2068 12.706 15.5597 12.2514 15.78C11.735 16.0303 11.0759 16.0303 9.75779 16.0303H7.24221C5.92409 16.0303 5.26503 16.0303 4.74861 15.78C4.29396 15.5597 3.91674 15.2068 3.66665 14.7678C3.38259 14.2692 3.33875 13.6116 3.25107 12.2963L2.66667 3.53027M6.83333 7.28027V11.4469M10.1667 7.28027V11.4469"
                stroke="#DC4A2D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 text-sm 2xl:text-base "> Delete job</p>
          </div>
          <div className="flex items-center justify-center  px-6 w-full  2xl:px-11 py-2 text-white bg-[#DC4A2D] rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none">
              <path
                d="M12.5 7.19698L9.83334 4.53031M2.16666 14.8636L4.4229 14.613C4.69856 14.5823 4.83639 14.567 4.96522 14.5253C5.07952 14.4883 5.18829 14.436 5.28858 14.3699C5.40163 14.2953 5.49969 14.1973 5.69581 14.0012L14.5 5.19698C15.2364 4.4606 15.2364 3.26669 14.5 2.53031C13.7636 1.79393 12.5697 1.79393 11.8333 2.53031L3.02914 11.3345C2.83302 11.5306 2.73496 11.6287 2.66041 11.7417C2.59428 11.842 2.542 11.9508 2.505 12.0651C2.46329 12.1939 2.44798 12.3317 2.41735 12.6074L2.16666 14.8636Z"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2 text-sm 2xl:text-base"> Edit job</p>
          </div>
        </div>
        <div className="px-10 py-6 2xl:py-5 md:px-10 2xl:px-12">
          <div className="flex py-4 md:py-6 border-b border-[#E7E7E7] px-2 justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none">
                <path
                  d="M18.3333 18.0303V16.3636C18.3333 14.8104 17.271 13.5053 15.8333 13.1353M12.9167 3.27257C14.1383 3.76706 15 4.9647 15 6.36361C15 7.76251 14.1383 8.96015 12.9167 9.45464M14.1667 18.0303C14.1667 16.4771 14.1667 15.7006 13.9129 15.088C13.5746 14.2712 12.9257 13.6223 12.1089 13.284C11.4964 13.0303 10.7198 13.0303 9.16666 13.0303H6.66666C5.11352 13.0303 4.33695 13.0303 3.72438 13.284C2.90762 13.6223 2.2587 14.2712 1.92039 15.088C1.66666 15.7006 1.66666 16.4771 1.66666 18.0303M11.25 6.36361C11.25 8.20456 9.75761 9.69694 7.91666 9.69694C6.07571 9.69694 4.58332 8.20456 4.58332 6.36361C4.58332 4.52266 6.07571 3.03027 7.91666 3.03027C9.75761 3.03027 11.25 4.52266 11.25 6.36361Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className=" ml-2 text-[#4F4F4F]">Applicants</p>
            </div>
            <p className=" text-xl text-[#3D3D3D]">400</p>
          </div>
          <div className="flex py-4 md:py-6 border-b border-[#E7E7E7] px-2 justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none">
                <path
                  d="M9.99999 13.4469H6.24999C5.08702 13.4469 4.50554 13.4469 4.03237 13.5905C2.96704 13.9136 2.13336 14.7473 1.81019 15.8127C1.66666 16.2858 1.66666 16.8673 1.66666 18.0303M13.3333 15.5303L15 17.1969L18.3333 13.8636M12.0833 6.78027C12.0833 8.85134 10.4044 10.5303 8.33332 10.5303C6.26226 10.5303 4.58332 8.85134 4.58332 6.78027C4.58332 4.70921 6.26226 3.03027 8.33332 3.03027C10.4044 3.03027 12.0833 4.70921 12.0833 6.78027Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className=" ml-2 text-[#4F4F4F]">Matches</p>
            </div>
            <p className=" text-xl text-[#3D3D3D]">100</p>
          </div>
          <div className="flex py-4 md:py-6 border-b border-[#E7E7E7] px-2 justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none">
                <path
                  d="M2.5 7.03027C2.5 5.63014 2.5 4.93008 2.77248 4.3953C3.01217 3.92489 3.39462 3.54244 3.86502 3.30276C4.3998 3.03027 5.09987 3.03027 6.5 3.03027H13.5C14.9001 3.03027 15.6002 3.03027 16.135 3.30276C16.6054 3.54244 16.9878 3.92489 17.2275 4.3953C17.5 4.93008 17.5 5.63014 17.5 7.03027V11.5303C17.5 12.9304 17.5 13.6305 17.2275 14.1653C16.9878 14.6357 16.6054 15.0181 16.135 15.2578C15.6002 15.5303 14.9001 15.5303 13.5 15.5303H8.06979C7.54975 15.5303 7.28972 15.5303 7.04101 15.5813C6.82036 15.6266 6.60683 15.7015 6.40624 15.804C6.18014 15.9195 5.9771 16.0819 5.57101 16.4068L3.58313 17.9971C3.23639 18.2745 3.06302 18.4132 2.91712 18.4133C2.79022 18.4135 2.67019 18.3558 2.59102 18.2566C2.5 18.1426 2.5 17.9206 2.5 17.4765V7.03027Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className=" ml-2 text-[#4F4F4F]">Messages</p>
            </div>
            <p className=" text-xl text-[#3D3D3D]">147</p>
          </div>
          <div className="flex items-center justify-between px-2 py-4 md:py-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none">
                <path
                  d="M2.01677 11.1244C1.90328 10.9447 1.84654 10.8549 1.81477 10.7163C1.79091 10.6122 1.79091 10.448 1.81477 10.3439C1.84654 10.2053 1.90328 10.1155 2.01677 9.9358C2.95461 8.45081 5.74617 4.69678 10.0003 4.69678C14.2545 4.69678 17.0461 8.45081 17.9839 9.9358C18.0974 10.1155 18.1541 10.2053 18.1859 10.3439C18.2098 10.448 18.2098 10.6122 18.1859 10.7163C18.1541 10.8549 18.0974 10.9447 17.9839 11.1244C17.0461 12.6094 14.2545 16.3634 10.0003 16.3634C5.74617 16.3634 2.95461 12.6094 2.01677 11.1244Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0003 13.0301C11.381 13.0301 12.5003 11.9108 12.5003 10.5301C12.5003 9.1494 11.381 8.03011 10.0003 8.03011C8.61962 8.03011 7.50034 9.1494 7.50034 10.5301C7.50034 11.9108 8.61962 13.0301 10.0003 13.0301Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className=" ml-2 text-[#4F4F4F]">Views</p>
            </div>
            <p className=" text-xl text-[#3D3D3D]">800</p>
          </div>
        </div>
        <div className="p-8 mx-4 bg-white rounded-xl 2xl:mx-4 2xl:my-2 drop-shadow-xl">
          <p className="text-lg text-black 2xl:text-xl">
            “A quote from a Atlassian.”
          </p>
          <div className="flex items-center pt-8 2xl:pt-12">
            <img src={atlassian_img} />
            <div className="px-4">
              <p className="text-black">Name</p>
              <p className="text-[#828282] pt-1">Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
