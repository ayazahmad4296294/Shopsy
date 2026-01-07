import React from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const GuardRoute = ({ children }) => {
  const { isLoggedIn, openAuthPopup } = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    if (!isLoggedIn) {
      // If we are on home page and trying to go somewhere else
      // Or if the route being accessed is guarded
      openAuthPopup(location.pathname);
    }
  }, [isLoggedIn, location.pathname, openAuthPopup]);

  if (!isLoggedIn) {
    // Return null or some placeholder to prevent navigation
    // The popup will handle the UI
    return null;
  }

  return children;
};

export default GuardRoute;
