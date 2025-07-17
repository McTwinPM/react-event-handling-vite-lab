// Code PasswordInput Component Here
import React from 'react';

function PasswordInput (){
    const handlePassword = (event) => {
        event.preventDefault();
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("Enter button pressed");
        }
    }
    return(
        <>
        <form onSubmit={handlePassword}>
        <input type="password" placeholder="Enter your password"
        onChange={(e)=> console.log("Entering password...")}
        onKeyDown={handleKeyDown} />
        </form>
        
        </>
    )
}

export default PasswordInput;