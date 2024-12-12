import { useState } from "react"; 
import Product from "./Product";
import "./ff.css"
const Data = [
    { id: 1,profile:"jj.jpg", name: "iphone", ram: "20gb", price: 1000 },
    { id: 2,profile:"jj.jpg", name: "samsung", ram: "20gb", price: 1000 },
    { id: 3,profile:"jj.jpg", name: "nothing", ram: "20gb", price: 1000 },
  ];

const FFirts = ({cart,setcart}) => {
        const [products] = useState(Data);
      console.log(cart)
        return (
          <div>
            <h1>This Try Page</h1>
            <div className="products-container">
              {products.map((product) => (
                <Product 
                  key={product.id} 
                  profile={product.profile}
                  name={product.name} 
                  ram={product.ram} 
                  price={product.price} 
                  cart={cart} 
                  setcart={setcart} 
      />
              ))}
            </div>
          </div>
        );
} 


export default FFirts
