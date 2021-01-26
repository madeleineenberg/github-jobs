import React from 'react';
import {shallow} from 'enzyme';
import InputField from '../InputField';

describe('Test InputField component', () => {

    
    it("renders correctly", ()=> {
        shallow(<InputField/>)
    })

    it("find button-element in DOM", ()=> {
        const wrapper = shallow(<InputField/>)
        expect(wrapper.find('button')).toHaveLength(1)
    })

    it("find input-element in DOM", ()=> {
        const wrapper = shallow(<InputField/>)
        expect(wrapper.find('input')).toHaveLength(1)
    })
    it("find placeholder text on input", ()=> {
    const wrapper = shallow(<InputField />)
    expect(wrapper.find('input').prop('placeholder')).toEqual('Job Description')
    })
    
    it('renders an `.icon-search`', () => {
        const wrapper = shallow(<InputField />);
        expect(wrapper.find('i').hasClass('icon-search')).toEqual(true)
      });

  });
  
