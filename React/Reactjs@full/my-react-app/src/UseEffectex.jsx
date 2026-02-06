import React,{useState, useEffect} from 'react';

function UseEffectex() {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");
    
    useEffect(() =>{
        document.title = `Count: ${count}`;
    })       //on every rerender means every time increment count 
   
    useEffect(() =>{
        document.title = `Count: ${count}`;
    }, [])   //on mount only once 

    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;
    }, [count])   //on mount of count in this case works similar to first rerender 
                  // here it will only change when count changes as it was there in the dependency 
    
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;
    }, [count,color])   // now if any one color or count changes updates the title 
    
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
    const ChangeColor = ()=>{
       setColor(color ==="green"? "red":"green");
    }
    return (
      <>
        <p style={{color:color}}> Count: {count}</p>
        <button onClick ={increment}>Increment</button>
        <button onClick ={decrement}></button>
        <button onClick ={ChangeColor}>Change Color</button>
      </>
    )
}

export default UseEffectex;