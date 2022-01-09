import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
/**
here i create storage for the data that will be saved as cookies even if i exit the browser 
i added cart to the white list to save it in cookies using redux-presist
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const appReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(persistConfig, appReducer);
