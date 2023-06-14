import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
// import _ from '@lodash';
import { useRouter } from "next/router";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
import { TextField } from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
 import { setPopUp } from '@/store/popUpSlice';

const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(4,"Password is too short - must be at least 4 chars."),
});

const defaultValues = {
  email: " ",
  password: " ",
  remember: true,
};

function SignInPage() {
  const dispatch =useDispatch()
  
const popup=useSelector(state=>state.popup)
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { control, formState, handleSubmit, setError, setValue, getValues } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });
  const [error, setError1] = useState("");

  const users = useSelector((state) => state.users);

  const { isValid, dirtyFields, errors } = formState;

 

  useEffect(() => {
    console.log(users);
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);
    const { email, password } = getValues();
    console.log(email, password);
    try {
      const response = await axios.post(
        "https://admin.tradingmaterials.com/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const { token,type } = response.data;
      console.log(response);
      document.cookie = `authToken=${token}; path=/`;
      localStorage.setItem("tmToken", token);
      console.log(token);
      if(type==="client"){
router.push("https://client.tradingmaterials.com/dashboard/")

      }
      if(type==="lead"){
        router.push("/")
        
              }

      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data.message);
      setIsLoading(false);
      setError1(error.response.data.message);
    }
  };
  return (
    <div className="w-full">
       <section className=" pb-140 p-relative z-index-1 fix mt-8">
           
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
              {/* <AiFillCloseCircle size={"30px"} className="text-red-600 cursor-pointer" onClick={()=>dispatch(setPopUp(!popup))}/> */}
                     <div className="tp-login-wrapper">
                        <div className="tp-login-top text-center mb-30">
                           <h3 className="tp-login-title">Login to Trading Material</h3>
                           <p>Don’t have an account? <span><Link href="/register">Create a free account</Link></span></p>
                        </div>
                    
          <form
            name="loginForm"
            noValidate
            className="flex flex-col justify-center w-full mt-20 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-12">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    autoFocus
                    type="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  autoComplete="email"

                  />
                )}
              />
            </div>
            <Controller
              name="password"   
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  autoComplete="current-password"
                  required
                  fullWidth
         
                />
              )}
            />
            {error && <p className="text-xs pl-2 pt-2 text-red-600">{error}</p>}
            <div className="flex  sm:flex-row items-center justify-center sm:justify-between p-3 text-blue-800">
              <Link href="/reset-password">Forgot Pasword? </Link>
            </div>

            <button
              variant="contained"
              className="w-full mt-8 bg-purple-500 text-2xl rounded-3xl p-2 text-white"
              aria-label="Sign in"
              disabled={!isValid}
              type="submit"
              size="large"
            >
              Sign in
            </button>
          </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>

     
   
    </div>
  );
}

export default SignInPage;
