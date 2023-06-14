import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
function CartProduct({data,Remove}) {

    const [quantity,setQuantity]=useState(data?.qty)
    const [emailTimeout,setEmailTimeout]=useState()
    const DecreaseQuantity = async(pidd) => {
        const token=localStorage.getItem("tmToken")
         if (quantity > 1) {
           setQuantity(quantity - 1);
         }
        
         
       }     
     
       
       const IncreaseQuantity = async(pidd) => {
              
         setQuantity(quantity + 1);
         const token=localStorage.getItem("tmToken")
         
         
       };

       useEffect(() => {
        const updateCartQuantity = async () => {
          const token = localStorage.getItem("tmToken");
          try {
            const config = {
              headers: {
                "access-token": token,
              },
            };
      
            const response = await axios.post(
              "https://admin.tradingmaterials.com/api/lead/product/update-cart-item",
              {
                item_id: data?.id,
                qty: quantity,
              },
              config
            );
            if (response.data.status) {
              window.location.reload();
            }
          } catch (error) {
            console.error("Error fetching user info:", error);
          }
        };
      
        if (data?.id && quantity !== data?.qty) {
            clearTimeout(emailTimeout);
            setEmailTimeout(setTimeout(() => {
              updateCartQuantity();
            }, 1500));
        }
      }, [data?.id, quantity]);
  return (
    <tr >
     
    <td class="tp-cart-img"><a href="product-details.html"> <img src={data?.product?.img_1} alt=""/></a></td>
   
    <td class="tp-cart-title"><a href="product-details.html">{data?.product?.name}</a></td>
   
    <td class="tp-cart-price"><span>₹{data?.price}</span></td>
   
    <td class="tp-cart-quantity">
       <div class=" flex gap-4 items-center ">
          <span class="font-bold text-xl cursor-pointer" onClick={()=>DecreaseQuantity(data?.id)}>
             <AiOutlineMinus/>                                                           
          </span>
       <p>{quantity}</p>
          <span class="font-bold text-xl cursor-pointer" onClick={()=>IncreaseQuantity(data?.id)}>
            <AiOutlinePlus/>
          </span>
       </div>
    </td>
   
    <td class="tp-cart-action">
       <button class="tp-cart-action-btn" onClick={()=>Remove(data?.id)}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor"/>
          </svg>
          <span>Remove</span>
       </button>
    </td>
   </tr>
  )
}

export default CartProduct