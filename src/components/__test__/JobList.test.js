import React from 'react';
import {shallow} from 'enzyme';
import JobList from '../JobList';


describe("Test JobList component", () => {
    it("renders section class 'container'", ()=> {
        const wrapper = shallow(<JobList />)
        console.log(wrapper.debug())
        expect(wrapper.find('section').hasClass('container')).toEqual(true)
    })
    
})