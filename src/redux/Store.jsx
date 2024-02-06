import CartSlice from "./slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
   reducer:{
    cart:CartSlice
   }    
})
export default store