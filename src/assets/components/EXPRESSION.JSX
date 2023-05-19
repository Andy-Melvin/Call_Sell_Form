import React from 'react';

const  Print = (props) =>{
    const name=(props.name);
    const age=(props.age);
    
    return(
        <div>
            <h1>Verifying the Exporession</h1>
            {18 > props.age && <h2>You are Above </h2>}
        </div>
    )
}

export default Print