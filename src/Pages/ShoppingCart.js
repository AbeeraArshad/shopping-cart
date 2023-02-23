import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
 import { Card } from '../Components/Card';
 import styles from '../Components/card.module.css';
import Quantity from '../Components/Quantity';




export const ShoppingCart =()=>{

    const [cart, setCart] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch('http://localhost:9090/api/shopping_cart/all')
            const data = await response.json()
            setCart(data)
            console.log(data)
          }
          catch(e){
            console.log('caught the bug')
            console.log(e)
          }
        }
        fetchData()
    }, [])
    return(
        
        <> 
        
        <div className={styles.card}>
            <Navbar/>
            <h1>ShoppingCart</h1>
        {cart.map((data, index) => (
          <div key={index}>
            <h3>{data.name}</h3>
         < img  src={data.image_Link} alt="Product1" />
            <p>{data.price}</p>
            <p>{data.totalPrice}</p>
            <Quantity/>
            <button>Delete</button>
          </div>
        ))}
      </div>
    
        </>
    )
    
}