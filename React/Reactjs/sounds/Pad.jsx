export default function  Pad(props){
    const [on,setOn] = React.useState(props.on)

    function toggle() {
        setOn(prevon => !prevon)
    }
    return (
        <button 
        style ={{backgroundColor:props.color}}
        className = {props.on && "on"}
        onClick = {props.toggle()}
        ></button>
    )
}