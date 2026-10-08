// 'use client'
// import React from 'react';
// import {
//     Description,
//     FieldError,
//     Form,
//     Input,
//     Label,
//     TextField,
// } from "@heroui/react";
// import Link from 'next/link';
// import { signUp } from '@/lib/auth-client';
// import { toast } from 'react-toastify';
// import { redirect } from 'next/navigation';
// const SignUpPage = () => {
//     const [password, setPassword] = React.useState("");
//     // //sign-up auth
//     const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
//         e.preventDefault()
//         const formData =new FormData(e.currentTarget as HTMLFormElement);
//         const user =Object.fromEntries(formData.entries()) as {name:string,email:string,password:string,confirmPassword:string}
//         console.log(user)
//         const {data,error}= await signUp.email({
//             ...user,
//             callbackURL:'/'
            
//         })

        
//      }

//     return (
//         <div className='bg-base-200'>

//             <h1 className='text-[1.5rem] font-bold text-center mt-10'>অ্যাকাউন্ট তৈরি করুন</h1>
//             <p className='font-medium text-gray-500 text-center mb-7'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

//             <Form
//                 className="flex w-110 flex-col gap-4 mx-auto border p-6 rounded-2xl bg-[#F3FBF4] border-gray-300"
//                 render={(props) => <form {...props} data-custom="foo" />}
//                 onSubmit={onSubmit}
//             >
//                 <TextField

//                     name="name"
//                     // validate={(value) => {
//                     //     if (value.length < 3) {
//                     //         return "Name must be at least 3 characters";
//                     //     }
//                     //     return null;
//                     // }}
//                     validate={(value) => {
//                         const name = value.trim();

//                         if (name.length < 3) {
//                             return "Name must be at least 3 characters";
//                         }

//                         if (!/^[A-Za-z\s]+$/.test(name)) {
//                             return "Name can only contain letters and spaces";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>নাম</Label>
//                     <Input required placeholder="Name" />
//                     <FieldError />
//                 </TextField>
//                 <TextField

//                     name="email"
//                     type="email"
//                     validate={(value) => {
//                         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                             return "Please enter a valid email address";
//                         }
//                         return null;
//                     }}

//                 >
//                     <Label>ইমেইল</Label>
//                     <Input required placeholder="Email" />
//                     <FieldError />
//                 </TextField>
//                 <TextField

//                     minLength={8}
//                     name="password"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length < 8) {
//                             return "Password must be at least 8 characters";
//                         }
//                         if (!/[A-Z]/.test(value)) {
//                             return "Password must contain at least one uppercase letter";
//                         }
//                         if (!/[0-9]/.test(value)) {
//                             return "Password must contain at least one number";
//                         }
//                         return null;
//                     }}
//                 >
//                     <Label>পাসওয়ার্ড</Label>
//                     <Input required placeholder="কমপক্ষে ৮ অক্ষর" value={password} onChange={(e) => setPassword(e.target.value)} />

//                     <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
//                     <FieldError />
//                 </TextField>
//                 <TextField
//                     name="confirmPassword"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length === 0) {
//                             return "Please confirm your password";
//                         }

//                         if (value !== password) {
//                             return "Passwords do not match";
//                         }

//                         return null;
//                     }}
//                 >
//                     <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>

//                     <Input
//                         required
//                         placeholder="আবার লিখুন"
//                     />

//                     <FieldError />
//                 </TextField>
               
//                     <button type='submit' className="btn w-full bg-[#05893E] text-white">অ্যাকাউন্ট তৈরি করুন</button>
                
//                 <div className="flex w-full flex-col">
//                     <div className="divider">অথবা</div>
//                 </div>

//                 {/* Goggle and Github btn */}
//                 <div className='flex items-center justify-between'>
//                     {/* Google */}
//                     <button className="btn bg-white text-black border-[#e5e5e5]">
//                         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//                         Google দিয়ে চালিয়ে যান
//                     </button>

//                     <button className="btn bg-white text-black">
//                         <svg
//                             className="text-black"
//                             aria-label="GitHub logo"
//                             width="16"
//                             height="16"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 fill="black"
//                                 d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
//                             />
//                         </svg>

//                         GitHub দিয়ে চালিয়ে যান
//                     </button>
//                     {/* Goggle and Github btn */}
//                 </div>

//                 {/* fotter */}
//                 <div className='flex items-center gap-2 justify-center'>
//                     <p >অ্যাকাউন্ট আছে?</p>
//                     <Link href={'/sign-in'}> <p className='text-[#05893E]'>সাইন ইন করুন</p></Link>
//                 </div>
//                 {/* fotter */}
//             </Form>
//             <Link href={'/'}><p className='text-gray-500 font-medium text-center text-[1rem] mt-5 mb-20'>← হোম পেজে ফিরে যান</p></Link>
//         </div>
//     );
// };

// export default SignUpPage;


'use client';

import React from 'react';
import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { signUp } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  // Sign-up auth
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name')?.toString().trim() ?? '';
    const email =
      formData.get('email')?.toString().trim().toLowerCase() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const confirmPassword =
      formData.get('confirmPassword')?.toString() ?? '';

    // Confirm password check
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    console.log({
      name,
      email,
      password,
      confirmPassword,
    });

    const { data, error } = await signUp.email({
      name,
      email,
      password,
      callbackURL: '/',
    });

    if (error) {
      toast.error(error.message || 'Something went wrong!');
      return;
    }

    if (data) {
      toast.success('Sign-up successful!');

      router.push('/');
    }
  };

  return (
    <div className="bg-base-200">
      <h1 className="text-[1.5rem] font-bold text-center mt-10">
        অ্যাকাউন্ট তৈরি করুন
      </h1>

      <p className="font-medium text-gray-500 text-center mb-7">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <Form
        className="flex w-110 flex-col gap-4 mx-auto border p-6 rounded-2xl bg-[#F3FBF4] border-gray-300"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        {/* Name */}
        <TextField
          name="name"
          validate={(value) => {
            const name = value.trim();

            if (name.length < 3) {
              return 'Name must be at least 3 characters';
            }

            if (!/^[A-Za-z\s]+$/.test(name)) {
              return 'Name can only contain letters and spaces';
            }

            return null;
          }}
        >
          <Label>নাম</Label>
          <Input required placeholder="Name" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return 'Please enter a valid email address';
            }

            return null;
          }}
        >
          <Label>ইমেইল</Label>
          <Input required placeholder="Email" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return 'Password must be at least 8 characters';
            }

            if (!/[A-Z]/.test(value)) {
              return 'Password must contain at least one uppercase letter';
            }

            if (!/[0-9]/.test(value)) {
              return 'Password must contain at least one number';
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>

          <Input
            required
            placeholder="কমপক্ষে ৮ অক্ষর"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        {/* Confirm Password */}
        <TextField
          name="confirmPassword"
          type="password"
          validate={(value) => {
            if (value.length === 0) {
              return 'Please confirm your password';
            }

            if (value !== password) {
              return 'Passwords do not match';
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>

          <Input
            required
            placeholder="আবার লিখুন"
          />

          <FieldError />
        </TextField>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="btn w-full bg-[#05893E] text-white"
        >
          অ্যাকাউন্ট তৈরি করুন
        </button>

        <div className="flex w-full flex-col">
          <div className="divider">অথবা</div>
        </div>

        {/* Google and GitHub */}
        <div className="flex items-center justify-between gap-3">
          {/* Google */}
          <button
            type="button"
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>

            Google দিয়ে চালিয়ে যান
          </button>

          {/* GitHub */}
          <button
            type="button"
            className="btn bg-white text-black"
          >
            <svg
              className="text-black"
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>

            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 justify-center">
          <p>অ্যাকাউন্ট আছে?</p>

          <Link href="/sign-in">
            <p className="text-[#05893E]">সাইন ইন করুন</p>
          </Link>
        </div>
      </Form>

      <Link href="/">
        <p className="text-gray-500 font-medium text-center text-[1rem] mt-5 mb-20">
          ← হোম পেজে ফিরে যান
        </p>
      </Link>
    </div>
  );
};

export default SignUpPage;