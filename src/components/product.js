import { json, Link, NavLink } from "react-router-dom";
import { useCart, useCartAction } from "../context/cartProvider";
import CheckInCart from "../utility/CheckInCart";
import { BiHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { logDOM } from "@testing-library/react";
import convertNumbers2English from "../utility/buildNumberPersian";
import fixNumber from "../utility/buildNumberPersian";
import toPersianNum from "../utility/buildNumberPersian";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({ products }) => {
  // const [hoverProduct, setHoverProduct] = useState(null);
  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseOver = (id) => {
  //   const hoverProduct = products.find((p) => p.id == id);
  //   setHoverProduct(hoverProduct);
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  const dispatch = useCartAction();
  const { cart } = useCart();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <>
      {products.map((product) => (
        <div
          // onMouseOver={() => handleMouseOver(product.id)}
          // onMouseOut={() => handleMouseOut(product.id)}
          id={product.id}
          className="flex transition-all duration-200 flex-col border dark:bg-slate-700 bg-blue-400 border-gray-300 shadow-xl rounded-lg overflow-hidden"
        >
          <div className="bg-slate-400 relative z-0">
            <img src={product.image} alt="" />
            {/* <div
              onClick={() => clickFavorite(product.id)}
              className="absolute top-1 left-1 hover:top-2 hover:left-2 transition-all duration-300 opacity-100"
            >
              {isHovering && hoverProduct.id == product.id && (
                <span
                  onClick={() =>
                    dispatch({ type: "ADD_TO_FAVORITE", payload: product })
                  }
                  id={product.id}
                  className={`${
                    isHovering &&
                    hoverProduct.id &&
                    ` transition-all duration-200`
                  } hover:bg-blue-300 flex w-8 h-8  text-white bg-blue-500 cursor-pointer border border-blue-400 shadow-blue-100 items-center justify-center rounded-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              )}
            </div> */}
          </div>
          <div className="px-4">
            <p className="truncate mt-4 mb-4 text-white">{product.name}</p>
            {product.extant ? (
              <div className="">
                <p className="text-white text-left text-base font-bold md:text-sm mb-4 lg:text-lg">
                  {product.price}
                  <span className="text-sm"> تومان</span>
                </p>
                <button
                  onClick={() => addProductHandler(product)}
                  className="py-2 px-4 mb-4 text-white font-bold dark:bg-slate-600 bg-blue-500  rounded-lg"
                >
                  {CheckInCart(cart, product) ? (
                    <Link to="/cart">ادامه سفارش</Link>
                  ) : (
                    <div
                      onClick={() =>
                        toast.success(
                          "این محصول با موفقیت به سبد خرید شما افزوده شد"
                        )
                      }
                    >
                      ثبت سفارش
                    </div>
                  )}
                </button>
              </div>
            ) : (
              <div className="mb-4 mt-12 py-4 flex items-center border border-white rounded-xl px-6  justify-center  ">
                <p className="font-bold text-white">این کالا موجود نیست</p>
              </div>
            )}
            <div className="mb-6">
              <NavLink
                to={`/product/${product.id}`}
                className="flex items-center text-white text-base font-semibold md:text-sm  lg:text-lg"
              >
                <span>مشاهده محصول</span>
                <FaArrowLeft className="h-4 w-4 mr-2 mt-2" />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
