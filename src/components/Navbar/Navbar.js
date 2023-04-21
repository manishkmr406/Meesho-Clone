 import '../Navbar/Navbar.css';
 import logo from "../../img/meesho.png";
 import search from "../../img/search.png";
 import mobile from "../../img/mobile.png";
 import user from "../../img/user.png";
 import cart from "../../img/cart.png";
 import { Link } from "react-router-dom";
 import { useState,useEffect } from 'react';
 import { useStateContext } from '../context/Context';
 
 function Navbar(){
    const [input,setInput]= useState("");
    const [display,setDisplay]= useState("hiden");
    const { cartItems }=useStateContext();
    console.log(cartItems)
    const handlerInput=(e)=>{
        setInput(e.target.value);
    
    }
    
    useEffect(()=>{
     if(input===""){
     setDisplay("hiden")
     }else
     setDisplay("show");
    },[input]);

    return (
        <div className="header">
        <div className='headerLeft'>
        <div className="logocontainer">
            <img src={logo} alt=''/>
        </div>
        <div className="searchInputContainer">
            <div className="searchIcon">
                <img src={search} alt=''/>
            </div>
            <input type="text" className="inputSearch" value={input} placeholder="Try Saree, Kurti or Search by Product Code" onChange={handlerInput}/>
            <div className="inputCloseSearch">
            <i className="fa-solid fa-xmark {display}"></i>
            </div>
        </div>
        </div>
          <div className='headerRight'>
            <div className='downloadContainer'>
                <div className='mobileIcon'>
                    <img src={mobile}/>
                </div>
                <p>Download App</p>
                <div className='downloadHoverBtn'>
                    <h3>Download From</h3>
                    <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow" target="_blank">
                        <img src='https://images.meesho.com/images/pow/playstore-icon-big.webp' alt=''/>
                    </a>
                    <a href="https://apps.apple.com/us/app/meesho/id1457958492" target="_blank">
                        <img src='https://images.meesho.com/images/pow/appstore-icon-big.webp' alt=''/>
                    </a>
                </div>
            </div>
            <div className='SupplierContainer'>
                <p>Become a Supplier</p>
            </div>
            <div className='profileAndCart'>
              <div className='profileContainer'>
                <div className='profileIcon'>
                    <img src={user} alt=''/>
                </div>
                <p>Profile</p>
              </div>
              <div className='cartContainer'>
              
                <Link to ="/checkout/cart"><div className='cartIcon'>
                    <img src={cart} alt=''/>
                    <p>{cartItems.length}</p>
                    </div>
                    </Link>
                <p>Cart</p>
              </div>
            </div>
          </div> 
        </div>
    )
 }
 export default Navbar;