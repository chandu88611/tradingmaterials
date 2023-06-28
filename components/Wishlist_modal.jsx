import Link from 'next/link'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'
function Wishlist_modal() {
 const user=useSelector(state=>state.users.user)
  return (

    <div>
        
    
        <section class="tp-cart-area pb-120 w-full com2">
       <div class="container w-full">
          <div class="row w-full">
             <div class="col-xl-9 col-lg-8" style={{width:'100%'}}>
                <div class="tp-cart-list  " >
                   <table class="table " style={{width:'100%'}}>
                      <thead>
                        <tr className='font-semibold px-6'>
                          <th colspan="2" class="tp-cart-header-product  " style={{fontWeight:'bold'}}>Product</th>
                          <th class="tp-cart-header-price " style={{fontWeight:'bold'}}>Price</th>
                          <th class=" " style={{fontWeight:'bold'}}>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        { user?.wishlist?.map((data,id)=>(
  <tr className=''>
    
     <td class="tp-cart-img "><Link href={`/products/${data?.product_id}`}> <img src={data?.product?.img_1} alt=""/></Link></td>
    
     <td class="tp-cart-title px-3 "><a href="product-details.html">{data?.product?.name}</a></td>
    
     <td class="tp-cart-price "><span>₹{data?.price}</span></td>
    

    
     <td class="tp-cart-action px-4 ">
        <button class="text-red-500 cursor-pointer" >
        
        <AiOutlineDelete/>
        </button>
        </td>
         </tr>
            ))} 
                      
                        
                      </tbody>
                    </table>
                </div>
            
             </div>
          </div>
       </div>
    </section>



    </div>

  )
}

export default Wishlist_modal