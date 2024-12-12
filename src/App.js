
// import{BrowserRouter,Route,Routes} from "react-router-dom"
// import FFirts from "./projects/FFirts";
// import Product from "./projects/Product";
// import { useState } from "react";
// import Navbar from "./Navbar";
// import Pay from "./projects/Pay"; 
import {Provider} from"react-redux";
import One from "./projects/One";
import { store } from "./projects/Store";

function App() {
  // const [cart,setcart]= useState([])
  return  ( <> 
  <div> 
    
    {/* <BrowserRouter> 
    <Navbar cart={cart} />
    <Routes>
      <Route path="/" element={<FFirts cart={cart} setcart={setcart} />} /> 
      <Route path="/" element={<Product cart={cart} setcart={setcart} />} />

    </Routes> 
  
    <Pay />
     </BrowserRouter> */} 
     <Provider store={store}>
<One />
     </Provider>
  </div>
  </>
    

  );
}

export default App;
