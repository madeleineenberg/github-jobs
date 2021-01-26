import React from 'react';
import {shallow} from 'enzyme';
import Title from '../Title';

describe("Test Title.jsx", ()=> {
    it("renders correctly", ()=> {
        shallow(<Title/>)
    })
    it("renders H1 with site-title", ()=> {
        const wrapper = shallow(<Title/>)
        expect(wrapper.find('h1').text()).toBe('GitHub Jobs')
    })
    it("renders i-element with classname 'icon-github-2'", ()=> {
        const wrapper = shallow(<Title/>)
        expect(wrapper.find('i').hasClass('icon-github-2')).toEqual(true)
    })
})