
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, ListGroupItem, Button, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Component/Rating';
import React, { useEffect, useState } from 'react';
import { Product } from '../Actions/ProductAction'
import { Loader } from '../Component/Loader'
import { Message } from '../Component/Message'


const ProductScreen = ({ history, match }) => {
     const [Qty, setQty] = useState(1)
     const Dispatch = useDispatch();
     useEffect(() => {
          Dispatch(Product(match.params.id))

     }, [Dispatch, match.params.Id]);


     const state = useSelector(state => state.product)
     const { Loading, product, error } = state

     const addToCardHandler = (e) => {
          history.push(`/cart/${match.params.id}?qty=${Qty}`)
     }

     return (
          <div>
               <Link className="btn btn-light my-3" to="/" >Go Back</Link>
               {(Loading ? <Loader /> : error ? <Message /> :

                    <Row><Col md={ 6 }><Image src={ product?.image } alt={ product?.name } fluid /></Col><Col md={ 3 }>
                         <ListGroup variant='flush'>
                              <ListGroup.Item>
                                   <h3>{ product?.name }</h3>
                              </ListGroup.Item>
                              <ListGroup.Item>
                                   <Rating value={ product?.rating } text={ `${product?.numReviews} reviews` }></Rating>

                              </ListGroup.Item>
                              <ListGroup.Item>
                                   price:{ product?.price }
                              </ListGroup.Item>
                              <ListGroup.Item>
                                   description:{ product?.description }
                              </ListGroup.Item>

                         </ListGroup>
                    </Col>
                         <Col md={ 3 }>
                              <Card>
                                   <ListGroup variant='flush'>
                                        <ListGroupItem><Row><Col> Price</Col><Col>${ product?.price }</Col></Row></ListGroupItem>
                                        <ListGroupItem><Row><Col>Stack</Col><Col>{ product?.countInStock ? 'in Stock' : 'Out Of  Stock' }</Col></Row></ListGroupItem>
                                        { product.countInStock > 0 && (
                                             <ListGroupItem>
                                                  <Row>
                                                       <Col>Qty</Col>
                                                       <Col>
                                                            <FormControl as='select' qty={ Qty } onChange={ (e) => setQty(e.target.value) } >
                                                                 { [...Array(product.countInStock).keys()].map((x) => <option key={ x + 1 } value={ x + 1 }>{ x + 1 }</option>) }
                                                            </FormControl>
                                                       </Col>
                                                  </Row>
                                             </ListGroupItem>


                                        ) }
                                        <ListGroupItem><Button className='btn-block' type='button' disabled={ product?.countInStock === 0 } onClick={ addToCardHandler }>Add to Chart</Button></ListGroupItem>
                                   </ListGroup>

                              </Card>
                         </Col>

                    </Row>) }
          </div>
     )
}

export default ProductScreen
