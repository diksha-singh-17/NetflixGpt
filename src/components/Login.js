import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background pic"
        />
      </div>
      <form className="absolute p-12 w-4/12 my-36 bg-black mx-auto right-0 left-0 opacity-90">
        <h1 className=" text-3xl p-2 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="bg-red-500 p-2 m-2 w-full bold rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white p-2 m-2 cursor-pointer underline"
          onClick={ToggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Alreday registered. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
