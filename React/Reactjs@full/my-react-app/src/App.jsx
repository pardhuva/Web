import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Cardcomponent.jsx'
import student from './student.jsx'
import userGreeting from './userGreeting.jsx'
import List from './List.jsx'
import clickbutton from './clickbutton.jsx'
import ToDoList from './ToDoList.jsx'


function App() {
  const [count, setCount] = useState(0)
  const fruits = [{ id : 1, name:"apple" , calories : 95},
                    { id: 2, name: "banana",calories: 100},
                    { id: 3 , name: "coconut", calories : 30},
                     { id: 4, name: "cherry", calories: 60},
                   ];
  const vegetables = [{ id : 1, name:"carrots" , calories : 95},
                    { id: 2, name: "corn",calories: 100},
                    { id: 3 , name: "potato", calories : 30},
                     { id: 4, name: "tomatoes", calories: 60},
                   ];

  return (
       <>
        <Header />
        <Food/>
        <Food/>
        <Card/>

        <student name = "pardhuva"  age = "20" isstudent = {true}/>
        <student name = "jk"  age = "28" isstudent = {false}/>

        <userGreeting isloggedin ={true} username = "Pardhuva" />

        {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
        {vegetables.length > 0 && <List items ={ vegetables} category = "vegetables"/> }

        <ToDoList />
        
       </>
  )
}

export default App
