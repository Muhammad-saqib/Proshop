import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Component/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { AddToCard } from '../Actions/CartAction'
const CartScreen = ({ match, location, history }) => {
     const dispatch = useDispatch()
     const productId = match.params.id
     const qty = location.search ? Number(location.search.split("=")[1]) : 1
     useEffect(() => {
          if (productId) {
               dispatch(AddToCard(productId, qty))
          }


     }, [dispatch, productId, qty])

     return (
          <div>

          </div>
     )
}

export default CartScreen
