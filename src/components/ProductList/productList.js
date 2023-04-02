import React from 'react';
import "../ProductList/productList.css";
import {FaStar} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function ProductList({
    id,
    title,
    price,
    category,
    image,
    rating
}){
  const navigate=useNavigate();
    return(
        <>
         <div className="products-container" key={id} onClick={()=> {
          navigate(`/details/${id}`);
          }}>
                <img src={image} alt="{category}" className="main-img" />
                <p className="quantity">
                  + {Math.floor(Math.random() * 7) + 1} More
                </p>
                <p className="product-name">{title}</p>
                <p className="price">
                  ₹{price} {" "}
                </p>

                <p className="firstorder">
                  <img className="order-img"
                    src="https://www.svgrepo.com/show/250311/percentage-discount.svg"
                    alt="ban"
                  />
                  ₹{Math.floor(Math.random() * 150)} discount on 1st order
                </p>
                <p className="rating">
                  <span
                    style={{
                      backgroundColor:
                        rating >= 3.5 ? " #23bb75" : "rgb(244, 182, 25) ",
                    }}
                  >
                    {rating} <FaStar color="#fff" />
                  </span>
                  <span className="category">{category}</span>
                </p>
        </div>
        </>
    )
}

export default ProductList;