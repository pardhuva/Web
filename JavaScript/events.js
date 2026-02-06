
let bt=document.querySelector("#bt");
console.log(bt);
bt.onclick=()=>{
    console.log("touched");
    let a=1;
    a++;
    console.log(a);
};

let box=document.querySelector(".box");
box.onmouseover=(e) =>{
   box.style.height="150px";
   box.style.width="150px";
   box.style.backgroundColor="purple";
   console.log("box was hovered");
   console.log(e);
   console.log(e.type);
   console.log(e.target);
};

let bt1=document.querySelector(".bt1");
let handler3=()=>{
    console.log("button1 was clicked-handler3");
}
bt1.addEventListener("click",()=>{
    console.log("button1 was clicked");
});
bt1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler2");
});
bt1.addEventListener("click",handler3);
bt1.removeEventListener("click",()=>{
    console.log("button1 handler2");
});//in this way it will not be removed so we use same reference to remove


bt1.removeEventListener("click",handler3); //in this way we remove eventlistener

//practice on clicking background to darkgreen and on double clicking backgroundcolor to light green
let bt2=document.querySelector(".bt2");
bt2.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="green";
});
bt2.addEventListener("dblclick",()=>{
    document.querySelector("body").style.backgroundColor="lightgreen";
});

//or in another way 
let currmode="light";
let body=document.querySelector("body");
let bt3=document.querySelector(".bt2");
bt3.addEventListener("click",()=>{
    if(currmode==="light"){
       currmode="dark";
       body.classList.add("dark");
       body.classList.remove("light");
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});

let ho=document.querySelector(".hover");
ho.addEventListener("mouseover",()=>{
    ho.style.height="200px";
    ho.style.width="200px";
    ho.style.backgroundImage="url('baby.jpg')";
    ho.style.backgroundSize="cover";
});

