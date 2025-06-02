// // import React from 'react'
// // import { useState } from 'react'
// // import './AddProduct.css'
// // import upload_area from '../../assets/upload_area.svg'

// // const AddProduct = () => {

// //     const [image,setImage]=useState(false);
// //     const [productDetails,setProductDetails]=useState({
// //         name:"",
// //         image:"",
// //         category:"VEG",
// //         new_price:"",
// //         old_price:""
// //     })
// //     const imageHandler = (e) =>{
// //         setImage(e.target.files[0]);
// //         // setImage(file);
// //         const reader = new FileReader();
// // //   reader.onloadend = () => {
// // //     setProductDetails(prev => ({ ...prev, image: reader.result }));
// // //     setPreview(reader.result);
// // //   };
// // //   if (file) {
// // //     reader.readAsDataURL(file);
// // //   }


// //     }

// //     const changeHandler = (e) =>{
// //         setProductDetails({...productDetails,[e.target.name]:e.target.value});
// //     }
// // const saveToLocalStorage = () => {
// //   const existing = JSON.parse(localStorage.getItem("recipes")) || [];
// //   const newRecipe = {
// //     ...productDetails,
// //     id: Date.now().toString()
// //   };
// //   existing.push(newRecipe);
// //   localStorage.setItem("recipes", JSON.stringify(existing));
// //   alert("Recipe Saved!");
// //   setProductDetails({
// //     name: "",
// //     image: "",
// //     category: "VEG",
// //     price: "",
// //     ingredients: ""
// //   });
// //   setImage(null);
// //   setPreview(null);
// // };

// //     // const AddProduct = async () => {
// //     //     console.log(productDetails);
// //     //     let responseData;
// //     //     let product=productDetails;
// //     //     let formData = new FormData();
// //     //     formData.append('product',image);
        
// //     //     await fetch('http://localhost:4000/upload',{
// //     //         method:'POST',
// //     //         headers:{
// //     //             Accept:'application/json',
// //     //         },
// //     //         body:formData,
// //     //     }).then((resp)=>resp.json()).then((data)=>{responseData=data})

// //     //     if(responseData.success){
// //     //         product.image=responseData.image_url;
// //     //         console.log(product);
// //     //         await fetch('http://localhost:4000/addproduct',{
// //     //             method:'POST',
// //     //             headers:{
// //     //                 Accept:'application/json',
// //     //                 'Content-Type':'application/json',
// //     //             },
// //     //             body:JSON.stringify(product),
// //     //         }).then((resp)=>resp.json()).then((data)=>{
// //     //             data.success?alert("Product Added"):alert("Failed")
// //     //         })
// //     //     }
// //     // }
// //   return (
// //     <div className='add-product'>
// //         <div className="addproduct-itemfield">
// //             <p>Recipe title</p>
// //             <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
// //         </div>
// //         <div className="addproduct-price">
// //         <div className="addproduct-itemfield">
// //             <p>Ingredients</p>
// //             <input value={productDetails.ingredients} onChange={changeHandler} type="text" name='ingredients' placeholder='Type Here' />
// //         </div>
// //         <div className="addproduct-itemfield">
// //             <p>Price</p>
// //             <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type Here' />
// //         </div>
// //         </div>
// //         <div className="addproduct-itemfield">
// //             <p>Category</p>
// //             <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
// //                 <option value="VEG">VEG</option>
// //                 <option value="NON_VEG">NON-VEG</option>
// //             </select>
// //         </div>
// //         <div className="addproduct-itemfield">
// //             <label htmlFor="file-input">
// //                 <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
// //             </label>
// //             <input  onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
// //         </div>
// //           {/* <div className="addproduct-itemfield">
// //       <label htmlFor="file-input">
// //         <img
// //           src={preview ? preview : upload_area}
// //           className='addproduct-thumnail-img'
// //           alt="Upload Preview"
// //         />
// //       </label>
// //       <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
// //     </div> */}
// //         <button onClick={saveToLocalStorage} className='addproduct-btn'>ADD</button>

      
// //     </div>
// //   )
// // }

// // export default AddProduct        












// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

// const AddProduct = () => {
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

//   const saveToLocalStorage = () => {
//     const existing = JSON.parse(localStorage.getItem("recipes")) || [];

//     const newRecipe = {
//       ...productDetails,
//       id: Date.now().toString()
//     };

//     existing.push(newRecipe);
//     localStorage.setItem("recipes", JSON.stringify(existing));
//     alert("Recipe Saved!");

//     // Reset fields
//     setProductDetails({
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
//       <div className="addproduct-itemfield">
//         <p>Recipe Title</p>
//         <input
//           value={productDetails.name}
//           onChange={changeHandler}
//           type="text"
//           name='name'
//           placeholder='Type Here'
//         />
//       </div>

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

//       <button onClick={saveToLocalStorage} className='addproduct-btn'>ADD</button>
//     </div>
//   );
// };

// export default AddProduct;



import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'
import { data } from 'react-router-dom'

const AddProduct = () => {

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
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

  const saveToLocalStorage=()=>{
    const existing = JSON.parse(localStorage.getItem("recipes")) || [];
    const newRecipe = {
      ...productDetails,
      id:Date.now().toString()
    };
    existing.push(newRecipe);
    localStorage.setItem("recipes",JSON.stringify(existing));
    alert("Recipe Saved!");
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
      <div className="addproduct-itemfield">
        <p>Recipe title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />

      </div>
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
      <button onClick={saveToLocalStorage} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct