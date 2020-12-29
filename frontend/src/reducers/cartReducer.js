import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from '../Constant/CartConstant';

export const cartReducer = (state = { cardItem: [] }, action) => {
     switch (action.type) {
          case CARD_ADD_ITEM:
               const items = action.payload;
               const existItem = state.cartItems.find((x) => x.product === items.product);
               if (existItem) {
                    return {
                         ...state,
                         cardItems: state.cartItems.map((x) => (x.product === existItem.product ? items : x))
                    };
               } else {
                    return {
                         ...state,
                         cardItem: [...state.cartItems, items]
                    };
               }

          default:
               return state;
     }
};
