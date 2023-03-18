import { NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { useState } from "react";
import BackDrop from "./backDrop";
import AccordionCategory from "../common/AccordionCategory";
import AccordionContactUs from "../common/AccordionContactUs";
import { useCart } from "../context/cartProvider";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useAuth } from "../context/AuthProvider";
import MenuUser from "../common/MenuUser";
import DarkModeToggle from "../common/darkmode";
import Switcher from "../common/dark";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  const [isShow, setIsShow] = useState(false);
  return (
    <header className="z-40 h-16 md:h-20 dark:bg-slate-900 bg-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center w-full  rounded-b-3xl  sticky top-0 left-0 mb-5">
      {isShow ? <BackDrop setIsShow={setIsShow} /> : ""}
      <nav className="w-full px-4 flex items-center justify-between container max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between gap-x-14">
          {/*hamburger menu icon */}
          <span
            onClick={() => setIsShow((prevState) => !prevState)}
            className="text-white  inline-block cursor-pointer md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          {/*Home Icon */}
          <span>
            <NavLink to="/">
              <IoGameControllerOutline className="w-8 h-8 text-white cursor-pointer" />
            </NavLink>
          </span>
          <ul className="hidden  md:flex items-center justify-between gap-x-7">
            <li>
              <NavLink to="/" className="text-white text-lg">
                خانه
              </NavLink>
            </li>
            <li>{/* <AccordionCategory /> */}</li>
            <li>
              <NavLink className="text-white text-lg">بلاگ</NavLink>
            </li>
            <li>
              <AccordionContactUs />
            </li>
          </ul>
        </div>
        <ul className="flex items-center justify-between gap-x-8">
          <li className="pt-7">
            <Switcher />
          </li>
          <li className="relative">
            <NavLink to="/cart">
              <span className="text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center absolute -top-2 left-5">
                <span className="text-red-500 font-semibold">
                  {cart.length}
                </span>
              </div>
            </NavLink>
          </li>

          <li>
            {userData ? (
              // <span className="text-white cursor-pointer flex items-center">
              //   <FaRegUserCircle className="w-7 h-7" />
              //   <span className="font-semibold mr-2">پروفایل</span>
              // </span>
              <MenuUser />
            ) : (
              <NavLink to="/signup">
                <span className="text-white cursor-pointer flex items-center">
                  <HiArrowLeftOnRectangle className="w-8 h-8" />
                  <span className="font-semibold mr-1">ورود</span>
                </span>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
