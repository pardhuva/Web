let str="jungkook";
let length=str.length;
console.log(str);
console.log(length);
console.log(str[0]);

//template literals
let temp=`this is template literal ${1+2+3}`;
console.log(temp);
console.log(typeof temp);

let obj={
    item:"bomb",
    cost:"100"
}
console.log("the cost of",obj.item,"is",obj.cost ,"rupees");  //without using templates
let output=`the cost of ${obj.item} is ${obj.cost} rupees`;
console.log(output);

//esc
console.log("jeon \n jungkook");
console.log("jeon \t jungkook");

//string methods original string remains same a new string is created
console.log(str,str.toUpperCase());
console.log(str); //string doesnt change;
console.log(str.slice(0,4));
let str1="jimin";
console.log(str.concat(str1));
console.log(str1.replace("i","a"));
console.log(str1.replaceAll("i","a"));
console.log(str1.charAt(0));

let love="i love both "+str+" and "+str1;
console.log(love);

//practice generate a name from the user start with @ and ends with the username length
let user=prompt("enter your name:");
console.log("@"+user+user.length);



