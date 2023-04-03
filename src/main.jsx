import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Home from './Component/Home/Home';
import Meals from './Component/Meals/Meals'
import MealDetails from './Component/MealDetails/MealDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'foods',
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
      },
      {
        path: 'meal/:mealId',
        element: <MealDetails></MealDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
