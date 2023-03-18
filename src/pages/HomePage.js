import { FaBoxOpen } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import axios from "axios";
import Product from "../components/product";
import {
  useFilterProductActions,
  useFiltreProducts,
} from "../context/productProvider";
import { useEffect, useState } from "react";
import MenuBrandFilter from "../common/MenuBrandFilter";
import ToggleProduct from "../common/toggleFilterExtantProduct";
import { HashLink as Link } from "react-router-hash-link";

const HomePage = () => {
  const filterProduct = useFiltreProducts();
  const setFilterProduct = useFilterProductActions();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [enabled, setEnabled] = useState(false);

  const getAllPoducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPoducts();
  }, []);
  useEffect(() => {
    setFilterProduct(brands);
    filterExtantProduct();
  }, [brands, enabled]);

  // useEffect(() => {
  //   filterBrandSamsung();
  //   filterBrandXiaomi();
  //   filterBrandApple();
  //   filterBrandAsus();
  //   filterBrandHp();
  //   filterBrandAcer();
  //   filterBrandSony();
  //   toggeFilter();
  //   setFilterProduct();
  // }, [products, brands, enabled]);

  // filter-category

  const filterCategoryMobile = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const portalProduct = data.filter((d) => d.category == "mobile");
      setFilterProduct(portalProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const filterCategoryLaptop = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const homeProduct = data.filter((d) => d.category == "laptop");
      setFilterProduct(homeProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const filterCategoryConsole = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/products");
      const homeProduct = data.filter((d) => d.category == "Console");
      setFilterProduct(homeProduct);
    } catch (error) {
      console.log(error);
    }
  };

  // filter-brnas-product

  const filterBrandSamsung = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "samsung");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "samsung")]);
    }
  };
  const filterBrandXiaomi = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "xiaomi");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "xiaomi")]);
    }
  };
  const filterBrandApple = (e) => {
    if (e.target.checked) {
      const filteredProduct = products.filter((p) => p.label == "apple");
      setBrands([...brands, ...filteredProduct]);
    } else {
      setBrands([...brands.filter((p) => p.label != "apple")]);
    }
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

  // extant-product-filter

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

  return (
    <main
      id="up"
      className="grid grid-cols-1 container max-w-screen-2xl mx-auto mb-6 px-6 md:px-4 lg:px-6"
    >
      {/*1*/}
      <section className="grid grid-cols-1 justify-items-center md:justify-start md:grid-cols-2  md:gap-x-6  gap-y-4 ">
        <div className="max-w-md sm:max-w-xl  h-auto  px-6 rounded-xl items-center md:mb-10">
          <img
            src={require("../assets/img/—Pngtree—white video game controller with_5424568.png")}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-4  items-center md:justify-start pt-28 sm:gap-y-8 md:gap-y-20">
          <h2 className="font-bold text-xl dark:text-white sm:text-2xl md:text-3xl lg:text-4xl md:font-extrabold">
            محصولات فروشگاه اینترنتی سیتی گیم
          </h2>
          <p className="text-base dark:text-white sm:text-lg md:text-xl lg:text-2xl font-semibold">
            خریدی آسان , سریع و مطمئن را با ما تجربه کنید.
          </p>
          <Link
            to="#products"
            className="w-full flex items-center justify-center "
          >
            <button className="text-base mb-6 sm:text-lg py-2 px-4 bg-blue-600 rounded-lg text-white w-[75%] md:py-5 md:text-xl lg:text-2xl md:font-semibold ">
              مشاهده همه محصولات
            </button>
          </Link>
        </div>
      </section>

      {/*2 */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-20 ">
        <div className="flex flex-col py-4 px-1 gap-y-3 items-center border border-gray-200 bg-white dark:bg-slate-600 rounded-lg shadow-md">
          <span>
            <FaBoxOpen className="text-blue-600 dark:text-blue-500 w-7 h-7" />
          </span>
          <span className="text-sm text-gray-600 dark:text-white">
            امکان تحویل اکسپرس
          </span>
        </div>

        <div className="flex flex-col py-4 px-1 gap-y-3 dark:bg-slate-600 items-center border border-gray-200 bg-white rounded-lg shadow-md">
          <span>
            <FaRegCreditCard className="text-blue-600  dark:text-blue-500 w-7 h-7" />
          </span>
          <span className="text-sm text-gray-600 dark:text-white">
            امکان پرداخت در محل
          </span>
        </div>

        <div className="flex flex-col py-4 px-1 dark:bg-slate-600 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
          <span>
            <FaRegCalendarAlt className="text-blue-600 dark:text-blue-500 w-7 h-7" />
          </span>
          <span className="text-sm dark:text-white text-gray-600">
            7روز هفته, 24 ساعته
          </span>
        </div>

        <div className="flex flex-col py-4 px-1 dark:bg-slate-600 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
          <span>
            <FaReplyAll className="text-blue-600 dark:text-blue-500 w-7 h-7" />
          </span>
          <span className="text-sm text-gray-600 dark:text-white">
            7روز ضمانت برگشت وجه
          </span>
        </div>
        <div className="flex flex-col dark:bg-slate-600 py-4 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
          <span>
            <AiOutlineSafetyCertificate className="text-blue-600 dark:text-blue-500 w-7 h-7" />
          </span>
          <span className="text-sm dark:text-white text-gray-600">
            ضمانت اصل بودن کالا
          </span>
        </div>
      </section>
      {/*3*/}
      <h2
        id="products"
        className="font-extrabold text-xl dark:text-white text-center  mb-12 md:mb-24 lg:text-4xl border border-opacity-20 border-blue-50000 px-8 py-4 rounded-lg shadow-md shadow-blue-300"
      >
        محصولات فروشگاه اینترنتی سیتی گیم
      </h2>
      {/* content */}
      <section class=" container mx-auto xl:max-w-screen-2xl grid grid-cols-12 md:gap-8">
        {/* <!-- sidebar --> */}
        <div class="hidden md:block col-span-4 md:col-span-3 xl:col-span-3 ">
          <div className="bg-white dark:bg-slate-700 p-5 rounded-xl max-h-[calc(100vh_-_140px)] overflow-y-auto top-24 sticky shadow-sm shadow-gray-200">
            {/* category */}
            <div class="mb-7">
              <div class="text-xl  font-bold text-blue-600 dark:text-blue-500 mb-5">
                دسته بندی
              </div>
              <ul class="">
                <li class="mb-2">
                  <div
                    onClick={getAllPoducts}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center w-6 h-6 dark:bg-white dark:text-blue-800 rounded-full text-blue-600 bg-gray-100">
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
                    <span class="mr-2 dark:text-white">همه محصولات</span>
                  </div>
                </li>
                <li class="mb-2">
                  <div
                    onClick={filterCategoryMobile}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center dark:bg-white dark:text-blue-800 w-6 h-6 text-blue-600 rounded-full bg-gray-100">
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
                    <span class="mr-2 dark:text-white">گوشی موبایل</span>
                  </div>
                </li>
                <li class="mb-2">
                  <div
                    onClick={filterCategoryLaptop}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center dark:bg-white dark:text-blue-700 w-6 h-6 text-blue-600 rounded-full bg-gray-100">
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
                    <span class="mr-2 dark:text-white">لپ تاپ</span>
                  </div>
                </li>
                <li class="">
                  <div
                    onClick={filterCategoryConsole}
                    class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
                  >
                    <span class="flex items-center justify-center dark:bg-white dark:text-blue-700 w-6 h-6 rounded-full text-blue-600 bg-gray-100">
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
                    <span class="mr-2 dark:text-white">کنسول بازی</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* desktope */}
            <div>
              <div className="text-xl font-bold dark:text-blue-500 text-blue-600 mb-5">
                فیلتر
              </div>
              <MenuBrandFilter
                filterBrandSamsung={filterBrandSamsung}
                filterBrandXiaomi={filterBrandXiaomi}
                filterBrandApple={filterBrandApple}
                filterBrandAsus={filterBrandAsus}
                filterBrandHp={filterBrandHp}
                filterBrandAcer={filterBrandAcer}
                filterBrandSony={filterBrandSony}
              />
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold dark:text-white">
                  فقط کالاهای موجود
                </span>
                <ToggleProduct toggeFilter={toggeFilter} enabled={enabled} />
              </div>
            </div>
          </div>
        </div>
        {/* products List */}
        <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 mb-10">
          <div className="grid grid-cols-1 gap-y-11 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-16 md:gap-x-10 lg:gap-x-8 mb:24  ">
            <Product
              products={filterProduct.length ? filterProduct : products}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

{
  /* <section className="grid grid-cols-1 gap-y-11 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-10 md:grid-cols-3 xl:grid-cols-4 md:gap-y-16 md:gap-x-10 lg:gap-x-12 mb:24  ">
<Product products={filterProduct.length ? filterProduct : products} />
</section> */
}

// import { FaBoxOpen } from "react-icons/fa";
// import { FaRegCreditCard } from "react-icons/fa";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { FaReplyAll } from "react-icons/fa";
// import { AiOutlineSafetyCertificate } from "react-icons/ai";
// import axios from "axios";
// import Product from "../components/product";
// import {
//   useFilterProductActions,
//   useFiltreProducts,
// } from "../context/productProvider";
// import { useEffect, useState } from "react";
// import MenuBrandFilter from "../common/MenuBrandFilter";
// import MenuColorFilter from "../common/MenuColoFilter";
// import ToggleProduct from "../common/toggleFilterExtantProduct";

// const HomePage = () => {
//   const filterProduct = useFiltreProducts();
//   const setFilterProduct = useFilterProductActions();
//   const [products, setProducts] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [enabled, setEnabled] = useState(false);

//   const AllPoducts = async () => {
//     try {
//       const data = await axios.get("http://localhost:3002/products");
//       setFilterProduct(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     let result = products;
//   }, [products, brands, enabled]);
//   const filterCategoryMobile = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3002/products");
//       const portalProduct = data.filter((d) => d.category == "mobile");
//       setFilterProduct(portalProduct);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const filterCategoryLaptop = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3002/products");
//       const homeProduct = data.filter((d) => d.category == "laptop");
//       setFilterProduct(homeProduct);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const filterCategoryConsole = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3002/products");
//       const homeProduct = data.filter((d) => d.category == "Console");
//       setFilterProduct(homeProduct);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // filter-brnas-product

//   const filterBrandSamsung = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "samsung");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "samsung")]);
//     }
//     //
//   };
//   const filterBrandXiaomi = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "xiaomi");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "xiaomi")]);
//     }
//     // return setFilterProduct(brands);
//   };
//   const filterBrandApple = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "apple");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "apple")]);
//     }
//     // return setFilterProduct(brands);
//   };
//   const filterBrandAsus = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "asus");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "asus")]);
//     }
//   };
//   const filterBrandHp = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "hp");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "hp")]);
//     }
//   };
//   const filterBrandAcer = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "acer");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "acer")]);
//     }
//   };
//   const filterBrandSony = (e) => {
//     if (e.target.checked) {
//       const filteredProduct = products.filter((p) => p.label == "sony");
//       setBrands([...brands, ...filteredProduct]);
//     } else {
//       setBrands([...brands.filter((p) => p.label != "sony")]);
//     }
//   };

//   // extant-product-filter

//   const toggeFilter = () => {
//     setEnabled(!enabled);
//     filterExtantProduct();
//   };
//   const filterExtantProduct = () => {
//     try {
//       if (!enabled) {
//         const extantProduct = filterProduct.filter((p) => p.extant == true);
//        return setFilterProduct(extantProduct);
//       } else {
//         setFilterProduct(filterProduct);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllPoducts();
//   }, []);
//   const getAllPoducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3002/products");
//       setProducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     setFilterProduct(brands);
//   }, [brands]);

//   return (
//     <main className="grid grid-cols-1 container max-w-screen-2xl mx-auto mb-6 px-6 md:px-4 lg:px-6">
//       {/*1*/}
//       <section className="grid grid-cols-1 justify-items-center md:justify-start md:grid-cols-2  md:gap-x-6  gap-y-4 mb-16">
//         <div className="max-w-md sm:max-w-2xl  h-auto  px-6 rounded-xl items-center mb-16">
//           <img
//             src={require("../assets/img/—Pngtree—white video game controller with_5424568.png")}
//             alt=""
//           />
//         </div>
//         <div className="flex flex-col gap-y-6  items-center md:justify-evenly sm:gap-y-8 md:gap-y-12 lg:gap-y-8">
//           <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl md:font-extrabold">
//             محصولات فروشگاه اینترنتی سیتی گیم
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
//             خریدی آسان , سریع و مطمئن را با ما تجربه کنید.
//           </p>
//           <button className="text-base sm:text-lg py-2 px-4 bg-blue-600 rounded-lg text-white w-[75%] md:py-5 md:text-xl lg:text-2xl md:font-semibold ">
//             مشاهده همه محصولات
//           </button>
//         </div>
//       </section>
//       {/*2 */}
//       <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-20 ">
//         <div className="flex flex-col py-4 px-1 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
//           <span>
//             <FaBoxOpen className="text-blue-600 w-7 h-7" />
//           </span>
//           <span className="text-sm text-gray-600">امکان تحویل اکسپرس</span>
//         </div>

//         <div className="flex flex-col py-4 px-1 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
//           <span>
//             <FaRegCreditCard className="text-blue-600 w-7 h-7" />
//           </span>
//           <span className="text-sm text-gray-600">امکان پرداخت در محل</span>
//         </div>

//         <div className="flex flex-col py-4 px-1 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
//           <span>
//             <FaRegCalendarAlt className="text-blue-600 w-7 h-7" />
//           </span>
//           <span className="text-sm text-gray-600">7روز هفته, 24 ساعته</span>
//         </div>

//         <div className="flex flex-col py-4 px-1 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
//           <span>
//             <FaReplyAll className="text-blue-600 w-7 h-7" />
//           </span>
//           <span className="text-sm text-gray-600">7روز ضمانت برگشت وجه</span>
//         </div>
//         <div className="flex flex-col py-4 gap-y-3 items-center border border-gray-200 bg-white rounded-lg shadow-md">
//           <span>
//             <AiOutlineSafetyCertificate className="text-blue-600 w-7 h-7" />
//           </span>
//           <span className="text-sm text-gray-600">ضمانت اصل بودن کالا</span>
//         </div>
//       </section>
//       {/*3*/}
//       <h2 className="font-extrabold text-xl text-center  mb-12 md:mb-24 lg:text-4xl border border-opacity-20 border-blue-500 px-8 py-4 rounded-lg shadow-lg shadow-blue-300">
//         محصولات فروشگاه اینترنتی سیتی گیم
//       </h2>
//       {/* content */}
//       <section class=" container mx-auto xl:max-w-screen-2xl grid grid-cols-12 md:gap-8">
//         {/* <!-- sidebar --> */}
//         <div class="hidden md:block col-span-4 md:col-span-3 xl:col-span-3 ">
//           <div className="bg-white p-5 rounded-xl max-h-[calc(100vh_-_140px)] overflow-y-auto top-24 sticky shadow-lg shadow-gray-200">
//             {/* category */}
//             <div class="mb-7">
//               <div class="text-xl font-bold text-blue-600 mb-5">دسته بندی</div>
//               <ul class="">
//                 <li class="mb-2">
//                   <div
//                     onClick={AllPoducts}
//                     class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
//                   >
//                     <span class="flex items-center justify-center w-6 h-6 rounded-full text-blue-600 bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         class="w-4 h-4"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
//                         />
//                       </svg>
//                     </span>
//                     <span class="mr-2">همه محصولات</span>
//                   </div>
//                 </li>
//                 <li class="mb-2">
//                   <div
//                     onClick={filterCategoryMobile}
//                     class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
//                   >
//                     <span class="flex items-center justify-center w-6 h-6 text-blue-600 rounded-full bg-gray-100">
//                       <svg
//                         class="w-4 h-4 "
//                         stroke="currentColor"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M13 4.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 1.75 1.75 1 4.75 1h4.5c3 0 3.75.75 3.75 3.75ZM8.5 3.625h-3"
//                           stroke-width="1.125"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                         <path
//                           d="M7 13.825A1.163 1.163 0 1 0 7 11.5a1.163 1.163 0 0 0 0 2.325Z"
//                           stroke-width="1.125"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </span>
//                     <span class="mr-2">گوشی موبایل</span>
//                   </div>
//                 </li>
//                 <li class="mb-2">
//                   <div
//                     onClick={filterCategoryLaptop}
//                     class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
//                   >
//                     <span class="flex items-center justify-center w-6 h-6 text-blue-600 rounded-full bg-gray-100">
//                       <svg
//                         class="w-4 h-4"
//                         stroke="currentColor"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M4.293 1.333H11.7c2.373 0 2.967.594 2.967 2.96v4.22c0 2.374-.594 2.96-2.96 2.96H4.293c-2.366.007-2.96-.586-2.96-2.953V4.294c0-2.367.594-2.96 2.96-2.96ZM8 11.48v3.187M1.333 8.666h13.334M5 14.666h6"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </span>
//                     <span class="mr-2">لپ تاپ</span>
//                   </div>
//                 </li>
//                 <li class="">
//                   <div
//                     onClick={filterCategoryConsole}
//                     class="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
//                   >
//                     <span class="flex items-center justify-center w-6 h-6 rounded-full text-blue-600 bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         class="w-4 h-4"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
//                         />
//                       </svg>
//                     </span>
//                     <span class="mr-2">کنسول بازی</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             {/* desktope */}
//             <div>
//               <div className="text-xl font-bold text-blue-600 mb-5">فیلتر</div>
//               <MenuBrandFilter
//                 filterBrandSamsung={filterBrandSamsung}
//                 filterBrandXiaomi={filterBrandXiaomi}
//                 filterBrandApple={filterBrandApple}
//                 filterBrandAsus={filterBrandAsus}
//                 filterBrandHp={filterBrandHp}
//                 filterBrandAcer={filterBrandAcer}
//                 filterBrandSony={filterBrandSony}
//               />
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-700 font-semibold">
//                   فقط کالاهای موجود
//                 </span>
//                 <ToggleProduct enabled={enabled} toggeFilter={toggeFilter} />
//               </div>
//               {/* <MenuColorFilter /> */}
//             </div>
//           </div>
//         </div>
//         {/* products List */}
//         <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 mb-10">
//           <div className="grid grid-cols-1 gap-y-11 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-16 md:gap-x-10 lg:gap-x-8 mb:24  ">
//             <Product
//               products={filterProduct.length ? filterProduct : products}
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default HomePage;

// {
//   /* <section className="grid grid-cols-1 gap-y-11 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-10 md:grid-cols-3 xl:grid-cols-4 md:gap-y-16 md:gap-x-10 lg:gap-x-12 mb:24  ">
// <Product products={filterProduct.length ? filterProduct : products} />
// </section> */
// }
