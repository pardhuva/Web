//arithematic operators
//+ ,- ,* ,/ ,**
let a=3;
let b=2;
console.log("a + b :" ,a+b);
console.log("a / b",a/b);
console.log("a**b", a**b);  //power 

//unary operators
//+ ,- 
console.log("a++",a++);
console.log(a);
console.log(a--);
console.log(a);

//asignment operators
//+=,-=,*=,/=,**=
let m=5;
let n=2;
console.log(m/=n) //m=m/n;
console.log(m+=n) //m=m+n;

//comparison operators
//== ,!= ,===,!==,>,<,>=,<=
//in javascript if a variable is stored as string which is  a number then implicitily it converts the string into the number
//this happens only when the operation is not addition if it is addition it will perform string concatenation insted of adding here there will be no addition no conversion even increment decrement operations will not be performed 
console.log(a>b);

//logical opearators
//&&,||,!
let x=a>2;
let y=a<5;
console.log(x && y);

//conditional statements
let age=16;
if(age>18){
    console.log("major");
}
else{
    console.log("minor");
}
let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);

//ternary operator
let age2=14;
age2 > 18? condole.log("adult"):console.log("not adult");

//problem 
let z=prompt("enter the number: ");
if(z%5==0){
    console.log("multiple by 5");
}
else{
    console.log("not multiple by 5");
}

//another problem 
let score=60;
if(score>=80&&score<=100){
    grade="A";
}
else if(score<80&&score>=70){
    grade="B";
}
else if(score<70&&score>=50){
    grade="C";
}
else{
    grade="P";
}
console.log(grade);

//another
let cute=prompt("enter the name: ");
if(cute=="jimin"){
    console.log("jimin");
}
else if(cute=="jk"){
    console.log("jungkook");
    
}
else{
    console.log("taetae");
}
alert("there are hyungs too");
