import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];
const SIZE= ['btn--medium','btn--large'];


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>{
    const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle: STYLES[0];

    const checkButtonSize = SIZE.include(buttonSize)? buttonSize: SIZE[0];

    return(
        <Link>
        <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
        </Link>
    )
};