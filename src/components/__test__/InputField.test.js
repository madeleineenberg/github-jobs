import React, {useRef} from 'react';
import { shallow } from 'enzyme/build';
import InputField from '../InputField';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mockUseRef = jest.fn();
    return {
      ...originReact,
      useRef: mockUseRef,
    };
  });

describe("Test InputField.jsx component", ()=> {
    it("input gets reset after buttom click", ()=> {
        const wrapper = shallow(<InputField/>)
        let inputValue = wrapper.find('input').simulate("change", {target: {value: "ux"}})
        console.log(wrapper.debug())
        expect(inputValue.props().value).not.toEqual('ux')
    })

    it("update value", ()=> {
        const mockRef = {current: {value: 'ux'}}
        useRef.mockReturnValueOnce(mockRef);
        const wrapper = shallow(<InputField/>)
        let inputValue = wrapper.find('input').simulate('change')
        expect(inputValue.props().value).toBe('ux')
    })
})