function Button_function() {
  
    function btnclicked(message) {
        console.log(message || "button is clicked")

    }

    function oninputchange(elem) {
       console.log("typing");
       console.log(elem.target);
       console.log(elem.target.value);
    }
   return (
    <>
       <h2> Hello pardhuva</h2>
      <button onClick ={btnclicked}>Change user</button>  
      <button onMouseOver ={()=>{btnclicked("button")}}>Mouse over</button>
      <button onMouseEnter={() =>{console.log("hii guys")}}>onmouse</button>
      <input onChange ={oninputchange} type ="text" placeholder ="Enter Name" />
    </> 
   )
}

export default Button_function;