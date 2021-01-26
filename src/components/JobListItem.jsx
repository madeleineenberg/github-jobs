import React from 'react'
import {Link} from 'react-router-dom';

import Logo from './Logo'

export default function JobListItem({props: {id, company, title, type, company_url, company_logo, description }}) {

    
    return (
        <div className="card-container">
           <h2 className="card-title">{title}</h2>
            <Logo logo={company_logo}/>
            <span>Company: <a href={company_url} target="blank" rel="noopener">{company}</a></span>
            <p>Type: <strong>{type}</strong> </p>
            <div dangerouslySetInnerHTML={{__html: description.slice(0, 500) }}></div>
            <Link to={`/job/${id}`}>... Read more <i className="icon-right-big"/></Link>
        </div>
    )
}
