/*

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
},2000);  //timeout;

console.log("three");
console.log("four");

//callbacks
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);

//
const hii=()=>{
    console.log("hii");
}
setTimeout(hii,3000);

//nested 
for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
      str=str + j;
    }
    console.log(i,str);
}
//
function getData(dataId){
    console.log("data:",dataId);
}
//same fucntion to print after some time
function getData(dataid){
   setTimeout(()=>{
      console.log("data",dataid);
   },2000);
}

function getdata(dataId,getNextData){
    setTimeout(()=>{
        console.log("value",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
//these two are not possible 
//getdata(1,getdata)
//getdata(1,getdata(2)) //it is because second argument will execute first but like in instagram there first one should execute then next so in that case it fails 
//so if you want those sequnetially like after first then next like instagram 
//getdata(1)
//getdata(2)
//getdata(3)
//int this case all will pritn at a time but you want like after first then second then third 

//callback hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    });
});
*/
//promises

/*
let promise=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("sucess");   //resolved promise
    reject("Some error")  //this gives some error

});
//these return promises 
function Getdata(dataId,getNextData){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("data",dataId);
         //resolve("success");
         reject("error");
         if(getNextData){
            getNextData();
         }
      },5000);
   });
}
*/

/*
const getPromise = ()=>{
     return new Promise((resolve,reject) => {
        console.log("i am a promise");
        //resolve("Success");
        reject("network error");
    });
};

let promise=getPromise();
promise.then((res)=>{
    console.log("promsie fullfilled",res);
});
promise.catch((res)=>{
   console.log("error occured",res);
});
*/

/*
//promise chain
function asyncFunc1(){ //asynchronous function as we are using setTimeout() function 
   return new Promise((resolve,reject) =>{
       setTimeout(()=>{
          console.log("some data1");
           resolve("success");
       },4000);
   });
};


function asyncFunc2(){ 
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
           console.log("some data2");
            resolve("success");
        },4000);
    });
 };

 function asyncFunc3(){ 
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
           console.log("some data3");
            resolve("success");
        },4000);
    });
 };

 function asyncFunc4(){ 
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
           console.log("some data4");
            resolve("success");
        },4000);
    });
 };


console.log("fetching data1 ..... ");
let prom1 = asyncFunc1();
prom1.then((res)=>{
   console.log(res); //this res will print the success
   console.log("fetching1 successfull");
});

//promise chain
console.log("fetching data2 ..... ");
let prom2 = asyncFunc2();
prom2.then((res)=>{
   console.log(res); 
   console.log("fetching2 successfull");

    console.log("fetching data3 ..... ");
    let prom3 = asyncFunc3();
    prom3.then((res)=>{
    console.log(res); //this res will print the success
    console.log("fetching3 successfull");
    });
});

console.log("fetching data4 ..... ");
asyncFunc4().then((res)=>{
   console.log(res); //this res will print the success
   console.log("fetching4 successfull");
});

*/
//the above  1 and 2 will print at same time but if you want second one to print after first then you have to do chaining

//another way of promise chaining

function getData(data){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       console.log("data:",data);
       resolve("success");
     },3000);
    });
};
//this promise cahin and callback hell do same work

//promise chain
console.log("getting data1 .... ");
getData(1)
  .then((res)=>{
    console.log("getting data2 .... ");
   return getData(2);
  })
  .then((res)=>{
    console.log("getting data3 .... ");
    return getData(3);
  })
  .then((res)=>{
    console.log(res);
  });



//async await()

async  function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("success");
        },3000);
    });
}

async function getWeatherdata(){
    await api();   
}


//after first task second will occur then after second third will occur so on 

//callback hell
getData(1,()=>{
    console.log("getting data1 .... ");
    getData(2,()=>{
        console.log("getting data2 .... ");
        getData(3);
    });
});


//promise chain
console.log("getting data1 .... ");
getData(1)
  .then((res)=>{
    console.log("getting data2 .... ");
   return getData(2);
  })
  .then((res)=>{
    console.log("getting data3 .... ");
    return getData(3);
  })
  .then((res)=>{
    console.log(res);
  });


//async-await()
async function getAlldata(){
    console.log("getting data1 ..... ");
    await getData(1);
    console.log("getting data2 ..... ");
    await getData(2);
    console.log("getting data3 ..... ");
    await getData(3);
    console.log("getting data4 ..... ");
    await getData(4);
}

//all those above three are doing same task but async-await() is eays to understand

//iife 
//without calling getAlldata() the below one is executed directly
(async function (){
    console.log("getting data1 ..... ");
    await getData(1);
    console.log("getting data2 ..... ");
    await getData(2);
    console.log("getting data3 ..... ");
    await getData(3);
    console.log("getting data4 ..... ");
    await getData(4);
})();


