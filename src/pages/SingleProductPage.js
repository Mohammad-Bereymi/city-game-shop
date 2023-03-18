import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import CheckInCart from "../utility/CheckInCart";
import { ImShield } from "react-icons/im";
import { BiCheckShield } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { BsTruck } from "react-icons/bs";
import { HiExclamationCircle } from "react-icons/hi";
import { useCart, useCartAction } from "../context/cartProvider";
import { TfiShoppingCart } from "react-icons/tfi";
const SingleProductPage = () => {
  const { id } = useParams();
  const { favorite } = useCart();
  const { cart } = useCart();
  const dispatch = useCartAction();
  const [product, setProduct] = useState(null);
  const [favoriteProduct, setFavoriteProduct] = useState(null);
  const [color, setColor] = useState({
    black: false,
    green: false,
    blue: false,
  });

  useEffect(() => {
    console.log(favorite);
    const findFavorite = favorite.find((f) => f.id == id);
    setFavoriteProduct(findFavorite);
  }, [favorite]);
  const favoriteProductHandler = () => {
    console.log(favoriteProduct);
  };
  useEffect(() => {
    getSingleProduct(id);
    console.log(id);
  }, []);

  const getSingleProduct = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3002/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-screen-xl dark:shadow-md dark:bg-slate-700 mx-auto container bg-white px-6 py-4 rounded-xl shadow-lg shadow-gray-200">
      {product ? (
        <div className="grid grid-cols-3 items-start gap-x-4 lg:gap-x-10">
          {/* image */}
          <div className="col-span-3 lg:col-span-1  mb-6 flex items-center justify-center">
            <div className="flex flex-col place-items-end pt-2">
              <div className="flex items-center gap-x-6 px-4">
                <span className=" flex w-8 h-8 dark:text-white  text-gray-700 cursor-pointer border border-gray-600 shadow-blue-100 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </span>
                <NavLink to={`/signup?redirect=/product/${id}`}>
                  <div onClick={() => favoriteProductHandler(product.id)}>
                    <span
                      onClick={() =>
                        dispatch({ type: "ADD_TO_FAVORITE", payload: product })
                      }
                      id={product.id}
                      className=" flex w-8 h-8  text-gray-700 cursor-pointer border border-gray-600 shadow-blue-100 items-center justify-center rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={favoriteProduct ? "red" : "white"}
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </NavLink>
              </div>
              <img
                className="w-96 h-96 rounded-lg mt-4"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>
          {/* description */}
          <div className="col-span-3 lg:col-span-1">
            {/* product-Name */}
            <div className="border-b border-gray-300 pb-4 mb-4">
              <p className="dark:text-white font-semibold text-lg leading-8">
                {product.name}
              </p>
            </div>
            {product.extant == true ? (
              <div>
                {/* colors */}
                <div className="mb-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-semibold dark:text-white">رنگ :</span>
                    <span className="text-blue-400 font-semibold">سه رنگ</span>
                  </div>
                  <div className="flex items-center gap-x-4 mb-6">
                    <div
                      onClick={() =>
                        setColor({
                          black: !color.black,
                          green: false,
                          blue: false,
                        })
                      }
                      className={`${
                        color.black && "ring-1 ring-slate-700"
                      }items-center border border-gray-300 inline-flex px-4 py-2 rounded-full cursor-pointer shadow-md`}
                    >
                      <span className="w-5 h-5 rounded-full bg-black inline-block ml-1"></span>
                      <span className="text-sm dark:text-white">مشکی</span>
                    </div>
                    <div
                      onClick={() =>
                        setColor({
                          black: false,
                          green: !color.green,
                          blue: false,
                        })
                      }
                      className={`${
                        color.green && "ring-1 ring-slate-700"
                      }items-center border border-gray-300 inline-flex px-4 py-2 rounded-full cursor-pointer shadow-md`}
                    >
                      <span className="w-5 h-5 rounded-full bg-green-500 inline-block ml-1"></span>
                      <span className="text-sm dark:text-white">سبز</span>
                    </div>
                    <div
                      onClick={() =>
                        setColor({
                          black: false,
                          green: false,
                          blue: !color.blue,
                        })
                      }
                      className={`${
                        color.blue && "ring-1 ring-slate-700"
                      }items-center border border-gray-300 inline-flex px-4 py-2 rounded-full cursor-pointer shadow-md`}
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-600 inline-block ml-2"></span>
                      <span className="text-sm dark:text-white">آبی</span>
                    </div>
                  </div>
                </div>
                {/* bimeh */}
                <div className="w-full flex flex-col gap-y-4 text-lg mb-10 border-b border-gray-300 pb-4">
                  <h3 className="font-bold dark:text-white">بیمه</h3>
                  <div className="flex items-center rounded-md h-16 ">
                    <div className="border border-gray-300 rounded-tr-lg rounded-br-lg h-full flex items-center justify-center px-4">
                      <input
                        type="checkbox"
                        name="price"
                        value="250.000"
                        id="price"
                        className="rounded-sm p-2"
                      />
                    </div>
                    <div className="border rounded-tl-lg rounded-bl-lg border-gray-300 h-full flex flex-col gap-y-2 px-4">
                      <label
                        for="price"
                        className="dark:text-white text-sm pt-1 text-gray-800"
                      >
                        بیمه تجهیزات دیجیتال-بیمه پارسیان
                      </label>
                      <p>
                        <span className="font-semibold dark:text-gray-400 text-gray-500">
                          250.000
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm mr-1">
                          تومان
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* seller */}
                <div className="lg:hidden mb-6 border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold dark:text-white ">فروشنده :</p>
                    <p className="text-blue-400 text-sm">1 فروشنده</p>
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <FaShoppingBag className="w-5 h-5 ml-3 text-red-500" />
                    <span className="text-gray-600 text-base dark:text-gray-400">
                      سیتی گیم
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-900  text-sm dark:text-white">
                      عملکرد
                    </span>
                    <span className="text-green-500 font-semibold mr-3">
                      عالی
                    </span>
                  </div>
                </div>
                {/* gearanti */}
                <div className="lg:hidden flex items-center mb-6 border-b border-gray-200 pb-4">
                  <ImShield className="w-5 h-5 ml-4 text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 text-sm font-semibold dark:text-gray-400">
                    گارانتی 18ماهه پارس نوین مدیا
                  </p>
                </div>
                {/* anbar */}
                <div className="lg:hidden flex flex-col gap-y-5 mb-6 border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <BiCheckShield className="w-6 h-6 ml-2 text-gray-600 dark:text-gray-400" />
                    <p className="text-gray-600 text-sm font-semibold dark:text-gray-400">
                      موجود در انبار سیتی گیم
                    </p>
                  </div>
                  <div className="flex items-center">
                    <BsTruck className="w-5 h-5 ml-2 text-red-600" />
                    <p className="text-gray-600 text-xs font-semibold dark:text-gray-400">
                      ارسال سیتی گیم
                    </p>
                  </div>
                </div>
                {/* coin */}
                <div className="lg:hidden flex items-center border-b border-gray-200 pb-4 mb-6">
                  <FcRating className="ml-2 w-5 h-5" />
                  <p className="text-gray-600 text-sm font-semibold dark:text-gray-400">
                    150 امتیاز در سیتی کلاب
                  </p>
                  <HiExclamationCircle className="mr-2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            ) : (
              <div className="md:hidden border-b mb-6 border-gray-300 pb-6">
                <h2 className="text-gray-600 dark:text-gray-300 flex items-center after:mr-3 before:ml-3 after:flex-1 after:border-b after:border-gray-700 justify-center before:flex-1 before:border-b before:border-gray-700 text-center font-bold text-xl mb-7">
                  ناموجود
                </h2>

                <p className="text-center font-semibold dark:text-white">
                  متاسفانه این کالا موجود نیست
                </p>
              </div>
            )}
            {/* property */}
            <div className="flex flex-col gap-y-4 border-b border-gray-200 pb-4 mb-6">
              <h3 className="font-bold text-base dark:text-white">ویژگی ها</h3>
              <div>
                <span className="text-gray-400 text-sm">
                  &bull; فناوری صفحه نمایش :
                </span>
                <span className="mr-1 dark:text-white font-semibold text-sm">
                  Dynamic AMOLED 2x
                </span>
              </div>
              <div>
                <span className="text-gray-400  text-sm"> &bull; اندازه :</span>
                <span className="mr-1 font-semibold text-sm dark:text-white">
                  6.4
                </span>
              </div>
              <div>
                <span className="text-gray-400 text-sm">
                  {" "}
                  &bull; رزولوشن عکس :
                </span>
                <span className="mr-1 font-semibold text-sm dark:text-white">
                  12 مگاپیکسل
                </span>
              </div>
              <div>
                <span className="text-gray-400 text-sm">
                  &bull; نسخه سیستم عامل :
                </span>
                <span className="mr-1 font-semibold text-sm dark:text-white">
                  12 Android
                </span>
              </div>
            </div>
            {/* warning */}
            <div className="flex items-start">
              <span>
                <HiExclamationCircle className="mr-2 text-gray-500 w-5 h-5 ml-2" />
              </span>
              <span className="text-sm text-gray-400 leading-6 pb-4">
                امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در
                صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های
                دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری،
                می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع
                کنید.
              </span>
            </div>
          </div>

          {/* cart description */}
          <div className="hidden dark:bg-slate-500 dark:shadow-sm lg:block lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow-md shadow-gray-300">
            {product.extant == true ? (
              <div>
                <div className="mb-6 border-b border-gray-300 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold dark:text-white">فروشنده :</p>
                    <p className="text-blue-400 text-sm">1 فروشنده</p>
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <FaShoppingBag className="w-5 h-5 ml-3 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-400 text-base">
                      سیتی گیم
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-900 dark:text-white text-sm">
                      عملکرد
                    </span>
                    <span className="text-green-500 dark:text-green-400 font-semibold mr-3">
                      عالی
                    </span>
                  </div>
                </div>
                {/* gearanti */}
                <div className="flex items-center mb-6 border-b border-gray-300 pb-4">
                  <ImShield className="w-5 h-5 ml-4 text-gray-600 dark:text-gray-300" />
                  <p className="text-gray-600 text-sm font-semibold dark:text-gray-300">
                    گارانتی 18ماهه پارس نوین مدیا
                  </p>
                </div>
                {/* anbar */}
                <div className="flex flex-col gap-y-5 mb-6 border-b border-gray-300 pb-4">
                  <div className="flex items-center">
                    <BiCheckShield className="w-6 h-6 ml-2 dark:text-gray-300 text-gray-600" />
                    <p className="text-gray-600 text-sm dark:text-gray-300 font-semibold">
                      موجود در انبار سیتی گیم
                    </p>
                  </div>
                  <div className="flex items-center">
                    <BsTruck className="w-5 h-5 ml-2  text-red-600" />
                    <p className="text-gray-600 text-xs font-semibold dark:text-gray-300">
                      ارسال سیتی گیم
                    </p>
                  </div>
                </div>
                {/* coin */}
                <div className="flex items-center border-b border-gray-200 pb-4 mb-6">
                  <FcRating className="ml-2 w-5 h-5" />
                  <p className="text-gray-600 text-sm font-semibold dark:text-gray-300">
                    150 امتیاز در سیتی کلاب
                  </p>
                  <HiExclamationCircle className="mr-2 text-gray-400 w-5 h-5" />
                </div>
                {/* button */}
                <div className="flex items-center justify-between gap-x-10 w-full ">
                  {/* <button className="bg-blue-600 w-full text-white font-semibold px-4 py-2 rounded-lg">
                    افزودن به سبد خرید
                  </button> */}
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                    className="bg-blue-600 w-full text-white font-semibold px-4 py-2 rounded-lg"
                  >
                    {CheckInCart(cart, product) ? (
                      <Link to="/cart">ادامه فرایند خرید</Link>
                    ) : (
                      <div className="flex items-center">
                        <span>افزودن به سبد خرید</span>
                        <TfiShoppingCart className="w-6 h-6 pt-1 mr-1" />
                      </div>
                    )}
                  </button>
                  <div>
                    <span className="font-bold text-lg ml-1 dark:text-white">
                      {product ? product.price : null}
                    </span>
                    <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-gray-600 dark:text-gray-300 flex items-center after:mr-3 before:ml-3 after:flex-1 after:border-b after:border-gray-700 justify-center before:flex-1 before:border-b before:border-gray-700 text-center font-bold text-xl mb-7">
                  ناموجود
                </h2>

                <p className="text-center font-semibold dark:text-white">
                  متاسفانه این کالا موجود نیست
                </p>
              </div>
            )}
          </div>
          {/* button */}
          {product.extant == true ? (
            <div className="lg:hidden flex items-center dark:bg-slate-600 justify-between gap-x-10 shadow-2xl shadow-gray-600 border-t border-gray-300 w-full fixed z-50 bottom-0 right-0 left-0 bg-white px-4 py-4">
              <button className="bg-blue-600 w-full text-white font-semibold px-4 py-2 rounded-lg">
                افزودن به سبد خرید
              </button>
              <div>
                <span className="font-bold text-base ml-1 dark:text-white">
                  {product ? product.price : null}
                </span>
                <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                  تومان
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <p>loading</p>
      )}
      {/* button */}
    </section>
  );
};

export default SingleProductPage;
