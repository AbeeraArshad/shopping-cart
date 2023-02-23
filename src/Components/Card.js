import { Navbar } from "./Navbar";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './card.module.css';
import Quantity from "./Quantity";
export const Card = ({ data }) => {

    
      
   


    // const handleAddToCart = () => {
    //     addToCart({
    //         ...data

    //     });
    // }



    // const [cartdata, setCartdata] = useState([]);

    // const addToCart = (data) => {
    //     setCartdata([...cartdata, data]);
    // }
    const navigate = useNavigate();

    function handleNavigation() {

        navigate('/Descrip', { state: data })
    }
    





    return (
        <>
            <div>

                <div className={styles.card}>
                    <img className={styles.topi} src={data.image_Link} alt="Product1" />
                    <h1 onClick={handleNavigation}>{data.name} </h1>
                    <p className={styles.price}> <span>Price :</span>  {data.price}  </p>
                    <p>{data.shortD}</p>
                    <Quantity />
                    {/* <p className={styles.btn}><button>Add to Cart</button></p> */}
                    <p className={styles.btn}><button>Add to Cart</button></p>
                    
                    {/* <p>Cart data: {JSON.stringify(cartdata)}</p> */}
                       
                </div>
            </div>
        </>
    )
}
