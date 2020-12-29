import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_DETAIL_FAIL,
	PRODUCT_LIST_DETAIL_REQUEST,
	PRODUCT_LIST_DETAIL_SUCCESS
} from '../Constant/ProductConstant';

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { Loading: true, products: [] };
		case PRODUCT_LIST_SUCCESS:
			return { Loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL:
			return { Loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productReducer = (state = { product: { numReviews:[]} }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_DETAIL_REQUEST:
			return { Loading: true, product: {...state} };
		case PRODUCT_LIST_DETAIL_SUCCESS:
			return { Loading: false, product: action.payload };
		case PRODUCT_LIST_DETAIL_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
