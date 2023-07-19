import React, { useState } from 'react';
import { loginImage, signUpImage } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import { auth } from '../../firebase/importFirebase';

const SignUp = () => {
    const[fname, setFirstName] = useState("")
    const[lname, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[number, setNumber] = useState("")
    const[confirmPassword, setconfirmPassword] = useState("")
    const navigate = useNavigate()

    const registerUser = (e) =>{
        e.preventDefault()
        if (password != confirmPassword){
            toast.error("Passwords do not match.")
        }


        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            
            var user = userCredential.user;
            console.log(user);
            toast.success("Registration Successful")
            navigate("/login")
        })
        .catch((error) => {
            toast.error(error.message);

            
        });
    }

  return (
    
    <>
    <ToastContainer
            position='top-left'
            autoClose= {2000}
            hideProgressBar= {false}
            newestOnTop= {false}
            closeOnClick = {false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme= "dark"/>
    <section class="bg-white ">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5" >
              <img src={signUpImage}></img>
            </div>

            <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="w-full">
                    <h1 class="text-2xl font-semibold tracking-wider  capitalize text-black">
                        Create Your Account Now
                    </h1>

                    <p class="mt-4 text-gray-500 ">
                        To let you buy all the amazing products here in PUP Souvenir Shop
                    </p>

                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={registerUser}>
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 " >First Name</label>
                            <input type="text" placeholder="Juan" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border
                             border-gray-200 rounded-md focus:ring-red-800  focus:outline-none focus:ring focus:ring-opacity-40" 
                             required value={fname} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Last name</label>
                            <input type="text" placeholder="Dela Cruz" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border
                             border-gray-200 rounded-md  focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40" required 
                             value={lname} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600">Phone number</label>
                            <input type="tel" placeholder="09XX-XXX-XXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400
                             bg-white border border-gray-200 rounded-md  focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40" required 
                             value={number} onChange={(e) => setNumber(e.target.value)}/>
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
                            <input type="email" placeholder="juandelacruz@gmail.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400
                             bg-white border border-gray-200 rounded-md  focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40" required
                             value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Password</label>
                            <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400
                             bg-white border border-gray-200 rounded-md  focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40" required 
                             value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600">Confirm password</label>
                            <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400
                             bg-white border border-gray-200 rounded-md  focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40" required 
                             value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                        </div>
                         
                            <button type='submit'
                                class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            
                                    <span>Register Account</span>
                                
                                

                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SignUp