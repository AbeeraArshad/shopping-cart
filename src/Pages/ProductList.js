import  {Navbar} from '../Components/Navbar'
import {data} from '../Data/data'
import { Card } from '../Components/Card'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductList = () =>{

    const navigate = useNavigate();

    function handleNavigation() {

        navigate('/Descrip', { state: data })
    }
    
    const[products ,setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch('http://localhost:8080/api/product_list/all')
            const data = await response.json()
            setProducts(data)
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
        <Navbar/>

       {products.map((data)=>{
        return(<Card data={data}></Card>)
       })}
      </>
    )
}