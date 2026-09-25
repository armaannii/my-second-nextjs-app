import React from 'react';
import Menu from '../components/FoodCard';

const menuPage = async() => {

    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await response.json();
    // console.log(data);
    const foodList = data.data;
    console.log(foodList);


    return (
        <div>
            <p>Menu page: {foodList.length}</p>
            <div className='grid grid-cols-3 gap-4'>
                {
                    foodList.map((food) => <Menu key={food.id} foods={food}></Menu>)
                }
            </div>
        </div>
    );
};

export default menuPage;