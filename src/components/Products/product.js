import "../Products/product.css";
import {  useEffect, useState } from 'react';
import ProductList from '../ProductList/productList.js';
import { useStateContext } from "../context/Context";

function Product(){
  const {products}=useStateContext();
  const [search,setSearch]=useState(" ");
  const [searchResult,setSearchResult]=useState([]);
  const [filters,setFilters]=useState([]);

useEffect(()=>{
  if(search===""){
        return setSearchResult([])
    }
    setSearchResult(products.filter((singleProduct)=>{
        return singleProduct.title.toLowerCase().includes(search.toLowerCase())
    }) )
  },[search]);
  
  const handleCategory=(catItem) =>{
    const filterProduct=products.filter((catName)=>
    catName.category === catItem)
    if(filterProduct.length>0)
     setFilters(filterProduct)
    }
    return (
        <div className="Product-box">
        <h1 >Products For You</h1>
        <div className="product-category-container">
            <aside className="product_category_aside">
            <div className="search_category_input">
            <i className="fa-solid fa-magnifying-glass"></i>
    <form onSubmit={(e)=>e.preventDefault()}>
    <input type="text" placeholder="Search" onChange={
    (e)=> setSearch(e.target.value)
    }/>
    </form>
    </div>
    <div className="display_Category_list">
        <h3>Category</h3>
            <button className="category-btn" onClick={()=> handleCategory("men's clothing")}>Men's clothing</button>
            <button className="category-btn" onClick={()=> handleCategory("women's clothing")}>Women's clothing</button>
            <button className="category-btn" onClick={()=> handleCategory("jewelery")}>Jewelery</button>
            <button className="category-btn" onClick={()=> handleCategory("electronics")}>Electronics</button>
            <button className="category-btn" onClick={()=> setFilters(products)}>All</button>
            </div>
                
            </aside>
            <main className="product_category_display">
            {searchResult.length > 0 ? (
                searchResult.map((el,idx)=>{
                    return <ProductList key={idx} id={el.id} title={el.title} price={el.price} description={el.description} category={el.category} image={el.image} rating={el.rating.rate} />
                })):filters.length >0 ?
                filters.map((el,idx)=>{
                    return <ProductList key={idx} id={el.id} title={el.title} price={el.price} description={el.description} category={el.category} image={el.image} rating={el.rating.rate} />
                }):
                products.map((el,idx)=>{
                    return <ProductList key={idx} id={el.id} title={el.title} price={el.price} description={el.description} category={el.category} image={el.image} rating={el.rating.rate} />
                })
               } 
            </main>
        </div>
    </div>

    )
}
export default Product;