 import '../Navbar/Navbar.css';
 import logo from "../../img/meesho.png";
 import search from "../../img/search.png";
 import mobile from "../../img/mobile.png";
 import users from "../../img/user.png";
 import cart from "../../img/cart.png";
 import { Link, useNavigate } from "react-router-dom";
 import { useState,useEffect } from 'react';
 import { useStateContext } from '../context/Context';
import { useUserAuth } from '../context/UserAuthContext';
 
 function Navbar(){
    const [input,setInput]= useState("");
    const [display,setDisplay]= useState(false);
    const [searchTitle,setSearchTitle]= useState([]);
    const { cartItems,products }=useStateContext();
    const [profile, setProfile] = useState(false);
    const navigate=useNavigate();
    const { user,logOut }=useUserAuth();
    console.log(cartItems)
    const handlerInput=(e)=>{
        setInput(e.target.value);
    }
    
    useEffect(()=>{
      if(input===""){
        setSearchTitle([]);
        setDisplay(false)
      }
     else if(input!==""){
     setDisplay(true)
     const searched=products.filter((prod)=> prod.title.toLowerCase().includes(input.toLowerCase()))
     setSearchTitle(searched);
    }
    },[input]);

    function handleSearchClick(id){
      navigate(`/details/${id}`);
      setInput("");
    }

    function openLoginbtn() {
        setProfile(!profile);
      }
    
      function handleuser() {
        if (!user) {
          navigate("/signup");
        } else if (user) {
          logOut();
          setProfile(false);
        }
      }

    return (
        <div className="header">
        <div className='headerLeft'>
        <div className="logocontainer" onClick={()=> navigate("/")}>
            <img src={logo} alt=''/>
        </div>
        <div className="searchInputContainer">
            <div className="searchIcon">
                <img src={search} alt=''/>
            </div>
            <input type="text" className="inputSearch" value={input} placeholder="Try Saree, Kurti or Search by Product Code" onChange={handlerInput}/>
            <div className="inputCloseSearch">
            {display && <i className="fa-solid fa-xmark" style={{cursor: 'pointer'}} onClick={()=> setInput("")}></i>}
            </div>
            {display && (<div class="searchRecentModal">
                    <h3>Recent Searches</h3>
                    {searchTitle.map((prod,idx)=>(
                      <div key={idx} class="listofRecent">
                      <div class="recentItem" onClick={()=>handleSearchClick(prod.id)}>
                <div class="recentIcon">
                     <img src={prod.image} alt=''/>
                </div>
                <p>{prod.title}</p>
            </div>
                  </div>
                    ))}
                </div>
            )}
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
              <div className='profileContainer' onClick={openLoginbtn}>
                <div className='profileIcon'>
                    <img src={users} alt=''/>
                </div>
                <p>Profile</p>
                {profile && (
                <div style={{ display: "flex" }}>
                  <div className="profileHoverBtnContainer">
                    <h3>
                      Hello {!user ? "User" : user.email.substring(0, user.email.indexOf("@"))}
                    </h3>
                    <h5>
                      {" "}
                      {user
                        ? "Welcome to Meesho"
                        : "Access your account"}
                    </h5>
                    <button onClick={handleuser} className="login_btn">
                      Sign {user ? "out" : "up"}
                    </button>
                  </div>
                </div>
              )}
              </div>
              <div className='cartContainer' onClick={()=> navigate('/checkout/cart')}>
                <div className='cartIcon'>
                    <img src={cart} alt=''/>
                    <p>{cartItems.length}</p>
                </div>
                <p>Cart</p>
              </div>
            </div>
          </div> 
        </div>
    )
 }
 export default Navbar;