// import React from 'react'
// import './Navbar.css'
// import navlogo from '../../assets/AppLogo.jpg'
// import navProfile from '../../assets/nav-profile.svg'
// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className="logo">
//         <img src={navlogo} alt="" className='nav-logo'/>
//         <h2 className='Title'>Recipe Book</h2>
//       </div>
//          <img src={navProfile} className='nav-profile' alt="" />
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/AppLogo.jpg';
// import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={navlogo} alt="" className="nav-logo"/>
        <h2 className="title">Recipe Book</h2>
      </div>
        
        {/* <img src={navProfile} className='nav-profile' alt="" /> */}
    </div>
  )
}

export default Navbar