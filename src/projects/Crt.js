import React from 'react' 
import { useState,useEffect } from 'react'; 
import "./crt.css"

const Crt =  ({ cart, setcart }) => { 
    const [total,settotal] = useState(0);
   useEffect (()=> {
     settotal(cart.reduce((acc,curr)=> acc + parseInt(curr.price),0));
   },[cart]);
   return (
     <div>
       <h1>This is your Cart</h1>
       <div className="cart-container">
         {cart.length === 0 ? (
           <p>Your cart is empty</p>
         ) : (
           <div className="cart-product">
             {cart.map((product) => (
               <div className="cp" key={product.id}>
                 <img src={product.profile} alt={product.name} />
 
                 <div className="cdetails">
                   <h3>Product name: {product.name}</h3>
                   <p>RAM: {product.ram}</p>
                   <p>Price: ${product.price}</p>
                 </div> 
                 
               </div>
             ))}
           </div>
         
         )}
         <h2> total amount:{total}</h2>
       </div>
     </div>
   );
 };

export default Crt
