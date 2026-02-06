import ReactDOM from "react-dom/client"

function App() {

   const firstname = "joe"
   const lastname = "schmoe"

     return (
      <>
         <h1> Hello firstname + " " + lastname </h1>  //this prints hello firstname + " " + lastname it print the exact same sentence
          <h1>Hello {firstname} {lastname}</h1>   //this prints correctly without any + or " "
      </>
         
     )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




/**
 * In programming (especially in React.js and similar frameworks), "props" is short for "properties". Props are a way to pass data from one component to another, typically from a parent component to a child component.

Think of props like function arguments:
A React component is like a function.

Props are the values you pass into that function.

   function Greeting(props) {
   return <h1>Hello, {props.name}!</h1>;
   }

   // Using the component:
   <Greeting name="Alice" />


 */


