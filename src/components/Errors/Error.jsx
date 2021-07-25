import React from 'react'

export default function Error({ children }) {
    return (
        <div className="uk-alert-danger">
            <p>{children}</p>
        </div>
    )
}
