import { useSelector,useDispatch } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import Shopping_products from './Api' 
import { addToCart } from '../Redux/actions'
import { useState } from 'react'

const Home=()=>{
    const dispatch=useDispatch()
    const products = Shopping_products
    const [total,settotal]=useState(0)
    console.log(products)
    
    const handleAddToCart =(id) => {
        console.log(products[id-1])
        dispatch(addToCart(products[id-1]))
        settotal(products[id-1].price+total)
    }
  
  return (
    <>
    <Link to={{pathname:'/Checkout',
    state:{totally: total}}} totalp="total"><button className='checkout' >Checkout</button></Link>
  

    <div className='products-container'>
        {
            products?.map((product,index)=>{
                return(
                    <div className='product-card' key={index}>
                        <img src={product.image}/>
                        <div className='info'>
                        <div>{product.name} </div>
                        <div>{product.price} $ </div>
                        </div>
                        <p>{product.desc} </p>
                        <button onClick={()=>handleAddToCart(product.id)}>Add</button>
                    </div>
                )})
        }
        
    </div>

    </>
  )
}

export default Home

