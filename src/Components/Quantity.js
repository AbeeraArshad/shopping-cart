import React, {useState} from "react";
function Quantity({defaultValue, changeQuantity}) {
    const [quantity, setQuantity] = useState(defaultValue || 1);
  
    const incrementQuantity = () => {
      setQuantity(quantity + 1);
      changeQuantity(quantity + 1)
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        changeQuantity(quantity + 1)
      }
    };
  
    return (
      <div>
        <button onClick={decrementQuantity}>-</button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        <button onClick={incrementQuantity}>+</button>
      </div>
    );
  }
  
  export default Quantity;