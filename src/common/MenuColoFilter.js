import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";
import { useFilterProductActions } from "../context/productProvider";
import axios from "axios";
export default function MenuColorFilter({ setIsShow }) {
  const setFilterProduct = useFilterProductActions();
  const filterByPortalConsole = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const portalProduct = data.filter((d) => d.category == "PortableConsole");
      setFilterProduct(portalProduct);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filterByHomeConsole = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const homeProduct = data.filter((d) => d.category == "HomeConsole");
      setFilterProduct(homeProduct);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllPoducts = async () => {
    try {
      const data = await axios.get("http://localhost:3002/products");
      setFilterProduct(data);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filterByAccessories = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const accessories = data.filter((d) => d.category == "accessories");
      setFilterProduct(accessories);
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center  gap-x-4 text-right mb-4  font-medium text-gray-700">
                <span className="text-sm lg:text-lg font-semibold">
                  {" "}
                  رنگ محصول
                </span>
                <HiChevronDown
                  className={`${
                    open
                      ? "rotate-180 transform transition-all duration-500"
                      : "rotate-360 transform transition-all duration-500"
                  } h-8 w-8 lg:h-10 lg:w-10 text-gray-700 pt-2 pb-2`}
                />
              </Disclosure.Button>
              <div className="flex flex-col gap-y-3">
                <Disclosure.Panel className="flex justify-start items-center gap-x-2 cursor-pointer text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="black"
                    name="black"
                    value="black"
                    className="rounded"
                  />
                  <label for="black">مشکی</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="white"
                    name="white"
                    value="white"
                    className="rounded"
                  />
                  <label for="white">سفید</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="blue"
                    name="blue"
                    value="blue"
                    className="rounded"
                  />
                  <label for="blue">آبی</label>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
