import { useFormik } from "formik";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import Input from "../common/Input";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import * as yup from "yup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../services/loginUserService";
import { useAuth, useAuthAction } from "../context/AuthProvider";
import { useSearchParams } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل نا معتبر است")
    .required("لطفا ایمیل خود را وارد کنید"),

  password: yup
    .string()
    .required("لطفا پسورد خود را وارد کنید")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      " پسورد حداقل 8کاراکتر باشد,شامل یک حروف بزرگ,یک حروف کوچک و یک کاراکتر مخصوص"
    ),
});

const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const redirectUser = searchParams.get("redirect") || "/";
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (auth) navigate(redirectUser);
  }, [redirectUser, auth]);
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      console.log(data);
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
        <h2 className="mb-6 text-center text-xl text-blue-700 py-2 px-4 rounded-lg font-semibold w-full">
          فروشگاه اینترنتی سیتی گیم
        </h2>
        <Input name="email" label="ایمیل" formik={formik} type="email" />
        <Input
          name="password"
          label="رمز عبور"
          formik={formik}
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className={`${
            !formik.isValid && "bg-gray-200 cursor-not-allowed"
          } bg-blue-600 py-2 px-4 cursor-pointer  rounded-lg my-3 text-white font-semibold w-full`}
        >
          ورود
        </button>
        {error && <p className="text-red-600 my-1">{error}</p>}

        <Link to={`/signup?redirect=${redirectUser}`}>
          <span className="text-blue-500"> هنوز ثبت نام نکرده اید؟</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
