import { createSlice } from "@reduxjs/toolkit"


const defaultState={
        FilterItems:null,
        numberOfItemsInFilter:0,
}
const FilterSlice=createSlice({
        name:'filter',
        initialState:defaultState,
        reducers:{
            addItem:(state,action)=>{
                const {items}=action.payload
              
                state.FilterItems=action.payload
            }
        }

})
export const {addItem}=FilterSlice.actions;
export default FilterSlice.reducer;