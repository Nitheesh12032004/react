import { configureStore } from "@reduxjs/toolkit" ;
import customers from"./slice/Customer";
export const store= configureStore ( {
    reducer: {
        customer:customers
    }
    
})