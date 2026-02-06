const student ={
   fullName:"Pardhuva",
   age:19,
   marks:4.4,
   printMarks:function(){
      console.log("marks: ",this.marks);
   },
};

//1st object
const employee ={
    calTax() {
        console.log("tax rate is 10%");
    },
};

//2nd object
const karanArjun = {
    salary: 5000,
};

//now using 1st object functions/methods/properties in 2nd object

karanArjun.__proto__=employee;

const karan ={
    salary:10000,
    calTax(){
        console.log("tax rate is 20%");
    },
};

karan.__proto__=employee;

//classes

class Toyotacar{
    constructor( brand){
       console.log("creating new object");
       this.brand=brand;
    }
   start(){
      console.log("start");
   }
   end(){
    console.log("end");
   }
//    setbrand(brand){
//       this.brand=brand;
//    }
}

let car1=new Toyotacar();
let car2=new Toyotacar();
//instead of this you can create an constructor to initialises object

// car1.setbrand("fortuner");
// car2.setbrand("lexus");
let car3=new Toyotacar("hyundai");

//inheritance
class parent{
    hello(){
        console.log("parent method");
    }
}
class child extends parent{
    bye(){
        console.log("childs method");
    }
}
let obj=new child();


class Human{
    constructor(name){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name=this.name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class Engineer extends Human{
    constructor(branch){
        console.log("enter child constructor");
        super();  //to invoke parent class constructor
       this.branch=branch;
       console.log("exit child constructor");
    }
    work(){
        console.log("engineer build something");
    }
}
class worker extends Human{
    constructor(Name){
        super(Name);
    }
    work(){

        console.log("work on something");
    }
}

let newhuman=new Engineer("chemical engineer");
let w1=new worker("paru");

//practice
let data="secret info";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        let name=prompt("enter the username:");
        let email=prompt("enter the email:");
        if(name===this.name&&email===this.email){
            console.log("data ",data);
        }
        else{
            alert("incorrect details");
            return false;
        }
    }
}
let u1=new User("paru","pardhuva@.com");
let u2=new User("madhu","madhuri@.com");

u1.viewData();

class Admin extends User{
    constructor(name,email){
       super(name,email); 
    }
    editData(){
        data=prompt("enter the new data");
    }
}
let admin=new Admin("venkat","venkat@.com");
admin.editData();


