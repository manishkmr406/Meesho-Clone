
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js';
import Navbar2 from './components/Navbar2/Navbar2.js';
import Content from './components/content/Content.js';
import Product from './components/Products/product';
import ProductDetails from './components/productDetails/productDetails';
import Footer from './components/Footer/Footer'; 
import Cart from './components/cart/cart';
import Login from './components/login/login';
import Address from './components/Address/Address';
import Payment from './components/payment/payment';
import Summary from './components/summary/summary';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Navbar2/>
  <Routes>
      <Route path="/" element={
        <>
        <Content/>
        <Product/>
          </>
      }/>
      <Route path="/details/:id" element={<ProductDetails/>} exact/>
      <Route path="/checkout/cart" element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout/address' element={<Address/>}/>
      <Route path='/checkout/payment' element={<Payment/>}/>
      <Route path='/checkout/summary' element={<Summary />}/>

    </Routes>
    <Footer/>
  </BrowserRouter>   
);
}
export default App;
