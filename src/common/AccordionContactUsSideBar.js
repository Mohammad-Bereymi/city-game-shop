import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";

export default function AccordionContactUsSideBar() {
  return (
    <div>
      <div className="bg-white dark:bg-slate-700">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className=" flex w-full justify-start gap-x-4 text-left  font-medium text-gray-700">
                <span className="text-xl dark:text-white">ارتباط با ما</span>
                <HiChevronDown
                  className={`${
                    open
                      ? "rotate-180 transform transition-all duration-500"
                      : "rotate-360 transform transition-all duration-500"
                  } h-8 w-8 dark:text-white text-gray-700 pt-2 pb-2`}
                />
              </Disclosure.Button>
              <div className="flex flex-col gap-y-2 ">
                <Disclosure.Panel className="cursor-pointer px-4 py-2 text-sm text-gray-500">
                  <span className="pt-2 text-gray-500 text-base dark:text-gray-400">
                    ایمیل
                  </span>
                </Disclosure.Panel>
                <Disclosure.Panel className="cursor-pointer px-4 py-2 text-sm text-gray-500">
                  <span className="pt-2 text-gray-500 text-base dark:text-gray-400">
                    اینستاگرام
                  </span>
                </Disclosure.Panel>
                <Disclosure.Panel className="cursor-pointer px-4 py-2 text-sm text-gray-500">
                  <span className="pb-2 text-gray-500 text-base dark:text-gray-400">
                    کانال تلگرام
                  </span>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
