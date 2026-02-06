
1. What does the `.map()` array method do?
  it is an vanilla javascript method it returns a new array. whatever gets returned from the callback function provided is placed at the same index in the new array.usually we take the items from the original array and modify them in some way.

2. What do we usually use `.map()` for in React?
   convert an array of raw data into an array of jsx  elements that can be displayed on the page 


3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?
   1. we often dont hava the data ahead of time when we're building 
      the app, so we simply cant manually type them out 
   2. it makes our code more 'self-sustaining" - not requiring additionla changes to the code whenever the data changes 

