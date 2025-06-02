

// import React, { useState } from 'react';
// import './EditProduct.css';
// import upload_area from '../../assets/upload_area.svg';
// import { useLocation, useNavigate } from 'react-router-dom';

// const EditProduct = () => {
//     const navigate=useNavigate();
//     const location = useLocation();
//     const {product} = location.state;
//   const [image, setImage] = useState(null);
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     image: "",
//     category: "VEG",
//     price: "",
//     ingredients: ""
//   });

//   const imageHandler = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProductDetails((prev) => ({
//         ...prev,
//         image: reader.result, // Store Base64 string
//       }));
//     };

//     if (file) {
//       reader.readAsDataURL(file); // Trigger onloadend
//     }
//   };

//   const changeHandler = (e) => {
//     setProductDetails({
//       ...productDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const EditToLocalStorage = (Updatedproduct) => {
//     const existing=JSON.parse(localStorage.getItem("recipes")) || [];

//     const updated=existing.map((recipe)=>
//         recipe.id===Updatedproduct.id?{...recipe,...Updatedproduct}:recipe
//     );
//     localStorage.setItem("recipes",JSON.stringify(updated));
//     alert("Recipe Edited!")
//     // setProductDetails({updated});
//     navigate('/listproduct');
//      setProductDetails({
//       name: "",
//       image: "",
//       category: "VEG",
//       price: "",
//       ingredients: ""
//     });
//     setImage(null);

//   };

//   return (
//     <div className='add-product'>
//       <h1>{product.name}</h1>

//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//           <p>Ingredients</p>
//           <input
//             value={productDetails.ingredients}
//             onChange={changeHandler}
//             type="text"
//             name='ingredients'
//             placeholder='Type Here'
//           />
//         </div>

//         <div className="addproduct-itemfield">
//           <p>Price</p>
//           <input
//             value={productDetails.price}
//             onChange={changeHandler}
//             type="text"
//             name='price'
//             placeholder='Type Here'
//           />
//         </div>
//       </div>

//       <div className="addproduct-itemfield">
//         <p>Category</p>
//         <select
//           value={productDetails.category}
//           onChange={changeHandler}
//           name='category'
//           className='add-product-selector'
//         >
//           <option value="VEG">VEG</option>
//           <option value="NON_VEG">NON-VEG</option>
//         </select>
//       </div>

//       <div className="addproduct-itemfield">
//         <label htmlFor="file-input">
//           <img
//             src={image ? URL.createObjectURL(image) : upload_area}
//             className='addproduct-thumnail-img'
//             alt="Upload Preview"
//           />
//         </label>
//         <input
//           onChange={imageHandler}
//           type="file"
//           name='image'
//           id='file-input'
//           hidden
//         />
//       </div>

//       <button onClick={()=>EditToLocalStorage(productDetails)} className='addproduct-btn'>Submit</button>
//     </div>
//   );
// };

// export default EditProduct;








import React from 'react'
import './EditProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'
import { data, useLocation, useNavigate } from 'react-router-dom'

const EditProduct = (props) => {
    const location = new useLocation();
    const {product} = location.state;
    const navigate = new useNavigate();

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:product.name,
    image:"",
    category:"VEG",
    price:"",
    ingredients:""
  })
  const imageHandler = (e) =>{
    // setImage(e.target.files[0]);
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = ()=>{
      setProductDetails(prev=>({...prev,image:reader.result}));

    };
    if(file){
      reader.readAsDataURL(file);
    }
  };
  
  const changeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  };

  const editLocalStorage=(product)=>{
    const existing = JSON.parse(localStorage.getItem("recipes")) || [];
    const updated = existing.map((recipe)=>
         recipe.id===product.id?{...recipe,...productDetails}:recipe
    );
    localStorage.setItem("recipes",JSON.stringify(updated));
    alert("Recipe Edited!");
    navigate("/listproduct");
    setProductDetails({
      name:"",
      image:"",
      category:"VEG",
      price:"",
      ingredients:""
    });
  }
  

  return (
    <div className='add-product'>
      <h1>{product.name}</h1>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Ingredients</p>
            <input value={productDetails.ingredients} onChange={changeHandler} type="text" name="ingredients" placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="veg">VEG</option>
            <option value="non-veg">NON-VEG</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>editLocalStorage(product)} className='addproduct-btn'>Submit</button>
    </div>
  )
}

export default EditProduct