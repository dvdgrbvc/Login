import React from "react";
import InputField from "../InputField";

function LoginComponent({ title, onClick, titleId }) {
  return (
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center">
      <div className="bg-white py-8 px-7 shadow-black rounded-lg sm:px-10 lg:-mr-20 lg:ml-4 z-20">
        <h1 className="font-semibold text-base leading-6 text-center">
          {title}
        </h1>
        <form className="space-y-6 pt-8" action="#" method="POST">
          <InputField
            label={`${titleId}ID`}
            placeholder={`Enter your ${titleId}ID...`}
            id="text"
            name="text"
            type="text"
          />
          <InputField
            label="Password"
            placeholder="Enter your Password..."
            id="password"
            name="password"
            type="password"
          />

          <div className="text-xs text-center pb-4">
            <a href="" className="underline ">
              Forgot my password
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-64 mx-auto flex justify-center py-2.5 px-4 border border-transparent hover:border-blue-100 rounded-xl uppercase text-xs font-semibold text-white bg-blue-100 hover:text-blue-100 hover:bg-white transition-all"
            >
              Login
            </button>
            <p className="font-medium text-sm  mt-2 text-center">
              New User?
              <span
                onClick={onClick}
                className="text-blue-100 pl-1 underline cursor-pointer"
              >
                Register here!
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
LoginComponent.defaultProps = {
  title: "Login as an Lawyer or register via the link",
  titleId: "Lawyer",
};
export default LoginComponent;
