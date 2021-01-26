import React from 'react'
import Logo from './Logo'

export default function JobDetail({job}) {
    return (
        <div className="job-detail">
            <span>{job.type} / {job.location}</span>
            <h2 className="job-title">{job.title}</h2>
            <Logo logo={job.company_logo}/>
            <h3>{job.company}</h3>
            <p className="website-link">Website: <a href={job.company_url} target="_blank" rel=" noopener noreferrer">{job.company_url}</a></p>
            <div className="description"dangerouslySetInnerHTML={{__html: job.description}}></div>
            <span className="apply">How to apply:<div dangerouslySetInnerHTML={{__html: job.how_to_apply}}></div></span>
            <p className="posted">Posted: {job.created_at}</p>
        </div>
    )
}
