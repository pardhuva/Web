function myFunction(){
    console.log("i was learning javascript");
    console.log("it was good");
}

myFunction();
myFunction();
myFunction();

function Function(msg){
    console.log(msg);
}

Function("i love javascript");

function sum(x,y){
    //local varaibles -> scope  here x,y,s belongs to fucntion outside you cannot access them
   s=x+y;
   console.log("before return");
   return s;
   console.log("it wont be printed");
}

let val=sum(3,4)
console.log(val);

//arraow fucntions
const mul=(x,y)=>{
    m=x*y;
    return m;
}

console.log(mul(3,4));

//funciton that takes string as an input and returns the number of vowels in the string
function string(str){
    let vcount=0;
    for(let i of str){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            vcount++;
        }
    }
    return vcount;
}

console.log(string("paru"));

"abc".toUpperCase(); //this is method


//foreach loop
//Purpose: To perform an action for each element in an array.
//It loops through the array but does not return a new array.

let arr=[1,2,3,4,5,6];
arr.forEach(function printval(val) {    //here  val is the value at each index 
    console.log(val);
})  
// arr.forEach((val) => {
//    //do some work
//   })

let arr1=["vizag","tuni","bang"];
arr1.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});

//
let arr2=[1,2,3,4];
let calcsquare = (val,idx) => {
    console.log((idx+1)+" square: "+val*val);
};
arr2.forEach(calcsquare);

//map
//Purpose: To transform each element in an array and return a new array with the transformed values.

let newarr=arr.map(val=>{
  return val*val;  
});
console.log(newarr);

//filter
//Purpose: To filter out elements from an array based on a condition. It returns a new array containing only elements that pass the test.

let newarr1=arr.filter((val) => {
    return val%2===0;
})
console.log(newarr1);

//reduce to return sum
//Purpose: To reduce the entire array into a single value by applying a function repeatedly.

let output=arr.reduce((res,curr) =>{
    return res+curr;
});
console.log(output);

//reduce to return max
let output1=arr.reduce((res,curr)=>{
    return res>curr?res:curr;
});

console.log(output1);

//from given array of marks of students fins the students that scored >90
let marks=[87,93,64,99,86];

let marks1=marks.filter((res)=>{
    return res>90;
});
console.log(marks1);

//take number n from user and create an array from 1 to n 
//use the resuce method to calcualte sum of all numbers in the array
//use the resuce method to calculate product of all numbers in the array
//calculate the factorial of n;

let n=prompt("enter the number:");
let temp=[];
for(let i=0;i<n;i++){
    temp[i]=i+1;
}
console.log(temp);

let sum1=temp.reduce((res,curr) =>{
    return res+curr;
});
console.log("sum of all numbers: "+sum1);

let product=temp.reduce((res,curr)=>{
    return res*curr;
});
console.log("product of all numbers: "+product);

//factorial
let fact=temp.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial: "+fact);


//so arrow function is simpler form of function 
//when to use arrow adn when not to use 

//dont use arrow functions When you need access to this dynamically (e.g., inside a class or object method).
const obj = {
  name: "Pardhu",
  greet: () => {
    console.log("Hi, " + this.name); // ❌ 'this' is not what you expect
  }
};
obj.greet(); // Hi, undefined

//Use this instead:

const obj1 = {
  name: "Pardhu",
  greet: function() {
    console.log("Hi, " + this.name); // ✅ this refers to obj
  }
};
obj1.greet(); // Hi, Pardhu

