import React from "react";

import styles from './Button.module.css'

const Button = (props) => {


    return (
        // provide an alternative for the type with the 'or' operator 
        // in case the props.type it's undefined, type={props.type || 'button'}
        <button 
            className={styles.button} 
            type={props.type || 'button'} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button