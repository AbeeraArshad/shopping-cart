import { Navbar } from "../Components/Navbar";
import { useLocation } from 'react-router-dom';
import { Card } from "../Components/Card";
import { DescriptionCard } from "../Components/DescriptionCard";

export const ProductDetails = () =>{

    const location = useLocation();
//the data here will be an object since an object was
const data = location.state;
console.log(data);
    
    
    return(
        <>
        <Navbar/>
        <div>
        <DescriptionCard data={data}></DescriptionCard>
        </div>
       {/* {data.map((data)=>{
        return(<Card data={data}></Card>)
       })} */}
      </>
    )
}