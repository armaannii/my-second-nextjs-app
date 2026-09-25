"use client";

import React, { useState } from 'react';

const Counter = () => {

const [count, setCount] = useState(0);
// console.log('hello')
const handleCounter = () =>{
    setCount(count + 1);
}

    return (
        <div>
            <h2>Welcome</h2>
            <h2 className='text-2xl'>Counter: {count} </h2>
            <button 
                onClick={handleCounter}
                className="bg-orange-400 text-white px-6 py-2 border-2 rounded-lg border-amber-200 text-lg cursor-pointer">
                Increase
            </button>
        </div>
    );
};

export default Counter;