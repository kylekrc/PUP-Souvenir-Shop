// Import Firestore database
import db from './importFirebase';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { addToCart } from '../redux/eShopSlice';
import { ToastContainer, toast } from 'react-toastify'

 
const Read = () => {
 
    const [info, setInfo] = useState([]);
 
    // Start the fetch operation as soon as
    // the page loads
    
    // window.addEventListener('load', () => {
        
    // });
 
    // Fetch the required data using the get() method
    const Fetchdata = () => {
        db.collection("products").get().then((querySnapshot) => {
 
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
 
            });
        })
    }
    Fetchdata();
 
    // Display the result on the page
    return (
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-5 center'>
            {
                info.map((data) => (
                    <Frame 
                        key = {data._id}
                        detail ={data.detail}
                        image = {data.image}
                        name ={data.name}
                        type ={data.type}
                        variations ={data.variations}
                        price ={data.price}
                        keyId ={data.keyId}
                        
                        />
                        
                ))
                
            }
        </div>
 
    );
}
 
// Define how each display entry will be structured
const Frame = ({ detail, image, name, type, variations, price, keyId, key}) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const _id1 = name;
    const idString = (_id1) =>{
        return String(_id1).toLowerCase().split(" ").join("");
    }
    const rootId = idString(_id1)
    


    const handleDetails = () => {
        navigate(`/${rootId}`,{
            state:{
                item: { detail, image, name, type, variations, price, _id1, keyId, key}
            }
        })
    };
    return (
        <div className=''>
            <div className="group relative">
                <div onClick= { handleDetails } className='w-full h-96 cursor-pointer overflow-hidden'>
                    <img className= "w-full h-full object-cover group-hover:scale-110 duration-500 " src={image} alt="productImg"/>
                </div>
                <div className='w-full border -[1px] px-2 py-4'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-titleFont text-base font-bold '>{name.substring(0,20)}</h2>
                        <div className='flex justify-end gap-2 relative overflow-hidden w-28 text-sm'>
                            <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                                <p className='font-semibold'>₱{price}</p> 
                            </div>
                            
                            <p onClick={()=>dispatch(
                                addToCart({  
                                key1: key,
                                keyId: keyId,
                                id: _id1,                           
                                title: name,
                                image: image,
                                price: price,
                                quantity: 1,
                                description:detail,
                            })
                            )& toast.success(`${name} is added`)
                            } className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 >
                            transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>Add to Cart 
                            <span>
                                <BsArrowRight />
                            </span>
                            </p> 
                        </div>
                         
                    </div>
                    
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
            
        
    );
}

export default Read 
