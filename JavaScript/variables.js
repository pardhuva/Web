//each variable is defined only usign let,const,var no other datatypes are used 

/* var
 -> can be redeclared      var a = 10 
 -> can be updates            a = 30
 -> global scope 
  
 If you declare a variable with var, it can be used anywhere inside the function, or globally if not inside a function. You can redeclare it (which can be risky).
 example code below 
 */
  var a = 20;
  var a = 10;     //redeclaration allowed 
   a = 30;        // updation allowed 
 
 if (true) {
  var y = 5;
 }
  console.log(y); // ✅ 5 (even though y is inside if-block!)
                  //due to global scope 


/* let 
 -> cannot be redeclared 
 -> can be updated 
 -> has block scope 
*/
 let a = 20;
 //let a = 10   //this is not allowed 
 a = 30;

 if(true){
     a = 20;
     console.log(a)  //this prints 20
 }
 console.log(a)    //this pritns 30 as it is block scope 


 /* const 
  -> cannot be redeclared 
  -> cannot be updated 
  -> has block scope 

  in objects/arrays you cannot change teh reference but you can modify contents 
  */
 const pi = 3.14;
 //pi = 3.14    this is error 
 //const pi = 3.15 this is error cannot be redclared
 const arr = [1,2,3];
 arr.push(4);  //this is allowed 

