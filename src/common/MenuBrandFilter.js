import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";
import { useFilterProductActions } from "../context/productProvider";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MenuBrandFilter({
  filterBrandSamsung,
  filterBrandXiaomi,
  filterBrandApple,
  filterBrandAsus,
  filterBrandHp,
  filterBrandAcer,
  filterBrandSony,
}) {
  return (
    <div>
      <div className="bg-white dark:bg-slate-700">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center  gap-x-4 text-right mb-4  font-medium text-gray-700">
                <span className="dark:text-white text-sm lg:text-lg font-semibold">
                  برند محصولات
                </span>
                <HiChevronDown
                  className={`${
                    open
                      ? "rotate-180 transform transition-all duration-500"
                      : "rotate-360 transform transition-all duration-500"
                  } h-8 w-8 lg:h-10 lg:w-10 text-gray-700 dark:text-white pt-2 pb-2`}
                />
              </Disclosure.Button>
              <div className="flex flex-col gap-y-3">
                <Disclosure.Panel className="flex dark:text-white justify-start items-center gap-x-2 cursor-pointer text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="samsung"
                    name="samsung"
                    value="samsung"
                    className="rounded"
                    onChange={(e) => filterBrandSamsung(e)}
                  />
                  <label for="samsung">سامسونگ</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex dark:text-white justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="xiaomi"
                    name="xiaomi"
                    value="xiaomi"
                    className="rounded"
                    onChange={(e) => filterBrandXiaomi(e)}
                  />
                  <label for="xiaomi">شیائومی</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex dark:text-white justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="apple"
                    name="apple"
                    value="apple"
                    className="rounded"
                    onChange={(e) => filterBrandApple(e)}
                  />
                  <label for="apple">اپل</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex dark:text-white justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="asus"
                    name="asus"
                    value="asus"
                    className="rounded"
                    onChange={(e) => filterBrandAsus(e)}
                  />
                  <label for="asus">ایسوس</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex dark:text-white justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="hp"
                    name="hp"
                    value="hp"
                    className="rounded"
                    onChange={(e) => filterBrandHp(e)}
                  />
                  <label for="hp">اچ پی</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex dark:text-white justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="acer"
                    name="acer"
                    value="acer"
                    className="rounded"
                    onChange={(e) => filterBrandAcer(e)}
                  />
                  <label for="acer">ایسر</label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex mb-6 dark:text-white justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="sony"
                    name="sony"
                    value="sony"
                    className="rounded"
                    onChange={(e) => filterBrandSony(e)}
                  />
                  <label for="sony">سونی</label>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
