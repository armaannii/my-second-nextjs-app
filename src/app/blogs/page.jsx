import React from 'react';
import Counter from '../components/Counter';

const blogsPage = () => {

    console.log('blog page rendered');

    return (
        <div>
            <p>This is blog</p>

            <Counter></Counter>
        </div>
    );
};

export default blogsPage;