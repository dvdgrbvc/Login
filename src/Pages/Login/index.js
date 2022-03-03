import React, { useState } from "react";
import BgImage from "../../assets/bg-main.png";
import SidePopup from "../../components/SidePopup";
import DropDown from "../../components/DropDown";
import LoginComponent from "../../components/Login";
import RegisterComponent from "../../components/Register";
function Login() {
  const [account, setAccount] = useState(true);
  const [lawyer, setLawyer] = useState(true);
  const [operator, setOperator] = useState(true);
  const hanlerLogin = () => {
    setLawyer(false);
    setAccount(true);
  };
  const hanlerRegister = () => {
    setLawyer(true);
    setAccount(true);
  };
  const loginOperator = () => {
    setOperator(false);
    setAccount(false);
  };
  const registerOperator = () => {
    setOperator(true);
    setAccount(false);
  };
  return (
    <div className="lg:px-10 lg:pb-10 w-full relative">
      <div className="md:px-6 md:py-4">
        <div className="flex justify-end py-3">
          <DropDown />
        </div>
        <div className="bg-white w-full max-w-7xl mx-auto rounded-t-3xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          <div className="lg:col-span-5 px-6 md:py-7 py-20">
            <h1 className="font-semibold text-black text-3xl text-center pt-2">
              Login or Register
            </h1>
            <p className="text-center text-xs font-light py-8">
              Log in or register for our online service for a
              Berechtigungsschein
            </p>
            {account ? (
              <>
                {lawyer === true ? (
                  <LoginComponent
                    title="Login as an Lawyer or register via the link"
                    titleId="Lawyer"
                    onClick={hanlerLogin}
                  />
                ) : (
                  <RegisterComponent
                    titleId="Lawyer"
                    title="Register as an Lawyer or register via the link"
                    onClick={hanlerRegister}
                  />
                )}
              </>
            ) : (
              <>
                {operator ? (
                  <LoginComponent
                    titleId="Operator"
                    title="Login as an Operator or register via the link"
                    onClick={loginOperator}
                  />
                ) : (
                  <RegisterComponent
                    titleId="Operator"
                    title="Regidter as an Operator or register via the link"
                    onClick={registerOperator}
                  />
                )}
              </>
            )}
          </div>
          <div className="lg:col-span-7 relative">
            <img
              src={BgImage}
              alt="BgImage"
              className="absolute top-0 left-0 h-full w-full"
            />
            <div className="relative z-10 py-20 px-5 flex flex-col items-center justify-center h-full space-y-16">
              <SidePopup
                onRegister={hanlerLogin}
                onLogin={hanlerRegister}
                title="Login as an Applicant"
                description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
              />
              <SidePopup
                onRegister={loginOperator}
                onLogin={registerOperator}
                title="Login as an Operator"
                description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
