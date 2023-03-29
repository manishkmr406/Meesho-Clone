import "../Products/product.css";
import { useState,useEffect } from 'react';
import ProductList from '../ProductList/productList.js';
function Product(){
  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState(" ");
  const [searchResult,setSearchResult]=useState([]);

  useEffect(()=>{
      fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1")
     .then(res =>res.json())
     .then(data=>{
        setProducts(data);
     })
  },[])

  useEffect(()=>{
    setSearchResult(products.filter((singleProduct)=>{
        return singleProduct.title.toLowerCase().includes(search.toLowerCase())
    }) )
   // setSearchResult(searchResult);
  },[products,search]);

    return (
        <>
        <div className="Product-box">
        <h1 >Products For You</h1>
        <div className="product-category-container">
            <aside className="product_category_aside">
                <h3>Category</h3>
                <div className="search_category_input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" onChange={
                        (e)=> setSearch(e.target.value)
                    }/>
                </div>
                <div className="display_Category_list">
                    <label for="men's clothing" >
                        <input type="checkbox" id="men's_clothing"/>
                        <span>Men's clothing</span>
                    </label>
                    <label for="jewelery">
                        <input type="checkbox" id="jewelery"/>
                        <span>Jewelery</span>
                    </label>
                    <label for="kurtas">
                        <input type="checkbox" id="kurtas"/>
                        <span>Kurtas</span>
                    </label>
                    <label for="electronics">
                        <input type="checkbox" id="accessories"/>
                        <span>Electronics</span>
                    </label>
                    <label for="sarees">
                        <input type="checkbox" id="sarees"/>
                        <span>sarees</span>
                    </label>
                    <label for="watch">
                        <input type="checkbox" id="watch"/>
                        <span>watch</span>
                    </label>
                </div>
                
            </aside>
            <main className="product_category_display">
                {searchResult.length !==0 ?
                searchResult.map((el)=>{
                    return <ProductList key={el.id} id={el.id} title={el.title} price={el.price} description={el.description} category={el.category} image={el.image} rating={el.rating.rate} />
                }):
                products.map((el)=>{
                    return <ProductList key={el.id} id={el.id} title={el.title} price={el.price} description={el.description} category={el.category} image={el.image} rating={el.rating.rate} />
                })}
            </main>
        </div>
    </div>

        </>
    )
}

export default Product;