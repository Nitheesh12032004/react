import React from 'react' 
import {Link} from "react-router-dom"


const Navbar = ({cart}) => {
    console.log(cart)
    return (
      <div>
        <Link to={"/"}> home</Link>
        <Link to={"/cart"}><span>{cart.length}</span> cart</Link>
      </div>
    )
  }

export default Navbar
