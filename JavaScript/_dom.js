console.dir(window.document);
alert("hello lets start");
let  heading=document.getElementById("heading");
console.dir(heading);
console.log(heading);
let classheading=document.getElementsByClassName("jk");
console.dir(classheading);
console.log(classheading);
let tags=document.getElementsByTagName("p");
console.log(tags);
console.dir(tags);

let que=document.querySelector("p");
console.log(que);
console.dir(que);
let allque=document.querySelectorAll("#heading");
console.dir(allque);
console.log(allque);

console.dir(document.body.firstChild);

console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("p").children);

let div=document.querySelector("div");
// console.log(document.querySelector("div").children);
console.dir(div);

let head=document.querySelector("#heading");
// console.log(head);
// head.innerText="new heading";
// console.log(head);

//practice
let str=document.querySelector("h2");
console.log(str.innerText);

str.innerText=str.innerText+"from Apna College Students";
console.log(str.innerText);
//
let str1=document.querySelectorAll(".box");
console.log(str1);
let idx=1;
for(str of str1){
    console.log(str.innerText);
    str.innerText=str.innerText+` modified ${idx}`;
    console.log(str.innerText);
    idx++;
}

// str1[0]
// str1[1]
// str1[2]
// str1[0].innerText
// str1[1].innerText
// str1[2].innerText
// str1[0].innerText="first one"
// str1[1].innerText="secondone"



