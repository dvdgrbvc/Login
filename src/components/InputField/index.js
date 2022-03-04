import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
function InputField({ label, name, type, id, placeholder, required }) {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const ShowPassword = (e) => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-light text-gray-200 pb-3"
      >
        {label}
      </label>
      {type === "password" ? (
        <div className="relative">
          <input
            id="password"
            name="password"
            autoComplete="current-password"
            type={values.showPassword ? "text" : "password"}
            className="appearance-none block w-full px-4 py-2.5 font-light border border-gray-300 rounded placeholder-gray-50 focus:outline-none text-xs md:text-sm"
          />
          <div
            className="absolute top-3.5 right-2.5 cursor-pointer"
            onClickCapture={ShowPassword}
          >
            {values.showPassword ? (
              <EyeIcon className="w-4 text-black" />
            ) : (
              <EyeOffIcon className="w-4 text-black" />
            )}
          </div>
        </div>
      ) : (
        <div>
          <input
            name={name}
            type={type}
            id={id}
            required={required}
            placeholder={placeholder}
            className="appearance-none block w-full px-4 py-2.5 font-light border border-gray-300 rounded placeholder-gray-50 focus:outline-none text-xs md:text-sm"
          />
        </div>
      )}
    </div>
  );
}
InputField.defaultProps = {
  label: "LawyerID",
  placeholder: "Enter your OperatorID...",
};
export default InputField;
//Test