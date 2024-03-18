import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './checkout.css'
function Checkout() {
  const cart = useSelector(state=>state)
  console.log(cart)
  const location = useLocation()
  const Total = location.state?.totally

  let abc = 0
  return (
    <>
      <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
         cart?.map((carts, index) => (
              <tr key={index}>
              <td>{carts.name}</td>
              <td>{carts.desc}</td>
              <td>{carts.price}</td>  
              <td>{abc+=Number(carts.price)}</td>
            </tr>
          ))}
          
        </tbody>
       
        
        
      </table>
      <div className='total'>Total {abc}</div>
      </div>
    </>
  )
}

export default Checkout