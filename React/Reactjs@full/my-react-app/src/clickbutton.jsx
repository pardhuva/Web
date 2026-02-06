
function clickbutton(){
   
    /*
    const handleClick = () => console.log("ouch");
    return(<button onClick = {handleClick}>Click me </button>);
    */
    
    /*
    const handleClick2 = (name) => console.log(`${name} stop clicking me `);
     return(<button onClick ={() => {handleClick2(pardhuva)}} >Click me </button>);
    */
    
     /* conditional 
     let count =0;
     const handleClick = (name =>{
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }else{
            console.log(`${name} stop clicking me!`);
        }
     });

     return(<button onclick ={()=> handleClick(pardhuva)}> Click me</button>)
    */
    
     //event parameter when click 
     
     const handleClick = (e) => e.target.textContent = "ouch!";

     return(<button onclick = {(e) => handleClick(e)}>Click me </button>)
     

}

export default clickbutton