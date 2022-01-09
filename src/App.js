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

document.body.style.backgroundColor = "black";
const mainStyle = {
  background: "#00000",
  color: "#000",
};
/*
  as we see here i use routes to browse the website 
  when i route its start checking from the begging till the end of the routes list
  if the urt existed with a valid elemnt it render that element on web
  if its not existed to ender the NotFound element component 
 */
function App() {
  return (
    <div className="App" style={mainStyle}>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/daily-deals" element={<DailyDeals />} />
        <Route path="/special-order" element={<SpecialOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
