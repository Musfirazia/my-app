import React from 'react'
function Dinner(props){
return(
    <div>
        <h1>We have dinner to serve</h1>
        <h1> we are serving {props.dish}</h1>
        <h1> we are serving {props.sweetdish}</h1>
    </div>
);
}
export default Dinner;