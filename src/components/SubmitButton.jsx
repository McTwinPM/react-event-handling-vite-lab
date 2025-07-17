// Code SubmitButton Component Here
import React from 'react';


function SubmitButton (){
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const hoverEnter = () => {
        console.log("Mouse Entering");
    }
    const hoverLeave = () => {
        console.log("Mouse Exiting");
    }
    return(
        <>
        <form 
        onSubmit={handleSubmit}>
        <button type="submit"> Submit Password</button>
        <div 
        onMouseEnter={() => hoverEnter}
        onMouseLeave={() => hoverLeave}>
            Hover over me!
        </div>
        </form>        
        
        </>
        )
    
}

export default SubmitButton;