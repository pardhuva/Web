/* 1. where do react put all of the element i create in jsx 
    when i call root.render()?
   
    A. all the elemetns i render get put inside the div with the id of "root"
      (or wahtever other element i might select when calling createRoot)

    */

/* 2. what would show up in my console if i were to run this line of code:
     console.log(<h1>Hello world></h1>)

   A. an object! unlike creating an HTML element in vanilla DOM JS,
      what getss created from the jsx we have in our react code is a plain JS object 
     that React will use to fill in the view 

 */

 /* 3.whats wrong with this code:

    root.render(
    <h1>Hii there</h1>
    <p>this is my website</p>
    )
    A.you can only render only one parent element at a time.that parent elemnet can have 
    as many children elements you want 
    so keep them inside either section tag or main tag or div

  */

/*
   4.what does it mean for something to be declarative instead of imperative?
    A. * imperative means we need to give specific step-by step instructions on how to accomplish a task.
       * declarative means we can write our code to simply "describe" what should show up on page and allow the root(react ,e.g) to handle the details on how to put those things on the page 

 */

/**
   5. what does it mean for something to be "composable"?
   A.  we have small pieces that we can put together to make soomething 
      larger or greater than the individual pieces themselves 
      
 */