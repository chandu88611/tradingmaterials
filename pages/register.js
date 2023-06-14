import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import { BiLoaderAlt } from "react-icons/bi";
import Link from "next/link";

const GENDER_OPTIONS = [
  { text: "Male", value: "male" },
  { text: "Female", value: "female" },
  { text: "Other", value: "other" },
];

const schema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phone: yup.string().required("Phone number is required").min(10, "The Number must be 10 characters").max(10, "The Number must be 10 characters"),
    city: yup.string().required("city is required"),
    email: yup.string().required("Email is required").email("This must be a email"),
   
  })
  .required();
 
const register = () => {
 const [values ,setValues]=useState({
    firstName:'',
    lastName:'',
    email:"",
    phone:"",

 })
 const [emailValid, setEmailValid] = useState({state:true,message:"",color:''});
 const [showLoader,setShowLoader]=useState(false)
const [emailTimeout,setEmailTimeout]=useState()
 const [per,setPer]=useState("")
 const[succes,setSuccess]=useState("")
 const [eer,setEer]=useState("")

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: yupResolver(schema),
  });

  const validateEmail = async (email) => {
    try {
      const response = await axios.get(
        "https://admin.tradingmaterials.com/api/verify-email",
        {
          params:{
            email:email
          },
          headers: {
            "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
          },
        }
      );
  
      const isValid = response.data.isValid;
      setEmailValid({state:false,message:response.data.message,color:"green"});
    } catch (error) {
      console.error(error);
      setEmailValid({state:false,message:error.response.data.errors.email,color:"red"});

    }
  };
    const onSubmit = async (values) => {
      setShowLoader(true)

if(!emailValid.state){
        try {
          const res = await axios.post(
            "https://admin.tradingmaterials.com/api/client/store",
            {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              phone: values.phone,
            },
            {
              headers: {
                "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
              },
            }
          );
      console.log(res)
          const responseMessage = res.data.message;
          if(responseMessage){
            setSuccess(responseMessage)
            reset()
          }
          if(res){
            setShowLoader(false)
          }
        } catch (error) {

          if (error.response) {
            
              setShowLoader(false)
            
            console.log(error.response.data);
            if (error.response.data.errors &&error.response.data.errors.email) {
                const emailError = error.response.data.errors.email[0];
                setEer(emailError);
                console.log(emailError);
              }
        
              if (error.response.data.errors &&error.response.data.errors.phone) {
                const phoneError = error.response.data.errors.phone[0];
                setPer(phoneError);
                console.log(phoneError);
              }
              if (error.response.data &&error.response.data.message) {
                const emailError = error.response.data.message
                setEer(emailError);
                console.log(emailError);
              }

              
            console.log(error.response.status); 
            const errorMessage = error.response.data.message;
     
          } else if (error.request) {
            console.log(error.request); 
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config); 
        }

      };
      
 }
    
  
  const handleInputChange = async(event) => {
    const { name, value } = event.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
setSuccess("")

    if (name === "email") {
      clearErrors("email"); 
      setEer("");
      

      setEmailValid({state:true,message:""})

      clearTimeout(emailTimeout);
      setEmailTimeout(setTimeout(() => {
        validateEmail(value);
      }, 1000));
   
    } 
    if (name === "phone") {
      clearErrors("phone"); 
      setPer("");
    }
    if (name === "lastName") {
      clearErrors("lastName"); 
  
    } 
    if (name === "firstName") {
      clearErrors("firstName"); 

    }
    if (name === "city") {
      clearErrors("city"); 

    }
  
  };

  useEffect(() => {
    return () => {
      clearTimeout(emailTimeout);
    };
  }, [emailTimeout]);
  return (
    <>
    
<div className="grid grid-cols-1 lg:grid-cols-2  w-[70%]  h-fit mt-10 mx-auto p-4 bg-white shadow-md rounded" >
<form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3 px-5 py-2 com3   bg-white ">
    <div className=" text-center ">
                     <img src="/icon.png" className="w-14 m-auto"/>    <h3 className="tp-login-title"> Trading Material <span className="text-blue-500">Customer</span> </h3>
                           <p>Already have an account? <span><Link href="/sign-in" className="text-blue-400">Sign In Here</Link></span></p>
                        </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="firstName" className="">First Name</label>
        <input
          type="text"
          className="h-12 rounded"
          {...register("firstName", { required: true })}
          onChange={handleInputChange}
          name="firstName"
        />
        {errors.firstName && (
          <span className="text-xs text-red-600">{errors.firstName?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="lastName" className="">Last Name</label>
        <input type="text" className="h-12 rounded" {...register("lastName")}     onChange={handleInputChange}
          name="lastName" />
        {errors.lastName && (
          <span className="text-xs text-red-600">{errors.lastName?.message}</span>
        )}
        
      </div>

     

      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="">Email</label>
        <input type="email" className="h-12 rounded" {...register("email")}     onChange={handleInputChange}     
          name="email"/>
        {errors.email && (
          <span className="text-xs text-red-600">{errors.email?.message}</span>
        )}
         {emailValid.message && (
          <span className="text-xs " style={{color:emailValid.color}}>{emailValid.message}</span>
        )}
         {eer&& (
          <span className="text-xs text-red-600">{eer}</span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="phone" className="">Phone</label>
        <input type="number" className="h-12 rounded" {...register("phone")}    onChange={handleInputChange}
          name="phone"/>
        {errors.phone && (
          <span className="text-xs text-red-800">{errors.phone?.message}</span>
        )}
         {per&& (
          <span className="text-xs text-red-600">{per}</span>
        )}
      </div>

    

      <button className="cta flex items-center"  >
  <span>Register</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
      <p className="text-green-600">{succes}</p>
    </form>
    <div className=" ">

      <img src="/5_150.jpg" />
    </div>
</div>
    


 
   { showLoader&&<div className="loader_d">
<BiLoaderAlt   className="loader" size="25px"/>
    </div>}


    </>
  );
};

export default register;