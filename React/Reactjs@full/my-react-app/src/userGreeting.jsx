import PropTypes from 'prop-types';

function userGreeting(props){
     
    if(props.isloggedin){
        return <h2> Welcome {props.username}</h2>
    }
    else{
        return <h2>Please login to continue</h2>
    }
} 

userGreeting.proptypes = {
    isloggedin: PropTypes.bool,
    username: PropTypes.string,
}

userGreeting.defaultProps = {
    isloggedin: false,
    username: "Guest",
}
export default userGreeting