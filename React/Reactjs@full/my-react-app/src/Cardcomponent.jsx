import profilepic from './assets/profile.jpg'

function Cardcomponent(){
   return(
      <div className = "card" >
         <img alt="profile" src= {profilepic} ></img>
         <h2>Pardhuva</h2>
         <p>I try to learn something</p>

      </div>
   );
}

export default Cardcomponent
