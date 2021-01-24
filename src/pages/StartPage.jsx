import React from 'react'
import InputField from '../components/InputField'
import JobList from '../components/JobList'
import image from '../images/svg.png'

export default function StartPage() {
    return (
        <section>
            <header style={{ backgroundImage: `url(${image})`}} >
            <h1>GitHub Jobs</h1>
            <i className="icon-github-2"/>
            <InputField/>
            </header>
            <JobList/>
        </section>
    )
}
