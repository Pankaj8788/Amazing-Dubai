// Components/InactivityHandler.jsx
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InactivityHandler = ({ children, timeout = 30 * 60 * 1000 }) => {
  const [lastActivity, setLastActivity] = useState(Date.now());
  const navigate = useNavigate();

  // Reset the inactivity timer
  const resetTimer = useCallback(() => {
    setLastActivity(Date.now());
  }, []);

  useEffect(() => {
    const handleActivity = () => resetTimer();

    // Events that will trigger activity
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, handleActivity));

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
    };
  }, [resetTimer]);

  // Check inactivity every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastActivity >= timeout) {
        // Clear session or token here
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastActivity, timeout, navigate]);

  return children;
};

export default InactivityHandler;
