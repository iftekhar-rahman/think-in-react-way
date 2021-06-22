import React, { useState } from 'react';

const Increment = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Increment;