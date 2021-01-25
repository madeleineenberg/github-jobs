import React, {useContext} from 'react'
import { JobContext } from '../contexts/JobContext'
import JobListItem from './JobListItem'

export default function JobList() {

    const { jobList} = useContext(JobContext)
    




    return (
        <section className="container">     
            {jobList && jobList.length === 0 && <p className="message">Sorry, no jobs found!</p>}
            {jobList && jobList.map((job) => <JobListItem props={job} key={job.id}/>)}
        
        </section>
    )
}
