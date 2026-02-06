import React,{useState} from 'react';

function Counter() {
   const [count, setCount] = useState(0);
   
   const Decrement = () =>{
      setCount(count-1);
   }

   const Reset = () =>{
      setCount(0);
   }
   const Increment = () =>{
      setCount(count+1);
   }

   return (
       <>
         <p>Count :{count}</p>
         <button onClick={Decrement} >Decrement</button>
         <button onClick={Reset} >Reset</button>
         <button onClick={Increment} >Increment</button>
       </>
   );
}