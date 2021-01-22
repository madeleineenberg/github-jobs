import React from 'react';
import JobDetail from '../JobDetail';

import { shallow } from 'enzyme/build';


describe("Test 'JobDetail.jsx component", ()=> {
    let wrapper

    const job = {
        id: 'id',
        company: 'company',
        title: 'title',
        company_url: 'company_url',
        type: 'type',
        description: 'description',
        location: 'location',
        how_to_apply: 'how_to_apply',
        created_at: 'created_at'
    }

    beforeEach(()=> {
        wrapper = shallow(<JobDetail job={job}/>)
    })

    it("renders span for 'type' correctly", ()=> { 
        expect(wrapper.find('span').at(0).text()).toContain('type')
    })
    it("renders span for 'location' correctly", ()=> { 
        expect(wrapper.find('span').at(0).text()).toContain('location')
    })
    it("renders h2-element for 'title' correctly", ()=> {
        expect(wrapper.find('h2').text()).toBe('title')
    })
    it("renders h3-element for 'company' correctly", ()=> {
        expect(wrapper.find('h3').text()).toBe('company')
    })
    it("renders a-element with 'company_url' correctly", ()=> {
        expect(wrapper.find('p>a').prop('href')).toBe('company_url')
    })
    it("renders div-element for 'description' correctly", ()=> {
        console.log(wrapper.debug())
        expect(wrapper.find('div > div').at(0).text()).toBe('description')
    })
})