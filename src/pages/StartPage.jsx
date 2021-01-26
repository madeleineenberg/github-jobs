import React from 'react'
import InputField from '../components/InputField'
import JobList from '../components/JobList'
import Title from '../components/Title'

export default function StartPage() {
    return (
        <section>
            <header>
            <Title/>
            <InputField/>
            </header>
            <JobList/>
        </section>
    )
}
