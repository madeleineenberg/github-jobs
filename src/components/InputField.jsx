import React, {useRef, useContext} from 'react'
import { JobContext } from '../contexts/JobContext'

export default function InputField() {
    const { setJobList, value, setValue } = useContext(JobContext)
    const keywordRef = useRef(null)

    const fetchJobList = (currentKeyword) => {
        const query = currentKeyword.replace(" ", "+")
        const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${query}`
       
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobList(data)})
            
    }

    const handleClick = () => {
        const currentKeyword = keywordRef.current.value
        if(!currentKeyword || value === currentKeyword) return keywordRef.current.value = ""

        setValue(currentKeyword)
        fetchJobList(currentKeyword)
        keywordRef.current.value = ""
    }

    return (
        <div className="input-container">
        <input type="text" ref={keywordRef} placeholder="Job Description"/>
        <button onClick={handleClick}><i className="icon-search"/></button>
        </div>
    )
}
