/**
 * 1 .what do props help us accomplish?
 * A. make a component  more reusable 
 * 
 */

/**
 * 2. How do you pass a prop into a component 
 * A. same as how we pass to the elements  eg: <MyAwesomeHeader title="" />
 * 
 */

/**
 * 3. can i pass a custom prop (e.g. 'blahblahblah ={true}') to a native 
 *    DOM element?  (e.g. <div blahblah ={true}>) why or why not?
 * A. NO, because  the jsx we use to describe native dom elements will be turned into REAL DOM elements by React. 
 *   and real real dom elements only have the properties/atttributes specified in the HTML specification 
 *   (which doesnt include properties like 'blahblahblah)
 * 
 */

/**
 * 4. how do i receive props in a component?
 *    function Navbar(props) {
 *     return (
 *      <header>
 *      </header>    
 * )
 * }
 */

/**
 * 5. what data type is 'props' when the component receives it?
 * A. an object 
 */
