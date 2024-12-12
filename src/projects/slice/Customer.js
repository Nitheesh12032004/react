import { createSlice } from "@reduxjs/toolkit";
const initialstate=[];
const customers = createSlice ( {
    name:'customer',
    initialstate,
    reducers: {
        addcustomer(state,action) {
            state.push(action.payload)
        }
    }

}) 
export const {addcustomer} =customers.actions;
 export default customers.reducer