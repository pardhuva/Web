//printing name 5 times

for(let i=1;i<=5;i++){
    console.log("taetae");
}
console.log("loop has ended");

//calculate first n numbers
let n=prompt("enter the number(n): ");
for(let j=1;j<=n;j++){
console.log(j);
}

//calculate sum of n
let sum=0;
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log(sum);

//for of loop
let str="sri chaitanya";
let length=0;
for(let val of str){
    console.log(val);
    length++;
}
console.log(length);

//infinite loop
// for(let i=1;i>0;i++){
//     console.log(i);4

// }

//for in loop
let student={     //creating student object
    name: "jk",
    age: "27",
    sex:'m'
}
for(let key in student){
    console.log("key: ",key,"value: ",student[key]);   //actually for value we use in thsi way student["key"] but here key is not a value it si a variable   
}

//a game to keep the user guess the number until the user gets the number correct

let gameNum=27;
let userNum=prompt("guess the number: ");
while(userNum!=gameNum){
    userNum=prompt(" guessed number is wrong ,guess  the num: ");
}
console.log("Congratualtions number is guessed correctly");
