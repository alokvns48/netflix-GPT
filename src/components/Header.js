import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const nagivate = useNavigate()

  const user = useSelector((store)=>store.user)

  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      nagivate("/")
      // Sign-out successful.
    }).catch((error) => { 
      // An error happened.
      nagivate("/error")
    });
    
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      <div className="flex p-2 items-center">
        <img 
        className="w-10 h-10 rounded-lg"
        src={user?.photoURL} alt="user-icon" />
        <button
        className="font-bold text-white ml-2"
        onClick={handleSignOut}>(Sign out)</button>
      </div>
    </div>
  );
};

export default Header;
