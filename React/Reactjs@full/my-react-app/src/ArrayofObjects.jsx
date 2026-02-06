import React,{useState} from 'react';

function ArrayofObjects() {
    
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState();
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");
    
    const handleYearChange =(event)=>{
       setYear(event.target.value)
    }
    const handleMakeChange =(event)=>{
        setMake(event.target.value)
    }
    const handleModelChange =(event)=>{
        setModel(event.target.value);
    }
    const handleAddChange =()=>{
        const newCar = {year: carYear,make: carMake, model: carModel};

        setCars(cars =>[...cars,newCar]);
        setYear();
        setMake("");
        setModel("");

    }
    const handleRemoveChange =(index)=>{
        setCars(c => c.filter((element,i) => i!= index));
    }

    return(
        <>
            <h2>List of car objects </h2>
            <ul>
               {cars.map((car,index) =><li key={index} onClick={handleRemoveChange(index)}>{car.year}{car.make}{car.model}</li>)}
            </ul>
            <input type="number" value ={carYear} onChange={handleYearChange}/>
            <input type ="text" value={carMake} onChange={handleMakeChange}/>
            <input type ="text" value={carModel} onChange={handleModelChange}/>
            <button onClick={handleAddChange}>Add Car</button>
        </>
    );
}

export default ArrayofObjects;