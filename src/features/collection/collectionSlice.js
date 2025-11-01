import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const defaultState={
    collectionItems:[],
    numItemsInCollection:0,


}
const getCollectionFromLocalStorage=()=>{
     return JSON.parse(localStorage.getItem('collection')||defaultState)
 }
const collectionSlice=createSlice({

    name:'collection',
    initialState:defaultState,
      reducers: {
        addItem:(state,action)=>{

            const {car}=action.payload

            const item=state.collectionItems.find((i)=>i.collectionID===car.collectionID)

            if(item){
                item.amount+=car.amount

            }else{
                car.saved=true
                state.collectionItems.push(car)


            }
            state.numItemsInCollection+=car.amount,

            toast.success('saved to collection')
        },
        removeItem:(state,action)=>{
            const {collectionID}=action.payload
            const car=state.collectionItems.find((i)=>i.collectionID===collectionID)
            state.collectionItems=state.collectionItems.filter((i)=>i.collectionID!==collectionID)
            state.numItemsInCollection -=car.amount;

            // toast.error('collection item removed')

        },
        clearCollection:(state)=>{
            localStorage.getItem('collection',JSON.stringify(defaultState))
            return defaultState

        }
    }
    })
export const {addItem,removeItem, clearCollection}=collectionSlice.actions;
export default collectionSlice.reducer;
