export default function Contact(props) {

    return (
        <div>
            <img src ={props.img} alt ="some cat"></img>
            <p>{props.phone} </p>
             <p>{props.name} </p>
              <p>{props.email} </p>
        </div>
        
    )
}


//destructing props 
/*
const person = {
      img : "",
      name : "",
      phone : "",
      email:""
}

if this is the object normally we access the properties by person.name ||perosn.img 

but we can also use like     const {img,name} = person 
you can also rename the properties const {img:image, name } = person 


so now how can use this property previously we used to send the props keyword for a function but now we will send  properties{img,name,phone,email}


 */