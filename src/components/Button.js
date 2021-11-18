import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom';

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
 const checkButtonStyle = Styles. includes(buttonStyle) ? buttonStyle: STYLES[0];

 const CheckButtonSize = SIZES. includes(buttonSize) ? buttonSize : SIZES[0]

 return (
     <Link to = '/sign-up' className='btn-mobile'>
         <button className = {`btn ${checkButtonStyle} ${CheckButtonSize}`}   onClick = {onClick}
          type = {type}> {children} </button>
        
         
     </Link>
 )
};