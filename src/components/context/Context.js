
import { createContext,useContext,useEffect, useState } from "react";

export const Context=createContext();



export const StateContext = ({ children }) => {

//   function setCartToLocal(){
//     let newCartData=localStorage.getItem("productcart");
//     if(newCartData === []){
//      return [];
//     }else{
//      return JSON.parse(newCartData);
//     }
// }
// function setTotalToLocal(){
//  let newPrice=localStorage.getItem("total");
//    return JSON.parse(newPrice);
// }
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty]=useState(1);
   
    

    useEffect(()=>{
      fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
     .then(res =>res.json())
     .then(data=>{
        setProducts(data);
     })
  },[]);
    
  // useEffect(()=>{
  //   localStorage.setItem("productcart",JSON.stringify(cartItems));
  //   localStorage.setItem("total",JSON.stringify(totalPrice));
  // },[cartItems]);


  
    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item.id === product.id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
              if(cartProduct.id === product.id)
               return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
              }
            })
            setCartItems(updatedCartItems);
          }else {
            product.quantity = quantity;
            
            setCartItems([...cartItems, { ...product }]);
          }
    }

    const onRemove = (product) => {
      foundProduct = cartItems.find((item) => item.id === product.id);
      const newCartItems = cartItems.filter((item) => item.id !== product.id);
  
      setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    }

    const toggleCartItemQuanitity = (id, value) => {
      foundProduct = cartItems.find((item) => item.id === id)
      index = cartItems.findIndex((product) => product.id === id);
      const newCartItems = cartItems.filter((item) => item.id !== id)
  
      if(value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        }
      }
    }
 return (
        <Context.Provider 
        value={{
          products,
          setProducts,
          cartItems,
          qty,
          setCartItems,
          onAdd,
          totalQuantities,
          setTotalQuantities,
          totalPrice,
          setTotalPrice,
          onRemove,
          toggleCartItemQuanitity,
          }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext =()=> useContext(Context);
