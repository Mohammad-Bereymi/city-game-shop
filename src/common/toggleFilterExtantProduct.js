import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import {
  useFilterProductActions,
  useFiltreProducts,
} from "../context/productProvider";
import axios from "axios";
function ToggleProduct({ toggeFilter, enabled }) {
  return (
    <Switch
      onChange={() => toggeFilter()}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-300"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "-translate-x-6" : "-translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

export default ToggleProduct;
