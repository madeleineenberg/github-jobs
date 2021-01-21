import React, {useState} from 'react'
import JobListItem from './JobListItem'

export default function JobList() {
    const [keyword, setKeyword] = useState(null)
    const [jobList, SetJobList] = useState(null)



    const handleClick = () => {
        const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${keyword}`
        console.log(keyword)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            SetJobList(data)})
        
    }

    const handleKeyword = (e) => {
        if(e.currentTarget.value.includes(" ")){
            setKeyword(e.currentTarget.value.replace(/\s/g, "+"))
        }
        else{
            setKeyword(e.currentTarget.value)
        }
        
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
        <input type="text" onChange={(e) => handleKeyword(e)}/>
        <button onClick={handleClick}>search</button>

            {renderJobList()}
        
        </div>
    )
}
