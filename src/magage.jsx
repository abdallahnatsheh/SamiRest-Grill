import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import DailyDeals from "./Components/DailyDeals";
import SpecialOrder from "./Components/SpecialOrder";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutUs from "./Components/AboutUs";
import Support from "./Components/Support";
import NotFound from "./Components/NotFoundPage";
import Cart from "./Components/Cart";
import MenuPage from "./Components/MenuPage";
import ResetPass from "./Components/ResetPass";
import Profile from "./Components/Profile";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../src/Components/firebase/firebase.Config";
import { onAuthStateChanged } from "firebase/auth";

function Manage() {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      user ? setIsLogged(true) : setIsLogged(false);
      console.log("onAuthStateChanged user", user);
    });
  }, []);

  return (
    <div className="manage">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/daily-deals" element={<DailyDeals />} />
        <Route exact path="/special-order" element={<SpecialOrder />} />
        <Route path="/login" element={!isLogged ? <Login /> : <MainPage />} />
        <Route
          exact
          path="/signup"
          element={!isLogged ? <Signup /> : <MainPage />}
        />
        <Route exact path="/reset-password" element={<ResetPass />} />
        <Route
          exact
          path="/profile"
          element={isLogged ? <Profile /> : <MainPage />}
        />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/menu" element={<MenuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Manage;
