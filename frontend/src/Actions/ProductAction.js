import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,PRODUCT_LIST_DETAIL_SUCCESS, PRODUCT_LIST_DETAIL_FAIL, PRODUCT_LIST_DETAIL_REQUEST } from '../Constant/ProductConstant'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
     try {
          dispatch({ type: PRODUCT_LIST_REQUEST })
          const { data } = await axios.get('/api/products');
          dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
     } catch (error) {
          dispatch({ type: PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message?error.response.data.message:'error is occured' });
     }


}

export const Product=(id)=>async(dispatch)=>{
  try{
   dispatch({type:PRODUCT_LIST_DETAIL_REQUEST})
   const {data} = await axios(`/api/product/${id}`);   
   dispatch({ type: PRODUCT_LIST_DETAIL_SUCCESS, payload: data })

  }
  catch(error){
     dispatch({type:PRODUCT_LIST_DETAIL_FAIL,payload:error.response && error.response.data.message?error.message.data.message:'error is occured'})
  }



}