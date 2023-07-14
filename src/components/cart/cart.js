import { useNavigate} from "react-router-dom";
import "../cart/cart.css"
import { useStateContext } from "../context/Context";
import { toast } from "react-toastify";
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect } from "react";

function Cart(){
    const {cartItems,totalPrice,totalQuantities,toggleCartItemQuanitity,onRemove} =useStateContext();
   const { user }=useUserAuth();
   const navigate=useNavigate();

   useEffect(()=>{
    window.scrollTo(0,0);
   },[]);

   const addToAuth=()=>{
	if(!user){
		toast.error("Please login first",{
		  position: toast.POSITION.TOP_RIGHT,}
		)
		navigate('/signup');
   }else{
	navigate('/checkout/address');
   }
}

    return(
        <main id="cart-main">
      <section>
        <h1>Order Summary</h1>
        <h2>
          Cart <span id="cart-line">| </span>
          <span id="total-items">{cartItems.length} Items</span>
        </h2>
		{cartItems.length >=1 && cartItems.map((item,index)=>(
		  <div key={index} id={item.id}>
			<img src={item.image} alt="" />
			<h3>{item.title}</h3>
			<p>Only {Math.floor(Math.random()*5)} Left In Stock</p>
			<h5>
				<span>₹{item.price}</span>
			</h5>
			<p>Delivery between APRIL 13 - APRIL 15</p>
			<div id={index}>
			<p>Quality: </p>
			<button onClick={()=>
			toggleCartItemQuanitity(item.id, 'dec')}>-</button>
			<p>{item.quantity}</p>
			<button onClick={()=>
			toggleCartItemQuanitity(item.id, 'inc')}>+</button>
			</div>
			<button id={item.id} onClick={()=> onRemove(item)}>Remove</button>
		  </div>
		))}
		</section>
		<section>
		<div id="payment-details">
		<p>PAYMENT DETAILS</p>
		<p>
         Total Amount:{" "}
            <span>
              Rs.{(Math.round(totalPrice*100)/100).toFixed(2)}
            </span>
          </p>
		  <button onClick={addToAuth}>CheckOut</button>
		</div>
		<div>
          <p style={{ fontSize: "11px", lineHeight: "145%", color: "#888" }}>
            Meesho is a technology platform to facilitate transaction of
            business. The products and services are offered for sale by the
            sellers. The user authorizes the delivery personnel to be his agent
            for delivery of the goods. For details read{" "}
            <span>Terms &amp; Condition.</span>
          </p>
        </div>
		</section>
		
        
   </main>

    )
}
export default Cart;