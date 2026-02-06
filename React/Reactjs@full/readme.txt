//bro code 

what is react ?
 it is a javascript library not framework that is used to easily build and arrange user interfaces for web applciations 
 it focuses on building web applciations using components 
 a component is a self contained section of code that functions as a reusable building block  
 like legos each lego as a component 

 react uses a syntax extension of javascript known as jsx known as javascript xml 
 jsx allows you to write html like code within your javascript files 
 react also utilizes a virtual dom its a lightversion of the real dom of a web page 
 we can keep track of the changes on the virtual dom and apply that specific change to the real dom without needing to refresh the entire webpage 
 this reduces rendering performance overhead 

command in terminal - (npm create vite@latest)  - it is to create a react app 
  the above will create an project now change the directory 
//to get the react app
 cd my react-app
 npm install
 npm run dev 

 //introduction

//node modules  contains  external libraries and packages  that my project needs 
//public folder contains public assets 

//main react app is from main.jsx which import the app.jsx component 

//index.html is the main thing out here where you implement the main.jsx 

//so our project will be in the app component then the app compponent is imported in main.jsx and then that is imported into the index.html file for the output on the browser 

// in the component files we use htmll inside the js functions then we export them to the app.jsx then that app.jsx is exported to main.jsx 
//in the app component you can add other components by syntax <Header/>

//also make sure that in function there cna be only one element 
//even in the app component file the components like header, footer can be in single element then use <> </>

//we can reuse the components many number of times 
//react is all about reusing components , a component is small section of code that can include javascript and html your function will return that code and make it reusable 


//card components include a picture, title and description 

//how to style react components with css 
// (not including external frameworks or preprocessors)
//1. External   - styling using css 
//2. Modules - create a stylesheet exclusively for each component
//3. INLINE   - for small elemnets wihtout another css stylesheet inline styling in the function itself 
(button.jsx)

//props - read-only properties that are shared between components.
// a parent component can send data to a child component.
// <Component key = value />
// it is used like see before we used card component but there the data is similar for all the cards then this props 
   // come into picture you can use child components key :value pair for unique cards
// ex:student.jsx

//proptypes = a mechanism that ensures that the passed value  is of the correct datatype.
//if the  age: you want it to be number not the string {PropTypes.number}

//defaultProps = default values of rprops in case they are not passed from the parent component
// name: "guest"

//conditional rendering  = allows you to control what gets renderd in your application based on certain conditions (show, hide, or change components)
//(show, hide, or change components ) - userGreeting.jsx

//rendering lists - List.jsx

//click event = an interaction when a user clikcs on a specific element. 
//              we can respond to clicks by passing
//              a callback to the onClick event handler
//clickbutton.jsx

//React hook -> special function that allows functional components 
              to use react features without writing class components
              (useState ,useEffect, useContext, useReducer, useCallback, and more....)

| Hook                  | Purpose                                                   |
| --------------------- | --------------------------------------------------------- |
| `useState`            | Adds state to functional components                       |
| `useEffect`           | Handles side effects (e.g., API calls, DOM updates)       |
| `useContext`          | Access context values directly without `<Consumer>`       |
| `useRef`              | Stores mutable values that persist across renders         |
| `useMemo`             | Optimizes performance by memoizing expensive calculations |
| `useCallback`         | Memoizes functions to prevent unnecessary re-renders      |
| `useReducer`          | Manages complex state logic (like Redux-lite)             |
| `useLayoutEffect`     | Like `useEffect`, but fires **before** the browser paints |
| `useImperativeHandle` | Customizes the instance value exposed to parent via `ref` |
| `useDebugValue`       | Used for debugging custom hooks                           |

//comparison btw class components adn functional components(react hooks)
//compare.jsx

//useState   -> a react hook that allows the creation of a stateful variable 
               and a setter function to update its value in the virtual DOM 
               [name, setName]
  this is used to create a stateful variable means when you change the variable it automatically been updated 

  MyComponent.jsx
  so first import useState from react library usign this we create a stateful variable and a setter 
  so usign setName(setter) function you change the name value with the help of useState this updates the name (triggers the rerender of the virtual dom)

  check Counter.jsx

//onChange   =  event handler used primarily with form elements 
               ex: <input>, <textare> , <select>, <radio>
               triggers a function every time the value of the input changes 
 ChangeComponent.jsx
   here value={name} this -> input knows you react state 
   is suppose there is no value={name} if suppose the default is alice then it will not show alice 
    if it is present then it shows the alice 

//Colorpicker.jsx

//updater funciton = a function passed as an argument to setState() usually 
                          ex: setyear(year +1)
                      allow for safe updates based on the previous state used with multiple state updates and asynchronous functions 
                      good practice to use updater functions 
in count increemnt if we use 
     setCount(count+1) -> setCount(0+1)
     setCount(count+1) -> setCount(0+1)
     setCount(count+1) -> setCount(0+1)
it will only increment 1 but we want to increment 3 
 //uses the current state ro calculate the next state 
 set functions do not trigger an update 
 react batches together state updates for performance reasons 
 next state becomes the current state after an update  

 setCount(c-> c+1)
 setCount(c-> c+1)
 setCount(c-> c+1)
  takes the pending state to cacluate next state 
  react puts your updater function in a queue (waiting in line)
  during the next render, it will call them in the same order 

 setyear(y => y+1) => follows the updater function 


//update state of objects 
 Mycompo.jsx
 {...car,year:event.target.value} here ... means spread means it will be like 
   {year:2024, make:"ford",model"mustang", year:event.target.value}  here when two values then it will take the latest one and year will be updated by it 
 here if you dont use that spread... operator then only year will appear on screen the remaining will be replaced 

//update state of an array 
ArrayState.jsx
filter() returns a new array with things that satisfy the condition 

//update state of array of objects 
ArrayofObjects.jsx 

//to-dolist app folder  
 there in handleRemoveChange(index):
 here you should not directly attach the above to onClick because 
  When React renders the component, it sees handleRemoveChange(index)
  It immediately executes that function, Your tasks get deleted immediately during render
  so we use () => handleRemoveChange(index)
  When React renders, it creates a function but doesn't call it
  The function waits patiently until you click the button


//useEffect   -> react hook that tells react do some code when (pick one) :
                  this component re-renders 
                  this component mounts (create adn append to dom)
                  the state of value 

useEffect(function, [dependencies])

1. useEffect(() => {})            //runs after every re-render 
2. useEffect(() => {}, [])        // runs only on mount 
3. useEffect(() => {}, [value])   // runs on mount + when value changes 

//USES (side effects)
#1 Event listeners 
#2 DOM manipulation 
#3 subscriptions (real-time updates)
#4 fetching data from an API 
#5 clean up when a component unmounts (removing from dom)

UseEffectex.jsx 
useEffect is a React hook that lets you perform side effects in your components.
so its like whenever the dependecies change we perform the sidecode 

now using this useEffect create a component in which when we adjust the window of webpage it shoudl display height and width 
Display.jsx 

