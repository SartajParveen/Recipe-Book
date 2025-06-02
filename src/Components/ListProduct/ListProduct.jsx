import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
import AddProduct from '../AddProduct/AddProduct';
import { Routes } from 'react-router-dom';
import {Link} from 'react-router-dom'

import { useNavigate } from "react-router-dom";
import EditProduct from '../EditProduct/EditProduct';



const ListProduct = () => {

  // const [allproducts,setAllProducts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // Load recipes from localStorage when component mounts
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  // const fetchInfo = async ()=>{
  //   await fetch('http://localhost:4000/allproducts')
  //   .then((res)=>res.json())
  //   .then((data)=>{setAllProducts(data)});
  // }

  // useEffect(()=>{
  //   fetchInfo();
  // },[])


  // const remove_product=async(id)=>{
  //   await fetch('http://localhost:4000/removeproduct',{
  //     method:'POST',
  //     headers:{
  //       Accept:'application/json',
  //       'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify({id:id})
  //   })
  //   await fetchInfo();

  // }

  const removeFromLocal=(id)=>{
    const existing =JSON.parse(localStorage.getItem("recipes")) || [];
    const updated =existing.filter(recipe=>recipe.id!==id);
    localStorage.setItem("recipes",JSON.stringify(updated));
    setRecipes(updated);
    alert("Recipe Removed!");
  }


  const edit=(product)=>{
    // const existing =JSON.parse(localStorage.getItem("recipes")) || [];
    // // const updated =existing.filter(recipe=>recipe.id!==product.id);

    // localStorage.setItem("recipes",JSON.stringify(updated));
    // setRecipes(updated);
    // alert("Recipe Removed!");
    // const data={id:id,name:name};
    navigate("/edit-product",{state:{product}});

  }
  return (
    <div className='list-product'>
      <h1>Recipe List</h1>
      <div className="listproduct-format-main">
        <p>Recipe</p>
        <p>Title</p>
        <p>Ingredients</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
        <p>Edit</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {/* let recipes = JSON.parse(localStorage.getItem("recipes")) || []; */}
  
        {recipes.map((product,index)=>{
if (!product || !product.image) return null;
            return <>
            <div key={index} className="listproduct-format">
                <img src={product.image} alt="" className='listproduct-product-icon' />
                <p>{product.name}</p>
               
                <ul className="product-ingredients">
  {product.ingredients.split(',').map((item, i) => (
    <li key={i}>{item.trim()}</li>
  ))}
</ul>

                <p>{product.price}</p>
                <p>{product.category}</p>
                <img onClick={()=>removeFromLocal(product.id)} src={cross_icon} alt="" className="listproduct-remove-icon" />
                <button onClick={()=>edit(product)} className='edit'>Edit</button>
            </div>
            <hr />
            </>
        })}
      </div>
    </div>
  )
}

export default ListProduct


function displayRecipes() {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.forEach(recipe => {
    // Create and add HTML elements to display the recipe
  });
}





