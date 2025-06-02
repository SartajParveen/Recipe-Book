// import React from 'react'
// import './PopularRecipe.css'
// import popularProducts from '../../assets/all_product.js'
// import Item from '../Item/Item'
// /* import { use } from 'react' */
// const PopularRecipe = () => {

// //   const [popularProducts,setPopularProducts] = useState([]);


//   /* useEffect(()=>{
//     fetch('http://localhost:4000/popularinwomen')
//     .then((response)=>response.json())
//     .then((data)=>setPopularProducts(data));
//   },[]) */
//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//     <hr/>
//     <div className='popular-item'>
//         {
//             popularProducts.map((item,i)=>{
//                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             })
//         }
//     </div>
//     </div>
//   )
// }

// export default PopularRecipe



import React from 'react'
import './PopularRecipe.css'
import Item from '../Item/Item'
import {popularProducts} from '../../assets/assets.js'


const PopularRecipe = () => {
  
  return (
    <div className='popular'>
      <h1>POPULAR RECIPES</h1>
      <hr/>
      <div className="popular-item">
        {
            popularProducts.map((item,i)=>{
                if(i<12){
                  
                return <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price} ingredients={item.ingredients} category={item.category}/>
                }
            })
        }
      </div>
    </div>
  )
}

export default PopularRecipe