import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealCard from '../MealCard/MealCard';

const Meals = () => {
    const meals = useLoaderData();
    return (
        <div className='mt-10 mx-2 grid md:grid-cols-3 gap-4'>
            {
                meals.meals.map(meal => <MealCard
                meal={meal}
                key={meal.idMeal}
                ></MealCard>)
            }
        </div>
    );
};

export default Meals;