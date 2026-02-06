import PropTypes from 'prop-types'

function Student(props){
    return(

        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes": "No"}</p>
        </div>
    )
}
student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent:"No",
}
export default student 