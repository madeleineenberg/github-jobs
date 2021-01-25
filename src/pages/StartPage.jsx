import React from 'react'
import InputField from '../components/InputField'
import JobList from '../components/JobList'
import Title from '../components/Title'
import image from '../images/svg.png'

export default function StartPage() {
    return (
        <section>
            <header style={{ backgroundImage: `url(${image})`}} >
            <Title/>
            <InputField/>
            </header>
            <JobList/>
        </section>
    )
}
