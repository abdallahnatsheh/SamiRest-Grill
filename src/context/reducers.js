export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: product.quantity });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity += product.quantity;
    updatedItem.totalPrice = product.totalPrice;
    updatedCart[updatedItemIndex] = updatedItem;
    console.log("updatedItem", updatedItem);
  }

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
  let finalprice = product.deals.enabled
    ? product.price.defaultPrice.value -
      (product.price.defaultPrice.value * product.deals.value) / 100
    : product.price.defaultPrice.value;

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedItem.finalprice -= finalprice;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.product, state);
    default:
      return state;
  }
};
