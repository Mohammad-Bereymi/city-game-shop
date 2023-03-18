import toEnglishDigits from "../utility/buildNumberPersian";
import convertNumbers2English from "../utility/buildNumberPersian";

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (updatedItemIndex < 0) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        return {
          ...state,
          total: state.total,
        };
      }
      return {
        ...state,
        cart: updateCart,
        total:
          state.total +
          Number(toEnglishDigits(action.payload.price.split(",").join(""))),
      };
    }
    case "ADD_QUANTITY_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id == action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
      return {
        ...state,
        cart: updatedCart,
        total:
          state.total +
          Number(toEnglishDigits(action.payload.price.split(",").join(""))),
      };
    }
    case "DELETE_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id == action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total:
            state.total -
            Number(toEnglishDigits(action.payload.price.split(",").join(""))),
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total:
            state.total -
            Number(toEnglishDigits(action.payload.price.split(",").join(""))),
        };
      }
    }
    case "DELETE_PRODUCT_FAVORITE": {
      const updatedFavorite = [...state.favorite];
      const filteredFavorite = updatedFavorite.filter(
        (item) => item.id != action.payload.id
      );
      return {
        ...state,
        favorite: filteredFavorite,
      };
    }
    case "ADD_TO_FAVORITE": {
      const updateFavorite = [...state.favorite];
      const updateItemIndex = updateFavorite.findIndex(
        (f) => f.id == action.payload.id
      );
      if (updateItemIndex < 0) {
        updateFavorite.push({ ...action.payload });
      } else {
        const filterFavorite = updateFavorite.filter(
          (f) => f.id !== action.payload.id
        );
        return {
          ...state,
          favorite: filterFavorite,
        };
      }
      return { ...state, favorite: updateFavorite };
    }
    default:
      return state;
  }
};

export default Reducer;
