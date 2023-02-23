import Quantity from "./Quantity"
import styles from './DescriptionCard.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


export const DescriptionCard = ({ data }) => {

    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()

    const changeQuantity = (value) => {
        setQuantity(value)
    }

    const fetchData = async () => {
        const product = {
            name: data.name,
            image_Link: data.image_Link,
            quantity,
            price: data.price,
            totalPrice: data.price * quantity,
        }
        try {
            const response = await fetch('http://localhost:9090/api/shopping_cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            const data = await response.json()
            console.log(data)
        }
        catch (e) {
            console.log('caught a bug')
            console.log(e)
        }
    }

    function handleNavigation() {
        fetchData()
        navigate('/shop')
    }

    return (
        <>
            <div>
                {console.log(quantity)}
                <div className={styles.descripcard}>
                    <img className="topi" src={data.image_Link} alt="Product1" />
                    <h1>{data.name}</h1>
                    <p ><span>Price :</span>{data.price}</p>
                    <p>{data.shortD}</p>
                    <p>{data.longD}</p>
                    <Quantity defaultValue={quantity} changeQuantity={changeQuantity} />
                    <p className={styles.btn}><button onClick={handleNavigation} >Add to Cart</button></p>

                </div>
            </div>
        </>
    )
}