import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    function signup(formData) {
        const email = formData.get("email")
        const password = formData.get("password")

        /** 
        const formEl = event.currentTarget
        const formData = new FormData(formEl)  // this gives me all the data in teh form 
        const email = formData.get("email")
        //gather info from the form 
        // submit it to a backend 

        formEl.reset() 
        */
    }
  return (
    <section>
      <h1>Signup form</h1>
      <form action ={signup} method ="post">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);