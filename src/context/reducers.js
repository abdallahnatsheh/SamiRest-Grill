export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EMPTY_CART = "EMPTY_CART";

//add meal to cart ,check if existed will increase the quantity if not add it
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
    updatedItem.types = product.types;
    updatedItem.addons = product.addons;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};
//it will empty the cart after successfull purchase
const emptyCart = (state) => {
  return { ...state, cart: [] };
};

//remove item from cart
//checks if existed and if there is one it will be removed from cart if theres alot it will
//decrease the quantity and lower the total price

const removeProductFromCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    const today = new Date(
      Date("he-IL", {
        timeZone: "Asia/Jerusalem",
      })
    );
    let TypeSum = 0;
    if (updatedItem.addons.length > 0) {
      updatedItem.addons.map((addon) =>
        updatedItem.price.addons.find((add, i) => {
          if (add.name === addon.name) {
            TypeSum += Number(add.value);
          }
        })
      );
    } else {
      TypeSum = 0;
    }
    let sum = updatedItem.types.value
      ? updatedItem.types.value + TypeSum
      : 0 + TypeSum;
    let finalprice =
      (updatedItem.deals.enabled && !updatedItem.deals.dailyDealEnable) ||
      (updatedItem.deals.enabled &&
        updatedItem.deals.dailyDealEnable &&
        today >= new Date(updatedItem.deals.fromDate.seconds * 1000) &&
        today < new Date(updatedItem.deals.toDate.seconds * 1000))
        ? sum - (sum * updatedItem.deals.value) / 100
        : sum;
    updatedItem.totalPrice -= finalprice;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};
//manage cart actions for the dispatch functions
export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.product, state);
    case EMPTY_CART:
      return emptyCart(state);
    default:
      return state;
  }
};
