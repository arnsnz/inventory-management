"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';
import { Bell, Menu, Moon, Search, Settings, Sun } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  }

  return (
    <div className='flex justify-between items-center w-full mb-7'>
      <div className='flex justify-between items-center gap-5'>
        <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue' onClick={toggleSidebar}>
          <Menu className='w-4 h-4 ' />
        </button>
      

      <div className='relative'>
        <input type="search" placeholder='Start type to search groups & products' className='pl-10 pr-4  py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'>
        </input>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <Search className='text-gray-500 size={10}' />
        </div>
      </div>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
              <Sun className='cursor-pointer text-gray-500' size={24}/>
            ):(<Moon className=' cursor-pointer text-gray-500' size={24} />) }
              
            </button>
          </div>
          <div className='relative'>
            <Bell className='cursor-pointer text-gray-500' size={24} />
          </div>
          <hr className='w-0 h-7 border-solid border-l border-gray-30 mx-3' />
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='w-9 h-9'>
              <Image 
                src="https://s3-inventorymanagement20.s3.ap-southeast-2.amazonaws.com/profile.jpg"
                alt="profile"
                width={50}
                height={50}
                className='rounded-full h-full object-cover'
              />
            </div>
            <span className='font-semibold'>Arni</span>
          </div>
        </div>
        <Link href="/setting">
          <Settings className='cursor-pointer text-gray-500 size={24}' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar