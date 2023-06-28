import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
 import { setPopUp } from '@/store/popUpSlice';
import { RiLoaderFill } from 'react-icons/ri';
import { addImage } from '@/store/cartSlice';
import Link from 'next/link';
import { changeApiState } from '@/store/apiSlice';
function Produuct({data}) {
  const [show, setShow] = useState(false);
  const [load,setLoad]=useState(false)
  const dispatch =useDispatch()
  const [login,setIsLogin]=useState(false)
const popup=useSelector(state=>state.popup)
const user=useSelector(state=>state.users.user)
const cart=useSelector(state=>state.cart)

const router=useRouter()
  const showItems = () => {
    setShow(!show);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (event) => {
    const { left, top } = event.target.getBoundingClientRect();
    const itemLeft = left + window.scrollX;
    const itemTop = top + window.scrollY;

    setSelectedItem({ left: itemLeft, top: itemTop });
  };

  const checkUser=(ids,wish,img)=>{

   if(!user?.id ){
 dispatch(setPopUp(!popup))
 setLoad(false)
   }
   if(user?.id &&wish!=="wish"){
 addToCart(ids,img)
   }
   if(user?.id &&wish==="wish"){
    addToWishList(ids)
      }

      if(user?.id &&wish==="buy"){
        addToCart(ids,img)
        router.push("/products/checkout/")
    }
  }
  const addToCart=async(pidd,img)=>{
    setLoad(true)
    const token = localStorage.getItem("tmToken");
    if (token) {
      try {
        const config = {
          headers: {
        "access-token":token,
          }
        };
        const response = await axios.post(
          "https://admin.tradingmaterials.com/api/lead/product/add-to-cart",{
              product_id:pidd,
              qty:"1"
          },
          config
        );

        if (response.data.status) {
          setLoad(false)
          dispatch(addImage({img1:img,left:selectedItem?.left,top:selectedItem?.top}))
          console.log("ytiuyi",cart)
          // setTimeout(()=>{
          // window.location.reload()
          // },3000)
          dispatch(changeApiState("something"))

        }
      } catch (error) {           
        setLoad(false)
        console.error("Error fetching user info:", error);
      }
    
  }

  }
  const addToWishList=async(pidd)=>{
    setLoad(true)
    const token = localStorage.getItem("tmToken");
    if (token) {
      try {
        const config = {
          headers: {
        "access-token":token,
          }
        };
        const response = await axios.post(
          "https://admin.tradingmaterials.com/api/lead/product/add-to-wishlist",{
              product_id:pidd,
          },
          config
        );

        if (response.data.status) {
          setLoad(false)
          setTimeout(()=>{
        window.location.reload()
          },2000)
 

        }
      } catch (error) {           
        setLoad(false)
        console.error("Error fetching user info:", error);
      }
    
  }

  }
  return (
    <div className="w-fit " >
      <div className="w-[90vw] sm:w-[40vw] md:[30vw] lg:w-[24vw] xl:w-[14vw] relative overflow-hidden cursor-pointer" onMouseEnter={showItems} onMouseLeave={showItems} style={{zIndex:56}}>
        <img src={data?.img_1} alt="" className="w-[100%] h-60" />

        <div className={`flex-col absolute gap-2 top-6 right-5 flex product ${show ? 'show' : ''} `} >
          <div className="relative cursor-pointer flex items-center group">
            
          <div className='absolute hidden group-hover:show group-hover:flex right-9'>

            <p className={`bg-black text-white p-1 rounded absolute w-[86px] right-5 text-xs hidden group-hover:show group-hover:flex arrow-border`}>
              Add to cart
            </p></div>
            <BsCart4 size={'40px'} className="bg-white p-2 rounded cursor-pointer" onClick={()=>checkUser(data.id)}/>
          </div>
          <div className="relative cursor-pointer flex items-center group">
            <div className='absolute hidden group-hover:show group-hover:flex right-14'>

          
            <p className={`bg-black text-white p-1 rounded  w-[86px]  text-xs   arrow-border`}>
              Quick View
            </p>  </div>
          <Link href={`/products/${data.id}`}> <AiOutlineEye size={'40px'} className="bg-white p-2 rounded cursor-pointer" /></Link>
          </div>
          <div className="relative cursor-pointer flex items-center group">
          <div className='absolute hidden group-hover:show group-hover:flex right-9'>
            <p className={`bg-black text-white p-1 rounded absolute  w-[96px] right-5 text-xs hidden group-hover:show group-hover:flex arrow-border`}>
              Add to WishList
            </p></div>
            <AiOutlineHeart size={'40px'} className="bg-white p-2 rounded cursor-pointer" onClick={()=>checkUser(data.id,"wish")}/>
          </div>
        </div>
    {<button className={`w-full p-2 bg-blue-500 text-white font-semibold absolute bottom-0  product1 text-center ${show ? 'show1' : ''}`} onClick={(e)=>{checkUser(data.id,"gjh",data?.img_1)
  handleClick(e)
  
  }}> {load? <RiLoaderFill size="20px" className="rotate m-auto" />:"Add To Cart"} </button>}
      </div>

      <div className="deatails  py-2">
        <div className="flex flex-col mb-2">
            <p className='text-gray-400'>Trading Material</p>
            <p className='text-xl font-semibold w-[90vw] sm:w-[40vw] md:[30vw] lg:w-[24vw] xl:w-[14vw] h-12'>{data?.name}</p>
        </div>
        <div className="flex justify-between ">
            <p className='text-xl font-bold '> <span>₹{data?.prices[0].INR}</span> <span className=' line-through text-gray-400'>₹{data?.prices[0].INR}</span></p>
        </div>
        <div className="des py-2">short description</div>
      <Link href={"/products/checkout/"}> <button className="w-fit  bg-orange-500 text-white rounded px-4 mt-1 py-2" onClick={()=>checkUser(data.id,"buy")}>Buy Now</button></Link> 
      </div>
    </div>
  );
}

export default Produuct;
