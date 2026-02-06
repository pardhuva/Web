

function Card(props) {
    return (
        <>
          <h2>{props.name}</h2>
          <h3>{props.age}</h3>
          <button>Click here {props.name}</button>
          <img src = {props.image}/>
        </>
    )
} 

export default Card;