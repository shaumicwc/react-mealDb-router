import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className='bg-amber-700 py-3 text-center text-white text-xl'>
            <Link className='mx-12  hover:text-black' to='/'>Home</Link>
            <Link className=' hover:text-black' to='/foods'>Foods</Link>
        </div>
        <h1 className='text-center mt-20 font-bold text-3xl text-lime-600'>Click Food to see meals</h1>
        </>
    );
};

export default Header;