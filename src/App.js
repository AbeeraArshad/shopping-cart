import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import  {Navbar} from './Components/Navbar'
import { ProductList } from './Pages/ProductList';
import {Card} from './Components/Card';
import './App.css';
import Quantity from './Components/Quantity';
import { ProductDetails } from './Pages/ProductDetails';
import { ShoppingCart } from './Pages/ShoppingCart';
import { CheckOut } from './Pages/CheckOut';



function App() {
  return (
    <div>
     {/* <ProductList/> */}
     <Router>
      {/* <NavBar/> */}
      {/* <Search/> */}
      <Routes>
        {/* <Route element={<Search/>}path='/'></Route> */}
        <Route element={<ProductList/>}path='/'></Route>
        <Route element={<ProductDetails/>}path='/Descrip'></Route>
        <Route element={<ShoppingCart/>}path='/shop'></Route> 
        <Route element={<CheckOut/>}path='/logout'></Route> 
      </Routes>
      </Router>
       
    </div>
  );
}

export default App;
