import React from 'react';
import {shallow} from 'enzyme';
import Logo from '../Logo';

describe("Test Logo.jsx component", () => {
    it("renders a img-element for company logo correctly", ()=> {
        const wrapper = shallow(<Logo logo="company-logo"/>)
        expect(wrapper.find("img").prop("src")).toContain("company-logo")
    })

    it("alt has text 'company-logo' as default", () => {
        const wrapper= shallow(<Logo logo=""/>)
        expect(wrapper.find('img').prop("alt")).toBe("company-logo")
    })
})