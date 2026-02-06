import React,{useState} from 'react'

function ArrayState() {
    const [fruits,setFruits] = useState(["apple","banana","papaya","kiwi"]);
    
    const handleAddfruit =()=>{

        const newfruit = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";

        setFruits(fruits => ([...fruits,newfruit]));
    }
    
    const handleRemovefruit =() =>{
         
        const fruittoremove = document.getElementById("foodout").value;
        document.getElementById("foodout").value = "";
        setFruits(fruits => fruits.filter(fruit => fruit!=fruittoremove));
         
    }
    return (
        <>
          <h1>Fruits</h1>
          <ul>
            {foods.map((fruit,index) => <li key={index}>{fruit}</li>)}
          </ul>
          <input type="text" id="foodinput" placeholder="Enter fruit name"></input>
          <button onClick={handleAddfruit}>Add Fruit</button>
          <input type="text" if="foodout" placeholder="enter fruit to remove"></input>
          <button onClick={handleRemovefruit}>Remove Rruit</button>
        </>
    )  
}
export default ArrayState;