import React, {useContext, useRef, useState} from 'react'
import { JobContext } from '../contexts/JobContext'
import JobListItem from './JobListItem'

export default function JobList() {

    const { jobList} = useContext(JobContext)
    




    return (
        <div className="container">     
            {jobList && jobList.length === 0 && <p>Sorry, no jobs found!</p>}
            {jobList && jobList.map((job) => <JobListItem props={job} key={job.id}/>)}
        
        </div>
    )
}
