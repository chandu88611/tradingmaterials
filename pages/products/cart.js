import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import axios from "axios";
import CartProduct from '@/components/CartProduct';
function cart() {
   const user =useSelector(state=>state.users.user?.cart)
   const [total,setTotal]=useState("")
   const router=useRouter()
const Remove=async(pidd)=>{
   const token = localStorage.getItem("tmToken");
   if (token) {
     try {
       const config = {
         headers: {
       "access-token":token,
         }
       };
       const response = await axios.post(
         "https://admin.tradingmaterials.com/api/lead/product/remove-cart-item",{
            item_id:pidd,
         },
         config
       );
      if(response.data.status){
window.location.reload()
      }
     } catch (error) {           

       console.error("Error fetching user info:", error);
     }
   }
}
// const [quantity,setQuantity]=useState(user?.qty)

useEffect(()=>{
setTotal(user?.reduce((prev,cur)=>prev+cur.price*cur.qty,0))
},[user])
  return (
    <Layout>

      <main>

    <section class="breadcrumb__area include-bg pt-95 pb-50">
       <div class="container">
          <div class="row">
             <div class="col-xxl-12">
                <div class="breadcrumb__content p-relative z-index-1">
                   <h3 class="breadcrumb__title">Shopping Cart</h3>
                   <div class="breadcrumb__list">
                      <span><a href="#">Home</a></span>
                      <span>Shopping Cart</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>

   {user?.length>0&& 
   <section class="tp-cart-area pb-120">
       <div class="container">
          <div class="row">
             <div class="col-xl-9 col-lg-8">
                <div class="tp-cart-list mb-25 mr-30">
                   <table class="table">
                      <thead>
                        <tr>
                          <th colspan="2" class="tp-cart-header-product">Product</th>
                          <th class="tp-cart-header-price">Price</th>
                          <th class="tp-cart-header-quantity">Quantity</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {user?.map((data,id)=>(
<CartProduct data={data} key={id} Remove={Remove}/>
                        ))}
                        
                        
                      </tbody>
                    </table>
                </div>
            
             </div>
             <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="tp-cart-checkout-wrapper">
                   <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                      <span class="tp-cart-checkout-top-title">Subtotal</span>
                      <span class="tp-cart-checkout-top-price">₹{total}</span>
                   </div>
                   <div class="tp-cart-checkout-shipping">
                      <h4 class="tp-cart-checkout-shipping-title">Shipping</h4>

                      <div class="tp-cart-checkout-shipping-option-wrapper">
                         <div class="tp-cart-checkout-shipping-option">
                            <input id="flat_rate" type="radio" name="shipping"/>
                            <label for="flat_rate">Flat rate: <span>₹20.00</span></label>
                         </div>
                         <div class="tp-cart-checkout-shipping-option">
                            <input id="local_pickup" type="radio" name="shipping"/>
                            <label for="local_pickup">Local pickup: <span> ₹25.00</span></label>
                         </div>
                         <div class="tp-cart-checkout-shipping-option">
                            <input id="free_shipping" type="radio" name="shipping"/>
                            <label for="free_shipping">Free shipping</label>
                         </div>
                      </div>
                   </div>
                   <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                      <span>Total</span>
                      <span>₹{total}</span>
                   </div>
                   <div class="tp-cart-checkout-proceed">
                      <a href="checkout.html" class="tp-cart-checkout-btn w-100">Proceed to Checkout</a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    
    }
    {user?.length<=0&& <p className='text-center text-red-500 p-5'>Your Cart is Empty</p>}

 </main>
 
 </Layout>
  )
}

export default cart