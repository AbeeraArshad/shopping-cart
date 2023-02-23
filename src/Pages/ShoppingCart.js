import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
 import { Card } from '../Components/Card';
 import styles from '../Components/card.module.css';
import {useNavigate}  from 'react-router-dom';
import Quantity from '../Components/Quantity';
import { ProductList } from './ProductList';





export const ShoppingCart =()=>{

    const navigate = useNavigate();

    function onHandle() {
      navigate('/')
    }
    function handleChange(){
        navigate('/logout')
    }

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
            <tr><td><button onClick={onHandle}>RETURN TO HOME PAGE</button></td>
            <td><button onClick={handleChange}>CHECK OUT</button></td>
            </tr>
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