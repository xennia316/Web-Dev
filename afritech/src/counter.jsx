import React, {useState} from "react";

function Counter(){
const[count, setCount] = useState(0);
const addBy1 = () => {
    setCount(count + 1);
    
}
 const reset = () => {
     setCount(0);
 }
 const reduceBy1 = () => {
     setCount(count - 1);
 }
return(
    <div>
        <h1 >
            {count}
        </h1>
        <button onClick={() => addBy1()}>Add by 1</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => reduceBy1()}>Reduce by 1</button>
    </div>
)

}
export default Counter;