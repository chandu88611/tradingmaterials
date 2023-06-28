import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AddAddress from "@/components/AddAddress";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";

function chackout() {
const user = useSelector((state) => state.users.user);
const [promoDetails, setPromoDetails] = useState();
const [proceed, setProceed] = useState(false);
const [total,setTotal]=useState()
const [isShipping,setISShipping]=useState()
const [rid,setRid]=useState()
const router=useRouter()
// const[p_add,setp_add]=useState()
  const sendDetails = async () => {
   const token = localStorage.getItem("tmToken");
    try {
      const response = await axios.post(
        "https://admin.tradingmaterials.com/api/lead/product/checkout/place-order",
        {
          client_id: user?.id,
          order_id:rid || sessionStorage.getItem("order_id"),
          total: promoDetails?.total ?promoDetails?.total :total,
          subtotal:promoDetails?.subtotal ?promoDetails?.subtotal :total,
          promocode: promoDetails?.discount ?promoDetails?.discount:0,
          disc_percent: promoDetails?.disc_percent ?promoDetails?.disc_percent:0,
          discount: promoDetails?.discount ?promoDetails?.discount:0,
          b_address_id: user?.primary_address[0].id,
          shipping_address:isShipping?true:false,
          s_address_id: isShipping?isShipping:null,
          note:""
        },
        {
          headers: {
            "access-token": token,
          },
        }
      );

      if (response.data.status) {
        console.log(response.data.data, "yuuoyio");
    router.push("/payment_success")
      }
      console.log(response);
    } catch (error) {

      console.log(error)
    }
  };

  async function handleBookingPaymentResponse(res) {
    console.log(res);
    const token = localStorage.getItem("tmToken");
    console.log(token);
    setRid(res.razorpay_order_id)
     sessionStorage.setItem("order_id",res.razorpay_order_id)
    try {
      const response = await axios.post(
        "https://admin.tradingmaterials.com/api/lead/product/checkout/verify-payment",
        {
          order_id: res.razorpay_order_id,
          payment_id: res.razorpay_payment_id,
          signature: res.razorpay_signature,
          payment_type:1,
        },
        {
          headers: {
            "access-token": token,
          },
        }
      );
      if (response.data.status) {
         console.log(response, "verify-");
        sendDetails()
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleBookingCheckout(res) {
    var options = {
      key_id: res?.client_id,
      amount: res.total,
      currency: "INR",
      name: "Trading Materials",
      description: "Booking Request amount for Trading Materials",
      image: "https://tradingmaterials.vercel.app/assets/img/logo/logo.png",
      order_id: res.order_id,
      handler: handleBookingPaymentResponse,
      prefill: {
        name: user?.first_name,
        email: user?.email,
        contact: 8861151876,
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: " #0000FF",
      },
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  }
  const getOrderDtails = async () => {
    const token = localStorage.getItem("tmToken");

    try {
      const response = await axios.get(
        "https://admin.tradingmaterials.com/api/lead/product/apply-register-promo-code",
        {
          headers:{
            "access-token": token,
          },
        }
      );

      if (response.data.status) {
        console.log(response.data.data, "promo");
        setPromoDetails(response.data.data);
      }
      console.log(response);
    } catch (error) {}
  };

  const PlaceOrder = async () => {
    const token = localStorage.getItem("tmToken");

    try {
      const response = await axios.post(
        "https://admin.tradingmaterials.com/api/lead/product/checkout/create-order",
        {
          total: 2000,
          payment_type: user?.payment_types[0].id,
        },
        {
          headers: {
            "access-token": token,
          },
        }
      );

      if (response.data.status) {
        console.log(response.data.data, "create-order");
        handleBookingCheckout(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderDtails();
    setTotal(user?.cart?.reduce((pre,cur)=>(pre+cur.price*cur.qty),0))
  }, [user]);
  return (
    <Layout>
      <main>
        <section
          class="breadcrumb__area include-bg pt-95 pb-50"
          data-bg-color="#EFF1F5"
        >
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="breadcrumb__content p-relative z-index-1">
                  <h3 class="breadcrumb__title">Checkout</h3>
                  <div class="breadcrumb__list">
                    <span>
                      <a href="#">Home</a>
                    </span>
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="tp-checkout-area pb-120" data-bg-color="#EFF1F5">
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="tp-checkout-bill-area">
                  <h3 class="tp-checkout-bill-title">Contact Details</h3>

                  <div class="tp-checkout-bill-form">
                    {user && (
                      <AddAddress setProceed={setProceed} proceed={proceed}  setISShipping={setISShipping}/>
                    )}
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="tp-checkout-place white-bg">
                  <h3 class="tp-checkout-place-title">Your Order</h3>

                  <div class="tp-order-info-list">
                    <ul>
                      <li class="tp-order-info-list-header">
                        <h4>Product</h4>
                        <h4>Total</h4>
                      </li>
                      {user?.cart.map((data, i) => (
                        <li class="tp-order-info-list-desc" key={i}>
                          <p>{data.product.name}</p>
                          <span>₹{data.price * data.qty}</span>
                        </li>
                      ))}
                      <li class="tp-order-info-list-total">
                        <span> Sub Total</span>
                        <span>₹{promoDetails?.subtotal?promoDetails?.subtotal: total}</span>
                      </li>
                      <li class="tp-order-info-list-total">
                        <span>Discount</span>
                        <span>₹{promoDetails?.discount?promoDetails?.discount:0}</span>
                      </li>{" "}
                      <li class="tp-order-info-list-total">
                        <span>Total</span>
                        <span>₹{promoDetails?.total ? promoDetails?.total : total}</span>

                      </li>
                    </ul>
                  </div>
                  <div class="tp-checkout-payment">
                    {user?.payment_types.map((data,id)=>(
   <div class="tp-checkout-payment-item" key={id}>
   <input type="radio" id="back_transfer" name="payment" />
   <label
     for="back_transfer"
     data-bs-toggle="direct-bank-transfer"
   >
    {data.name}
   </label>
 </div>
                    ))}
                 
                   
                  </div>
                  <div class="tp-checkout-agree">
                    <div class="tp-checkout-option">
                      <input id="read_all" type="checkbox" />
                      <label for="read_all">
                        I have read and agree to the website.
                      </label>
                    </div>
                  </div>
                  <div class="tp-checkout-btn-wrapper">
                    <button
                      class={`w-100 py-3 text-xl ${
                        user?.primary_address[0]
                          ? "bg-orange-600 text-white"
                          : "bg-gray-400 text-white"
                      }`}
                      disabled={!user?.primary_address[0]}
                      onClick={PlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default chackout;
