import React from 'react'

export default function CustomButton({ onClick, type, children, disabled }) {
    let classes = ["uk-button", "customButton"]

    switch (type) {
        case 'danger':
            classes.push("uk-button-danger");
            break;
        case 'primary':
            classes.push("uk-button-primary");
            break;
        default: 
            classes.push("uk-button-default");
    }

    return (
        <button className={classes.join(' ')} onClick={onClick} disabled={disabled}>{children}</button>
    )
}
