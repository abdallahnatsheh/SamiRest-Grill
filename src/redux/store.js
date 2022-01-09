import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import appReducer from "./appReducer";
/*importing react store with debugging for windows web browsers
create a store and presistore for the menu and the cart */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };
