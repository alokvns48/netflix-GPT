import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleButtonClick = () => {
    setErrorMessage(checkValidData(email.current.value, password.current.value,isSignInForm? null: name.current.value))
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
          className="w-full h-full object-cover"
        />
      </div>
      <form className="w-3/12 absolute p-12 mx-auto left-0 right-0 my-24 bg-black rounded-md text-white bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-transparent border border-gray-400"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md bg-transparent border border-gray-400"
        />
        <input
        ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-transparent border border-gray-400"
        />
        <p className="text-red-600 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="bg-red-600 p-2 my-4 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netfilx? Sign up now."
            : "Already a user? Log in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
