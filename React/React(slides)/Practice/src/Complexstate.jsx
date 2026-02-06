import React, { useState } from 'react'

const Complexstate = () => {
    const [user, setUser] = useState({name: "", email: ""});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    }
    
    return (
        <div>
            <input 
                placeholder="Enter the name" 
                name="name"
                value={user.name} 
                type="text" 
                onChange={handleChange}
            />
            <input 
                placeholder="Enter the email" 
                name="email"
                value={user.email} 
                type="email" 
                onChange={handleChange}
            />
        </div>
    )
}

export default Complexstate 