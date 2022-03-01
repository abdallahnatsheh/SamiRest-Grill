import "./App.css";
import MainPage from "./Components/MainPage";
import DailyDeals from "./Components/DailyDeals";
import SpecialOrder from "./Components/SpecialOrder";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutUs from "./Components/AboutUs";
import Support from "./Components/Support";
import NotFound from "./Components/NotFoundPage";
import Cart from "./Components/Cart";
import MenuPage from "./Components/MenuPage";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import { NotificationContainer } from "react-notifications";
import ResetPass from "./Components/ResetPass";
import Profile from "./Components/Profile";

document.body.style.backgroundColor = "black";
const mainStyle = {
  background: "#00000",
  color: "#000",
};
/*
  as we see here i use routes to browse the website 
  when i route its start checking from the begging till the end of the routes list
  if the urt existed with a valid elemnt it render that element on web
  if its not existed to ender the NotFound element component .
          <Route path="/admin-panel" element={<AdminPanel />} />

 */
function App() {
  return (
    <div className="App" style={mainStyle}>
      <AuthContext>
        <CartContext>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/daily-deals" element={<DailyDeals />} />
            <Route path="/special-order" element={<SpecialOrder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="/reset-password" element={<ResetPass />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContext>
      </AuthContext>
      <NotificationContainer />
    </div>
  );
}

export default App;
