import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { useFilterProductActions } from "../context/productProvider";
import axios from "axios";
export default function AccordionCategorySidebar({ setIsShow }) {
  const setFilterProduct = useFilterProductActions();
  const filterCategoryMobile = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const portalProduct = data.filter((d) => d.category == "mobile");
      setFilterProduct(portalProduct);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filterCategoryLaptop = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const homeProduct = data.filter((d) => d.category == "laptop");
      setFilterProduct(homeProduct);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const AllPoducts = async () => {
    try {
      const data = await axios.get("http://localhost:3002/products");
      setFilterProduct(data);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filterCategoryConsole = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const homeProduct = data.filter((d) => d.category == "Console");
      setFilterProduct(homeProduct);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white dark:bg-slate-700 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex dark:text-white w-full justify-start gap-x-4 text-left  font-medium text-gray-700">
                <span className="text-xl dark:text-white">
                  {" "}
                  دسته بندی محصولات
                </span>
                <FaChevronDown
                  className={`${
                    open
                      ? "rotate-180 transform transition-all duration-500"
                      : "rotate-360 transform transition-all duration-500"
                  } h-8 w-8 text-gray-700 pt-2 pb-2 dark:text-white`}
                />
              </Disclosure.Button>
              <div className="flex flex-col gap-y-3 ">
                <Disclosure.Panel className="mt-2">
                  <div
                    onClick={AllPoducts}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center w-6 h-6 rounded-full text-blue-600 bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                      </svg>
                    </span>
                    <span class="mr-2 dark:text-gray-400">همه محصولات</span>
                  </div>
                </Disclosure.Panel>
                <Disclosure.Panel>
                  <div
                    onClick={filterCategoryMobile}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center w-6 h-6 text-blue-600 rounded-full bg-gray-100">
                      <svg
                        class="w-4 h-4 "
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 4.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 1.75 1.75 1 4.75 1h4.5c3 0 3.75.75 3.75 3.75ZM8.5 3.625h-3"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 13.825A1.163 1.163 0 1 0 7 11.5a1.163 1.163 0 0 0 0 2.325Z"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="mr-2 dark:text-gray-400">گوشی موبایل</span>
                  </div>
                </Disclosure.Panel>
                <Disclosure.Panel>
                  <div
                    onClick={filterCategoryLaptop}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center w-6 h-6 text-blue-600 rounded-full bg-gray-100">
                      <svg
                        class="w-4 h-4"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.293 1.333H11.7c2.373 0 2.967.594 2.967 2.96v4.22c0 2.374-.594 2.96-2.96 2.96H4.293c-2.366.007-2.96-.586-2.96-2.953V4.294c0-2.367.594-2.96 2.96-2.96ZM8 11.48v3.187M1.333 8.666h13.334M5 14.666h6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="mr-2 dark:text-gray-400">لپ تاپ</span>
                  </div>
                </Disclosure.Panel>
                <Disclosure.Panel>
                  <div
                    onClick={filterCategoryConsole}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center w-6 h-6 rounded-full text-blue-600 bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </span>
                    <span class="mr-2 dark:text-gray-400">کنسول بازی</span>
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
