import axios from "axios";
import { toast } from 'react-toastify';
// var axios = require('axios');
// var config = {
//   method: 'get',
//  maxBodyLength: Infinity,
//   url: 'https://carapi.app/api/exterior-colors?sort=<string>&verbose=<string>',
//   headers: {
//     'Authorization': 'Bearer <token>'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
const productionUrl = 'https://strapi-store-server.onrender.com/api';

// console.log(`${import.meta.env.VITE_API_KEY}`)
export const customFetch=axios.create({
    baseURL:productionUrl,
    withCredentials:false,

})
const productionUrl1='https://car-api2.p.rapidapi.com'
export const customFetch1=axios.create({
    baseURL:productionUrl1,
    headers:{'x-rapidapi-key': `${import.meta.env.VITE_API_KEY}`,'x-rapidapi-host':`${import.meta.env.VITE_API_HOST}`}

})
export const formatPrice=(price)=>{

    const dollarAmount=new Intl.NumberFormat('en-us',
        {
        style:'currency',
        currency:'USD'
    }
).format(((price * 100)/100 ).toFixed(2));
    return dollarAmount
}
export const savetoClipboard=async(color)=>{

  if(navigator.clipboard){

    try{
      await navigator.clipboard.writeText(color);
      toast.success('Color copied to clip board')
    }
    catch(error){
      toast.error('Failed to copy color to clipboard')
    }
  }
  else{
    toast.error('Clipboard access not available')
  }
}
export function calculateLoanDetails(principal, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;

  return {
    emi: emi.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
  };
}