import React from 'react';
import {mount} from 'enzyme';
import JobListItem from '../JobListItem';
import {BrowserRouter} from 'react-router-dom';


describe("Test 'jobListItem.jsx' component", () => {
    let wrapper;

    const jobItem = {
        id: 'id',
        company: 'company',
        title: 'title',
        company_url: 'company_url',
        type: 'type',
        description: 'description'
    }

    beforeEach(()=> {
        wrapper = mount(
        <BrowserRouter>
        <JobListItem props={jobItem}/>
        </BrowserRouter>)
    })

    it("renders a Link with '/job/id' correctly", ()=> {
        expect(wrapper.find('Link').prop('to')).toBe('/job/id')
    })
    it("renders h2-element for 'title' correctly", ()=> {
       expect(wrapper.find('h2').text()).toBe('title')
    })
    it("renders a-element for 'company_url' correctly", ()=> {
        expect(wrapper.find('span>a').prop('href')).toBe('company_url')
    })
    it("renders a-element text with 'company' correctly", ()=> {
        expect(wrapper.find('span>a').text()).toBe('company')
    })
    it("renders string-element for 'type' correctly", () => {
        expect(wrapper.find('p>strong').text()).toBe('type')
    })
    it("renders a div with 'description' correctly", () => {
        expect(wrapper.find('div>div').text()).toBe('description')
    })
})