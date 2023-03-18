import { useCart, useCartAction } from "../context/cartProvider";
import { CiShoppingCart } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const FavoritePage = () => {
  const { favorite } = useCart();
  const dispatch = useCartAction();
 
  return (
    <section className="container max-w-screen-2xl mx-auto mb-6 px-6 md:px-4 lg:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 dark:bg-slate-700 bg-white rounded-3xl shadow-lg shadow-gray-200 overflow-hidden">
        {favorite.map((f) => (
          <div className="px-2 sm:px-6 py-4 border-b flex flex-col gap-y-2 lg: border-l border-gray-200">
            {/* image */}
            <div className="flex items-center gap-x-4">
              <div className="w-48 h-36 overflow-hidden">
                <img
                  src={f.image}
                  className="w-full h-full object-contain rounded-xl "
                />
              </div>
              {/* name */}
              <div>
                <p className="leading-7 font-semibold dark:text-white">
                  {f.name}
                </p>
              </div>
            </div>
            {/* price */}
            <div className="w-full flex items-center justify-end dark:text-white">
              <p className="text-left font-bold">{f.price}</p>
              <p className="text-left text-sm mr-1 font-semibold">تومان</p>
            </div>
            <div className="flex items-center justify-between gap-x-5">
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_PRODUCT_FAVORITE", payload: f })
                }
                className="flex items-center justify-center border flex-2 dark:border-red-400 border-red-700 rounded-md px-2 py-1 text-red-700"
              >
                <span className="ml-1 font-semibold text-sm dark:text-red-400">
                  حذف
                </span>
                <span>
                  <CiTrash className="w-5 h-6 dark:text-red-400" />
                </span>
              </button>
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: f })}
                className="flex-1 dark:border-blue-400 dark:text-blue-400 flex items-center  justify-center border border-blue-700 rounded-md px-2 py-1 text-blue-700"
              >
                <span>
                  <CiShoppingCart className="w-6 h-6" />
                </span>
                <span className="font-semibold text-sm">
                  افزودن به سبد خرید
                </span>
              </button>
              <NavLink to={`/product/${f.id}`}>
                <button className="flex-1 dark:border-blue-400 dark:text-blue-400 border border-blue-700 rounded-md px-2 py-1 text-blue-700">
                  مشاهده محصول
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoritePage;
