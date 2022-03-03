import React from "react";

function SidePopup({ title, description, className, onLogin, onRegister }) {
  return (
    <div
      className={`${className} bg-white shadow-blue rounded-xl space-y-6 w-full max-w-sm z-50 md:px-14 px-10 py-12 text-center`}
    >
      <h1 className="font-semibold text-base leading-6">{title}</h1>
      <p className="font-light text-xs leading-6 text-gray-200 pb-4">
        {description}
      </p>
      <div className="flex justify-between items-center space-x-8">
        <button
          onClick={onLogin}
          type="submit"
          className="w-48 mx-auto flex justify-center py-2.5 px-4 border border-transparent hover:border-blue-100 rounded-xl uppercase text-xs font-semibold text-white bg-blue-100 hover:text-blue-100 hover:bg-white transition-all"
        >
          Login
        </button>
        <button
          onClick={onRegister}
          type="submit"
          className="w-48 mx-auto flex justify-center py-2.5 px-4 border border-blue-100 rounded-xl uppercase text-xs font-semibold text-blue-100 bg-transparent hover:text-white hover:bg-blue-100 transition-all"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default SidePopup;
