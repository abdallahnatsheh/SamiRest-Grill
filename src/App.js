import "./App.css";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import { NotificationContainer } from "react-notifications";

import Manage from "./magage";

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
          <Manage />
        </CartContext>
      </AuthContext>
      <NotificationContainer />
    </div>
  );
}

export default App;
