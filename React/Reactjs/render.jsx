export default function render() {
     const bts = ["rm" ,"jin" ,"suga","jh","jm","v","jk"]

     return (
         <main>
             {bts}
         </main>
     )
}
//in the above pattern they might print in a single line like rmjinsuga...

//inorder to print in a normal order we use jsx as we know jsx prints objects 
//we render interms of jsx objects  we turn the this string array into an array of jsx elements by surrouding each ninja turtle with an <h2> element 

export default function render() {
     const bts = [
     <h2> JK </h2>,
      <h2>JM</h2>,
      <h2>V</h2>,
      <h2>JH</h2>,
      <h2>RM</h2>,
      <h2>JIN</h2>
     ]
     return (
         <main>
             {bts}
         </main>
     )
}