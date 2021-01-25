import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import JobDetail from '../components/JobDetail'
import Title from '../components/Title'

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
        <div className="detail_page-container">
            <Title/>
            <Link to="/"><i className="icon-left-big"/>Back</Link>
            
            {job && (
            <JobDetail job={job}/>
            )}
        </div>
    )
}
