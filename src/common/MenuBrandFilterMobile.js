import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { useFilterProductActions } from "../context/productProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import ToggleProduct from "./toggleFilterExtantProduct";
export default function MenuBrandFilterMobile({ setIsShow }) {
  const setFilterProduct = useFilterProductActions();
  const [products, setProduct] = useState([]);
  const [brands, setBrands] = useState([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    getAllProduct();
  }, []);
  useEffect(() => {
    setFilterProduct(brands);
    filterExtantProduct();
  }, [brands, enabled]);
  const toggeFilter = () => {
    console.log(brands.length);
    setEnabled(!enabled);
    filterExtantProduct();
  };
  const filterExtantProduct = () => {
    if (enabled == true && brands.length > 0) {
      const extantProduct = brands.filter((p) => p.extant == true);
      return setFilterProduct(extantProduct);
    }
    if (enabled == true && brands.length == 0) {
      const extantProduct = products.filter((p) => p.extant == true);
      return setFilterProduct(extantProduct);
    }
  };
  const filterBrandSamsung = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "samsung");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "samsung")]);
    }
    // return setFilterProduct(brands);
  };
  const filterBrandXiaomi = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "xiaomi");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "xiaomi")]);
    }
    // return setFilterProduct(brands);
  };
  const filterBrandApple = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "apple");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "apple")]);
    }
    // return setFilterProduct(brands);
  };
  const filterBrandAsus = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "asus");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "asus")]);
    }
  };
  const filterBrandHp = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "hp");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "hp")]);
    }
  };
  const filterBrandAcer = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "acer");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "acer")]);
    }
  };
  const filterBrandSony = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "sony");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "sony")]);
    }
  };
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      setProduct(data);
    } catch (error) {}
  };
  return (
    <div>
      <div className="bg-white dark:bg-slate-700">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-start gap-x-4 text-left font-medium text-gray-700">
                <span className="text-xl dark:text-white">فیلتر</span>
                <FaChevronDown
                  className={`${
                    open
                      ? "rotate-180 transform transition-all duration-500"
                      : "rotate-360 transform transition-all duration-500"
                  } h-8 w-8 dark:text-white text-gray-700 pt-2 pb-2`}
                />
              </Disclosure.Button>
              <div className="flex flex-col gap-y-5 ">
                <Disclosure.Panel className="flex justify-start items-center gap-x-2 cursor-pointer text-md text-slate-700 mt-4">
                  <input
                    type="checkbox"
                    id="samsung"
                    name="samsung"
                    value="samsung"
                    className="rounded"
                    onChange={(e) => filterBrandSamsung(e)}
                  />
                  <label for="samsung" className="text-white">
                    سامسونگ
                  </label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="xiaomi"
                    name="xiaomi"
                    value="xiaomi"
                    className="rounded"
                    onChange={(e) => filterBrandXiaomi(e)}
                  />
                  <label for="xiaomi" className="dark:text-white">
                    شیائومی
                  </label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="apple"
                    name="apple"
                    value="apple"
                    className="rounded"
                    onChange={(e) => filterBrandApple(e)}
                  />
                  <label for="apple" className="dark:text-white">
                    اپل
                  </label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="asus"
                    name="asus"
                    value="asus"
                    className="rounded"
                    onChange={(e) => filterBrandAsus(e)}
                  />
                  <label for="asus" className="dark:text-white">
                    ایسوس
                  </label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="hp"
                    name="hp"
                    value="hp"
                    className="rounded"
                    onChange={(e) => filterBrandHp(e)}
                  />
                  <label for="hp" className="dark:text-white">
                    اچ پی
                  </label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="acer"
                    name="acer"
                    value="acer"
                    className="rounded"
                    onChange={(e) => filterBrandAcer(e)}
                  />
                  <label for="acer" className="dark:text-white">
                    ایسر
                  </label>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex justify-start items-center gap-x-2  cursor-pointer  text-md text-slate-700">
                  <input
                    type="checkbox"
                    id="sony"
                    name="sony"
                    value="sony"
                    className="rounded"
                    onChange={(e) => filterBrandSony(e)}
                  />
                  <label for="sony" className="dark:text-white">
                    سونی
                  </label>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <div className="mt-10 flex items-center justify-start">
          <span className="text-gray-700 font-semibold ml-4 dark:text-white">
            فقط کالاهای موجود
          </span>
          <ToggleProduct toggeFilter={toggeFilter} enabled={enabled} />
        </div>
      </div>
    </div>
  );
}
