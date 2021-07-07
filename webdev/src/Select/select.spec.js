import React from "react";
import Select from "./Select";
import { shallow } from 'enzyme'

const Props = {
  options: [
    { value: 'text_1', label: 'test 1' },
    { value: 'text 2', label: 'test2' },
  ],
  value: 0,
  handleChange: () => {},
}

const setUp = props => shallow(<Select {...props} />)

describe('Select component', () => {
  describe('Has props', () => {
    const component = setUp(Props);

    it('should render element select', function () {
      const select = component.find('select');
      expect(select).toHaveLength(1);
    });

    it('should render 2 options', function () {
      const options = component.find('option');
      expect(options).toHaveLength(2);
    });
  })

  describe('Has not props', () => {
    it('should render placeholder', function () {
      const component = shallow(<Select />);
      const placeholder = component.find('.placeholder');
      expect(placeholder).toHaveLength(1);
    });
  })

  describe('Default Props', () => {
    it('should use default method handleChange', function () {
      const result = Select.defaultProps.handleChange();
      expect(result).toBe('binary');
    });
  })
})