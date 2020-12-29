import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Component/Product';
import { listProducts } from '../Actions/ProductAction';
import {Message} from '../Component/Message'
import {Loader} from '../Component/Loader'
const HomeScreen = () => {
	const disptch = useDispatch();
	
	useEffect(
		() => {
			disptch(listProducts());
		},
		[ disptch ]
	);
	const productList= useSelector(state=>state.productList)
	const {Loading,products,error}=productList;

   
	return (
		<>
		{Loading ?(<Loader/>):error ?(<Message  variant='danger'>{error}</Message>):
		(<Row>
		{products.map((x) => {
			return (
				<Col sm={12} lg={4} xl={3}>
					<Product key={x._id} product={x} />
				</Col>
			);
		})}
	</Row>)}
	</>);
};

export default HomeScreen;
