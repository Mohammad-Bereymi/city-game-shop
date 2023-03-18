import { useFormik } from "formik";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import Input from "../common/Input";
import { redirect } from "react-router-dom";
import * as yup from "yup";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { signUpUser } from "../services/signUpUserService";
import { useEffect, useState } from "react";
import { useAuth, useAuthAction } from "../context/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};
const validationSchema = yup.object({
  name: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),

  email: yup
    .string()
    .email("ایمیل نا معتبر است")
    .required("لطفا ایمیل خود را وارد کنید"),
  phoneNumber: yup
    .string()
    .required("لطفا شماره موبایل خود را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل نامعتبر است")
    .nullable(),
  password: yup
    .string()
    .required("لطفا پسورد خود را وارد کنید")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      " پسورد حداقل 8کاراکتر باشد,شامل یک حروف بزرگ,یک حروف کوچک و یک کاراکتر مخصوص"
    ),

  passwordConfirmation: yup
    .string()
    .required("تاییدیه پسورد لازم است")
    .oneOf([yup.ref("password"), null], "پسورد هم خوانی ندارد"),
});

const SignUpForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = useAuth();
  const redirectUser = searchParams.get("redirect") || "/";
  console.log(redirectUser);
  const setAuth = useAuthAction();
  const [error, setError] = useState("");
  useEffect(() => {
    if (auth) navigate(redirectUser);
  }, [redirectUser, auth]);
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };
    try {
      const { data } = await signUpUser(userData);
      setError(null);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      navigate(redirectUser);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="max-w-xl w-full px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="mt-2 py-6 px-4 rounded-xl dark:bg-slate-700 bg-white shadow-xl mb-12"
      >
        <h2 className="mb-6 text-center text-xl dark:text-blue-600 text-blue-700 py-2 px-4 rounded-lg font-semibold w-full">
          فروشگاه اینترنتی سیتی گیم
        </h2>

        <Input name="name" label="نام و نام خاوادگی" formik={formik} />
        <Input name="email" label="ایمیل" formik={formik} type="email" />
        <Input
          name="phoneNumber"
          label="شماره موبایل"
          formik={formik}
          type="tel"
        />
        <Input
          name="password"
          label="رمز عبور"
          formik={formik}
          type="password"
        />
        <Input
          name="passwordConfirmation"
          label=" تایید رمز عبور"
          formik={formik}
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className={`${
            !formik.isValid && "bg-gray-200 cursor-not-allowed"
          } bg-blue-600 py-2 px-4 cursor-pointer rounded-lg my-3 text-white font-semibold w-full`}
        >
          ثبت نام
        </button>
        {error && <p className="text-red-600 my-1">{error}</p>}
        <Link to={`/login?redirect=${redirectUser}`}>
          <span className="text-blue-500">قبلا ثبت نام کرده اید؟</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
