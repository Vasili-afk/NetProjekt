import React from 'react';


function Greeting(props) {
    const {name} = props
    return (  
        <div>
            <h3>Hi {' '+name}</h3>
        </div>
    );
}

export default Greeting;