import React from 'react';


// Input: liked: boolean (true/false)
// Output: onClick 
const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (<i onClick={props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true"></i>);
}
 
export default Like;

