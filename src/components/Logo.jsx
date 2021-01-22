import React from 'react'

export default function Logo({logo}) {


    return (
        <div className="logo-wrapper">
           {logo !== null ? <img src={logo} alt="company-logo"/> : ""}
        </div>
    )
}
