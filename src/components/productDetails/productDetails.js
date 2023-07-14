import "../productDetails/productDetails.css";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { FaShoppingCart,FaStar,FaAngleRight } from "react-icons/fa";
import { useStateContext } from "../context/Context";

function ProductDetails(){
  const {id} =useParams();
  const [productDetail, setProductDetail] = useState([]);
  const { qty,onAdd}=useStateContext();
  const [rating,setRating]=useState(0);
  const [count,setCount]=useState(0);
  useEffect(() => {
    window.scrollTo(0,0);
      fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
      .then((res) => res.json())
      .then(data =>{
            setProductDetail(data);
            setRating(data.rating.rate)
            setCount(data.rating.count)
          }   
      )
  }, [id]);
  
  
    
  return  (
    <section id="single-product">
       <div id="product-article-2">
        <img src={productDetail.image} alt="" id="main-img" />
        <p className="more-info">+ {Math.floor(Math.random() * 7) + 1} More</p>
        <button id={id} onClick={() => onAdd(productDetail, qty)}>
          <FaShoppingCart size={22}/>
           <p>Add to Cart</p>
        </button>
        <hr/>
        </div>
         <div id="product-article-3">
        <div id="price">
            <h2>{productDetail.title}</h2>
            <h3 className="price">
                ₹{productDetail.price}
            <span className="discount-info">
              {((productDetail.price) * 1/100).toFixed(1)}% off
            </span>
            </h3>
            <div className="rating-info">
                <p>{rating}  <FaStar /></p>
               {count} Reviews
            </div>

            <h5 className="firstorder-info">
                <img
                    src="https://www.svgrepo.com/show/250311/percentage-discount.svg"
                    alt="" />
                ₹{Math.floor(Math.random() * 150)} discount on 1st order
            </h5>
            <p>Free Delivery</p>
        </div>
        
        <div id="size">
            <p>Select Size</p>
            <button>Free Size</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
        </div>
        <div id="details">
            <p>Product Details</p>
            <p>{productDetail.description}</p>
            <p>Sizes: </p>
            <p>S (Chest Size : 38 in, Length Size: 27 in)</p>{" "}
            <p>M (Chest Size : 40 in, Length Size: 27.5 in) </p>
            <p>L (Chest Size : 42 in, Length Size: 28 in)</p>
            <p>XL (Chest Size : 44 in, Length Size: 28.5 in)</p>
            <p>Country of Origin : India</p>
            <p>More Information</p>
        </div>
    </div>
      <div id="soldBy">
        <h6>
            <span>{Math.round(Math.random() * 400 + 50)}</span> Products{" "}
            <span>{Math.floor(Math.random() * 5000 + 100)}</span> Followers
          </h6>
        </div>
        <div id="information">
          <p>
            View All Reviews <FaAngleRight />
          </p>
          <button>Lowest Price</button>
          <button>7-day Returns</button>
          <button>Cash on Delivery</button>
        </div>
        </section>
  );
 
}

export default ProductDetails;