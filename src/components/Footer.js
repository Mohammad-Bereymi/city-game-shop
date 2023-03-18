import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="relative bottom-0 left-0 w-full dark:bg-slate-700 bg-white py-4 px-6 mt-60 border-t border-gray-300 shadow-md shadow-gray-500">
      {/* 1 */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-bold text-2xl dark:text-blue-600 text-blue-700 md:text-4xl">
          سیتی گیم
        </span>
        <Link to="#up">
          <button className="flex items-center dark:text-gray-300 dark:border-gray-300 cursor-pointer justify-between px-2 py-2 md:p-4 text-gray-400 border border-gray-400 rounded-xl">
            <span>بازگشت به بالا</span>
            <span>
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
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-y-2 dark:text-white text-gray-500 text-sm  md:text-lg mb-12 md:mb-6">
        <p>تلفن پشتیبانی: 0714-887963</p>
        <p>7روز هفته پاسخ گوی شما هستیم</p>
      </div>
      {/* 3 */}
      <div className="flex items-start justify-between mb-6 flex-wrap">
        <div className="mb-6">
          <h3 className="font-semibold text-lg dark:text-white mb-6 md:text-xl">
            با سیتی گیم
          </h3>
          <ul className="flex flex-col gap-y-3  dark:text-gray-400 text-gray-500">
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">اتاق خبر سیتی گیم</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">فروش در سیتی گیم</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">فرصت های شغلی</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">گزارش تخلف در سیتی گیم</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">تماس با سیتی گیم</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">درباره سیتی گیم</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl mb-4 dark:text-white">
            خدمات مشتریان
          </h3>
          <ul className="flex flex-col gap-y-3 dark:text-gray-400 text-gray-500">
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">
                پاسخ به پرسش های متداول
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">
                رویه های بازگرداندن کالا
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">شرایط استفاده</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">حریم خصوصی</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">گزارش باگ</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className="font-semibold dark:text-white text-lg md:text-xl mb-4">
            راهنمایی خرید سیتی گیم
          </h3>
          <ul className="flex flex-col gap-y-3 dark:text-gray-400 text-gray-500">
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg"> نحوه ثبت سفارش</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg"> رویه ارسال سفارش</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link className="text-sm md:text-lg">شیوه های پرداخت</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start gap-y-12 mb-14 md:mb-10">
          <span className="font-semibold text-lg md:text-xl dark:text-white">
            با ما همراه باشید !
          </span>
          <div className="flex items-center justify-between w-60">
            <BsInstagram className="w-6 h-6 cursor-pointer dark:text-gray-300 text-gray-500 md:w-8 md:h-8" />
            <BsTwitter className="w-6 h-6 cursor-pointer dark:text-gray-300 text-gray-500 md:w-8 md:h-8" />
            <BsYoutube className="w-6 h-6 cursor-pointer dark:text-gray-300 text-gray-500 md:w-8 md:h-8" />
            <BsLinkedin className="w-6 h-6 cursor-pointer dark:text-gray-300 text-gray-500 md:w-8 md:h-8" />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="md:hidden flex items-center justify-between mb-14 md:mb-10">
        <span className="font-semibold text-lg md:text-xl">
          با ما همراه باشید !
        </span>
        <div className="flex items-center justify-between w-60">
          <BsInstagram className="w-6 h-6 cursor-pointer text-gray-500 md:w-8 md:h-8" />
          <BsTwitter className="w-6 h-6 cursor-pointer text-gray-500 md:w-8 md:h-8" />
          <BsYoutube className="w-6 h-6 cursor-pointer text-gray-500 md:w-8 md:h-8" />
          <BsLinkedin className="w-6 h-6 cursor-pointer text-gray-500 md:w-8 md:h-8" />
        </div>
      </div>
      {/* 5 */}
      {/* <div>
        <h3 className="font-bold text-bs mb-6 md:text-xl">
          فروشگاه اینترنتی سیتی گیم بررسی، انتخاب و خرید آنلاین
        </h3>
        <p className="text-gray-500 leading-9 md:text-xl">
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
          باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود
          برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه
          اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این
          طریق مشتریان ثابت خود را داشته باش
        </p>
      </div> */}
    </section>
  );
};

export default Footer;
