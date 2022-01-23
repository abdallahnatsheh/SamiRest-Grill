/*
this used for the cart to count the quantity of every item and the final price in the cart
*/
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems, selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      cartItem.deals.enabled
        ? accumulatedQuantity +
          cartItem.quantity *
            (cartItem.price - (cartItem.price * cartItem.deals.value) / 100)
        : accumulatedQuantity + cartItem.quantity * cartItem.price,

    0
  )
);
