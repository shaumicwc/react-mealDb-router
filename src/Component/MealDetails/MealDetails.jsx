import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


///chat gpt//

const MealDetails = () => {
    const detail = useLoaderData();
    const navigate = useNavigate();

    let singleMeal = {};
    for(const meal of detail.meals){
        singleMeal = meal;
    }
    const {strMeal, strCategory, strArea, strMealThumb, strInstructions, strYoutube} = singleMeal;
    const handleClick = () => {
        window.open(strYoutube, '_blank');
    }
    const handleNavigate = () =>{
        navigate(-1)
    }

    return (
<div className='flex flex-col justify-center items-center mt-10 flex-wrap mx-2'>
  <img src={strMealThumb} alt='' />
  <div className='mt-2 text-center'>
    <p className='text-xl'>Name: {strMeal}</p>
    <p className='text-xl'>Category: {strCategory}</p>
    <p className='text-xl'>Area: {strArea}</p>
    <div className='w-11/12 sm:w-10/12 md:w-7/12 mx-auto'>
      <p className='text-xl'>
        Instruction: <br />{' '}
        <span className='text-sm'>{strInstructions}</span>
      </p>
    </div>
  </div>
  <div className='w-11/12 sm:w-10/12 md:w-7/12 mt-5 flex flex-wrap justify-between mb-5'>
    <button onClick={handleClick}
    className='bg-amber-700 p-2 rounded-md mr-0 sm:mr-5 text-white hover:text-black'>
      See youtube
    </button>
    <button onClick={handleNavigate} className='bg-amber-700 p-2 rounded-md text-white hover:text-black'>Go Back</button>
  </div>
</div>

    );
};

export default MealDetails;