import { useState } from "react";

function CounterHook(){
    const [count, setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h3>Counter Demo with Hooks</h3>
            <p>Count Value: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterHook;