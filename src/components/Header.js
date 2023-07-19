import React from 'react';
import { mainLogo } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImSearch } from 'react-icons/im';
import { AiFillHome } from 'react-icons/ai';
import { BsMinecartLoaded } from 'react-icons/bs';
import { PiUserCircleFill } from 'react-icons/pi';

const Header = () => {
    const productData = useSelector((state) => state.eShop.productData);

    return (
        <>
            {/* Floating Navigation */}
            <div className='fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg'>
                <div className='max-w-screen-xl mx-auto px-2 py-2 flex items-center justify-center'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <Link to='/'><AiFillHome className='w-8 h-8' /></Link>
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <Link to="/cart">
                                <div className='relative'>
                                    <BsMinecartLoaded className='w-8 h-9'/>
                                    <span className='absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
                                </div>
                            </Link>
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <Link to=''>
                                <PiUserCircleFill className='w-10 h-10 rounded-full'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Header */}
            <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
                <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                    <Link to='/'>
                        <div>
                            <img className='w-28' src={mainLogo} alt='mainLogo' />
                        </div>
                    </Link>

                    {/* Login & Sign Up */}
                    <div className='flex items-center gap-8' >
                        <ul className='flex items-center gap-8'>
                            <Link to ="/login">
                                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Login</li>
                            </Link>
                            <Link to ="/sign-up">
                                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Sign Up</li>
                            </Link>  
                        </ul>
                    </div>

                    {/* Search Bar */}
                    <div className='relative mr-7.5'>
                        <input
                            className='outline-none py-2.5 pl-8 pr-10 w-40 sm:w-60 border-2 border-maroon'
                            type='text'
                            placeholder='Search Product...'
                            autoComplete='off'
                        />
                        <button className='absolute top-1/2 transform -translate-y-1/2 right-3'>
                            <ImSearch className='text-maroon w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
