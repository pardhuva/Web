
import React,{useState} from 'react';

function ChangeComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity]  = useState(0);
    const [comment, setComment]  = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleChange =(event) =>{
         setName(event.target.value);
    }
    
    const handleQuantityChange =(event) =>{
        setQuantity(event.target.value);
    }

    const handleCommentChange =(event) =>{
        setComment(event.target.value);
    }

    const handlePaymentChange =(event) =>{
        setPayment(event.target.value);
    }
    const handleShipping =(event) =>{
        setShipping(event.target.value);
    }
    return(
        <> 
          <input value={name} onChange={handleChange}/>
          <p>Name: {name}</p>

           <input value={quantity} onChange={handleQuantityChange} type="number"/>
           <p>Quantity: {quantity}</p>

           <textara value={comment} onChange={handleCommentChange}  placeholder="Enter delivery instructions" />
           <p>Comment: {comment}</p>

           <select value={payment} onChange={handlePaymentChange}>
              <option> select a payment optiion</option>
              <option value="visa"> Visa</option>
              <option value ="mastercard">Mastercard</option>
           </select>
            <p> Payment: {payment}</p>

            <label>
                <input type ="radio" value="Pick up"  checked={shipping =="Pick up"}/>
                Pick up
            </label>
            <label>
                <input type ="radio" value="Delivery"  checked={shipping =="Delivery"}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default ChangeComponent;