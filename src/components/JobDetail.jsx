import React from 'react'
import Logo from './Logo'

export default function JobDetail({job}) {
    return (
        <div>
            <span>{job.type} / {job.location}</span>
            <h2>{job.title}</h2>
            <Logo logo={job.company_logo}/>
            <h3>{job.company}</h3>
            <p>Website: <a href={job.company_url} target="_blank" rel=" noopener noreferrer">{job.company_url}</a></p>
            <div dangerouslySetInnerHTML={{__html: job.description}}></div>
            <span>How to apply:</span><div dangerouslySetInnerHTML={{__html: job.how_to_apply}}></div>
            <p>Posted: {job.created_at}</p>
        </div>
    )
}
