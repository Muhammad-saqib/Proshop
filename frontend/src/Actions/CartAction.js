import { CARD_ADD_ITEM } from '../Constant/CartConstant'
import axios from 'axios'
export const AddToCard = (id, qty) => async (dispatch, getState) => {

     const { data } = await axios.get(`/api/product/${id}`)
     console.log(data)
     dispatch(
          {
               type: CARD_ADD_ITEM,
               payload: {
                    product: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.countInStock,
                    qty

               }

          }
     )

     localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems))


}