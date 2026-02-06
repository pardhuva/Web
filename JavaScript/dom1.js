let div1=document.querySelector("div");
console.log(div1);
let id=div1.getAttribute("id");
console.log(id);
let nameattr=div1.getAttribute("name");
console.log(nameattr);
//div1.setAttribute("id","fox");
let id1=div1.getAttribute("id");
console.log(id1);

div1.style;
div1.style.backgroundColor="orange"
div1.style.fontSize="10px"
div1.innerText="hello"

//inserting the element
let newbt=document.createElement("button");
newbt.innerText="clicks me";
console.log(newbt);
console.log(newbt.innerText);
let div=document.querySelector("div");
div.append(newbt);
console.log(document.querySelector("div"));

div.prepend(newbt);
console.log(document.querySelector("div"));

div.before(newbt);
div.after(newbt);

//creating an heading
let newhd=document.createElement("h1");
newhd.innerText="newheading";
document.querySelector("body").prepend(newhd);

//practice
let newbut=document.createElement("button");
newbut.innerText="click me";
newbut.style.color="white";
newbut.style.backgroundColor="red";
document.querySelector("body").append(newbut);

let p=document.querySelector("p");
let attr=p.getAttribute("class");
console.log(attr);
p.classList
p.setAttribute("class","newclass");

//
p.getAttribute("class");
p.classList;
p.classList.add("para");
p.classList;
p.classList.remove("para");