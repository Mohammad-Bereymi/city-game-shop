const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="flex flex-col items-start gap-y-2 mb-2">
      <label htmlFor={name} className="font-semibold dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        id={name}
        className="outline-none w-full dark:text-white dark:bg-slate-600 py-2 px-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-400"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600 ">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
