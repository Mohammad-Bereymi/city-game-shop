import { IoGameControllerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AccordionCategorySidebar from "../common/AccordionCategorySidebar";
import AccordionContactUsSideBar from "../common/AccordionContactUsSideBar";
import MenuBrandFilterMobile from "../common/MenuBrandFilterMobile";

const BackDrop = ({ setIsShow }) => {
  return (
    <div className="md:hidden block ">
      <div className="">
        <div
          onClick={() => setIsShow(false)}
          className=" w-screen h-screen bg-slate-600 opacity-30  fixed z-10 top-0 right-0"
        ></div>
        <div className="bg-white dark:bg-slate-700 dark:text-white fixed top-0 right-0 z-20 w-80  h-full px-4 py-6 flex flex-col">
          {/*header menu */}
          <div className="flex   items-center justify-between pb-3 mb-4 border-b-2 border-blue-600">
            <NavLink to="/">
              <IoGameControllerOutline className="w-8 h-8 text-blue-600 cursor-pointer" />
            </NavLink>
            <span onClick={() => setIsShow(false)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {/*menu */}
          <div className="flex  flex-col gap-y-6 max-h-[calc(60vh_-_140px)] overflow-y-auto">
            {/*Home */}
            <NavLink to="/">
              <span className="text-gray-700 font-normal text-lg block cursor-pointer">
                خانه
              </span>
            </NavLink>
            {/*accordion category product */}
            <AccordionCategorySidebar setIsShow={setIsShow} />
            {/* menuBrandFilter */}
            <MenuBrandFilterMobile setIsShow={setIsShow} />
            {/*accordion Contact Us*/}
            <AccordionContactUsSideBar />

            {/*Blog*/}
            <NavLink to="/">
              <span className="text-gray-700 font-normal text-lg block cursor-pointer">
                بلاگ
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackDrop;
