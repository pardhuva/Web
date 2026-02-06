console.log("lets learn js");

name="jeon jungkook";
console.log(name);
x=null;
y=undefined;
console.log(x);
console.log(y);

let naem="paru";
console.log(naem);

{
    let a=10;
    console.log(a);
}

{
    let a=20;
    a=30//this is updating if you let keyword then it is redeclaring  this is valid
    console.log(a);
}
// let x=BigInt("123");
// let y=Symbol("Hello");

//object
const student = {
     fullName: "jeon jungkook",
     age:27,
     cgpa:10.0,
     isPass:true
};
console.log(student);
student["age"]=student["age"]+1;//student["key"] or student.key (object["key"] or object.key);
student.fullName="jeon taekook";

const profile = {
    fullname:"pardhuva",
    isfollow:true,
    posts:200,
    followers:569,
    following:5
};