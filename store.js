// Import createStore and combineReducers here.
import { createStore, combineReducers } from "redux";

// Import the slice reducers here.
import { cartReducer } from "../features/cart/cartSlice.js";
import { inventoryReducer } from "../features/inventory/inventorySlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js";

// Create and export the store here.
const reducers = {
  inventory: inventoryReducer,
  cart: cartReducer,
  currency: currencyFilterReducer,
};

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);
