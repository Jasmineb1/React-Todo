import React, {useState} from "react";
const ClickCounter = (props) => {
    const [count, setCount] = useState(0)
    
    const increment = () => {
      setCount(count + 1);
      
    };
    const decrement = () => {
        count < 2 ? setCount(count) : setCount(count - 2); 
      
    };

    const handleClick= (step)=>{
        setCount(count+step);
    }
  
    return (
      <div>
        <h2>{props.title}</h2>
        <p>Count: {count}</p>
        <button onClick={()=>handleClick(1)}>Increase</button>
        <button onClick={()=>handleClick(-2)}>Decrease</button>
      </div>
    );
  };
  export default ClickCounter;
  