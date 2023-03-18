import { useState } from "react";
import { Tab } from "@headlessui/react";
import SignUpForm from "./SignUpForm";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Tabs() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex items-center gap-x-2">
          <Tab
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            ثبت نام
          </Tab>
          <Tab
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            وارد شوید
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
