let idols=["rm","jin","suga","v","hope"];
for(val of idols){
    console.log(val);
}
console.log(idols);
console.log(idols.length)//property
idols[3]="taetae";
console.log(idols);

//find the average of the entire class
let marks=[85,97,44,37,76,60];
let avg=0;

for(let i of marks){
    avg+=i;
}
avg=avg/marks.length;
console.log(avg);
console.log(marks);
console.log(marks.toString());
idols.push("jk");

console.log(idols);
idols.pop();
console.log(idols);

marks1=[23,24,25];
console.log(marks.concat(marks1));
marks.unshift(90);
console.log(marks);
marks.shift();
console.log(marks);

//splice
//add element
let arr=[101,100,12,13,14,15,16];
arr.splice(2,0,101);

//delete element
arr.splice(2,1);

//replace element
arr.splice(3,1,101);

//practice
let companies=["bloomberg","microsoft","uber","google","ibm","netfkix"];
console.log(companies);
companies.shift()
console.log(companies);
companies.splice(1,1,"ola");
companies.push("amazon");
console.log(companies);