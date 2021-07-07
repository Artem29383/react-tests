import React from "react";
import Button from "./Button";

describe('Button component', () => {
  it('should call onClick method', function () {
    const mockCallback = jest.fn();
    const component = shallow(<Button onClick={mockCallback} />);
    expect(mockCallback.mock.calls.length).toBe(0);
    component.find('.btn').simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
})