// Code SubmitButton Component Here
import React, { useState } from 'react';


function SubmitButton (){
    // const [hovered, setHovered] = useState('');
    // const [submitted, setSubmitted] = useState('');




    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted("Password Submitted");
        console.log("Password Submitted");
    }

    return(
        <>
        <form 
        onSubmit={handleSubmit}>
            
        <button type="submit"
        onMouseEnter={() => {
            console.log("Mouse Entering");
        }}
        onMouseLeave={() => {
            console.log("Mouse Exiting");
        }}> Submit Password
        </button>
     
        </form>        
        
        </>
        )
    
}

export default SubmitButton;