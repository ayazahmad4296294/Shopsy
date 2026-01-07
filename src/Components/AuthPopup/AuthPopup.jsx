import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { IoClose } from "react-icons/io5";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

const AuthPopup = () => {
  const { isPopupOpen, closeAuthPopup } = useAuth();
  const [view, setView] = useState("login"); // 'login' or 'register'

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/50 backdrop-blur-sm px-4">
      <div 
        data-aos="zoom-in"
        className="relative max-w-md w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden p-8"
      >
        <button
          onClick={closeAuthPopup}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <IoClose />
        </button>

        {view === "login" ? (
          <div>
            <Login isPopup={true} />
            <p className="mt-4 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                onClick={() => setView("register")}
                className="text-primary font-bold hover:underline"
              >
                Register
              </button>
            </p>
          </div>
        ) : (
          <div>
            <Register isPopup={true} />
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => setView("login")}
                className="text-primary font-bold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPopup;
