import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPhone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import axios from 'axios';

function UpdateProfile() {
   const user=useSelector(state=>state.users.user)
    const validationSchema = yup.object().shape({
        username: yup.string().required('Username is required'),
        lastName: yup.string().required('Last name is required'),
        phone: yup.string().required('Phone number is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
      });
      const { register, handleSubmit, formState: { errors } ,reset} = useForm({
        resolver: yupResolver(validationSchema), defaultValues: {
            username:user?.first_name,
            lastName: user?.last_name,
            phone: user?.phone,
            email:user?.email,
          }
      });

      useEffect(()=>{
reset({
    username:user?.first_name,
    lastName: user?.last_name,
    phone: user?.phone,
    email:user?.email,
  })
      },[user])
      const onSubmit = async(data) => {
        const token = localStorage.getItem("tmToken");
    
        try {
          const response = await axios.post(
            "https://admin.tradingmaterials.com/api/lead/update",
            {
              first_name:data.username,
              last_name:data.lastName,
              phone:data.phone,
              email: data.email,
            },
            {
              headers: {
             "access-token": token,
              },
            }
          );
    
          console.log(response);
          if (response.data.status) {
         window.location.reload()
          }
    
          console.log(response);
        } catch (error) {
          console.log(error);
      
        }
      };
    
  return (
    <div>    <form action="#" onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <div className="col-xxl-6 col-md-6">
        <div className="profile__input-box">
          <div className="relative mb-3">
          <input
  type="text"
  placeholder="Enter your username"
  {...register('username')}
 style={{paddingLeft:'35px'}}
/>
{errors.username && <span  className="text-red-500 ml-1">{errors.username.message}</span>}
            <span className='absolute top-5 left-3'>
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-md-6">
        <div className="profile__input-box">
          <div className="mb-3">
          <input
  type="text"
  placeholder="Enter your last name"
  {...register('lastName')}
/>
{errors.lastName && <span className="text-red-500 ml-1">{errors.lastName.message}</span>}
           
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-md-6">
        <div className="profile__input-box">
          <div className="relative mt-3">
           
<input
  type="text"
  placeholder="Enter your phone number"
  {...register('phone')}  style={{paddingLeft:'35px'}}
/>
{errors.phone && <span className="text-red-500 ml-1">{errors.phone.message}</span>}
            <span className='absolute top-5 left-3'>
              <FaPhone />
            </span>
          </div>
        </div>
      </div>

      <div className="col-xxl-6 col-md-6">
        <div className="profile__input-box">
          <div className="relative mt-3">
          <input
  type="email"
  placeholder="Enter your email"
  {...register('email')}  style={{paddingLeft:'35px'}}
/>
{errors.email && <span className="text-red-500 ml-1">{errors.email.message}</span>}
            <span className='absolute top-5 left-3'>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 5.3999L10.496 7.3999C9.672 8.0559 8.32 8.0559 7.496 7.3999L5 5.3999"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="col-xxl-12 mt-3">
        <div className="profile__btn">
          <button
            type="submit"
            className="bg-blue-500 py-3 px-4 text-xl font-semibold text-white rounded"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  </form></div>
  )
}

export default UpdateProfile