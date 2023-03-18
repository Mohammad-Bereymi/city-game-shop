import { Link, NavLink } from "react-router-dom";
import Product from "../components/product";
import { useCart, useCartAction } from "../context/cartProvider";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import toPersianNum from "../utility/toEnglishNumber";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartAction();
  if (!cart.length) {
    return (
      <div className="container mx-auto px-4 flex flex-col gap-y-6">
        <div className="bg-red-300 py-4 px-6 rounded-lg">
          <span className="text-red-600">متاسفانه سبد خرید شما خالیه</span>
        </div>
        <Link to="/" className="cursor-pointer">
          <div className="bg-blue-500 py-4 px-6 rounded-lg">
            <span className="text-white">میخوام برم به صفحه محصولات</span>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  sm:gap-x-4  gap-y-8  px-4 container mx-auto max-w-7xl">
      {/* cart list */}
      <section className="border sm:col-span-2  border-gray-300 rounded-lg shadow-lg">
        <div className="p-2 flex flex-col gap-y-10">
          {cart.map((c) => (
            // cart product
            <div className="w-full dark:bg-slate-700 grid grid-cols-5 gap-y-4 gap-x-4 grid-rows-4  bg-white px-4 py-6 rounded-lg overflow-hidden shadow-xl">
              {/* image */}
              <div className="col-span-2 dark:shadow-sm row-span-4 md:row-span-5 h-auto   border border-blue-200 shadow-md shadow-blue-100 rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={c.image}
                  alt={c.name}
                />
              </div>
              {/*description*/}
              <div className="col-span-3 row-span-3 md:row-span-5 mr-2 ">
                <div className="flex flex-col gap-y-6 h-full ">
                  <p className="dark:text-white text-sm leading-6 sm:text-lg sm:leading-8 ">
                    {c.name}
                  </p>
                  <ul className="flex flex-col justify-between dark:text-gray-400 lg:justify-evenly lg:gap-y-1 h-full gap-y-3 text-gray-500">
                    {c.description.map((d) => (
                      <div className="flex items-center justify-start gap-x-2">
                        <AiOutlineCheckCircle className="sm:text-xl" />
                        <li className="text-sm sm:text-lg">{d.support}</li>
                      </div>
                    ))}
                  </ul>

                  <div className="hidden md:block">
                    <div className=" col-span-5 row-span-1  flex md:flex-col items-center md:items-start md:gap-y-3 justify-between ">
                      <p className="font-semibold dark:text-white sm:text-lg lg:text-xl md:mb-6 lg:mb-8">
                        {c.price} تومان
                      </p>
                      {/* buttons */}
                      <div className="flex items-center w-16 justify-start ">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "ADD_QUANTITY_PRODUCT",
                              payload: c,
                            })
                          }
                          className=" py-2 px-4 text-blue-500 border border-blue-500 rounded-tr-md rounded-br-md"
                        >
                          {/* <FaTrashAlt /> */}+
                        </button>

                        <button className="lg:font-semibold py-2 px-4 text-blue-500 border border-l-0 border-r-0 border-blue-500">
                          {c.quantity}
                        </button>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "DELETE_PRODUCT",
                              payload: c,
                            })
                          }
                          className=" py-2  px-4 text-blue-500 border border-blue-500 rounded-tl-md rounded-bl-md"
                        >
                          {/* <FaTrashAlt /> */}-
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* buttons */}

              <div className="md:hidden col-span-5 row-span-1  flex items-center justify-between ">
                <div className="flex items-center w-16 justify-start ">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_QUANTITY_PRODUCT",
                        payload: c,
                      })
                    }
                    className="py-1 px-3 text-blue-500 border border-blue-500 rounded-tr-md rounded-br-md"
                  >
                    {/* <FaTrashAlt /> */}+
                  </button>
                  <button className="py-1 px-3 text-blue-500 border border-l-0 border-r-0 border-blue-500">
                    {c.quantity}
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DELETE_PRODUCT",
                        payload: c,
                      })
                    }
                    className="py-1 px-3 text-blue-500 border border-blue-500 rounded-tl-md rounded-bl-md"
                  >
                    -
                  </button>
                </div>
                <p className="font-semibold sm:text-lg dark:text-white">{c.price} تومان</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* cart summery */}
      <section className="bg-white dark:bg-slate-700  h-72 rounded-xl shadow-lg sm:sticky sm:top-24  mb-8">
        <div className="flex flex-col gap-y-8 py-2 px-4 ">
          <div className="flex items-center dark:text-white justify-between text-gray-500">
            <span>قیمت کالاها</span>
            <span>{toPersianNum(total)}</span>
          </div>
          <div className="flex dark:text-gray-400 items-center justify-between text-gray-500">
            <span>تخیفیف کالاها</span>
            <span>0</span>
          </div>
          <hr className="font-bold bg-red-900" />
          <div className="flex dark:text-white items-center justify-between font-semibold">
            <span>جمع سبد خرید</span>
            <span>{toPersianNum(total)}</span>
          </div>
          <NavLink to="/signup?redirect=/checkout">
            <button className="bg-blue-600 py-2 w-full rounded-lg text-white font-semibold">
              ادامه سفارش
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default CartPage;

//   <section className="px-4  border border-blue-700 rounded-lg">
//         <div className="px-2 py-4 flex flex-col gap-y-6 gap-x-40">
//           {cart.map((c) => (
//             // cart product
//             <div className="flex items-center justify-between bg-white px-4 py-2 rounded-lg overflow-hidden shadow-lg">
//               {/* image and buttons */}
//               <div className="flex flex-col justify-between">
//                 {/* image */}
//                 <div className="w-[60%] h-auto mb-4 border border-gray-300 rounded-md overflow-hidden">
//                   <img className="w-full" src={c.image} alt={c.name} />
//                 </div>
//                 {/* buttons */}
//                 <div className="w-full flex items-center justify-between bg-slate-500">
//                   <div className="flex items-center w-16 justify-start ">
//                     <button className="py-2 px-3 text-blue-500 border border-blue-500 rounded-tr-md rounded-br-md">
//                       <FaTrashAlt />
//                     </button>
//                     <button className="py-1 px-4 text-blue-500 border border-r-0 border-blue-500 rounded-tl-md rounded-bl-md">
//                       {c.quantity}
//                     </button>
//                   </div>
//                   <p>{c.price} تومان</p>
//                 </div>
//               </div>
//               {/*description*/}
//               <div className="flex flex-col gap-y-3">
//                 <p className="text-sm">{c.name}</p>
//                 <ul className="flex flex-col gap-y-2 text-gray-400">
//                   {c.description.map((d) => (
//                     <li>{d.support}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
