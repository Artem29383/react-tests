import Input from "./Input";
import React from "react";

describe('Input component', () => {
  it('should render Input component', function () {
    const component = shallow(<Input />);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it('should call onChange method', function () {
    const mockCallback = jest.fn();
    const component = shallow(<Input onChange={mockCallback} />);
    expect(mockCallback.mock.calls.length).toBe(0);
    component.find('.input').simulate('change');
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  describe('defaultProps', () => {
    it('should use default onChange', function () {
      const result = Input.defaultProps.onChange();
      expect(result).toBe(undefined);
    });

    it('should use default onKeyPress', function () {
      const result = Input.defaultProps.onKeyPress();
      expect(result).toBe(undefined);
    });
  })
})