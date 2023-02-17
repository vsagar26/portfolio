import React from 'react';
import { nav } from '../constant';

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <div>
            <ul className="flex flex-col h-[100vh] bg-[#353535] w-[120px] justify-center items-center">
                {nav.map((nav,index)=>(
                    <li key={nav.id}><a href={`${nav.id}`} className={`text-white text-[50px] material-symbols-outlined `}>{nav.img}</a></li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar