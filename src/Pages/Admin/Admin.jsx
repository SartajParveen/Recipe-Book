// import React from 'react'
// import './Admin.css'
// import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
// import {Routes,Route} from 'react-router-dom'
// import AddProduct from '../../Components/AddProduct/AddProduct.jsx'
// import ListProduct from '../../Components/ListProduct/ListProduct.jsx'
// import PopularRecipe from '../../Components/PopularRecipe/PopularRecipe.jsx'
// import EditProduct from '../../Components/EditProduct/EditProduct.jsx'
// const Admin = () => {
//   return (
//     <div className='admin'>
//       <Sidebar/>
//       <Routes>
//         <Route path='/' element={<PopularRecipe/>}/>
//         <Route path='/addproduct' element={<AddProduct/>}/>
//         <Route path='/listproduct' element={<ListProduct/>}/>
//         <Route path='/edit-product' element={<EditProduct/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default Admin



import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import PopularRecipe from '../../Components/PopularRecipe/PopularRecipe'
import EditProduct from '../../Components/EditProduct/EditProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<PopularRecipe/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/edit-product' element={<EditProduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin