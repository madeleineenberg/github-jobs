import React, {useEffect, useState} from 'react'
import JobDetail from '../components/JobDetail'

export default function JobDetailPage(props) {
    const id = props.match.params.id
    const [job, setJob] = useState(null)

    const getJobDetail = () => {
        const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setJob(data))
    }

    useEffect(()=>{
        getJobDetail()
    }, [])

    return (
        <div>
            Job Detail
            {job && (
            <JobDetail job={job}/>
            )}
        </div>
    )
}
