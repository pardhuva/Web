1. in wha tway are React components meant to be "pure fucntions "
A.  - Given the same props or state , the component will always     return the same content, or UI 
    -  Rendreing and re-rendering a component will never have any kind of side effect on an outside system 

2. what is a "side effect" in React what are some examples?
A. - any cdoe that affects or interacts with an outside system 
   - local storage, API, websockets, DOM manipulation 

3. what is NOT a "sideeffetc in  Reatc ? examples?
 - anything that react is in charge of 
 - maintainign state,keeping the UI insync with data , rendering DOM elements 

 4. when does React run your useEffect function? when does it NOT run the effect function?
 - As soon as the component renders for first time 
 - on every re-render of the component (assuming no dependencies array)
 - will not run the effect when the values of the dependencies in the array stay the same between renders 


5. how would you explain  what the "dependencies array" is?
 - Second parameter  to the useEffect function 
 - a way for React to know whether or not it should re-run the effect function 

 