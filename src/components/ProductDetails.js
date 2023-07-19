import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../redux/eShopSlice';
import { ToastContainer, toast } from 'react-toastify'
import { AiOutlineCloseCircle } from 'react-icons/ai';


const ProductDetails = () => {
    const dispatch = useDispatch()
    const[details, setDetails] = useState({});
    let[baseQuantity, setBaseQuantity] = useState(1);
    const Location = useLocation()
    useEffect(()=>{
        setDetails(Location.state.item)
    },[])
  return (
        
    <div>
        <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <button onClick="" className='ml-99'><AiOutlineCloseCircle /></button>
            <div>
                <img className='w-full h-[550px] object-cover' src={details.image} alt="productImage" />
            </div>
            <div className='w-3-5 flex flex-col justify-center gap-12'>
                <div>
                    <h2 className='text-4xl font-semibold'>{details.name}</h2>
                    <p className='font-semibold'>₱{details.price}</p> 
                </div>
                <p className='text-base text-gray-500 -mt-3'>{details.detail}</p>
                <div className='flex gap-4'> 
                    <div className='w-52 flex items-center justify-between text-gray 500 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <button onClick={()=>setBaseQuantity(baseQuantity ===1 ? (baseQuantity = 1) : baseQuantity -1)}
                            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700
                             hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                            <span>{baseQuantity}</span>
                            <button onClick={()=>setBaseQuantity(baseQuantity +1)} 
                            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700
                             hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                        </div>    
                    </div>
                    <button onClick={()=>dispatch(addToCart({
                        title: details.name,
                        image: details.image,
                        price: details.price,
                        quantity: baseQuantity,
                        description:details.detail,
                    }) 
                    ) & toast.success(`${details.name} is added`)
                    } className='bg-black text-white py-3 px-6 active:bg-gray-800'>Add to Cart</button>
                </div>
                <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'>{details.type}</span></p>
            </div>
            
        </div>
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
       
    </div>
  )
}

export default ProductDetails;