import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Dj from "../Pages/Dj";
import User from "../Pages/User";
import SplashScreen from "../Pages/SplashScreen";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/User" element={<User  />} />
        <Route exact path="/Dj" element={<Dj />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
