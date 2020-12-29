import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
     productList: productListReducer,
     product: productReducer,
     cart: cartReducer
})

const cartItemFromStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []


const initialState = {
     cart: { cartItems: cartItemFromStorage }
}
const midlleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...midlleware)));
export default store
