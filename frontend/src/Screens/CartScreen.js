import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../Component/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem, FormControl } from 'react-bootstrap'
import { AddToCard } from '../Actions/CartAction'
const CartScreen = ({ match, location, history }) => {
     const dispatch = useDispatch()
     const productId = match.params.id
     const qty = location.search ? Number(location.search.split("=")[1]) : 1
     const cart = useSelector(state => state.cart);
     const { cartItems } = cart;
     console.log(cartItems)
     useEffect(() => {
          if (productId) {
               dispatch(AddToCard(productId, qty))
          }


     }, [dispatch, productId, qty])

     const removeFromCartHandler = (id) => {

     }
     const checkOutHandler = () => {
          history.push('/login?redirect=shipping')

     }



     return (
          <Row >
               <Col md={ 8 }>
                    <h1>Shopping Cart</h1>
                    { cartItems.length === 0 ? <Message>Your cart is empty<Link to='/'>Go Back</Link></Message> :
                         (
                              <ListGroup variant='flush'>
                                   {cartItems.map(item => (
                                        <ListGroupItem key={ item.id }>
                                             <Row>
                                                  <Col md={ 2 }>
                                                       <Image src={ item.image } alt={ item.name } fluid rounded />
                                                  </Col>
                                                  <Col md={ 3 }>
                                                       <Link to={ `/product/${item.product}` }>{ item.name }</Link>
                                                  </Col>
                                                  <Col md={ 2 }>${ item.price }</Col>
                                                  <Col md={ 2 }>
                                                       <FormControl as='select' value={ item.qty } onChange={ (e) => { dispatch(AddToCard(item.product, Number(e.target.value))); } } >
                                                            { [...Array(item.countInStock).keys()].map((x) => <option key={ x + 1 } value={ x + 1 }>{ x + 1 }</option>) }
                                                       </FormControl>
                                                  </Col>
                                                  <Col md={ 2 }>
                                                       <Button type='button' variant='light' onClick={ () => removeFromCartHandler(item.id) }>
                                                            <i className='fas fa-trash'></i>

                                                       </Button>
                                                  </Col>

                                             </Row>
                                        </ListGroupItem>

                                   )) }
                              </ListGroup>


                         ) }
               </Col>
               <Col md={ 4 }>
                    <Card>
                         <ListGroup>
                              <ListGroupItem>
                                   <h2 style={ { fontSize: '1.5rem' } }>Subtotal ({ cartItems.reduce((acc, item) => acc + item.qty, 0) })items</h2>
                                   ${ cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) }
                              </ListGroupItem>
                              <ListGroupItem>
                                   <Button type='Button' className='btn-block' disabled={ cartItems.length === 0 } onClick={ checkOutHandler }>Proceed to Check Out</Button>
                              </ListGroupItem>
                         </ListGroup>

                    </Card>

               </Col>
          </Row>
     )
}

export default CartScreen
