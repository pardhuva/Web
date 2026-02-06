
 import React, {useState} from 'react';

function UseStateHook() {
  const  [count, setCount] = useState(3); 
  const  [object,setObject ] = useState({user:'Pardhuva',age:20});
  const  [array,setArray] = useState([10,20,30]);
  const  [newarray,setnewArray]  = useState([30,40,50]);

   const increment =() =>{
     setCount(count+1);
   }
   const print =()=>{
      console.log(object.user);
      const newobj = {...object};
      newobj.user = 'paru';
      setObject(newobj)
   }
   const changearray = ()=>{
     const newarr = [...array];
     newarr.push(40);
     setArray(newarr);
   }
   const changeobject = ()=>{
      setnewArray(prev=>([...prev,60]));
   }
  return (
    <>
      <h2> value of count is {count}</h2>
      <button onClick={increment} onMouseOver={print}> Click me </button> 
      <h2>Array:{array}</h2>
      <button onClick={changearray}> Change array</button> 
      <h2>Array:{newarray}</h2>
      <button onClick={changeobject}>Change newarray</button>
    </>
  );
}

export default UseStateHook;


/**
 * 
function UseStateHook() {
  let a = 3;

  const increment =(a) =>{
     a++;
  } 
  return (
    <>
      <h2> value of a is {a}</h2>
      <button onClick={()=>{increment(a)}}> Click me </button>
    </>
  );
}

export default UseStateHook;

 */