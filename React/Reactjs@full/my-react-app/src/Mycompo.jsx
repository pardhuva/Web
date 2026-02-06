
import React,{useState} from 'react';

function Mycompo() {
   const [car,setCar] = useState({year: 2023, make:"Ford", model:"Mustang"});

    const handleYearChange= (event)=> {
        setCar(car => ({...car,year:event.target.value}));
    }
    const handleMakeChange= (event)=> {
        setCar(car => ({...car,make:event.target.value}));
    }
    const handleModelChange= (event)=> {
        setCar(car => ({...car,model:event.target.value}));
    }
   return(
      <>
        <p> Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange} /><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
      </>
   )
}
export default Mycompo;