import React from 'react'

function payment_error() {
  return (
    <div>   <section class="profile__area pt-25 pb-75">
    <div class="container">
       <div class="row">
          <div class="col-xxl-12">
             <div class="breadcrumb__content p-relative z-index-1 pb-20 d-flex align-items-center justify-content-between">
                <div class="breadcrumb__list">
                   <span><a href="#">Home</a></span>
                   <span>Payment Success</span>
                </div>
                <div class="profile__main-logout text-sm-end">
                   <a href="login.html" class="tp-logout-btn"><i class="fa-solid fa-house-chimney"></i> Home</a>
                </div>
             </div>
          </div>
       </div>
       <div class="profile__inner p-relative">
          <div class="profile__shape">
             <img class="profile__shape-1" src="/assets/img/login/laptop.png" alt="" />
             <img class="profile__shape-2" src="/assets/img/login/man.png" alt="" />
             <img class="profile__shape-3" src="/assets/img/login/shape-1.png" alt="" />
             <img class="profile__shape-4" src="/assets/img/login/shape-2.png" alt="" />
             <img class="profile__shape-5" src="/assets/img/login/shape-3.png" alt="" />
             <img class="profile__shape-6" src="/assets/img/login/shape-4.png" alt="" />
          </div>
          <div class="row main-row">
           
             <div class="col-lg-7 m-auto">
                <div class="profile__main shadow h-100">
                   <div class="profile__main-top p-20">
                      <div class="text-center">
                         <h4 class="text-danger">Payment Failed</h4>
                         <img src="/assets/img/alert.gif" width="100px" className='m-auto'/>
                      </div>
                      <div class="">
                         <p class="text-center text-danger mb-10" style={{lineHeight: 1.25}}><b>Failed!</b><br/> Oh! It Seem like a issue in this payment transaction.
                            You can try again after some time.</p>
                         <div class="row">
                            <div class="col-12 col-lg-6 border-bottom-light border-right-light">
                               <p class="detail-title mb-0">Transaction ID </p>
                               <p class="detail-desc mb-0">TXN87HRTH54RE4G46</p>
                            </div>
                            <div class="col-12 col-lg-6 border-bottom-light">
                               <p class="detail-title mb-0">Order ID : </p>
                               <p class="detail-desc mb-0">PROD5202</p>
                            </div>
                            <div class="col-12 col-lg-6 border-bottom-light border-right-light">
                               <p class="detail-title mb-0">Payment Failure Date </p>
                               <p class="detail-desc mb-0">10th June, 2023</p>
                            </div>
                            <div class="col-12 col-lg-6 border-bottom-light">
                               <p class="detail-title mb-0">Product Name </p>
                               <p class="detail-desc mb-0">Trading Material Mouse Pad</p>
                            </div>
                            <div class="col-12 col-lg-6 border-bottom-light border-right-light">
                               <p class="detail-title mb-0 text-danger">Advance </p>
                               <p class="detail-desc mb-0 text-danger">₹5,500</p>
                            </div>
                            <div class="col-12 col-lg-6 border-bottom-light">
                               <p class="detail-title mb-0"><b>Balance </b></p>
                               <p class="detail-desc mb-0"><b>₹10,500</b></p>
                            </div>
                         </div>
                       
                         <p class="text-center text-orange mb-0 mt-15"><b>Note : </b> If the amount has been debited from your account it will be credited back within 5-7 working days, if not kindly raise a ticket or call us at XXXXXXXXXX.</p>
                         <div class="text-center mt-15">
                            <a href="#" class="tp-btn tp-btn-2 tp-btn-blue btn-green mr-5">Retry </a>
                            <a href="#" class="tp-btn tp-btn-2 tp-btn-blue btn-orange">Raise Ticket</a>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           
          </div>
       </div>
    </div>
 </section></div>
  )
}

export default payment_error