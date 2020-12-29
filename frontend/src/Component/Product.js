import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../Component/Rating';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
	return (
		<div>
			<Card className="my-3 p-3 rounded">
				<Card.Img variant="top" src={product.image} />
				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title as="div">
							{' '}
							<strong>{product.name}</strong>
						</Card.Title>
					</Link>
					<Card.Text as="div">
						<div className="my-3">
							<Rating value={product.rating} text={`${product.numReviews} review`} color="red" />
						</div>
					</Card.Text>
					<Card.Text as="div">${`${product.price}`}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Product;
