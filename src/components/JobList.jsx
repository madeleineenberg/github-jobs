import React, {useContext, useState} from 'react'
import { JobContext } from '../contexts/JobContext'
import JobListItem from './JobListItem'

export default function JobList() {

    const { jobList, setJobList, value, setValue } = useContext(JobContext)
    const [keyword, setKeyword] = useState("")


    const fetchJobList = () => {
        const query = keyword.replace(" ", "+")
        setValue(keyword)
        const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${query}`
       
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobList(data)})
            setKeyword("")
    }


    const handleClick = () => {
        if(value !== keyword){
            fetchJobList()
        }
        setKeyword("")   
    }

    const renderJobList = () => {
        if(jobList && jobList.length === 0){
            return <p>sorry, no jobs found!</p>
        }
        else {
            return jobList && jobList.map((jobs, key) => {
                return (
                    <JobListItem props={jobs} key={key}/>  
                )
            })
        }
    }

    return (
        <div>     
        <label> Search for jobs:</label>
        <input type="text"  value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        <button onClick={handleClick}>search</button>

            {renderJobList()}
        
        </div>
    )
}
