import React, {useState} from 'react';
import './home.css'

const CheckHome = () => {
    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count + 8)
    }
    const increment = () => {
        if (count >=0) {
            setCount(count - 8)

        }
    }

    return (
        <div className="wrapper">
            <div className="container">
                <button className='btn increment' onClick={increment}>Убавить</button>
                <h1>{count}</h1>
                <button className="btn decrement" onClick={decrement}>Добавить</button>
            </div>
        </div>
    );
};

export default CheckHome;