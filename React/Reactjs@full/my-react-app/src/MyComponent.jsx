import React, {useState} from 'react';

function MyComponent() {
   
    const [name, setName]  = useState("paru");
    const [age, incage]   = useState(2);
    const [isEmployed, setIsEmployed] = useState(false);

    const UpdateNme = () =>{
        setName("pardhuva");
    }

    const Incrementage = ()=>{
         incage(age+1);
    } 
    
    const toggleEmployeeStatus = ()=>{
        setIsEmployed(!isEmployed);
    }
    
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={UpdateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={Incrementage}>Increment age</button>

            <p>is Employed: {isEmployed? "yes" : "no"}</p>
            <button onClick={toggleEmployeeStatus}>Toggle</button>
        </div>
    )
}

export default MyComponent;
