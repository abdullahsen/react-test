import React from 'react'
import './Button.css';

const Button = (props) => {
    return(
        <div >
            <button className="Button" onClick={props.clicked}>Fetch Users</button>
        </div>
    )
}


export default Button;