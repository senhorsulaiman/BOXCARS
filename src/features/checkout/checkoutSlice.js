import { createSlice } from "@reduxjs/toolkit"
const checkOutItemFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('checkout') )|| null;

}
const defaultState={
    checkOutItem:checkOutItemFromLocalStorage(),



}
const checkoutSlice=createSlice({

    name:'checkout',
    initialState:defaultState,

    reducers:{
        addCheckout:(state,action)=>{
             const checkoutCar=action.payload
             state.checkOutItem=checkoutCar
             localStorage.setItem('checkout',JSON.stringify(checkoutCar))
        },
        deleteCheckout:(state,action)=>{

                    state.checkOutItem=null;
                    localStorage.removeItem('checkout')


        }
    }
})
export const {addCheckout,deleteCheckout}=checkoutSlice.actions;
export default checkoutSlice.reducer;