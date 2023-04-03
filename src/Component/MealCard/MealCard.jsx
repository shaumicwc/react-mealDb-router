import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({meal}) => {
    const {strMeal, strCategory, strArea, strMealThumb, idMeal} = meal;
    return (
        <div className='border-2 border-gray-600 rounded-md'>
            <img src={strMealThumb} alt="" />
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-xl px-2 pt-2'>Name: {strMeal}</p>
                    <p className='text-xl px-2'>Category: {strCategory}</p>
                    <p className='text-xl px-2 pb-2'>Area: {strArea}</p>
                </div>
                <Link to={`/meal/${idMeal}`}><button className='bg-amber-700 p-2 rounded-md mr-3 text-white hover:text-black'>Show details</button></Link>
            </div>
        </div>
    );
};

export default MealCard;