import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes={
    winter:'light',
   dark:'dark'

}
const getThemeFromLocalStorage=()=>{
   const theme= localStorage.getItem('theme') || themes.winter
   document.documentElement.setAttribute('data-theme',theme);
   return theme
}
const getUserFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('user') )|| null;

}
const  defaultState={
    user:getUserFromLocalStorage(),
    theme:getThemeFromLocalStorage(),
};

const userSlice=createSlice({

     name:'user',
     initialState:defaultState,
      reducers: {
    loginUser:(state,action)=>{
        // console.log(action.payload)
        const user={...action.payload.user,token:action.payload.jwt}
        state.user=user
       localStorage.setItem('user',JSON.stringify(user))
    },
    logoutUser:(state)=>{
        state.user=null;
        localStorage.removeItem('user')
        toast.success("Logged out Successfully")
    },
     toggleTheme:(state)=>{
        const {dark,winter}=themes
        state.theme=state.theme===dark?winter:dark
        document.documentElement.setAttribute('data-theme',state.theme);
        localStorage.setItem('theme',state.theme)
    },}

})


export const {loginUser,logoutUser,toggleTheme}=userSlice.actions

export default userSlice.reducer