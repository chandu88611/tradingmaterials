import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import axios from 'axios';

function BillingDetails_Form({ data }) {
  const user = useSelector(state => state.users.user);

  const validationSchema = Yup.object().shape({
    country: Yup.string().required('country is required'),
    streetAddress: Yup.string().required('Street address is required'),
    apartment: Yup.string(),
    city: Yup.string().required(' City is required'),
    state: Yup.string().required('state is required'),
    postcode: Yup.string().required('PinCode is required'),
    orderNotes: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      city: data?.city || '',
      state: data?.state || '',
      country: data?.country || '',
      streetAddress: data?.add_1 || '',
      apartment: data?.add_2 || '',
      postcode: data?.zip || '',
      orderNotes: data?.orderNotes || '',
    },
  });

  const onSubmit = async () => {
    const { streetAddress, apartment, city, state, country, postcode } = getValues();

    const token = localStorage.getItem('tmToken');
    const requestData = {
      city,
      state,
      country,
      zip: postcode,
      add_1: streetAddress,
      add_2: apartment,
    };

    let url = 'https://admin.tradingmaterials.com/api/lead/add-new/address';
    if (data && data.id) {
      url = 'https://admin.tradingmaterials.com/api/lead/update/address';
      requestData.id = data.id;
    }

    try {
      const res = await axios.post(url, requestData, {
        headers: {
          'access-token': token,
        },
      });
      console.log(res);
      if (res.data.status) {
     window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFocus = (e) => {
    e.preventDefault();
      e.currentTarget.focus();
  };
  useEffect(() => {
    if (data) {
      setValue('city', data.city || '');
      setValue('state', data.state || '');
      setValue('country', data.country || '');
      setValue('streetAddress', data.add_1 || '');
      setValue('apartment', data.add_2 || '');
      setValue('postcode', data.zip || '');
      setValue('orderNotes', data.orderNotes || '');
    }
  }, [data]);

  return (
    <div>
      <h3 className="tp-checkout-bill-title width_anim"></h3>
      <div className="col-md-12">
        <div className="tp-checkout-input">
          <label> City</label>
          <input type="text" placeholder="" {...register('city')} onFocus={handleFocus} name='city'/>
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
      </div>
      <div className="col-md-6">
        <div className="tp-checkout-input">
          <label>State </label>
          <input type="text" placeholder="state" {...register('state')} className="w-full" onFocus={handleFocus} name='state'/>
          {errors.city && <p className="text-red-500">{errors.state.message}</p>}
        </div>
      </div>
      <div className="col-md-12">
        <div className="tp-checkout-input">
          <label>Country</label>
          <input type="text" placeholder="United States (US)" {...register('country')} onFocus={handleFocus} name='country'/>
          {errors.country&& <p className="text-red-500">{errors.country.message}</p>}
        </div>
      </div>
      <div className="col-md-12">
        <div className="tp-checkout-input">
          <label>Street address</label>
          <input type="text" placeholder="House number and street name" {...register('streetAddress')} onFocus={handleFocus} name='streetAddress'/>
          {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
        </div>
        <div className="tp-checkout-input">
          <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" {...register('apartment')} onFocus={handleFocus} name='apartment'/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="tp-checkout-input">
          <label>Postcode ZIP</label>
          <input type="text" placeholder="" {...register('postcode')} onFocus={handleFocus} name='postcode'/>
          {errors.postcode && <p className="text-red-500">{errors.postcode.message}</p>}
        </div>
        {data && data.id ? (
          <button type="submit" className="mb-5 bg-blue-500 px-4 py-2 text-white rounded" onClick={handleSubmit(onSubmit)}>
            Update Billing Details
          </button>
        ) : (
          <button type="submit" className="mb-5 bg-blue-500 px-4 py-2 text-white rounded" onClick={handleSubmit(onSubmit)}>
            Add New Address
          </button>
        )}
      </div>
    </div>
  );
}

export default BillingDetails_Form;
